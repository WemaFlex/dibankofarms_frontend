// src/types/index.ts

// Define strict types for enums to ensure type safety across the frontend
export type PaymentChannel =
    | "Cash"
    | "Cheque"
    | "Wallet"
    | "Card"
    | "Mobile Money"
    | "Bank Transfer";

export type TransactionStatus = "pending" | "successful" | "failed";

export interface Transaction {
    _id: string;

    // Relational Fields (Can be strings/IDs or populated objects)
    merchant: string | any;
    resident: string | Resident; // Assuming you have a Resident type defined
    property?: string | any;
    invoice?: string | any;

    // Financials
    amount: number;
    desc?: string;
    paymentChannel: PaymentChannel;

    // Mobile Money Specifics
    msisdn?: string;
    network?: string;
    momoTxnId?: string;

    // Bank / Cheque Specifics
    chequeNo?: string;
    chequeBank?: string;

    // General Tracking
    code?: string; // Internal system receipt code
    extTxnId?: string; // External gateway reference (e.g., Paystack)
    receiptUrl?: string;

    // Status
    status: TransactionStatus;
    statusReason?: string;

    // Audit Timestamps (Mongoose standard)
    createdBy?: string;
    updatedBy?: string;
    createdAt: string; // Typically comes back as an ISO Date string from the API
    updatedAt: string;
}

export type ResidentType = "Owner Occupier" | "Tenant" | "Landlord" | "Family Member" | "Staff Occupant";
export type PropertyType = "1-Bedroom" | "2-Bedroom" | "3-Bedroom" | "Duplex" | "Studio" | "Standalone";
export type PropertyStatus = "Occupied" | "Vacant" | "Under Renovation" | "Suspended" | "New Registration";

export interface Vehicle {
    _id?: string;
    make: string;
    model: string;
    color?: string;
    licensePlate: string;
}

export interface EmergencyContact {
    _id?: string;
    name: string;
    relationship: string;
    phone: string;
    email?: string;
}

export interface Resident {
    _id: string;
    residentId: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    residentType: ResidentType;
    residence: Property | null;
    properties: string[] | Property[]; // Can be an array of IDs or populated objects
    ghanaCardId?: string;
    ghanaCardFrontUrl?: string;
    ghanaCardBackUrl?: string;
    householdSize: number;
    vehicles: Vehicle[];
    emergencyContacts: EmergencyContact[];
    moveInDate?: string;
    moveOutDate?: string;
    termsAccepted: boolean;
    unverifiedPropertyDetails: object;
    active: boolean; // Derived from your UI requests
    createdAt: string;
    updatedAt: string;
}

export interface Property {
    _id: string;
    houseNo: string;
    unitNumber?: string;
    blockOrStreet: string;
    digitalAddress: string;
    propertyType: PropertyType;
    status: PropertyStatus;
    residents?: string | Resident;
    owners?: string[] | Resident[];
    createdAt: string;
    updatedAt: string;
}

export interface Contact {
    _id: string;
    firstName: string;
    lastName: string;
    phone: string;
    email?: string;
    idType: "Ghana Card" | "Passport" | "Driver License" | "Other";
    idNumber?: string;
    photoUrl?: string;
    vehicles?: any[];
    isBlacklisted: boolean;
    resident?: any;
    merchant?: any;
    expectedArrival: string;
    passValidity?: string;
}

// Defining the type based on your Mongoose Visit schema
export interface Visit {
    _id: string;
    visitId: string;
    name: string;
    phone?: string;
    email?: string;
    expectedArrivalDate: string;
    status: "Pending Arrival" | "Entered" | "Exited" | "Canceled";
    passCode: string;
    passValidity?: string;
    accessType: "Guest" | "Delivery" | "Contractor" | "Event";
    entryTime?: string;
    exitTime?: string;
    resident: any;
}

export interface Staff {
    _id: string;
    staffId: string;
    firstName: string;
    lastName: string;
    phone: string;
    email?: string;
    department: string;
    jobRole: any;
    hireDate: string;
    employmentStatus: "Active" | "Suspended" | "Terminated" | "On Leave";
    user: any;
}

export interface TicketItem {
    _id?: string;
    product: string; // The ID of the ProductRate
    productName: string;
    rate: number;
    quantity: number;
    suppliedQuantity: number;
    total: number;
}

export interface Ticket {
    _id: string;
    ticketId: string;
    ticketType: "Complaint" | "Service Request" | "General Inquiry";
    category: string;
    description: string;
    photoUrls?: string[];
    priority: "Low" | "Medium" | "High" | "Emergency";
    status: "New" | "Assigned" | "In Progress" | "On Hold" | "Resolved" | "Closed" | "Escalated";

    // Resolution & Feedback
    resolutionNotes?: string;
    satisfactionRating?: number;

    // Billable Items
    items?: TicketItem[];

    // Relational Fields
    // These can be strings (IDs) or populated objects depending on your API response
    staff?: Staff; // Update to your Staff type if you have one e.g., string | Staff
    vendor?: any; // Update to your Staff type if you have one e.g., string | Staff
    resident?: Resident | string; // Update to your Resident type e.g., string | Resident
    property?: Property | string; // Update to your Property type e.g., string | Property
    merchant?: string | object;

    // Audit Trail
    createdBy?: User; // e.g., string | User
    updatedBy?: User; // e.g., string | User

    createdAt: string;
    updatedAt: string;
}

// API RESPONSE TYPES
export type PaginationLink = {
    page: number;
    limit: number;
};

export type PaginationType = {
    prev?: PaginationLink;
    next?: PaginationLink;
};

export type APIResponse<T> = {
    success: boolean;
    message: string;
    data: {
        pagination: PaginationType;
        total: number;
        count: number;
        results: T[];
    };
};

export type ItemAPIResponse<T> = {
    success: boolean;
    message: string;
    data: T;
};

// src/types/user.ts

export interface AccountLock {
    _id: string;
    active: boolean;
    loginAttempts?: number; // Optional because select: false
    createdAt: string;
    updatedAt: string;
}

export interface MFAAuthenticator {
    _id: string;
    enabled: boolean;
    secret?: string;        // select: false
    tempSecret?: string;    // select: false
    backupCodes?: string[]; // select: false
}

export interface MFASMS {
    _id: string;
    enabled: boolean;
    otp?: string;           // select: false
    otpExpire?: string;     // select: false
}

export interface MultiFA {
    _id: string;
    authenticator: MFAAuthenticator;
    sms: MFASMS;
    createdAt: string;
    updatedAt: string;
}

export interface Permission {
    _id: string;
    name: string;
    slug: string;
    description: string;
    routes: string[];
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
    active: boolean;
    module: string;
    app: "admin" | "merchant";
    createdAt: string;
    updatedAt: string;
}

export interface Role {
    _id: string;
    name: string;
    description: string;
    active: boolean;
    permissions: string[] | Permission[]; // Array of IDs or Populated objects
    app: "admin" | "merchant";
    merchant?: string; // Reference ID
    createdAt: string;
    updatedAt: string;
}

export interface UserMisc {
    _id: string;
    tempEmail?: string;
    oldEmails: string[];
    tempPhone?: string;
    oldPhones: string[];
    createdAt: string;
    updatedAt: string;
}

export interface User {
    _id: string;
    fName: string;
    lName: string;
    phone: string;
    email?: string;
    active: boolean;
    emailVerified: boolean;
    phoneVerified: boolean;
    accountLock: AccountLock;
    role?: Role;
    multiFA: MultiFA;
    misc?: UserMisc;
    app: "admin" | "merchant";
    resident?: Resident;
    merchant?: Resident;
    lastLogin?: string;
    createdBy?: string;
    updatedBy?: string;
    createdAt: string;
    updatedAt: string;
    __v?: number;
}

//INVOICES AND PAYMENTS

export interface ServiceCharge {
    _id: string;
    name: string;
    description?: string;
    amount: number;
    billingCycle: "Daily" | "Weekly" | "Monthly" | "Quarterly" | "Yearly" | "One-Time";
    targetAudience: "All Residents" | "Specific Properties" | "Owner Occupiers" | "Tenants";
    specificProperties?: string[] | any[]; // Array of IDs or Populated Properties
    active: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface InvoiceItem {
    _id?: string;
    description: string;
    quantity: number;
    unitPrice: number;
    total: number;
    serviceChargeRef?: string | ServiceCharge;
}

export interface Invoice {
    _id: string;
    invoiceNumber: string;
    resident: string | any; // ID or Populated Resident
    property?: string | any;
    invoiceType: "Automated Levy" | "Ad-Hoc Service" | "Mixed";
    items: InvoiceItem[];
    subTotal: number;
    taxAmount: number;
    totalAmount: number;
    amountPaid: number;
    status: "Draft" | "Pending" | "Partially Paid" | "Paid" | "Overdue" | "Cancelled";
    issueDate: string;
    dueDate: string;
    notes?: string;
    createdAt: string;
    updatedAt: string;
}

// ROLES AND PERMISSIONS
// Define the allowed HTTP methods based on your Mongoose enum
export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface Permission {
    _id: string;
    name: string;
    slug: string;
    description: string;
    routes: string[];
    method: HttpMethod;
    active: boolean;
    module: string;
    app: "admin" | "merchant";
    createdAt: string;
    updatedAt: string;
    __v?: number;
}

export interface Role {
    _id: string;
    name: string;
    description: string;
    active: boolean;
    permissions: string[] | Permission[];
    app: "admin" | "merchant";
    merchant?: string;
    createdBy?: string;
    updatedBy?: string;
    createdAt: string;
    updatedAt: string;
    __v?: number;
}
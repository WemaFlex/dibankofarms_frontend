"use client"
import dayjs from "dayjs";

// Helper to safely check for your specific falsy values, empty arrays, and empty plain objects
const isFalsyOrEmpty = (v) => {
  // 1. Catch null, undefined, and empty strings
  if (v === "" || v === null || v === undefined) return true;
  
  // 2. Catch empty arrays
  if (Array.isArray(v) && v.length === 0) return true;
  
  // 3. Catch strictly plain empty objects (safely ignores Date, RegExp, etc.)
  if (Object.prototype.toString.call(v) === '[object Object]' && Object.keys(v).length === 0) {
    return true;
  }
  
  return false;
};

export function filterFalslyValues(obj) {
  if (Array.isArray(obj)) {
    return obj
      .map(filterFalslyValues) // 1. Clean the children first
      .filter((item) => !isFalsyOrEmpty(item)); // 2. Remove if they became empty
  } 
  
  // Safely check for plain objects only so we don't accidentally shred Date objects
  else if (Object.prototype.toString.call(obj) === '[object Object]') {
    return Object.fromEntries(
      Object.entries(obj)
        .map(([k, v]) => [k, filterFalslyValues(v)]) // 1. Clean the values first
        .filter(([_, v]) => !isFalsyOrEmpty(v)) // 2. Remove keys that became empty
    );
  }
  
  // Return primitives, Dates, RegExps, etc. as they are
  return obj;
}

export function extractFormData(event, setValidated) {
  event.preventDefault(); 
  const form = event.currentTarget;

  if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
  }

  setValidated(true);

  const formData = new FormData(form);

  return Object.fromEntries(formData.entries());
}

export const isValidInput = (formik, inputName) => {
  return formik.touched[inputName] ? (formik.errors[inputName] ? "is-invalid" : "is-valid") : ""
}

export const getGreeting = () => {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 12) {
    return "🌞 Good morning";
  } else if (hour >= 12 && hour < 17) {
    return "🌤️ Good afternoon";
  } else if (hour >= 17 && hour < 21) {
    return "🌇 Good evening";
  } else {
    return "🌙 Good night";
  }
};

export const isValidEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email || "");


export const isValidLoginIdentifier = (val: string) => {
    if (!val) return false;
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
    const isPhone = /^\+?[0-9]{9,15}$/.test(val);
    return isEmail || isPhone;
};

export function getRecColor(val, token) {
  switch (val) {
    case true:
      return token["green8"];
    case false:
      return token["red8"];
    case "failed":
      return token["red8"];
    case "pending":
      return token["yellow8"];
    case "successful":
      return token["green8"];
    default:
      return "rgb(52, 67, 87)";
  }
}

export const formatDate = (dateStr) => {
  return dayjs(dateStr).format("DD-MM-YYYY HH:mm:ss");
};

export const formatDateOnly = (dateStr) => {
  if (!dateStr) return;
  return dayjs(dateStr).format("MMM D, YYYY");
};

export function formatMoney(n) {
  const num = +n;

  const options = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  };

  return new Intl.NumberFormat("en-US", options).format(num);
}

export const formatPhoneNumber = (value) => {
  // Remove all non-digit characters
  const digitsOnly = value.replace(/\D/g, "");

  // Split into chunks of 3 digits
  const chunks = digitsOnly.match(/.{1,3}/g) || [];

  // Join with space
  return chunks.join(" ");
};

export function formatNumber(n) {
  const num = +n;

  const options = {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  };

  return new Intl.NumberFormat("en-US", options).format(num);
}

export const groupPermissions = (permissions) => {
  return permissions.reduce((acc, item) => {
    if (!acc[item.module]) {
      acc[item.module] = [];
    }

    acc[item.module].push(item);

    return acc;
  }, {});
};

// src/utils/bootstrap.js

/**
 * Programmatically closes a Bootstrap Offcanvas by ID
 */
export const closeOffcanvas = (elementId) => {
    if (typeof window === "undefined") return;

    const element = document.getElementById(elementId);
    if (!element) return;

    // Access the bootstrap object from the window (loaded via your vendor.js)
    const bs = window.bootstrap;

    if (bs && bs.Offcanvas) {
        // 1. Try to get the existing instance (if it's open, it exists)
        const instance = bs.Offcanvas.getInstance(element);
        
        // 2. If instance exists, hide it. 
        // We don't create a new instance because that might reset state incorrectly.
        if (instance) {
            instance.hide();
        } else {
            // Fallback: simple DOM manipulation if instance is lost
            const closeBtn = element.querySelector('[data-bs-dismiss="offcanvas"]');
            if(closeBtn) closeBtn.click();
        }
    }
};

/**
 * Programmatically closes a Bootstrap Modal by ID
 */
export const closeModal = (elementId) => {
    if (typeof window === "undefined") return;

    const element = document.getElementById(elementId);
    if (!element) return;

    const bs = window.bootstrap;

    if (bs && bs.Modal) {
        const instance = bs.Modal.getInstance(element);
        if (instance) instance.hide();
    }
};

export const calcChange = (curr, prev) => {
    if (isNaN(+curr) || isNaN(+prev)) return 0;

    const diff = formatMoney(((+curr - +prev) / +prev) * 100);
    
    if (isNaN(diff)) return "0";

    return curr > prev ? "+" + diff : diff;
};
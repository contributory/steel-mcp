var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// node_modules/@modelcontextprotocol/server/dist/chunk-Br0eD_fh.mjs
var __create = Object.create;
var __defProp2 = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJSMin = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __exportAll = (all, symbols) => {
  let target = {};
  for (var name in all) {
    __defProp2(target, name, {
      get: all[name],
      enumerable: true
    });
  }
  if (symbols) {
    __defProp2(target, Symbol.toStringTag, { value: "Module" });
  }
  return target;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
      key = keys[i];
      if (!__hasOwnProp.call(to, key) && key !== except) {
        __defProp2(to, key, {
          get: ((k) => from[k]).bind(null, key),
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
      }
    }
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", {
  value: mod,
  enumerable: true
}) : target, mod));

// node_modules/@modelcontextprotocol/server/dist/dialects-DoSzNhcb.mjs
var DRAFT_2020_12_URIS = /* @__PURE__ */ new Set(["https://json-schema.org/draft/2020-12/schema", "http://json-schema.org/draft/2020-12/schema"]);
var DRAFT_2019_09_URIS = /* @__PURE__ */ new Set(["https://json-schema.org/draft/2019-09/schema", "http://json-schema.org/draft/2019-09/schema"]);
var DRAFT_07_URIS = /* @__PURE__ */ new Set(["https://json-schema.org/draft-07/schema", "http://json-schema.org/draft-07/schema"]);
var DRAFT_06_URIS = /* @__PURE__ */ new Set(["https://json-schema.org/draft-06/schema", "http://json-schema.org/draft-06/schema"]);
function declares2019Dialect($schema) {
  return typeof $schema === "string" && DRAFT_2019_09_URIS.has($schema.replace(/#$/, ""));
}
function declaredDialect(schema, remedy) {
  if (!("$schema" in schema) || typeof schema.$schema !== "string") return "2020-12";
  const declared = schema.$schema.replace(/#$/, "");
  if (DRAFT_2020_12_URIS.has(declared)) return "2020-12";
  if (DRAFT_2019_09_URIS.has(declared)) return "2019-09";
  if (DRAFT_07_URIS.has(declared) || DRAFT_06_URIS.has(declared)) return "draft-7";
  throw new Error(`JSON Schema declares an unsupported dialect ("$schema": "${schema.$schema.slice(0, 200)}"). The default validator supports JSON Schema 2020-12, 2019-09, draft-07, and draft-06; ${remedy}`);
}

// node_modules/@modelcontextprotocol/core/node_modules/zod/v4/core/util.js
var util_exports = {};
__export(util_exports, {
  BIGINT_FORMAT_RANGES: () => BIGINT_FORMAT_RANGES,
  CONSTANT_CATCH: () => CONSTANT_CATCH,
  Class: () => Class,
  NUMBER_FORMAT_RANGES: () => NUMBER_FORMAT_RANGES,
  aborted: () => aborted,
  allowsEval: () => allowsEval,
  assert: () => assert,
  assertEqual: () => assertEqual,
  assertIs: () => assertIs,
  assertNever: () => assertNever,
  assertNotEqual: () => assertNotEqual,
  assignProp: () => assignProp,
  attachSchema: () => attachSchema,
  base64ToUint8Array: () => base64ToUint8Array,
  base64urlToUint8Array: () => base64urlToUint8Array,
  cached: () => cached,
  captureStackTrace: () => captureStackTrace,
  cleanEnum: () => cleanEnum,
  cleanRegex: () => cleanRegex,
  clone: () => clone,
  cloneDef: () => cloneDef,
  codePointLength: () => codePointLength,
  constantCatch: () => constantCatch,
  createTransparentProxy: () => createTransparentProxy,
  defineLazy: () => defineLazy,
  defineLazyInternal: () => defineLazyInternal,
  esc: () => esc,
  escapeRegex: () => escapeRegex,
  explicitlyAborted: () => explicitlyAborted,
  extend: () => extend,
  finalizeIssue: () => finalizeIssue,
  floatSafeRemainder: () => floatSafeRemainder,
  getElementAtPath: () => getElementAtPath,
  getEnumValues: () => getEnumValues,
  getLengthableOrigin: () => getLengthableOrigin,
  getParsedType: () => getParsedType,
  getSizableOrigin: () => getSizableOrigin,
  hexToUint8Array: () => hexToUint8Array,
  hide: () => hide,
  installLazyProp: () => installLazyProp,
  isObject: () => isObject,
  isPlainObject: () => isPlainObject,
  issue: () => issue,
  joinValues: () => joinValues,
  jsonStringifyReplacer: () => jsonStringifyReplacer,
  members: () => members,
  merge: () => merge,
  mergeDefs: () => mergeDefs,
  normalizeParams: () => normalizeParams,
  nullish: () => nullish,
  numKeys: () => numKeys,
  objectClone: () => objectClone,
  omit: () => omit,
  optionalKeys: () => optionalKeys,
  own: () => own,
  parsedType: () => parsedType,
  partial: () => partial,
  pick: () => pick,
  prefixIssues: () => prefixIssues,
  primitiveTypes: () => primitiveTypes,
  promiseAllObject: () => promiseAllObject,
  propertyKeyTypes: () => propertyKeyTypes,
  randomString: () => randomString,
  required: () => required,
  safeExtend: () => safeExtend,
  shallowClone: () => shallowClone,
  slugify: () => slugify,
  stringifyPrimitive: () => stringifyPrimitive,
  toZod: () => toZod,
  uint8ArrayToBase64: () => uint8ArrayToBase64,
  uint8ArrayToBase64url: () => uint8ArrayToBase64url,
  uint8ArrayToHex: () => uint8ArrayToHex,
  unwrapMessage: () => unwrapMessage
});
function assertEqual(val) {
  return val;
}
function assertNotEqual(val) {
  return val;
}
function toZod() {
  return (schema) => schema;
}
function assertIs(_arg) {
}
function assertNever(_x) {
  throw new Error("Unexpected value in exhaustive check");
}
function assert(_) {
}
function getEnumValues(entries) {
  const numericValues = Object.values(entries).filter((v) => typeof v === "number");
  const values = Object.entries(entries).filter(([k, _]) => numericValues.indexOf(+k) === -1).map(([_, v]) => v);
  return values;
}
function joinValues(array4, separator = "|") {
  return array4.map((val) => stringifyPrimitive(val)).join(separator);
}
function jsonStringifyReplacer(_, value) {
  if (typeof value === "bigint")
    return value.toString();
  return value;
}
function cached(getter) {
  const set = false;
  return {
    get value() {
      if (!set) {
        const value = getter();
        Object.defineProperty(this, "value", { value });
        return value;
      }
      throw new Error("cached value already set");
    }
  };
}
function nullish(input) {
  return input === null || input === void 0;
}
function cleanRegex(source) {
  const start = source.startsWith("^") ? 1 : 0;
  const end = source.endsWith("$") ? source.length - 1 : source.length;
  return source.slice(start, end);
}
function floatSafeRemainder(val, step) {
  const ratio = val / step;
  const roundedRatio = Math.round(ratio);
  const tolerance = 4 * Number.EPSILON * Math.max(Math.abs(ratio), 1);
  if (Math.abs(ratio - roundedRatio) < tolerance)
    return 0;
  return ratio - roundedRatio;
}
var EVALUATING = /* @__PURE__ */ Symbol("evaluating");
function defineLazy(object4, key, getter) {
  let value = void 0;
  Object.defineProperty(object4, key, {
    get() {
      if (value === EVALUATING) {
        return void 0;
      }
      if (value === void 0) {
        value = EVALUATING;
        value = getter();
      }
      return value;
    },
    set(v) {
      Object.defineProperty(object4, key, {
        value: v
        // configurable: true,
      });
    },
    configurable: true
  });
}
function objectClone(obj) {
  return Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));
}
function assignProp(target, prop, value) {
  Object.defineProperty(target, prop, {
    value,
    writable: true,
    enumerable: true,
    configurable: true
  });
}
function mergeDefs(...defs) {
  const mergedDescriptors = {};
  for (const def of defs) {
    const descriptors = Object.getOwnPropertyDescriptors(def);
    Object.assign(mergedDescriptors, descriptors);
  }
  return Object.defineProperties({}, mergedDescriptors);
}
function cloneDef(schema) {
  return mergeDefs(schema._zod.def);
}
function getElementAtPath(obj, path) {
  if (!path)
    return obj;
  return path.reduce((acc, key) => acc?.[key], obj);
}
function promiseAllObject(promisesObj) {
  const keys = Object.keys(promisesObj);
  const promises = keys.map((key) => promisesObj[key]);
  return Promise.all(promises).then((results) => {
    const resolvedObj = {};
    for (let i = 0; i < keys.length; i++) {
      resolvedObj[keys[i]] = results[i];
    }
    return resolvedObj;
  });
}
function randomString(length = 10) {
  const chars = "abcdefghijklmnopqrstuvwxyz";
  let str = "";
  for (let i = 0; i < length; i++) {
    str += chars[Math.floor(Math.random() * chars.length)];
  }
  return str;
}
function esc(str) {
  return JSON.stringify(str);
}
function slugify(input) {
  return input.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
var captureStackTrace = "captureStackTrace" in Error ? Error.captureStackTrace : (..._args) => {
};
function isObject(data) {
  return typeof data === "object" && data !== null && !Array.isArray(data);
}
var allowsEval = /* @__PURE__ */ cached(() => {
  if (globalConfig.jitless) {
    return false;
  }
  if (typeof navigator !== "undefined" && navigator?.userAgent?.includes("Cloudflare")) {
    return false;
  }
  try {
    const F = Function;
    new F("");
    return true;
  } catch (_) {
    return false;
  }
});
function isPlainObject(o) {
  if (isObject(o) === false)
    return false;
  const ctor = o.constructor;
  if (ctor === void 0)
    return true;
  if (typeof ctor !== "function")
    return true;
  const prot = ctor.prototype;
  if (isObject(prot) === false)
    return false;
  if (Object.prototype.hasOwnProperty.call(prot, "isPrototypeOf") === false) {
    return false;
  }
  return true;
}
function shallowClone(o) {
  if (isPlainObject(o))
    return { ...o };
  if (Array.isArray(o))
    return [...o];
  if (o instanceof Map)
    return new Map(o);
  if (o instanceof Set)
    return new Set(o);
  return o;
}
function numKeys(data) {
  let keyCount = 0;
  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      keyCount++;
    }
  }
  return keyCount;
}
var getParsedType = (data) => {
  const t = typeof data;
  switch (t) {
    case "undefined":
      return "undefined";
    case "string":
      return "string";
    case "number":
      return Number.isNaN(data) ? "nan" : "number";
    case "boolean":
      return "boolean";
    case "function":
      return "function";
    case "bigint":
      return "bigint";
    case "symbol":
      return "symbol";
    case "object":
      if (Array.isArray(data)) {
        return "array";
      }
      if (data === null) {
        return "null";
      }
      if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
        return "promise";
      }
      if (typeof Map !== "undefined" && data instanceof Map) {
        return "map";
      }
      if (typeof Set !== "undefined" && data instanceof Set) {
        return "set";
      }
      if (typeof Date !== "undefined" && data instanceof Date) {
        return "date";
      }
      if (typeof File !== "undefined" && data instanceof File) {
        return "file";
      }
      return "object";
    default:
      throw new Error(`Unknown data type: ${t}`);
  }
};
var propertyKeyTypes = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
var primitiveTypes = /* @__PURE__ */ new Set([
  "string",
  "number",
  "bigint",
  "boolean",
  "symbol",
  "undefined"
]);
function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function clone(inst, def, params) {
  const cl = new inst._zod.constr(def ?? inst._zod.def);
  if (!def || params?.parent)
    cl._zod.parent = inst;
  return cl;
}
function normalizeParams(_params) {
  const params = _params;
  if (!params)
    return {};
  if (typeof params === "string")
    return { error: () => params };
  if (params?.message !== void 0) {
    if (params?.error !== void 0)
      throw new Error("Cannot specify both `message` and `error` params");
    params.error = params.message;
  }
  delete params.message;
  if (typeof params.error === "string")
    return { ...params, error: () => params.error };
  return params;
}
function createTransparentProxy(getter) {
  let target;
  return new Proxy({}, {
    get(_, prop, receiver) {
      target ?? (target = getter());
      return Reflect.get(target, prop, receiver);
    },
    set(_, prop, value, receiver) {
      target ?? (target = getter());
      return Reflect.set(target, prop, value, receiver);
    },
    has(_, prop) {
      target ?? (target = getter());
      return Reflect.has(target, prop);
    },
    deleteProperty(_, prop) {
      target ?? (target = getter());
      return Reflect.deleteProperty(target, prop);
    },
    ownKeys(_) {
      target ?? (target = getter());
      return Reflect.ownKeys(target);
    },
    getOwnPropertyDescriptor(_, prop) {
      target ?? (target = getter());
      return Reflect.getOwnPropertyDescriptor(target, prop);
    },
    defineProperty(_, prop, descriptor) {
      target ?? (target = getter());
      return Reflect.defineProperty(target, prop, descriptor);
    }
  });
}
function stringifyPrimitive(value) {
  if (typeof value === "bigint")
    return value.toString() + "n";
  if (typeof value === "string")
    return `"${value}"`;
  return `${value}`;
}
function optionalKeys(shape) {
  return Object.keys(shape).filter((k) => {
    return shape[k]._zod.optin !== void 0 && shape[k]._zod.optout === "optional";
  });
}
var NUMBER_FORMAT_RANGES = /* @__PURE__ */ (() => ({
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
}))();
var BIGINT_FORMAT_RANGES = {
  int64: [/* @__PURE__ */ BigInt("-9223372036854775808"), /* @__PURE__ */ BigInt("9223372036854775807")],
  uint64: [/* @__PURE__ */ BigInt(0), /* @__PURE__ */ BigInt("18446744073709551615")]
};
function pick(schema, mask) {
  const currDef = schema._zod.def;
  const checks = currDef.checks;
  const hasChecks = checks && checks.length > 0;
  if (hasChecks) {
    throw new Error(".pick() cannot be used on object schemas containing refinements");
  }
  const def = mergeDefs(schema._zod.def, {
    get shape() {
      const newShape = {};
      for (const key of Reflect.ownKeys(mask)) {
        if (!Object.prototype.hasOwnProperty.call(currDef.shape, key)) {
          throw new Error(`Unrecognized key: "${String(key)}"`);
        }
        if (!mask[key])
          continue;
        assignProp(newShape, key, currDef.shape[key]);
      }
      assignProp(this, "shape", newShape);
      return newShape;
    },
    checks: []
  });
  return clone(schema, def);
}
function omit(schema, mask) {
  const currDef = schema._zod.def;
  const checks = currDef.checks;
  const hasChecks = checks && checks.length > 0;
  if (hasChecks) {
    throw new Error(".omit() cannot be used on object schemas containing refinements");
  }
  const def = mergeDefs(schema._zod.def, {
    get shape() {
      const newShape = { ...schema._zod.def.shape };
      for (const key of Reflect.ownKeys(mask)) {
        if (!Object.prototype.hasOwnProperty.call(currDef.shape, key)) {
          throw new Error(`Unrecognized key: "${String(key)}"`);
        }
        if (!mask[key])
          continue;
        delete newShape[key];
      }
      assignProp(this, "shape", newShape);
      return newShape;
    },
    checks: []
  });
  return clone(schema, def);
}
function extend(schema, shape) {
  if (!isPlainObject(shape)) {
    throw new Error("Invalid input to extend: expected a plain object");
  }
  const checks = schema._zod.def.checks;
  const hasChecks = checks && checks.length > 0;
  if (hasChecks) {
    const existingShape = schema._zod.def.shape;
    for (const key of Reflect.ownKeys(shape)) {
      if (Object.getOwnPropertyDescriptor(existingShape, key) !== void 0) {
        throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
      }
    }
  }
  const def = mergeDefs(schema._zod.def, {
    get shape() {
      const _shape = { ...schema._zod.def.shape, ...shape };
      assignProp(this, "shape", _shape);
      return _shape;
    }
  });
  return clone(schema, def);
}
function safeExtend(schema, shape) {
  if (!isPlainObject(shape)) {
    throw new Error("Invalid input to safeExtend: expected a plain object");
  }
  const def = mergeDefs(schema._zod.def, {
    get shape() {
      const _shape = { ...schema._zod.def.shape, ...shape };
      assignProp(this, "shape", _shape);
      return _shape;
    }
  });
  return clone(schema, def);
}
function merge(a, b) {
  if (!b?._zod?.def) {
    throw new Error("Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.");
  }
  if (a._zod.def.checks?.length) {
    throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
  }
  const def = mergeDefs(a._zod.def, {
    get shape() {
      const _shape = { ...a._zod.def.shape, ...b._zod.def.shape };
      assignProp(this, "shape", _shape);
      return _shape;
    },
    get catchall() {
      return b._zod.def.catchall;
    },
    checks: b._zod.def.checks ?? []
  });
  return clone(a, def);
}
function partial(Class4, schema, mask, name = "partial") {
  const currDef = schema._zod.def;
  const checks = currDef.checks;
  const hasChecks = checks && checks.length > 0;
  if (hasChecks) {
    throw new Error(`.${name}() cannot be used on object schemas containing refinements`);
  }
  const def = mergeDefs(schema._zod.def, {
    get shape() {
      const oldShape = schema._zod.def.shape;
      const shape = { ...oldShape };
      if (mask) {
        for (const key of Reflect.ownKeys(mask)) {
          if (!Object.prototype.hasOwnProperty.call(oldShape, key)) {
            throw new Error(`Unrecognized key: "${String(key)}"`);
          }
          if (!mask[key])
            continue;
          shape[key] = Class4 ? new Class4({
            type: "optional",
            innerType: oldShape[key]
          }) : oldShape[key];
        }
      } else {
        for (const key of Reflect.ownKeys(oldShape)) {
          shape[key] = Class4 ? new Class4({
            type: "optional",
            innerType: oldShape[key]
          }) : oldShape[key];
        }
      }
      assignProp(this, "shape", shape);
      return shape;
    },
    checks: []
  });
  return clone(schema, def);
}
function required(Class4, schema, mask) {
  const def = mergeDefs(schema._zod.def, {
    get shape() {
      const oldShape = schema._zod.def.shape;
      const shape = { ...oldShape };
      if (mask) {
        for (const key of Reflect.ownKeys(mask)) {
          if (!Object.prototype.hasOwnProperty.call(shape, key)) {
            throw new Error(`Unrecognized key: "${String(key)}"`);
          }
          if (!mask[key])
            continue;
          shape[key] = new Class4({
            type: "nonoptional",
            innerType: oldShape[key]
          });
        }
      } else {
        for (const key of Reflect.ownKeys(oldShape)) {
          shape[key] = new Class4({
            type: "nonoptional",
            innerType: oldShape[key]
          });
        }
      }
      assignProp(this, "shape", shape);
      return shape;
    }
  });
  return clone(schema, def);
}
function aborted(x, startIndex = 0) {
  if (x.aborted === true)
    return true;
  for (let i = startIndex; i < x.issues.length; i++) {
    if (x.issues[i]?.continue !== true) {
      return true;
    }
  }
  return false;
}
function explicitlyAborted(x, startIndex = 0) {
  if (x.aborted === true)
    return true;
  for (let i = startIndex; i < x.issues.length; i++) {
    if (x.issues[i]?.continue === false) {
      return true;
    }
  }
  return false;
}
function prefixIssues(path, issues) {
  return issues.map((iss) => {
    var _a5;
    (_a5 = iss).path ?? (_a5.path = []);
    iss.path.unshift(path);
    return iss;
  });
}
function unwrapMessage(message) {
  return typeof message === "string" ? message : message?.message;
}
function attachSchema(issues, start, inst) {
  var _a5;
  for (let i = start; i < issues.length; i++) {
    (_a5 = issues[i]).schema ?? (_a5.schema = inst);
  }
}
function finalizeIssue(iss, ctx, config4) {
  var _a5;
  const traits = iss.inst?._zod?.traits;
  if (traits?.has("$ZodType")) {
    if (traits.has("$ZodCheck"))
      (_a5 = iss).schema ?? (_a5.schema = iss.inst);
    else
      iss.schema = iss.inst;
  }
  const schemaError = iss.schema !== iss.inst ? iss.schema?._zod.def?.error : void 0;
  const message = iss.message ? iss.message : unwrapMessage(iss.inst?._zod.def?.error?.(iss)) ?? unwrapMessage(schemaError?.(iss)) ?? unwrapMessage(ctx?.error?.(iss)) ?? unwrapMessage(config4.customError?.(iss)) ?? unwrapMessage(config4.localeError?.(iss)) ?? "Invalid input";
  const { inst: _inst, schema: _schema, continue: _continue, input: _input, ...rest } = iss;
  rest.path ?? (rest.path = []);
  rest.message = message;
  if (ctx?.reportInput) {
    rest.input = _input;
  }
  return rest;
}
function getSizableOrigin(input) {
  if (input instanceof Set)
    return "set";
  if (input instanceof Map)
    return "map";
  if (input instanceof File)
    return "file";
  return "unknown";
}
var highSurrogate = /[\uD800-\uDBFF]/;
function codePointLength(str) {
  const units = str.length;
  if (!highSurrogate.test(str))
    return units;
  let count = units;
  for (let i = 0; i < units - 1; i++) {
    if ((str.charCodeAt(i) & 64512) === 55296 && (str.charCodeAt(i + 1) & 64512) === 56320) {
      count--;
      i++;
    }
  }
  return count;
}
function getLengthableOrigin(input) {
  if (Array.isArray(input))
    return "array";
  if (typeof input === "string")
    return "string";
  return "unknown";
}
function parsedType(data) {
  const t = typeof data;
  switch (t) {
    case "number": {
      return Number.isNaN(data) ? "nan" : "number";
    }
    case "object": {
      if (data === null) {
        return "null";
      }
      if (Array.isArray(data)) {
        return "array";
      }
      const obj = data;
      if (obj && Object.getPrototypeOf(obj) !== Object.prototype && "constructor" in obj && obj.constructor) {
        return obj.constructor.name;
      }
    }
  }
  return t;
}
function issue(...args) {
  const [iss, input, inst] = args;
  if (typeof iss === "string") {
    return {
      message: iss,
      code: "custom",
      input,
      inst
    };
  }
  return { ...iss };
}
function cleanEnum(obj) {
  return Object.entries(obj).filter(([k, _]) => {
    return Number.isNaN(Number.parseInt(k, 10));
  }).map((el) => el[1]);
}
function base64ToUint8Array(base644) {
  const binaryString = atob(base644);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}
function uint8ArrayToBase64(bytes) {
  let binaryString = "";
  for (let i = 0; i < bytes.length; i++) {
    binaryString += String.fromCharCode(bytes[i]);
  }
  return btoa(binaryString);
}
function base64urlToUint8Array(base64url4) {
  const base644 = base64url4.replace(/-/g, "+").replace(/_/g, "/");
  const padding = "=".repeat((4 - base644.length % 4) % 4);
  return base64ToUint8Array(base644 + padding);
}
function uint8ArrayToBase64url(bytes) {
  return uint8ArrayToBase64(bytes).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}
function hexToUint8Array(hex) {
  const cleanHex = hex.replace(/^0x/, "");
  if (cleanHex.length % 2 !== 0) {
    throw new Error("Invalid hex string length");
  }
  const bytes = new Uint8Array(cleanHex.length / 2);
  for (let i = 0; i < cleanHex.length; i += 2) {
    bytes[i / 2] = Number.parseInt(cleanHex.slice(i, i + 2), 16);
  }
  return bytes;
}
function uint8ArrayToHex(bytes) {
  return Array.from(bytes).map((b) => b.toString(16).padStart(2, "0")).join("");
}
var Class = class {
  constructor(..._args) {
  }
};
function members(proto, table) {
  for (const key in table) {
    const desc = Object.getOwnPropertyDescriptor(table, key);
    if (desc.get)
      Object.defineProperty(proto, key, { ...desc, enumerable: false });
    else
      defineBound(proto, key, desc.value);
  }
}
function own(inst, key, value, enumerable = true) {
  Object.defineProperty(inst, key, { configurable: true, writable: true, enumerable, value });
  return value;
}
function hide(inst, key, value) {
  return own(inst, key, value, false);
}
function defineBound(proto, key, fn) {
  Object.defineProperty(proto, key, {
    configurable: true,
    get() {
      return this == null ? fn : own(this, key, fn.bind(this));
    },
    set(value) {
      own(this, key, value);
    }
  });
}
function claim(inst, sentinel) {
  const proto = Object.getPrototypeOf(inst);
  return sentinel in proto ? void 0 : proto;
}
var installing;
var broke = false;
var breaker = {
  configurable: true,
  get() {
    broke = true;
    return void 0;
  }
};
function defineLazyInternal(inst, key, compute) {
  const proto = Object.getPrototypeOf(inst._zod);
  if (key in proto && installing !== inst._zod) {
    installing = void 0;
    return;
  }
  installing = inst._zod;
  Object.defineProperty(proto, key, {
    configurable: true,
    get() {
      Object.defineProperty(this, key, breaker);
      const outer = broke;
      broke = false;
      try {
        const value = compute(this);
        if (broke)
          delete this[key];
        else
          Object.defineProperty(this, key, { configurable: true, writable: true, value });
        broke = broke || outer;
        return value;
      } catch (err) {
        delete this[key];
        broke = broke || outer;
        throw err;
      }
    },
    set(value) {
      Object.defineProperty(this, key, { configurable: true, writable: true, value });
    }
  });
}
function installLazyProp(inst, key, make, enumerable) {
  const proto = claim(inst, key);
  if (!proto)
    return;
  Object.defineProperty(proto, key, {
    configurable: true,
    get() {
      const desc = { configurable: true, writable: true, enumerable, value: void 0 };
      Object.defineProperty(this, key, desc);
      desc.value = make(this);
      Object.defineProperty(this, key, desc);
      return desc.value;
    },
    set(value) {
      Object.defineProperty(this, key, { configurable: true, writable: true, enumerable, value });
    }
  });
}
var CONSTANT_CATCH = "~constantCatch";
function constantCatch(value) {
  const fn = () => value;
  fn[CONSTANT_CATCH] = true;
  return fn;
}

// node_modules/@modelcontextprotocol/core/node_modules/zod/v4/core/core.js
var _a;
var NEVER = /* @__PURE__ */ Object.freeze({
  status: "aborted"
});
var _zodDesc = { value: void 0, enumerable: false };
var _E = "captureStackTrace" in Error ? Error : null;
function newError(Definition) {
  const E = _E;
  if (E) {
    const saved = E.stackTraceLimit;
    if (typeof saved === "number") {
      try {
        E.stackTraceLimit = 0;
      } catch {
        _E = null;
        return new Definition();
      }
      try {
        return new Definition();
      } finally {
        E.stackTraceLimit = saved;
      }
    }
  }
  return new Definition();
}
// @__NO_SIDE_EFFECTS__
function $constructor(name, initializer7, proto, params) {
  const zodProto = {};
  function Internals(def) {
    this.def = def;
    this.constr = _;
    this.traits = /* @__PURE__ */ new Set();
  }
  Internals.prototype = zodProto;
  const protoMembers = proto;
  const initialized = protoMembers && /* @__PURE__ */ new WeakSet();
  function init(inst, def) {
    if (!inst._zod) {
      _zodDesc.value = new Internals(def);
      try {
        Object.defineProperty(inst, "_zod", _zodDesc);
      } finally {
        _zodDesc.value = void 0;
      }
    }
    if (inst._zod.traits.has(name)) {
      return;
    }
    inst._zod.traits.add(name);
    initializer7(inst, def);
    if (initialized) {
      const own3 = Object.getPrototypeOf(inst);
      const ctorProto = inst._zod.constr.prototype;
      let up = own3;
      while (up && up !== ctorProto)
        up = Object.getPrototypeOf(up);
      const target = up ?? own3;
      if (!initialized.has(target)) {
        initialized.add(target);
        members(target, protoMembers);
      }
    }
    const proto2 = _.prototype;
    for (const k in proto2) {
      if (!Object.prototype.hasOwnProperty.call(proto2, k))
        continue;
      if (!(k in inst)) {
        inst[k] = proto2[k].bind(inst);
      }
    }
  }
  const Parent = params?.Parent ?? Object;
  class Definition extends Parent {
  }
  Object.defineProperty(Definition, "name", { value: name });
  function _(def) {
    const inst = params?.Parent ? newError(Definition) : this;
    init(inst, def);
    const deferred = inst._zod.deferred;
    if (deferred) {
      for (const fn of deferred) {
        fn();
      }
      inst._zod.deferred = void 0;
    }
    const pp = globalThis.__zod_globalConfig?.postProcessor;
    if (pp)
      pp(inst);
    return inst;
  }
  Object.defineProperty(_, "init", { value: init });
  Object.defineProperty(_, Symbol.hasInstance, {
    value: (inst) => {
      if (params?.Parent && inst instanceof params.Parent)
        return true;
      return inst?._zod?.traits?.has(name);
    }
  });
  Object.defineProperty(_, "name", { value: name });
  return _;
}
var $ZodAsyncError = class extends Error {
  constructor() {
    super(`Encountered Promise during synchronous parse. Use .parseAsync() instead.`);
  }
};
var $ZodEncodeError = class extends Error {
  constructor(name) {
    super(`Encountered unidirectional transform during encode: ${name}`);
    this.name = "ZodEncodeError";
  }
};
(_a = globalThis).__zod_globalConfig ?? (_a.__zod_globalConfig = {});
var globalConfig = globalThis.__zod_globalConfig;
function config(newConfig) {
  if (newConfig)
    Object.assign(globalConfig, newConfig);
  return globalConfig;
}

// node_modules/@modelcontextprotocol/core/node_modules/zod/v4/core/errors.js
function _getMessage() {
  const internals = this._zod;
  internals.message ?? (internals.message = JSON.stringify(internals.def, jsonStringifyReplacer, 2));
  return internals.message;
}
function _setMessage(value) {
  this._zod.message = value;
}
var _messageDesc = {
  get: _getMessage,
  set: _setMessage,
  enumerable: true,
  configurable: true
};
var _zodDesc2 = { value: void 0, enumerable: false };
var _issuesDesc = { value: void 0, enumerable: false };
var _installedToString = /* @__PURE__ */ new WeakSet([Object.prototype, Error.prototype]);
var initializer = (inst, def) => {
  inst.name = "$ZodError";
  _zodDesc2.value = inst._zod;
  Object.defineProperty(inst, "_zod", _zodDesc2);
  _issuesDesc.value = def;
  Object.defineProperty(inst, "issues", _issuesDesc);
  _zodDesc2.value = void 0;
  _issuesDesc.value = void 0;
  Object.defineProperty(inst, "message", _messageDesc);
  const proto = Object.getPrototypeOf(inst);
  if (!_installedToString.has(proto)) {
    _installedToString.add(proto);
    Object.defineProperty(proto, "toString", {
      configurable: true,
      enumerable: false,
      get() {
        const value = () => this.message;
        Object.defineProperty(this, "toString", { value, configurable: true, writable: true });
        return value;
      },
      set(value) {
        Object.defineProperty(this, "toString", { value, configurable: true, writable: true });
      }
    });
  }
};
var $ZodError = $constructor("$ZodError", initializer);
var $ZodRealError = $constructor("$ZodError", initializer, void 0, {
  Parent: Error
});
function node(obj, key, make) {
  if (!Object.prototype.hasOwnProperty.call(obj, key)) {
    if (key === "__proto__") {
      Object.defineProperty(obj, key, { value: make(), writable: true, enumerable: true, configurable: true });
    } else {
      obj[key] = make();
    }
  }
  return obj[key];
}
function flattenError(error3, mapper = (issue4) => issue4.message) {
  const fieldErrors = {};
  const formErrors = [];
  for (const sub of error3.issues) {
    if (sub.path.length > 0) {
      node(fieldErrors, sub.path[0], () => []).push(mapper(sub));
    } else {
      formErrors.push(mapper(sub));
    }
  }
  return { formErrors, fieldErrors };
}
function formatError(error3, mapper = (issue4) => issue4.message) {
  const fieldErrors = { _errors: [] };
  const processError = (error4, path = []) => {
    for (const issue4 of error4.issues) {
      if (issue4.code === "invalid_union" && issue4.errors.length) {
        issue4.errors.map((issues) => processError({ issues }, [...path, ...issue4.path]));
      } else if (issue4.code === "invalid_key") {
        processError({ issues: issue4.issues }, [...path, ...issue4.path]);
      } else if (issue4.code === "invalid_element") {
        processError({ issues: issue4.issues }, [...path, ...issue4.path]);
      } else {
        const fullpath = [...path, ...issue4.path];
        if (fullpath.length === 0) {
          fieldErrors._errors.push(mapper(issue4));
        } else {
          let curr = fieldErrors;
          let i = 0;
          while (i < fullpath.length) {
            const el = fullpath[i];
            const terminal = i === fullpath.length - 1;
            if (el === "_errors") {
              if (terminal)
                curr._errors.push(mapper(issue4));
              i++;
              continue;
            }
            if (!Object.prototype.hasOwnProperty.call(curr, el)) {
              Object.defineProperty(curr, el, {
                value: { _errors: [] },
                enumerable: true,
                writable: true,
                configurable: true
              });
            }
            const node3 = curr[el];
            if (terminal) {
              node3._errors.push(mapper(issue4));
            }
            curr = node3;
            i++;
          }
        }
      }
    }
  };
  processError(error3);
  return fieldErrors;
}

// node_modules/@modelcontextprotocol/core/node_modules/zod/v4/core/parse.js
function finalizeParams(callee, params) {
  return { callee: params?.callee ?? callee, Err: params?.Err };
}
var _parse = (_Err) => {
  const fn = (schema, value, _ctx, _params) => {
    const ctx = _ctx ? { ..._ctx, async: false } : { async: false };
    const result = schema._zod.run({ value, issues: [] }, ctx);
    if (result instanceof Promise) {
      throw new $ZodAsyncError();
    }
    if (result.issues.length) {
      const e = new (_params?.Err ?? _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())));
      captureStackTrace(e, _params?.callee ?? fn);
      throw e;
    }
    return result.value;
  };
  return fn;
};
var _parseAsync = (_Err) => {
  const fn = async (schema, value, _ctx, params) => {
    const ctx = _ctx ? { ..._ctx, async: true } : { async: true };
    let result = schema._zod.run({ value, issues: [] }, ctx);
    if (result instanceof Promise)
      result = await result;
    if (result.issues.length) {
      const e = new (params?.Err ?? _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())));
      captureStackTrace(e, params?.callee ?? fn);
      throw e;
    }
    return result.value;
  };
  return fn;
};
var _safeParse = (_Err) => (schema, value, _ctx) => {
  const ctx = _ctx ? { ..._ctx, async: false } : { async: false };
  const result = schema._zod.run({ value, issues: [] }, ctx);
  if (result instanceof Promise) {
    throw new $ZodAsyncError();
  }
  return result.issues.length ? {
    success: false,
    error: new (_Err ?? $ZodError)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
  } : { success: true, data: result.value };
};
var safeParse = /* @__PURE__ */ _safeParse($ZodRealError);
var _safeParseAsync = (_Err) => async (schema, value, _ctx) => {
  const ctx = _ctx ? { ..._ctx, async: true } : { async: true };
  let result = schema._zod.run({ value, issues: [] }, ctx);
  if (result instanceof Promise)
    result = await result;
  return result.issues.length ? {
    success: false,
    error: new _Err(result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
  } : { success: true, data: result.value };
};
var safeParseAsync = /* @__PURE__ */ _safeParseAsync($ZodRealError);
var _encode = (_Err) => {
  const parse6 = _parse(_Err);
  const fn = (schema, value, _ctx, _params) => {
    const ctx = _ctx ? { ..._ctx, direction: "backward" } : { direction: "backward" };
    return parse6(schema, value, ctx, finalizeParams(fn, _params));
  };
  return fn;
};
var _decode = (_Err) => {
  const parse6 = _parse(_Err);
  const fn = (schema, value, _ctx, _params) => {
    return parse6(schema, value, _ctx, finalizeParams(fn, _params));
  };
  return fn;
};
var _encodeAsync = (_Err) => {
  const parseAsync6 = _parseAsync(_Err);
  const fn = async (schema, value, _ctx, _params) => {
    const ctx = _ctx ? { ..._ctx, direction: "backward" } : { direction: "backward" };
    return await parseAsync6(schema, value, ctx, finalizeParams(fn, _params));
  };
  return fn;
};
var _decodeAsync = (_Err) => {
  const parseAsync6 = _parseAsync(_Err);
  const fn = async (schema, value, _ctx, _params) => {
    return await parseAsync6(schema, value, _ctx, finalizeParams(fn, _params));
  };
  return fn;
};
var _safeEncode = (_Err) => (schema, value, _ctx) => {
  const ctx = _ctx ? { ..._ctx, direction: "backward" } : { direction: "backward" };
  return _safeParse(_Err)(schema, value, ctx);
};
var _safeDecode = (_Err) => (schema, value, _ctx) => {
  return _safeParse(_Err)(schema, value, _ctx);
};
var _safeEncodeAsync = (_Err) => async (schema, value, _ctx) => {
  const ctx = _ctx ? { ..._ctx, direction: "backward" } : { direction: "backward" };
  return _safeParseAsync(_Err)(schema, value, ctx);
};
var _safeDecodeAsync = (_Err) => async (schema, value, _ctx) => {
  return _safeParseAsync(_Err)(schema, value, _ctx);
};

// node_modules/@modelcontextprotocol/core/node_modules/zod/v4/core/regexes.js
var cuid = /^[cC][0-9a-z]{6,}$/;
var cuid2 = /^[0-9a-z]+$/;
var ulid = /^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/;
var xid = /^[0-9a-vA-V]{20}$/;
var ksuid = /^[A-Za-z0-9]{27}$/;
var nanoid = /^[a-zA-Z0-9_-]{21}$/;
function nanoidOfLength(length) {
  return new RegExp(`^[a-zA-Z0-9_-]{${length}}$`);
}
var duration = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;
var guid = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/;
var uuid = (version4) => {
  if (!version4)
    return /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;
  return new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${version4}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`);
};
var email = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;
var _emoji = `^[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$`;
function emoji() {
  return new RegExp(_emoji, "u");
}
var ipv4 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var ipv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/;
var cidrv4 = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/;
var cidrv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
var base64 = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/;
var base64url = /^[A-Za-z0-9_-]*$/;
var httpProtocol = /^https?$/;
var e164 = /^\+[1-9]\d{6,14}$/;
var dateSource = `(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))`;
function anchor(source) {
  return new RegExp(`^${source}$`);
}
var date = /* @__PURE__ */ anchor(dateSource);
function timeSource(args) {
  const hhmm = `(?:[01]\\d|2[0-3]):[0-5]\\d`;
  const regex2 = typeof args.precision === "number" ? args.precision === -1 ? `${hhmm}` : args.precision === 0 ? `${hhmm}:[0-5]\\d` : `${hhmm}:[0-5]\\d\\.\\d{${args.precision}}` : args.seconds ? `${hhmm}:[0-5]\\d(?:\\.\\d+)?` : `${hhmm}(?::[0-5]\\d(?:\\.\\d+)?)?`;
  return regex2;
}
function time(args) {
  return new RegExp(`^${timeSource(args)}$`);
}
function datetime(args) {
  const opts = ["Z"];
  if (args.offset)
    opts.push(`([+-](?:[01]\\d|2[0-3]):[0-5]\\d)`);
  const qualified = `${timeSource({ precision: args.precision, seconds: true })}(?:${opts.join("|")})`;
  const timeRegex = args.local ? `${qualified}|${timeSource({ precision: args.precision })}` : qualified;
  return new RegExp(`^${dateSource}T(?:${timeRegex})$`);
}
var string = (params) => {
  const regex2 = params ? `[\\s\\S]{${params?.minimum ?? 0},${params?.maximum ?? ""}}` : `[\\s\\S]*`;
  return new RegExp(`^${regex2}$`);
};
var bigint = /^-?\d+n?$/;
var integer = /^-?\d+$/;
var number = /^-?\d+(?:\.\d+)?$/;
var boolean = /^(?:true|false)$/i;
var _null = /^null$/i;
var lowercase = /^[^A-Z]*$/;
var uppercase = /^[^a-z]*$/;

// node_modules/@modelcontextprotocol/core/node_modules/zod/v4/core/checks.js
var $ZodCheck = /* @__PURE__ */ $constructor("$ZodCheck", (inst, def) => {
  var _a5;
  inst._zod ?? (inst._zod = {});
  inst._zod.def = def;
  (_a5 = inst._zod).onattach ?? (_a5.onattach = []);
});
var _whenHasLength = (payload) => {
  const val = payload.value;
  return !nullish(val) && val.length !== void 0;
};
var numericOriginMap = {
  number: "number",
  bigint: "bigint",
  object: "date"
};
var $ZodCheckLessThan = /* @__PURE__ */ $constructor("$ZodCheckLessThan", (inst, def) => {
  $ZodCheck.init(inst, def);
  const origin = numericOriginMap[typeof def.value];
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    const curr = (def.inclusive ? bag.maximum : bag.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
    if (def.value < curr) {
      if (def.inclusive)
        bag.maximum = def.value;
      else
        bag.exclusiveMaximum = def.value;
    }
  });
  inst._zod.check = (payload) => {
    if (def.inclusive ? payload.value <= def.value : payload.value < def.value) {
      return;
    }
    payload.issues.push({
      origin: numericOriginMap[typeof payload.value] ?? origin,
      code: "too_big",
      maximum: typeof def.value === "object" ? def.value.getTime() : def.value,
      input: payload.value,
      inclusive: def.inclusive,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckGreaterThan = /* @__PURE__ */ $constructor("$ZodCheckGreaterThan", (inst, def) => {
  $ZodCheck.init(inst, def);
  const origin = numericOriginMap[typeof def.value];
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    const curr = (def.inclusive ? bag.minimum : bag.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
    if (def.value > curr) {
      if (def.inclusive)
        bag.minimum = def.value;
      else
        bag.exclusiveMinimum = def.value;
    }
  });
  inst._zod.check = (payload) => {
    if (def.inclusive ? payload.value >= def.value : payload.value > def.value) {
      return;
    }
    payload.issues.push({
      origin: numericOriginMap[typeof payload.value] ?? origin,
      code: "too_small",
      minimum: typeof def.value === "object" ? def.value.getTime() : def.value,
      input: payload.value,
      inclusive: def.inclusive,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckMultipleOf = /* @__PURE__ */ $constructor("$ZodCheckMultipleOf", (inst, def) => {
  $ZodCheck.init(inst, def);
  inst._zod.onattach.push((inst2) => {
    var _a5;
    (_a5 = inst2._zod.bag).multipleOf ?? (_a5.multipleOf = def.value);
  });
  inst._zod.check = (payload) => {
    if (typeof payload.value !== typeof def.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    const isMultiple = typeof payload.value === "bigint" ? (
      // `value % 0n` throws, and nothing is a multiple of zero — the number branch already fails this way via NaN
      def.value !== BigInt(0) && payload.value % def.value === BigInt(0)
    ) : floatSafeRemainder(payload.value, def.value) === 0;
    if (isMultiple)
      return;
    payload.issues.push({
      origin: typeof payload.value,
      code: "not_multiple_of",
      divisor: def.value,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckNumberFormat = /* @__PURE__ */ $constructor("$ZodCheckNumberFormat", (inst, def) => {
  $ZodCheck.init(inst, def);
  def.format = def.format || "float64";
  const isInt = def.format?.includes("int");
  const origin = isInt ? "int" : "number";
  const [minimum, maximum] = NUMBER_FORMAT_RANGES[def.format];
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    bag.format = def.format;
    bag.minimum = minimum;
    bag.maximum = maximum;
    if (isInt)
      bag.pattern = integer;
  });
  inst._zod.check = (payload) => {
    const input = payload.value;
    if (isInt) {
      if (!Number.isInteger(input)) {
        payload.issues.push({
          expected: origin,
          format: def.format,
          code: "invalid_type",
          continue: false,
          input,
          inst
        });
        return;
      }
      if (!Number.isSafeInteger(input)) {
        if (input > 0) {
          payload.issues.push({
            input,
            code: "too_big",
            maximum: Number.MAX_SAFE_INTEGER,
            note: "Integers must be within the safe integer range.",
            inst,
            origin,
            inclusive: true,
            continue: !def.abort
          });
        } else {
          payload.issues.push({
            input,
            code: "too_small",
            minimum: Number.MIN_SAFE_INTEGER,
            note: "Integers must be within the safe integer range.",
            inst,
            origin,
            inclusive: true,
            continue: !def.abort
          });
        }
        return;
      }
    }
    if (input < minimum) {
      payload.issues.push({
        origin: "number",
        input,
        code: "too_small",
        minimum,
        inclusive: true,
        inst,
        continue: !def.abort
      });
    }
    if (input > maximum) {
      payload.issues.push({
        origin: "number",
        input,
        code: "too_big",
        maximum,
        inclusive: true,
        inst,
        continue: !def.abort
      });
    }
  };
});
var $ZodCheckMaxLength = /* @__PURE__ */ $constructor("$ZodCheckMaxLength", (inst, def) => {
  var _a5;
  $ZodCheck.init(inst, def);
  (_a5 = inst._zod.def).when ?? (_a5.when = _whenHasLength);
  inst._zod.onattach.push((inst2) => {
    const curr = inst2._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    if (def.maximum < curr)
      inst2._zod.bag.maximum = def.maximum;
  });
  inst._zod.check = (payload) => {
    const input = payload.value;
    const units = input.length;
    const length = typeof input === "string" && units > def.maximum ? codePointLength(input) : units;
    if (length <= def.maximum)
      return;
    const origin = getLengthableOrigin(input);
    payload.issues.push({
      origin,
      code: "too_big",
      maximum: def.maximum,
      inclusive: true,
      input,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckMinLength = /* @__PURE__ */ $constructor("$ZodCheckMinLength", (inst, def) => {
  var _a5;
  $ZodCheck.init(inst, def);
  (_a5 = inst._zod.def).when ?? (_a5.when = _whenHasLength);
  inst._zod.onattach.push((inst2) => {
    const curr = inst2._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    if (def.minimum > curr)
      inst2._zod.bag.minimum = def.minimum;
  });
  inst._zod.check = (payload) => {
    const input = payload.value;
    const units = input.length;
    const length = typeof input === "string" && units >= def.minimum && units < def.minimum * 2 ? codePointLength(input) : units;
    if (length >= def.minimum)
      return;
    const origin = getLengthableOrigin(input);
    payload.issues.push({
      origin,
      code: "too_small",
      minimum: def.minimum,
      inclusive: true,
      input,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckLengthEquals = /* @__PURE__ */ $constructor("$ZodCheckLengthEquals", (inst, def) => {
  var _a5;
  $ZodCheck.init(inst, def);
  (_a5 = inst._zod.def).when ?? (_a5.when = _whenHasLength);
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    bag.minimum = def.length;
    bag.maximum = def.length;
    bag.length = def.length;
  });
  inst._zod.check = (payload) => {
    const input = payload.value;
    const units = input.length;
    const length = typeof input === "string" && units >= def.length && units <= def.length * 2 ? codePointLength(input) : units;
    if (length === def.length)
      return;
    const origin = getLengthableOrigin(input);
    const tooBig = length > def.length;
    payload.issues.push({
      origin,
      ...tooBig ? { code: "too_big", maximum: def.length } : { code: "too_small", minimum: def.length },
      inclusive: true,
      exact: true,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckStringFormat = /* @__PURE__ */ $constructor("$ZodCheckStringFormat", (inst, def) => {
  var _a5, _b;
  $ZodCheck.init(inst, def);
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    bag.format = def.format;
    if (def.pattern) {
      bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
      bag.patterns.add(def.pattern);
    }
  });
  if (def.pattern)
    (_a5 = inst._zod).check ?? (_a5.check = (payload) => {
      def.pattern.lastIndex = 0;
      if (def.pattern.test(payload.value))
        return;
      payload.issues.push({
        origin: "string",
        code: "invalid_format",
        format: def.format,
        input: payload.value,
        ...def.pattern ? { pattern: def.pattern.toString() } : {},
        inst,
        continue: !def.abort
      });
    });
  else
    (_b = inst._zod).check ?? (_b.check = () => {
    });
});
var $ZodCheckRegex = /* @__PURE__ */ $constructor("$ZodCheckRegex", (inst, def) => {
  $ZodCheckStringFormat.init(inst, def);
  inst._zod.check = (payload) => {
    def.pattern.lastIndex = 0;
    if (def.pattern.test(payload.value))
      return;
    payload.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: payload.value,
      pattern: def.pattern.toString(),
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckLowerCase = /* @__PURE__ */ $constructor("$ZodCheckLowerCase", (inst, def) => {
  def.pattern ?? (def.pattern = lowercase);
  $ZodCheckStringFormat.init(inst, def);
});
var $ZodCheckUpperCase = /* @__PURE__ */ $constructor("$ZodCheckUpperCase", (inst, def) => {
  def.pattern ?? (def.pattern = uppercase);
  $ZodCheckStringFormat.init(inst, def);
});
var $ZodCheckIncludes = /* @__PURE__ */ $constructor("$ZodCheckIncludes", (inst, def) => {
  $ZodCheck.init(inst, def);
  const escapedRegex = escapeRegex(def.includes);
  const pattern = new RegExp(typeof def.position === "number" ? `^.{${def.position},}${escapedRegex}` : escapedRegex);
  def.pattern = pattern;
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
    bag.patterns.add(pattern);
  });
  inst._zod.check = (payload) => {
    if (payload.value.includes(def.includes, def.position))
      return;
    payload.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: def.includes,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckStartsWith = /* @__PURE__ */ $constructor("$ZodCheckStartsWith", (inst, def) => {
  $ZodCheck.init(inst, def);
  const pattern = new RegExp(`^${escapeRegex(def.prefix)}.*`);
  def.pattern ?? (def.pattern = pattern);
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
    bag.patterns.add(pattern);
  });
  inst._zod.check = (payload) => {
    if (payload.value.startsWith(def.prefix))
      return;
    payload.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: def.prefix,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckEndsWith = /* @__PURE__ */ $constructor("$ZodCheckEndsWith", (inst, def) => {
  $ZodCheck.init(inst, def);
  const pattern = new RegExp(`.*${escapeRegex(def.suffix)}$`);
  def.pattern ?? (def.pattern = pattern);
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
    bag.patterns.add(pattern);
  });
  inst._zod.check = (payload) => {
    if (payload.value.endsWith(def.suffix))
      return;
    payload.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: def.suffix,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckOverwrite = /* @__PURE__ */ $constructor("$ZodCheckOverwrite", (inst, def) => {
  $ZodCheck.init(inst, def);
  inst._zod.check = (payload) => {
    payload.value = def.tx(payload.value);
  };
});

// node_modules/@modelcontextprotocol/core/node_modules/zod/v4/core/doc.js
var Doc = class {
  constructor(args = [], closed = {}) {
    this.content = [];
    this.indent = 0;
    this.args = args;
    this.closed = closed;
  }
  indented(fn) {
    this.indent += 1;
    fn(this);
    this.indent -= 1;
  }
  write(arg) {
    if (typeof arg === "function") {
      arg(this, { execution: "sync" });
      arg(this, { execution: "async" });
      return;
    }
    const content = arg;
    const lines = content.split("\n").filter((x) => x);
    const minIndent = Math.min(...lines.map((x) => x.length - x.trimStart().length));
    const dedented = lines.map((x) => x.slice(minIndent)).map((x) => " ".repeat(this.indent * 2) + x);
    for (const line of dedented) {
      this.content.push(line);
    }
  }
  compile() {
    const F = Function;
    const content = this?.content ?? [``];
    const factory = new F(...Object.keys(this.closed), `return function (${this.args.join(", ")}) {
${content.join("\n")}
};`);
    return factory(...Object.values(this.closed));
  }
};

// node_modules/@modelcontextprotocol/core/node_modules/zod/v4/core/versions.js
var version = {
  major: 4,
  minor: 5,
  patch: 4
};

// node_modules/@modelcontextprotocol/core/node_modules/zod/v4/core/schemas.js
var $ZodType = /* @__PURE__ */ $constructor("$ZodType", (inst, def) => {
  var _a5;
  inst ?? (inst = {});
  inst._zod.def = def;
  inst._zod.bag = inst._zod.bag || {};
  inst._zod.version = version;
  const defChecks = inst._zod.def.checks;
  const checks = inst._zod.traits.has("$ZodCheck") ? [inst, ...defChecks ?? []] : defChecks?.length ? [...defChecks] : [];
  for (const ch of checks) {
    for (const fn of ch._zod.onattach) {
      fn(inst);
    }
  }
  if (checks.length === 0) {
    (_a5 = inst._zod).deferred ?? (_a5.deferred = []);
    inst._zod.deferred?.push(() => {
      inst._zod.run = inst._zod.parse;
    });
  } else {
    const runChecks = (payload, checks2, ctx) => {
      if (payload.memo)
        return payload;
      let isAborted = aborted(payload);
      let asyncResult;
      for (const ch of checks2) {
        if (ch._zod.def.when) {
          if (explicitlyAborted(payload))
            continue;
          const shouldRun = ch._zod.def.when(payload);
          if (!shouldRun)
            continue;
        } else if (isAborted) {
          continue;
        }
        const currLen = payload.issues.length;
        const _ = ch._zod.check(payload);
        if (_ instanceof Promise && ctx?.async === false) {
          throw new $ZodAsyncError();
        }
        if (asyncResult || _ instanceof Promise) {
          asyncResult = (asyncResult ?? Promise.resolve()).then(async () => {
            await _;
            const nextLen = payload.issues.length;
            if (nextLen === currLen)
              return;
            attachSchema(payload.issues, currLen, inst);
            if (!isAborted)
              isAborted = aborted(payload, currLen);
          });
        } else {
          const nextLen = payload.issues.length;
          if (nextLen === currLen)
            continue;
          attachSchema(payload.issues, currLen, inst);
          if (!isAborted)
            isAborted = aborted(payload, currLen);
        }
      }
      if (asyncResult) {
        return asyncResult.then(() => {
          return payload;
        });
      }
      return payload;
    };
    const handleCanaryResult = (canary, payload, ctx) => {
      if (aborted(canary)) {
        canary.aborted = true;
        return canary;
      }
      const checkResult = runChecks(payload, checks, ctx);
      if (checkResult instanceof Promise) {
        if (ctx.async === false)
          throw new $ZodAsyncError();
        return checkResult.then((checkResult2) => inst._zod.parse(checkResult2, ctx));
      }
      return inst._zod.parse(checkResult, ctx);
    };
    inst._zod.run = (payload, ctx) => {
      if (ctx.skipChecks) {
        return inst._zod.parse(payload, ctx);
      }
      if (ctx.direction === "backward") {
        const canary = inst._zod.parse({ value: payload.value, issues: [] }, { ...ctx, skipChecks: true });
        if (canary instanceof Promise) {
          return canary.then((canary2) => {
            return handleCanaryResult(canary2, payload, ctx);
          });
        }
        return handleCanaryResult(canary, payload, ctx);
      }
      const result = inst._zod.parse(payload, ctx);
      if (result instanceof Promise) {
        if (ctx.async === false)
          throw new $ZodAsyncError();
        return result.then((result2) => runChecks(result2, checks, ctx));
      }
      return runChecks(result, checks, ctx);
    };
  }
}, {
  // Wrappers extend this by installing a richer factory over it; reading it eagerly would defeat the laziness.
  get "~standard"() {
    return hide(this, "~standard", standardProps(this));
  },
  set "~standard"(value) {
    own(this, "~standard", value);
  }
});
var toStandardResult = (r) => r.success ? { value: r.data } : { issues: r.error?.issues };
function standardProps(inst) {
  return {
    validate: (value) => {
      try {
        return toStandardResult(safeParse(inst, value));
      } catch (_) {
        return safeParseAsync(inst, value).then(toStandardResult);
      }
    },
    vendor: "zod",
    version: 1
  };
}
var $ZodString = /* @__PURE__ */ $constructor("$ZodString", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.pattern = [...inst?._zod.bag?.patterns ?? []].pop() ?? string(inst._zod.bag);
  inst._zod.parse = (payload, _) => {
    if (def.coerce)
      try {
        payload.value = String(payload.value);
      } catch (_2) {
      }
    if (typeof payload.value === "string")
      return payload;
    payload.issues.push({
      expected: "string",
      code: "invalid_type",
      input: payload.value,
      inst
    });
    return payload;
  };
});
var $ZodStringFormat = /* @__PURE__ */ $constructor("$ZodStringFormat", (inst, def) => {
  $ZodCheckStringFormat.init(inst, def);
  $ZodString.init(inst, def);
});
var $ZodGUID = /* @__PURE__ */ $constructor("$ZodGUID", (inst, def) => {
  def.pattern ?? (def.pattern = guid);
  $ZodStringFormat.init(inst, def);
});
var $ZodUUID = /* @__PURE__ */ $constructor("$ZodUUID", (inst, def) => {
  if (def.version) {
    const versionMap = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    };
    const v = versionMap[def.version];
    if (v === void 0)
      throw new Error(`Invalid UUID version: "${def.version}"`);
    def.pattern ?? (def.pattern = uuid(v));
  } else
    def.pattern ?? (def.pattern = uuid());
  $ZodStringFormat.init(inst, def);
});
var $ZodEmail = /* @__PURE__ */ $constructor("$ZodEmail", (inst, def) => {
  def.pattern ?? (def.pattern = email);
  $ZodStringFormat.init(inst, def);
});
var URL_BAD_FORMAT = 1;
var URL_UNPARSEABLE = 2;
function parseURLObject(trimmed, def) {
  if (!def.normalize && def.protocol?.source === httpProtocol.source && !/^https?:\/\//i.test(trimmed)) {
    return URL_BAD_FORMAT;
  }
  try {
    return new URL(trimmed);
  } catch {
    return URL_UNPARSEABLE;
  }
}
var asciiTabOrNewline = /[\t\n\r]/g;
function stripTabAndNewline(value) {
  return value.replace(asciiTabOrNewline, "");
}
function urlHostnameOk(url3, hostname2) {
  hostname2.lastIndex = 0;
  return hostname2.test(url3.hostname);
}
function urlProtocolOk(url3, protocol) {
  protocol.lastIndex = 0;
  return protocol.test(url3.protocol.endsWith(":") ? url3.protocol.slice(0, -1) : url3.protocol);
}
var $ZodURL = /* @__PURE__ */ $constructor("$ZodURL", (inst, def) => {
  $ZodStringFormat.init(inst, def);
  inst._zod.check = (payload) => {
    try {
      const trimmed = payload.value.trim();
      const url3 = parseURLObject(trimmed, def);
      if (url3 === URL_BAD_FORMAT) {
        payload.issues.push({
          code: "invalid_format",
          format: "url",
          note: "Invalid URL format",
          input: payload.value,
          inst,
          continue: !def.abort
        });
        return;
      }
      if (url3 === URL_UNPARSEABLE) {
        payload.issues.push({
          code: "invalid_format",
          format: "url",
          input: payload.value,
          inst,
          continue: !def.abort
        });
        return;
      }
      if (def.hostname && !urlHostnameOk(url3, def.hostname)) {
        payload.issues.push({
          code: "invalid_format",
          format: "url",
          note: "Invalid hostname",
          pattern: def.hostname.source,
          input: payload.value,
          inst,
          continue: !def.abort
        });
      }
      if (def.protocol && !urlProtocolOk(url3, def.protocol)) {
        payload.issues.push({
          code: "invalid_format",
          format: "url",
          note: "Invalid protocol",
          pattern: def.protocol.source,
          input: payload.value,
          inst,
          continue: !def.abort
        });
      }
      payload.value = def.normalize ? url3.href : stripTabAndNewline(trimmed);
      return;
    } catch (_) {
      payload.issues.push({
        code: "invalid_format",
        format: "url",
        input: payload.value,
        inst,
        continue: !def.abort
      });
    }
  };
});
var $ZodEmoji = /* @__PURE__ */ $constructor("$ZodEmoji", (inst, def) => {
  def.pattern ?? (def.pattern = emoji());
  $ZodStringFormat.init(inst, def);
});
var $ZodNanoID = /* @__PURE__ */ $constructor("$ZodNanoID", (inst, def) => {
  if (def.length !== void 0 && (!Number.isInteger(def.length) || def.length < 1))
    throw new Error(`Invalid nanoid length: ${def.length}`);
  def.pattern ?? (def.pattern = def.length === void 0 ? nanoid : nanoidOfLength(def.length));
  $ZodStringFormat.init(inst, def);
});
var $ZodCUID = /* @__PURE__ */ $constructor("$ZodCUID", (inst, def) => {
  def.pattern ?? (def.pattern = cuid);
  $ZodStringFormat.init(inst, def);
});
var $ZodCUID2 = /* @__PURE__ */ $constructor("$ZodCUID2", (inst, def) => {
  def.pattern ?? (def.pattern = cuid2);
  $ZodStringFormat.init(inst, def);
});
var $ZodULID = /* @__PURE__ */ $constructor("$ZodULID", (inst, def) => {
  def.pattern ?? (def.pattern = ulid);
  $ZodStringFormat.init(inst, def);
});
var $ZodXID = /* @__PURE__ */ $constructor("$ZodXID", (inst, def) => {
  def.pattern ?? (def.pattern = xid);
  $ZodStringFormat.init(inst, def);
});
var $ZodKSUID = /* @__PURE__ */ $constructor("$ZodKSUID", (inst, def) => {
  def.pattern ?? (def.pattern = ksuid);
  $ZodStringFormat.init(inst, def);
});
var $ZodISODateTime = /* @__PURE__ */ $constructor("$ZodISODateTime", (inst, def) => {
  def.pattern ?? (def.pattern = datetime(def));
  $ZodStringFormat.init(inst, def);
  if (def.local || def.precision === -1) {
    inst._zod.bag.laxFormat = true;
    inst._zod.onattach.push((s) => {
      s._zod.bag.laxFormat = true;
    });
  }
});
var $ZodISODate = /* @__PURE__ */ $constructor("$ZodISODate", (inst, def) => {
  def.pattern ?? (def.pattern = date);
  $ZodStringFormat.init(inst, def);
});
var $ZodISOTime = /* @__PURE__ */ $constructor("$ZodISOTime", (inst, def) => {
  def.pattern ?? (def.pattern = time(def));
  $ZodStringFormat.init(inst, def);
});
var $ZodISODuration = /* @__PURE__ */ $constructor("$ZodISODuration", (inst, def) => {
  def.pattern ?? (def.pattern = duration);
  $ZodStringFormat.init(inst, def);
});
var $ZodIPv4 = /* @__PURE__ */ $constructor("$ZodIPv4", (inst, def) => {
  def.pattern ?? (def.pattern = ipv4);
  $ZodStringFormat.init(inst, def);
  inst._zod.bag.format = `ipv4`;
});
var ipv6Alphabet = /^[0-9a-fA-F:.]+$/;
function isValidIPv6(value) {
  if (!ipv6Alphabet.test(value))
    return false;
  try {
    new URL(`http://[${value}]`);
    return true;
  } catch {
    return false;
  }
}
var $ZodIPv6 = /* @__PURE__ */ $constructor("$ZodIPv6", (inst, def) => {
  def.pattern ?? (def.pattern = ipv6);
  $ZodStringFormat.init(inst, def);
  inst._zod.bag.format = `ipv6`;
  inst._zod.check = (payload) => {
    if (!isValidIPv6(payload.value)) {
      payload.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: payload.value,
        inst,
        continue: !def.abort
      });
    }
  };
});
var $ZodCIDRv4 = /* @__PURE__ */ $constructor("$ZodCIDRv4", (inst, def) => {
  def.pattern ?? (def.pattern = cidrv4);
  $ZodStringFormat.init(inst, def);
});
function isValidCIDRv6(value) {
  const parts = value.split("/");
  if (parts.length !== 2)
    return false;
  const [address, prefix] = parts;
  if (!prefix)
    return false;
  const prefixNum = Number(prefix);
  if (`${prefixNum}` !== prefix)
    return false;
  if (prefixNum < 0 || prefixNum > 128)
    return false;
  return isValidIPv6(address);
}
var $ZodCIDRv6 = /* @__PURE__ */ $constructor("$ZodCIDRv6", (inst, def) => {
  def.pattern ?? (def.pattern = cidrv6);
  $ZodStringFormat.init(inst, def);
  inst._zod.check = (payload) => {
    if (!isValidCIDRv6(payload.value)) {
      payload.issues.push({
        code: "invalid_format",
        format: "cidrv6",
        input: payload.value,
        inst,
        continue: !def.abort
      });
    }
  };
});
function isValidBase64(data) {
  if (data === "")
    return true;
  if (/\s/.test(data))
    return false;
  if (data.length % 4 !== 0)
    return false;
  try {
    atob(data);
    return true;
  } catch {
    return false;
  }
}
var $ZodBase64 = /* @__PURE__ */ $constructor("$ZodBase64", (inst, def) => {
  def.pattern ?? (def.pattern = base64);
  $ZodStringFormat.init(inst, def);
  inst._zod.bag.contentEncoding = "base64";
  inst._zod.check = (payload) => {
    if (isValidBase64(payload.value))
      return;
    payload.issues.push({
      code: "invalid_format",
      format: "base64",
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
function isValidBase64URL(data) {
  if (!base64url.test(data))
    return false;
  const base644 = data.replace(/[-_]/g, (c) => c === "-" ? "+" : "/");
  const padded = base644.padEnd(Math.ceil(base644.length / 4) * 4, "=");
  return isValidBase64(padded);
}
var $ZodBase64URL = /* @__PURE__ */ $constructor("$ZodBase64URL", (inst, def) => {
  def.pattern ?? (def.pattern = base64url);
  $ZodStringFormat.init(inst, def);
  inst._zod.bag.contentEncoding = "base64url";
  inst._zod.check = (payload) => {
    if (isValidBase64URL(payload.value))
      return;
    payload.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodE164 = /* @__PURE__ */ $constructor("$ZodE164", (inst, def) => {
  def.pattern ?? (def.pattern = e164);
  $ZodStringFormat.init(inst, def);
});
function isValidJWT(token, algorithm = null) {
  try {
    const tokensParts = token.split(".");
    if (tokensParts.length !== 3)
      return false;
    const [header] = tokensParts;
    if (!header)
      return false;
    const parsedHeader = JSON.parse(atob(header));
    if ("typ" in parsedHeader && parsedHeader?.typ !== "JWT")
      return false;
    if (!parsedHeader.alg)
      return false;
    if (algorithm && (!("alg" in parsedHeader) || parsedHeader.alg !== algorithm))
      return false;
    return true;
  } catch {
    return false;
  }
}
var $ZodJWT = /* @__PURE__ */ $constructor("$ZodJWT", (inst, def) => {
  $ZodStringFormat.init(inst, def);
  inst._zod.check = (payload) => {
    if (isValidJWT(payload.value, def.alg))
      return;
    payload.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodNumber = /* @__PURE__ */ $constructor("$ZodNumber", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.pattern = inst._zod.bag.pattern ?? number;
  inst._zod.parse = (payload, _ctx) => {
    if (def.coerce)
      try {
        payload.value = Number(payload.value);
      } catch (_) {
      }
    const input = payload.value;
    if (typeof input === "number" && !Number.isNaN(input) && Number.isFinite(input)) {
      return payload;
    }
    const received = typeof input === "number" ? Number.isNaN(input) ? "NaN" : !Number.isFinite(input) ? String(input) : void 0 : void 0;
    payload.issues.push({
      expected: "number",
      code: "invalid_type",
      input,
      inst,
      ...received ? { received } : {}
    });
    return payload;
  };
});
var $ZodNumberFormat = /* @__PURE__ */ $constructor("$ZodNumberFormat", (inst, def) => {
  $ZodCheckNumberFormat.init(inst, def);
  $ZodNumber.init(inst, def);
});
var $ZodBoolean = /* @__PURE__ */ $constructor("$ZodBoolean", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.pattern = boolean;
  inst._zod.parse = (payload, _ctx) => {
    if (def.coerce)
      try {
        payload.value = Boolean(payload.value);
      } catch (_) {
      }
    const input = payload.value;
    if (typeof input === "boolean")
      return payload;
    payload.issues.push({
      expected: "boolean",
      code: "invalid_type",
      input,
      inst
    });
    return payload;
  };
});
var $ZodBigInt = /* @__PURE__ */ $constructor("$ZodBigInt", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.pattern = bigint;
  inst._zod.parse = (payload, _ctx) => {
    if (def.coerce)
      try {
        payload.value = BigInt(payload.value);
      } catch (_) {
      }
    if (typeof payload.value === "bigint")
      return payload;
    payload.issues.push({
      expected: "bigint",
      code: "invalid_type",
      input: payload.value,
      inst
    });
    return payload;
  };
});
var $ZodNull = /* @__PURE__ */ $constructor("$ZodNull", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.pattern = _null;
  inst._zod.values = /* @__PURE__ */ new Set([null]);
  inst._zod.parse = (payload, _ctx) => {
    const input = payload.value;
    if (input === null)
      return payload;
    payload.issues.push({
      expected: "null",
      code: "invalid_type",
      input,
      inst
    });
    return payload;
  };
});
var $ZodAny = /* @__PURE__ */ $constructor("$ZodAny", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload) => payload;
});
var $ZodUnknown = /* @__PURE__ */ $constructor("$ZodUnknown", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload) => payload;
});
var $ZodNever = /* @__PURE__ */ $constructor("$ZodNever", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, _ctx) => {
    payload.issues.push({
      expected: "never",
      code: "invalid_type",
      input: payload.value,
      inst
    });
    return payload;
  };
});
var $ZodDate = /* @__PURE__ */ $constructor("$ZodDate", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, _ctx) => {
    if (def.coerce) {
      try {
        payload.value = new Date(payload.value);
      } catch (_err) {
      }
    }
    const input = payload.value;
    const isDate = input instanceof Date;
    const isValidDate = isDate && !Number.isNaN(input.getTime());
    if (isValidDate)
      return payload;
    payload.issues.push({
      expected: "date",
      code: "invalid_type",
      input,
      ...isDate ? { received: "Invalid Date" } : {},
      inst
    });
    return payload;
  };
});
function handleArrayResult(result, final, index) {
  if (result.issues.length) {
    final.issues.push(...prefixIssues(index, result.issues));
  }
  final.value[index] = result.value;
}
var $ZodArray = /* @__PURE__ */ $constructor("$ZodArray", (inst, def) => {
  $ZodType.init(inst, def);
  const memo4 = globalConfig.memoizer;
  memo4?.attach(inst);
  inst._zod.parse = (payload, ctx) => {
    const input = payload.value;
    if (!Array.isArray(input)) {
      payload.issues.push({
        expected: "array",
        code: "invalid_type",
        input,
        inst
      });
      return payload;
    }
    payload.value = memo4 ? memo4.alloc(inst, payload, Array(input.length), ctx) : Array(input.length);
    const proms = [];
    for (let i = 0; i < input.length; i++) {
      const item = input[i];
      const result = def.element._zod.run({
        value: item,
        issues: []
      }, ctx);
      if (result instanceof Promise) {
        proms.push(result.then((result2) => handleArrayResult(result2, payload, i)));
      } else {
        handleArrayResult(result, payload, i);
      }
    }
    if (proms.length) {
      return Promise.all(proms).then(() => payload);
    }
    return payload;
  };
});
function handlePropertyResult(result, final, key, input, optin, optout) {
  const isPresent = key in input;
  const isOptionalOut = optout === "optional";
  if (!isPresent && isOptionalOut && optin === "optional") {
    return;
  }
  if (result.issues.length) {
    if (optin !== void 0 && isOptionalOut && !isPresent) {
      return;
    }
    final.issues.push(...prefixIssues(key, result.issues));
  }
  if (!isPresent && optin === void 0) {
    if (!result.issues.length) {
      final.issues.push({
        code: "invalid_type",
        expected: "nonoptional",
        input: void 0,
        path: [key]
      });
    }
    return;
  }
  if (result.value === void 0) {
    if (isPresent) {
      final.value[key] = void 0;
    }
  } else {
    final.value[key] = result.value;
  }
}
var NO_SYMBOL_KEYS = [];
function normalizeDef(def) {
  const keys = Object.keys(def.shape);
  const ownSymbols = Object.getOwnPropertySymbols(def.shape);
  const symbolKeys = ownSymbols.length ? ownSymbols : NO_SYMBOL_KEYS;
  const allKeys = symbolKeys.length ? [...keys, ...symbolKeys] : keys;
  for (const k of allKeys) {
    if (!def.shape?.[k]?._zod?.traits?.has("$ZodType")) {
      throw new Error(`Invalid element at key "${String(k)}": expected a Zod schema`);
    }
  }
  const okeys = optionalKeys(def.shape);
  return {
    ...def,
    allKeys,
    symbolKeys,
    // string-only: handleCatchall matches it against `for...in`, which never yields a symbol
    keySet: new Set(keys),
    numKeys: keys.length,
    optionalKeys: new Set(okeys)
  };
}
function handleCatchall(proms, input, payload, ctx, def, inst) {
  const unrecognized = [];
  const keySet = def.keySet;
  const _catchall = def.catchall._zod;
  const t = _catchall.def.type;
  const optin = _catchall.optin;
  const optout = _catchall.optout;
  for (const key in input) {
    if (keySet.has(key))
      continue;
    if (key === "__proto__") {
      if (t === "never")
        unrecognized.push(key);
      continue;
    }
    if (t === "never") {
      unrecognized.push(key);
      continue;
    }
    const r = _catchall.run({ value: input[key], issues: [] }, ctx);
    if (r instanceof Promise) {
      proms.push(r.then((r2) => handlePropertyResult(r2, payload, key, input, optin, optout)));
    } else {
      handlePropertyResult(r, payload, key, input, optin, optout);
    }
  }
  if (unrecognized.length) {
    payload.issues.push({
      code: "unrecognized_keys",
      keys: unrecognized,
      input,
      inst,
      // Describes the shape of the input, not the validity of the parsed value, so it never aborts. The parse still fails; the schema's own checks just get to run first, and an enclosing intersection can reconcile the key against a sibling operand.
      continue: true
    });
  }
  if (!proms.length)
    return payload;
  return Promise.all(proms).then(() => {
    return payload;
  });
}
var propShapes = /* @__PURE__ */ new WeakMap();
var $ZodObject = /* @__PURE__ */ $constructor("$ZodObject", (inst, def) => {
  $ZodType.init(inst, def);
  const desc = Object.getOwnPropertyDescriptor(def, "shape");
  if (!desc?.get) {
    const sh = def.shape;
    propShapes.set(def, sh);
    Object.defineProperty(def, "shape", {
      get: () => {
        const newSh = { ...sh };
        Object.defineProperty(def, "shape", {
          value: newSh
        });
        propShapes.set(def, newSh);
        return newSh;
      }
    });
  }
  const _normalized = cached(() => normalizeDef(def));
  defineLazyInternal(inst, "propValues", (zod) => {
    const shape = zod.def.shape;
    const propValues = {};
    for (const key in shape) {
      const field = shape[key]._zod;
      if (field.values) {
        if (!Object.prototype.hasOwnProperty.call(propValues, key)) {
          assignProp(propValues, key, /* @__PURE__ */ new Set());
        }
        for (const v of field.values)
          propValues[key].add(v);
        if (field.optin !== void 0)
          propValues[key].add(void 0);
      }
    }
    return propValues;
  });
  const isObject4 = isObject;
  const catchall = def.catchall;
  let value;
  const memo4 = globalConfig.memoizer;
  memo4?.attach(inst);
  inst._zod.parse = (payload, ctx) => {
    value ?? (value = _normalized.value);
    const input = payload.value;
    if (!isObject4(input)) {
      payload.issues.push({
        expected: "object",
        code: "invalid_type",
        input,
        inst
      });
      return payload;
    }
    payload.value = memo4 ? memo4.alloc(inst, payload, {}, ctx) : {};
    const proms = [];
    const shape = value.shape;
    for (const key of value.allKeys) {
      if (key === "__proto__")
        continue;
      const el = shape[key];
      const optin = el._zod.optin;
      const optout = el._zod.optout;
      const r = el._zod.run({ value: input[key], issues: [] }, ctx);
      if (r instanceof Promise) {
        proms.push(r.then((r2) => handlePropertyResult(r2, payload, key, input, optin, optout)));
      } else {
        handlePropertyResult(r, payload, key, input, optin, optout);
      }
    }
    if (!catchall) {
      return proms.length ? Promise.all(proms).then(() => payload) : payload;
    }
    return handleCatchall(proms, input, payload, ctx, _normalized.value, inst);
  };
});
var $ZodObjectJIT = /* @__PURE__ */ $constructor("$ZodObjectJIT", (inst, def) => {
  $ZodObject.init(inst, def);
  const superParse = inst._zod.parse;
  const _normalized = cached(() => normalizeDef(def));
  const memo4 = globalConfig.memoizer;
  const generateFastpass = (shape) => {
    const normalized = _normalized.value;
    const syms = normalized.symbolKeys;
    const doc = new Doc(["payload", "ctx"], { shape, inst, memo: memo4, syms });
    const parseStr = (k) => `shape[${k}]._zod.run({ value: input[${k}], issues: [] }, ctx)`;
    const prefixStr = (id, k) => `
          for (let i = 0; i < ${id}.issues.length; i++) {
            const iss = ${id}.issues[i];
            iss.path = iss.path ? [${k}, ...iss.path] : [${k}];
            payload.issues.push(iss);
          }`;
    doc.write(`const input = payload.value;`);
    const ids = /* @__PURE__ */ Object.create(null);
    let counter = 0;
    for (const key of normalized.allKeys) {
      ids[key] = `key_${counter++}`;
    }
    doc.write(memo4 ? `const newResult = memo.alloc(inst, payload, {}, ctx);` : `const newResult = {};`);
    for (const key of normalized.allKeys) {
      if (key === "__proto__")
        continue;
      const id = ids[key];
      const k = typeof key === "symbol" ? `syms[${syms.indexOf(key)}]` : esc(key);
      const isPresent = `${k} in input`;
      const schema = shape[key];
      const optin = schema?._zod?.optin;
      const isOptionalIn = optin !== void 0;
      const isOptionalOut = schema?._zod?.optout === "optional";
      doc.write(`const ${id} = ${parseStr(k)};`);
      if (isOptionalIn && isOptionalOut) {
        const assign = optin === "optional" ? `${id}_present` : `${id}.value !== undefined || ${id}_present`;
        doc.write(`
        const ${id}_present = ${isPresent};
        if (!${id}.issues.length || ${id}_present) {
          if (${id}.issues.length) {${prefixStr(id, k)}
          }

          if (${assign}) {
            newResult[${k}] = ${id}.value;
          }
        }

      `);
      } else if (!isOptionalIn) {
        doc.write(`
        const ${id}_present = ${isPresent};
        if (${id}.issues.length) {${prefixStr(id, k)}
        }
        if (!${id}_present && !${id}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${k}]
          });
        }

        if (${id}_present) {
          newResult[${k}] = ${id}.value;
        }

      `);
      } else {
        doc.write(`
        if (${id}.issues.length) {${prefixStr(id, k)}
        }
        
        if (${id}.value === undefined) {
          if (${isPresent}) {
            newResult[${k}] = undefined;
          }
        } else {
          newResult[${k}] = ${id}.value;
        }

      `);
      }
    }
    doc.write(`payload.value = newResult;`);
    doc.write(`return payload;`);
    return doc.compile();
  };
  let fastpass;
  const isObject4 = isObject;
  const jit = !globalConfig.jitless;
  const allowsEval4 = allowsEval;
  const fastEnabled = jit && allowsEval4.value;
  const catchall = def.catchall;
  let value;
  inst._zod.parse = (payload, ctx) => {
    value ?? (value = _normalized.value);
    const input = payload.value;
    if (!isObject4(input)) {
      payload.issues.push({
        expected: "object",
        code: "invalid_type",
        input,
        inst
      });
      return payload;
    }
    if (jit && fastEnabled && ctx?.async === false && ctx.jitless !== true) {
      if (!fastpass)
        fastpass = generateFastpass(def.shape);
      payload = fastpass(payload, ctx);
      if (!catchall)
        return payload;
      return handleCatchall([], input, payload, ctx, value, inst);
    }
    return superParse(payload, ctx);
  };
});
function handleUnionResults(results, final, inst, ctx) {
  for (const result of results) {
    if (result.issues.length === 0) {
      final.value = result.value;
      return final;
    }
  }
  const nonaborted = results.filter((r) => !aborted(r));
  if (nonaborted.length === 1) {
    final.value = nonaborted[0].value;
    return nonaborted[0];
  }
  final.issues.push({
    code: "invalid_union",
    input: final.value,
    inst,
    errors: results.map((result) => result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
  });
  return final;
}
var $ZodUnion = /* @__PURE__ */ $constructor("$ZodUnion", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazyInternal(inst, "optin", (zod) => zod.def.options.some((o) => o._zod.optin === "defaulted") ? "defaulted" : zod.def.options.some((o) => o._zod.optin !== void 0) ? "optional" : void 0);
  defineLazyInternal(inst, "optout", (zod) => zod.def.options.some((o) => o._zod.optout === "optional") ? "optional" : void 0);
  defineLazyInternal(inst, "values", (zod) => {
    if (zod.def.options.every((o) => o._zod.values)) {
      return new Set(zod.def.options.flatMap((option) => Array.from(option._zod.values)));
    }
    return void 0;
  });
  defineLazyInternal(inst, "pattern", (zod) => {
    if (zod.def.options.every((o) => o._zod.pattern)) {
      const patterns = zod.def.options.map((o) => o._zod.pattern);
      return new RegExp(`^(${patterns.map((p) => cleanRegex(p.source)).join("|")})$`);
    }
    return void 0;
  });
  const first = def.options.length === 1 ? def.options[0]._zod.run : null;
  inst._zod.parse = (payload, ctx) => {
    if (first) {
      return first(payload, ctx);
    }
    let async = false;
    const results = [];
    for (const option of def.options) {
      const result = option._zod.run({
        value: payload.value,
        issues: []
      }, ctx);
      if (result instanceof Promise) {
        results.push(result);
        async = true;
      } else {
        if (result.issues.length === 0)
          return result;
        results.push(result);
      }
    }
    if (!async)
      return handleUnionResults(results, payload, inst, ctx);
    return Promise.all(results).then((results2) => {
      return handleUnionResults(results2, payload, inst, ctx);
    });
  };
});
var $ZodDiscriminatedUnion = /* @__PURE__ */ $constructor("$ZodDiscriminatedUnion", (inst, def) => {
  def.inclusive = false;
  $ZodUnion.init(inst, def);
  const _super = inst._zod.parse;
  defineLazyInternal(inst, "propValues", (zod) => {
    const propValues = {};
    for (const option of zod.def.options) {
      const pv = option._zod.propValues;
      if (!pv || Object.keys(pv).length === 0)
        throw new Error(`Invalid discriminated union option at index "${zod.def.options.indexOf(option)}"`);
      for (const [k, v] of Object.entries(pv)) {
        if (!Object.prototype.hasOwnProperty.call(propValues, k)) {
          assignProp(propValues, k, /* @__PURE__ */ new Set());
        }
        for (const val of v) {
          propValues[k].add(val);
        }
      }
    }
    return propValues;
  });
  def.options.forEach((option, i) => {
    const propShape = propShapes.get(option._zod.def);
    if (propShape && !Object.prototype.hasOwnProperty.call(propShape, def.discriminator)) {
      throw new Error(`Invalid discriminated union option at index "${i}"`);
    }
  });
  const disc = cached(() => {
    const opts = def.options;
    const map = /* @__PURE__ */ new Map();
    for (const o of opts) {
      const values = o._zod.propValues?.[def.discriminator];
      if (!values || values.size === 0)
        throw new Error(`Invalid discriminated union option at index "${def.options.indexOf(o)}"`);
      for (const v of values) {
        if (map.has(v)) {
          throw new Error(`Duplicate discriminator value "${String(v)}"`);
        }
        map.set(v, o);
      }
    }
    return map;
  });
  inst._zod.parse = (payload, ctx) => {
    const input = payload.value;
    if (!isObject(input)) {
      payload.issues.push({
        code: "invalid_type",
        expected: "object",
        input,
        inst
      });
      return payload;
    }
    const opt = disc.value.get(input?.[def.discriminator]);
    if (opt) {
      return opt._zod.run(payload, ctx);
    }
    if (def.unionFallback || ctx.direction === "backward") {
      return _super(payload, ctx);
    }
    payload.issues.push({
      code: "invalid_union",
      errors: [],
      note: "No matching discriminator",
      discriminator: def.discriminator,
      options: Array.from(disc.value.keys()),
      input,
      path: [def.discriminator],
      inst
    });
    return payload;
  };
});
var $ZodIntersection = /* @__PURE__ */ $constructor("$ZodIntersection", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, ctx) => {
    const input = payload.value;
    const left = def.left._zod.run({ value: input, issues: [] }, ctx);
    const right = def.right._zod.run({ value: input, issues: [] }, ctx);
    const async = left instanceof Promise || right instanceof Promise;
    if (async) {
      return Promise.all([left, right]).then(([left2, right2]) => {
        return handleIntersectionResults(payload, left2, right2);
      });
    }
    return handleIntersectionResults(payload, left, right);
  };
});
function mergeValues(a, b) {
  if (a === b) {
    return { valid: true, data: a };
  }
  if (a instanceof Date && b instanceof Date && +a === +b) {
    return { valid: true, data: a };
  }
  if (isPlainObject(a) && isPlainObject(b)) {
    const bKeys = Object.keys(b);
    const sharedKeys = Object.keys(a).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = { ...a, ...b };
    if (Object.prototype.hasOwnProperty.call(newObj, "__proto__"))
      delete newObj.__proto__;
    for (const key of sharedKeys) {
      if (key === "__proto__")
        continue;
      const sharedValue = mergeValues(a[key], b[key]);
      if (!sharedValue.valid) {
        return {
          valid: false,
          mergeErrorPath: [key, ...sharedValue.mergeErrorPath]
        };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  }
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) {
      return { valid: false, mergeErrorPath: [] };
    }
    const newArray = [];
    for (let index = 0; index < a.length; index++) {
      const itemA = a[index];
      const itemB = b[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return {
          valid: false,
          mergeErrorPath: [index, ...sharedValue.mergeErrorPath]
        };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  }
  return { valid: false, mergeErrorPath: [] };
}
function handleIntersectionResults(result, left, right) {
  const unrecKeys = /* @__PURE__ */ new Map();
  let unrecIssue;
  const keyIssues = /* @__PURE__ */ new Map();
  const collect = (iss, side) => {
    let keys;
    if (iss.code === "unrecognized_keys" && !iss.path?.length) {
      unrecIssue ?? (unrecIssue = iss);
      keys = iss.keys;
    } else if (iss.code === "invalid_key" && iss.origin === "record" && iss.path?.length === 1) {
      const k = String(iss.path[0]);
      if (!keyIssues.has(k))
        keyIssues.set(k, iss);
      keys = [k];
    } else {
      return false;
    }
    for (const k of keys) {
      if (!unrecKeys.has(k))
        unrecKeys.set(k, {});
      unrecKeys.get(k)[side] = true;
    }
    return true;
  };
  for (const iss of left.issues) {
    if (!collect(iss, "l"))
      result.issues.push(iss);
  }
  for (const iss of right.issues) {
    if (!collect(iss, "r"))
      result.issues.push(iss);
  }
  const bothKeys = [...unrecKeys].filter(([, f]) => f.l && f.r).map(([k]) => k);
  if (bothKeys.length) {
    const aggregated = unrecIssue ? bothKeys.filter((k) => unrecIssue.keys.includes(k)) : [];
    if (aggregated.length)
      result.issues.push({ ...unrecIssue, keys: aggregated });
    for (const k of bothKeys) {
      if (!aggregated.includes(k) && keyIssues.has(k))
        result.issues.push(keyIssues.get(k));
    }
  }
  const merged = mergeValues(left.value, right.value);
  if (!merged.valid) {
    if (aborted(result))
      return result;
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(merged.mergeErrorPath)}`);
  }
  result.value = merged.data;
  return result;
}
var $ZodRecord = /* @__PURE__ */ $constructor("$ZodRecord", (inst, def) => {
  $ZodType.init(inst, def);
  const memo4 = globalConfig.memoizer;
  memo4?.attach(inst);
  inst._zod.parse = (payload, ctx) => {
    const input = payload.value;
    if (!isPlainObject(input)) {
      payload.issues.push({
        expected: "record",
        code: "invalid_type",
        input,
        inst
      });
      return payload;
    }
    const proms = [];
    const values = def.keyType._zod.values;
    if (values && !def.partial) {
      payload.value = memo4 ? memo4.alloc(inst, payload, {}, ctx) : {};
      const recordKeys = /* @__PURE__ */ new Set();
      for (const key of values) {
        if (typeof key === "string" || typeof key === "number" || typeof key === "symbol") {
          recordKeys.add(typeof key === "number" ? key.toString() : key);
          if (key === "__proto__")
            continue;
          const keyResult = def.keyType._zod.run({ value: key, issues: [] }, ctx);
          if (keyResult instanceof Promise) {
            throw new Error("Async schemas not supported in object keys currently");
          }
          if (keyResult.issues.length) {
            payload.issues.push({
              code: "invalid_key",
              origin: "record",
              issues: keyResult.issues.map((iss) => finalizeIssue(iss, ctx, config())),
              input: key,
              path: [key],
              inst
            });
            continue;
          }
          const outKey = keyResult.value;
          if (outKey === "__proto__")
            continue;
          const result = def.valueType._zod.run({ value: input[key], issues: [] }, ctx);
          if (result instanceof Promise) {
            proms.push(result.then((result2) => {
              if (result2.issues.length) {
                payload.issues.push(...prefixIssues(key, result2.issues));
              }
              payload.value[outKey] = result2.value;
            }));
          } else {
            if (result.issues.length) {
              payload.issues.push(...prefixIssues(key, result.issues));
            }
            payload.value[outKey] = result.value;
          }
        }
      }
      let unrecognized;
      for (const key in input) {
        if (!recordKeys.has(key)) {
          if (def.mode === "loose") {
            if (key === "__proto__")
              continue;
            payload.value[key] = input[key];
          } else {
            unrecognized = unrecognized ?? [];
            unrecognized.push(key);
          }
        }
      }
      if (unrecognized && unrecognized.length > 0) {
        payload.issues.push({
          code: "unrecognized_keys",
          input,
          inst,
          keys: unrecognized,
          continue: true
        });
      }
    } else {
      payload.value = memo4 ? memo4.alloc(inst, payload, {}, ctx) : {};
      let unrecognized;
      for (const key of Reflect.ownKeys(input)) {
        if (key === "__proto__")
          continue;
        if (!Object.prototype.propertyIsEnumerable.call(input, key))
          continue;
        let keyResult = def.keyType._zod.run({ value: key, issues: [] }, ctx);
        if (keyResult instanceof Promise) {
          throw new Error("Async schemas not supported in object keys currently");
        }
        const checkNumericKey = typeof key === "string" && number.test(key) && keyResult.issues.length;
        if (checkNumericKey) {
          const retryResult = def.keyType._zod.run({ value: Number(key), issues: [] }, ctx);
          if (retryResult instanceof Promise) {
            throw new Error("Async schemas not supported in object keys currently");
          }
          if (retryResult.issues.length === 0) {
            keyResult = retryResult;
          }
        }
        if (keyResult.issues.length) {
          if (def.mode === "loose") {
            payload.value[key] = input[key];
          } else if (values) {
            unrecognized = unrecognized ?? [];
            unrecognized.push(key);
          } else {
            payload.issues.push({
              code: "invalid_key",
              origin: "record",
              issues: keyResult.issues.map((iss) => finalizeIssue(iss, ctx, config())),
              input: key,
              path: [key],
              inst
            });
          }
          continue;
        }
        const outKey = keyResult.value;
        if (outKey === "__proto__")
          continue;
        const result = def.valueType._zod.run({ value: input[key], issues: [] }, ctx);
        if (result instanceof Promise) {
          proms.push(result.then((result2) => {
            if (result2.issues.length) {
              payload.issues.push(...prefixIssues(key, result2.issues));
            }
            payload.value[outKey] = result2.value;
          }));
        } else {
          if (result.issues.length) {
            payload.issues.push(...prefixIssues(key, result.issues));
          }
          payload.value[outKey] = result.value;
        }
      }
      if (unrecognized && unrecognized.length > 0) {
        payload.issues.push({
          code: "unrecognized_keys",
          input,
          inst,
          keys: unrecognized,
          continue: true
        });
      }
    }
    if (proms.length) {
      return Promise.all(proms).then(() => payload);
    }
    return payload;
  };
});
var $ZodEnum = /* @__PURE__ */ $constructor("$ZodEnum", (inst, def) => {
  $ZodType.init(inst, def);
  const values = getEnumValues(def.entries);
  const valuesSet = new Set(values);
  inst._zod.values = valuesSet;
  const patternValues = values.filter((k) => propertyKeyTypes.has(typeof k));
  inst._zod.pattern = new RegExp(patternValues.length ? `^(${patternValues.map((o) => escapeRegex(o.toString())).join("|")})$` : "^[^\\s\\S]$");
  inst._zod.parse = (payload, _ctx) => {
    const input = payload.value;
    if (valuesSet.has(input)) {
      return payload;
    }
    payload.issues.push({
      code: "invalid_value",
      values,
      input,
      inst
    });
    return payload;
  };
});
var $ZodLiteral = /* @__PURE__ */ $constructor("$ZodLiteral", (inst, def) => {
  $ZodType.init(inst, def);
  const values = new Set(def.values);
  inst._zod.values = values;
  inst._zod.pattern = new RegExp(def.values.length ? `^(${def.values.map((o) => typeof o === "string" ? escapeRegex(o) : o ? escapeRegex(o.toString()) : String(o)).join("|")})$` : "^[^\\s\\S]$");
  inst._zod.parse = (payload, _ctx) => {
    const input = payload.value;
    if (values.has(input)) {
      return payload;
    }
    payload.issues.push({
      code: "invalid_value",
      values: def.values,
      input,
      inst
    });
    return payload;
  };
});
var $ZodTransform = /* @__PURE__ */ $constructor("$ZodTransform", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.optin = "optional";
  globalConfig.memoizer?.guard(inst);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      throw new $ZodEncodeError(inst.constructor.name);
    }
    const _out = def.transform(payload.value, payload);
    if (ctx.async) {
      const output = _out instanceof Promise ? _out : Promise.resolve(_out);
      return output.then((output2) => {
        payload.value = output2;
        return payload;
      });
    }
    if (_out instanceof Promise) {
      throw new $ZodAsyncError();
    }
    payload.value = _out;
    return payload;
  };
});
function handleOptionalResult(payload, result) {
  payload.value = result.issues.length ? void 0 : result.value;
  return payload;
}
var $ZodOptional = /* @__PURE__ */ $constructor("$ZodOptional", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazyInternal(inst, "optin", (zod) => zod.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional");
  inst._zod.optout = "optional";
  defineLazyInternal(inst, "values", (zod) => {
    const values = zod.def.innerType._zod.values;
    return values ? /* @__PURE__ */ new Set([...values, void 0]) : void 0;
  });
  defineLazyInternal(inst, "pattern", (zod) => {
    const pattern = zod.def.innerType._zod.pattern;
    return pattern ? new RegExp(`^(${cleanRegex(pattern.source)})?$`) : void 0;
  });
  inst._zod.parse = (payload, ctx) => {
    if (payload.value === void 0) {
      if (def.innerType._zod.optin !== "defaulted")
        return payload;
      const result = def.innerType._zod.run({ value: payload.value, issues: [] }, ctx);
      if (result instanceof Promise)
        return result.then((result2) => handleOptionalResult(payload, result2));
      return handleOptionalResult(payload, result);
    }
    return def.innerType._zod.run(payload, ctx);
  };
});
var $ZodExactOptional = /* @__PURE__ */ $constructor("$ZodExactOptional", (inst, def) => {
  $ZodOptional.init(inst, def);
  defineLazyInternal(inst, "values", (zod) => zod.def.innerType._zod.values);
  defineLazyInternal(inst, "pattern", (zod) => zod.def.innerType._zod.pattern);
  inst._zod.parse = (payload, ctx) => {
    return def.innerType._zod.run(payload, ctx);
  };
});
var $ZodNullable = /* @__PURE__ */ $constructor("$ZodNullable", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazyInternal(inst, "optin", (zod) => zod.def.innerType._zod.optin);
  defineLazyInternal(inst, "optout", (zod) => zod.def.innerType._zod.optout);
  defineLazyInternal(inst, "pattern", (zod) => {
    const pattern = zod.def.innerType._zod.pattern;
    return pattern ? new RegExp(`^(${cleanRegex(pattern.source)}|null)$`) : void 0;
  });
  defineLazyInternal(inst, "values", (zod) => {
    return zod.def.innerType._zod.values ? /* @__PURE__ */ new Set([...zod.def.innerType._zod.values, null]) : void 0;
  });
  inst._zod.parse = (payload, ctx) => {
    if (payload.value === null)
      return payload;
    return def.innerType._zod.run(payload, ctx);
  };
});
var $ZodDefault = /* @__PURE__ */ $constructor("$ZodDefault", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.optin = "defaulted";
  defineLazyInternal(inst, "values", (zod) => zod.def.innerType._zod.values);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      return def.innerType._zod.run(payload, ctx);
    }
    if (payload.value === void 0) {
      payload.value = def.defaultValue;
      return payload;
    }
    const result = def.innerType._zod.run(payload, ctx);
    if (result instanceof Promise) {
      return result.then((result2) => handleDefaultResult(result2, def));
    }
    return handleDefaultResult(result, def);
  };
});
function handleDefaultResult(payload, def) {
  if (payload.value === void 0) {
    payload.value = def.defaultValue;
  }
  return payload;
}
var $ZodPrefault = /* @__PURE__ */ $constructor("$ZodPrefault", (inst, def) => {
  $ZodType.init(inst, def);
  inst._zod.optin = "defaulted";
  defineLazyInternal(inst, "values", (zod) => zod.def.innerType._zod.values);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      return def.innerType._zod.run(payload, ctx);
    }
    if (payload.value === void 0) {
      payload.value = def.defaultValue;
    }
    return def.innerType._zod.run(payload, ctx);
  };
});
var $ZodNonOptional = /* @__PURE__ */ $constructor("$ZodNonOptional", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazyInternal(inst, "values", (zod) => {
    const v = zod.def.innerType._zod.values;
    return v ? new Set([...v].filter((x) => x !== void 0)) : void 0;
  });
  inst._zod.parse = (payload, ctx) => {
    const result = def.innerType._zod.run(payload, ctx);
    if (result instanceof Promise) {
      return result.then((result2) => handleNonOptionalResult(result2, inst));
    }
    return handleNonOptionalResult(result, inst);
  };
});
function handleNonOptionalResult(payload, inst) {
  if (!payload.issues.length && payload.value === void 0) {
    payload.issues.push({
      code: "invalid_type",
      expected: "nonoptional",
      input: payload.value,
      inst
    });
  }
  return payload;
}
function handleCatchResult(payload, result, def, ctx) {
  if (!result.issues.length) {
    payload.value = result.value;
    if (result.memo)
      payload.memo = true;
    return payload;
  }
  payload.value = def.catchValue({
    ...result,
    value: payload.value,
    error: {
      issues: result.issues.map((iss) => finalizeIssue(iss, ctx, config()))
    },
    input: payload.value
  });
  return payload;
}
var $ZodCatch = /* @__PURE__ */ $constructor("$ZodCatch", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazyInternal(inst, "optin", (zod) => zod.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional");
  defineLazyInternal(inst, "optout", (zod) => zod.def.innerType._zod.optout);
  defineLazyInternal(inst, "values", (zod) => zod.def.innerType._zod.values);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      return def.innerType._zod.run(payload, ctx);
    }
    const result = def.innerType._zod.run({ value: payload.value, issues: [] }, ctx);
    if (result instanceof Promise) {
      return result.then((result2) => handleCatchResult(payload, result2, def, ctx));
    }
    return handleCatchResult(payload, result, def, ctx);
  };
});
var $ZodPipe = /* @__PURE__ */ $constructor("$ZodPipe", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazyInternal(inst, "values", (zod) => zod.def.in._zod.values);
  defineLazyInternal(inst, "optin", (zod) => zod.def.in._zod.optin);
  defineLazyInternal(inst, "optout", (zod) => zod.def.out._zod.optout);
  defineLazyInternal(inst, "propValues", (zod) => zod.def.in._zod.propValues);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      const right = def.out._zod.run(payload, ctx);
      if (right instanceof Promise) {
        return right.then((right2) => handlePipeResult(right2, def.in, ctx));
      }
      return handlePipeResult(right, def.in, ctx);
    }
    const left = def.in._zod.run(payload, ctx);
    if (left instanceof Promise) {
      return left.then((left2) => handlePipeResult(left2, def.out, ctx));
    }
    return handlePipeResult(left, def.out, ctx);
  };
});
function handlePipeResult(left, next, ctx) {
  if (left.issues.some((iss) => iss.code !== "unrecognized_keys")) {
    left.aborted = true;
    return left;
  }
  return next._zod.run({ value: left.value, issues: left.issues }, ctx);
}
var $ZodPreprocess = /* @__PURE__ */ $constructor("$ZodPreprocess", (inst, def) => {
  $ZodPipe.init(inst, def);
});
var $ZodReadonly = /* @__PURE__ */ $constructor("$ZodReadonly", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazyInternal(inst, "propValues", (zod) => zod.def.innerType._zod.propValues);
  defineLazyInternal(inst, "values", (zod) => zod.def.innerType._zod.values);
  defineLazyInternal(inst, "optin", (zod) => zod.def.innerType?._zod?.optin);
  defineLazyInternal(inst, "optout", (zod) => zod.def.innerType?._zod?.optout);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      return def.innerType._zod.run(payload, ctx);
    }
    const result = def.innerType._zod.run(payload, ctx);
    if (result instanceof Promise) {
      return result.then(handleReadonlyResult);
    }
    return handleReadonlyResult(result);
  };
});
function handleReadonlyResult(payload) {
  if (!payload.memo)
    payload.value = Object.freeze(payload.value);
  return payload;
}
var $ZodLazy = /* @__PURE__ */ $constructor("$ZodLazy", (inst, def) => {
  $ZodType.init(inst, def);
  defineLazy(inst._zod, "innerType", () => {
    const d = def;
    if (!d._cachedInner)
      d._cachedInner = def.getter();
    return d._cachedInner;
  });
  defineLazyInternal(inst, "pattern", (zod) => zod.innerType?._zod?.pattern);
  defineLazyInternal(inst, "propValues", (zod) => zod.innerType?._zod?.propValues);
  defineLazyInternal(inst, "optin", (zod) => zod.innerType?._zod?.optin ?? void 0);
  defineLazyInternal(inst, "optout", (zod) => zod.innerType?._zod?.optout ?? void 0);
  inst._zod.parse = (payload, ctx) => {
    const inner = inst._zod.innerType;
    return inner._zod.run(payload, ctx);
  };
});
var $ZodCustom = /* @__PURE__ */ $constructor("$ZodCustom", (inst, def) => {
  $ZodCheck.init(inst, def);
  $ZodType.init(inst, def);
  inst._zod.parse = (payload, _) => {
    return payload;
  };
  inst._zod.check = (payload) => {
    const input = payload.value;
    const r = def.fn(input);
    if (r instanceof Promise) {
      return r.then((r2) => handleRefineResult(r2, payload, input, inst));
    }
    handleRefineResult(r, payload, input, inst);
    return;
  };
});
function handleRefineResult(result, payload, input, inst) {
  if (!result) {
    const _iss = {
      code: "custom",
      input,
      inst,
      // incorporates params.error into issue reporting
      path: [...inst._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !inst._zod.def.abort
      // params: inst._zod.def.params,
    };
    if (inst._zod.def.params)
      _iss.params = inst._zod.def.params;
    payload.issues.push(issue(_iss));
  }
}

// node_modules/@modelcontextprotocol/core/node_modules/zod/v4/core/memoizer.js
var $ZodCyclicError = class extends Error {
  constructor() {
    super(`Cannot parse a reference cycle that closes through a transform`);
    this.name = "ZodCyclicError";
  }
};
var STATE = "~memo";
var NO_ISSUES = [];
function cloneIssues(issues) {
  return issues.map((iss) => iss.path ? { ...iss, path: iss.path.slice() } : { ...iss });
}
var recursive = /* @__PURE__ */ new WeakMap();
function isRecursive(inst, stack) {
  const cached4 = recursive.get(inst);
  if (cached4 !== void 0)
    return cached4;
  if (stack.has(inst))
    return true;
  stack.add(inst);
  let result = false;
  const check2 = (child) => {
    if (!result && child?._zod && isRecursive(child, stack))
      result = true;
  };
  const def = inst._zod.def;
  const kind = def.type;
  switch (kind) {
    case "object": {
      for (const key of Reflect.ownKeys(def.shape))
        check2(def.shape[key]);
      check2(def.catchall);
      break;
    }
    case "array":
      check2(def.element);
      break;
    case "tuple":
      for (const el of def.items)
        check2(el);
      check2(def.rest);
      break;
    case "record":
    case "map":
      check2(def.keyType);
      check2(def.valueType);
      break;
    case "set":
      check2(def.valueType);
      break;
    case "union":
      for (const el of def.options)
        check2(el);
      break;
    case "intersection":
      check2(def.left);
      check2(def.right);
      break;
    case "optional":
    case "nullable":
    case "default":
    case "prefault":
    case "catch":
    case "readonly":
    case "nonoptional":
    case "promise":
    case "success":
      check2(def.innerType);
      break;
    case "pipe":
      check2(def.in);
      check2(def.out);
      break;
    case "function":
      check2(def.input);
      check2(def.output);
      break;
    // reading `_zod.innerType` resolves the getter once and caches it
    case "lazy":
      check2(inst._zod.innerType);
      break;
    // a leaf by choice: `parts` are regex fragments, not data positions
    case "template_literal":
    // leaves
    case "string":
    case "number":
    case "int":
    case "boolean":
    case "bigint":
    case "symbol":
    case "undefined":
    case "null":
    case "void":
    case "never":
    case "any":
    case "unknown":
    case "date":
    case "nan":
    case "enum":
    case "literal":
    case "file":
    case "transform":
    case "custom":
      break;
    default: {
      kind;
      for (const key in def) {
        const desc = Object.getOwnPropertyDescriptor(def, key);
        if (!desc || desc.get)
          continue;
        const value = desc.value;
        if (!value || typeof value !== "object")
          continue;
        if (value._zod)
          check2(value);
        else if (Array.isArray(value))
          for (const el of value)
            check2(el);
      }
    }
  }
  stack.delete(inst);
  recursive.set(inst, result);
  return result;
}
function bucketFor(state, inst) {
  let bucket = state.buckets.get(inst);
  if (!bucket) {
    bucket = /* @__PURE__ */ new Map();
    state.buckets.set(inst, bucket);
  }
  return bucket;
}
var handoff;
var open = [];
var memo = {
  alloc(_inst, payload, empty) {
    const bucket = handoff;
    if (!bucket)
      return empty;
    handoff = void 0;
    const entry = { value: empty, issues: null };
    bucket.set(payload.value, entry);
    open.push(entry);
    return empty;
  },
  guard(inst) {
    var _a5;
    (_a5 = inst._zod).deferred ?? (_a5.deferred = []);
    inst._zod.deferred.push(() => {
      const base = inst._zod.parse;
      const wrapped = (payload, ctx) => {
        if (ctx.direction !== "backward" && isBackEdge(ctx, payload.value))
          throw new $ZodCyclicError();
        return base(payload, ctx);
      };
      inst._zod.parse = wrapped;
      if (inst._zod.run === base)
        inst._zod.run = wrapped;
    });
  },
  attach(inst) {
    var _a5;
    let isRecursiveInst;
    let lastCtx;
    let lastBucket;
    (_a5 = inst._zod).deferred ?? (_a5.deferred = []);
    inst._zod.deferred.push(() => {
      const base = inst._zod.parse;
      const wrapped = (payload, ctx) => {
        if (isRecursiveInst === void 0) {
          isRecursiveInst = isRecursive(inst, /* @__PURE__ */ new Set());
          if (!isRecursiveInst) {
            inst._zod.parse = base;
            if (inst._zod.run === wrapped)
              inst._zod.run = base;
            return base(payload, ctx);
          }
        }
        const input = payload.value;
        if (input === null || typeof input !== "object")
          return base(payload, ctx);
        let state = ctx[STATE];
        if (!state) {
          state = { buckets: /* @__PURE__ */ new Map(), backEdges: void 0 };
          ctx[STATE] = state;
        }
        let bucket;
        if (lastCtx === ctx) {
          bucket = lastBucket;
        } else {
          bucket = bucketFor(state, inst);
          lastCtx = ctx;
          lastBucket = bucket;
        }
        const hit = bucket.get(input);
        if (hit) {
          payload.value = hit.value;
          if (hit.issues) {
            if (hit.issues.length)
              payload.issues.push(...cloneIssues(hit.issues));
          } else {
            payload.memo = true;
            state.backEdges ?? (state.backEdges = /* @__PURE__ */ new Set());
            state.backEdges.add(hit.value);
          }
          return payload;
        }
        handoff = bucket;
        const depth = open.length;
        const result = base(payload, ctx);
        handoff = void 0;
        const entry = open.length > depth ? open.pop() : void 0;
        if (result instanceof Promise) {
          return result.then((r) => {
            if (entry)
              entry.issues = r.issues.length ? cloneIssues(r.issues) : NO_ISSUES;
            return r;
          });
        }
        if (entry)
          entry.issues = result.issues.length ? cloneIssues(result.issues) : NO_ISSUES;
        return result;
      };
      inst._zod.parse = wrapped;
      if (inst._zod.run === base)
        inst._zod.run = wrapped;
    });
  }
};
function memoizer() {
  return memo;
}
function isBackEdge(ctx, value) {
  const backEdges = ctx[STATE]?.backEdges;
  return backEdges !== void 0 && value !== null && typeof value === "object" && backEdges.has(value);
}

// node_modules/@modelcontextprotocol/core/node_modules/zod/v4/locales/en.js
var error = () => {
  const Sizable = {
    string: { unit: "characters", verb: "to have" },
    file: { unit: "bytes", verb: "to have" },
    array: { unit: "items", verb: "to have" },
    set: { unit: "items", verb: "to have" },
    map: { unit: "entries", verb: "to have" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "input",
    email: "email address",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datetime",
    date: "ISO date",
    time: "ISO time",
    duration: "ISO duration",
    ipv4: "IPv4 address",
    ipv6: "IPv6 address",
    mac: "MAC address",
    cidrv4: "IPv4 range",
    cidrv6: "IPv6 range",
    base64: "base64-encoded string",
    base64url: "base64url-encoded string",
    json_string: "JSON string",
    e164: "E.164 number",
    credit_card: "credit card number",
    jwt: "JWT",
    template_literal: "input"
  };
  const TypeDictionary = {
    // Compatibility: "nan" -> "NaN" for display
    nan: "NaN"
    // All other type names omitted - they fall back to raw values via ?? operator
  };
  function getTypeName(type, input) {
    if (type === "number" && typeof input === "number" && !Number.isFinite(input)) {
      return String(input);
    }
    return TypeDictionary[type] ?? type;
  }
  return (issue4) => {
    switch (issue4.code) {
      case "invalid_type": {
        const expected = getTypeName(issue4.expected);
        const receivedType = parsedType(issue4.input);
        const received = getTypeName(receivedType, issue4.input);
        return `Invalid input: expected ${expected}, received ${received}`;
      }
      case "invalid_value":
        if (issue4.values.length === 1)
          return `Invalid input: expected ${stringifyPrimitive(issue4.values[0])}`;
        return `Invalid option: expected one of ${joinValues(issue4.values, "|")}`;
      case "too_big": {
        const adj = issue4.exact ? "exactly " : issue4.inclusive ? "<=" : "<";
        const sizing = getSizing(issue4.origin);
        if (sizing)
          return `Too big: expected ${issue4.origin ?? "value"} to have ${adj}${issue4.maximum.toString()} ${sizing.unit ?? "elements"}`;
        return `Too big: expected ${issue4.origin ?? "value"} to be ${adj}${issue4.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue4.exact ? "exactly " : issue4.inclusive ? ">=" : ">";
        const sizing = getSizing(issue4.origin);
        if (sizing) {
          return `Too small: expected ${issue4.origin} to have ${adj}${issue4.minimum.toString()} ${sizing.unit}`;
        }
        return `Too small: expected ${issue4.origin} to be ${adj}${issue4.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue4;
        if (_issue.format === "starts_with") {
          return `Invalid string: must start with "${_issue.prefix}"`;
        }
        if (_issue.format === "ends_with")
          return `Invalid string: must end with "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Invalid string: must include "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Invalid string: must match pattern ${_issue.pattern}`;
        return `Invalid ${FormatDictionary[_issue.format] ?? issue4.format}`;
      }
      case "not_multiple_of":
        return `Invalid number: must be a multiple of ${issue4.divisor}`;
      case "unrecognized_keys":
        return `Unrecognized key${issue4.keys.length > 1 ? "s" : ""}: ${joinValues(issue4.keys, ", ")}`;
      case "invalid_key":
        return `Invalid key in ${issue4.origin}`;
      case "invalid_union":
        if (issue4.options && Array.isArray(issue4.options) && issue4.options.length > 0) {
          const opts = issue4.options.map((o) => `'${o}'`).join(" | ");
          return `Invalid discriminator value. Expected ${opts}`;
        }
        if (issue4.inclusive === false) {
          return "Invalid input: more than one option matched";
        }
        return "Invalid input";
      case "invalid_element":
        return `Invalid value in ${issue4.origin}`;
      default:
        return `Invalid input`;
    }
  };
};
function en_default() {
  return {
    localeError: error()
  };
}

// node_modules/@modelcontextprotocol/core/node_modules/zod/v4/core/registries.js
var _a2;
var $ZodRegistry = class {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap();
    this._idmap = /* @__PURE__ */ new Map();
  }
  add(schema, ..._meta) {
    const meta3 = _meta[0];
    this._map.set(schema, meta3);
    if (meta3 && typeof meta3 === "object" && "id" in meta3) {
      this._idmap.set(meta3.id, schema);
    }
    return this;
  }
  clear() {
    this._map = /* @__PURE__ */ new WeakMap();
    this._idmap = /* @__PURE__ */ new Map();
    return this;
  }
  remove(schema) {
    const meta3 = this._map.get(schema);
    if (meta3 && typeof meta3 === "object" && "id" in meta3) {
      this._idmap.delete(meta3.id);
    }
    this._map.delete(schema);
    return this;
  }
  get(schema) {
    const p = schema._zod.parent;
    if (p) {
      const pm = { ...this.get(p) ?? {} };
      delete pm.id;
      const f = { ...pm, ...this._map.get(schema) };
      return Object.keys(f).length ? f : void 0;
    }
    return this._map.get(schema);
  }
  has(schema) {
    return this._map.has(schema);
  }
};
function registry() {
  return new $ZodRegistry();
}
(_a2 = globalThis).__zod_globalRegistry ?? (_a2.__zod_globalRegistry = registry());
var globalRegistry = globalThis.__zod_globalRegistry;

// node_modules/@modelcontextprotocol/core/node_modules/zod/v4/core/api.js
// @__NO_SIDE_EFFECTS__
function _string(Class4, params) {
  return new Class4({
    type: "string",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _coercedString(Class4, params) {
  return new Class4({
    type: "string",
    coerce: true,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _email(Class4, params) {
  return new Class4({
    type: "string",
    format: "email",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _guid(Class4, params) {
  return new Class4({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _uuid(Class4, params) {
  return new Class4({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _uuidv4(Class4, params) {
  return new Class4({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: false,
    version: "v4",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _uuidv6(Class4, params) {
  return new Class4({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: false,
    version: "v6",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _uuidv7(Class4, params) {
  return new Class4({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: false,
    version: "v7",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _url(Class4, params) {
  return new Class4({
    type: "string",
    format: "url",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _emoji2(Class4, params) {
  return new Class4({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _nanoid(Class4, params) {
  return new Class4({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _cuid(Class4, params) {
  return new Class4({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _cuid2(Class4, params) {
  return new Class4({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _ulid(Class4, params) {
  return new Class4({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _xid(Class4, params) {
  return new Class4({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _ksuid(Class4, params) {
  return new Class4({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _ipv4(Class4, params) {
  return new Class4({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _ipv6(Class4, params) {
  return new Class4({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _cidrv4(Class4, params) {
  return new Class4({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _cidrv6(Class4, params) {
  return new Class4({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _base64(Class4, params) {
  return new Class4({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _base64url(Class4, params) {
  return new Class4({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _e164(Class4, params) {
  return new Class4({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _jwt(Class4, params) {
  return new Class4({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: false,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _isoDateTime(Class4, params) {
  return new Class4({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: false,
    local: false,
    precision: null,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _isoDate(Class4, params) {
  return new Class4({
    type: "string",
    format: "date",
    check: "string_format",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _isoTime(Class4, params) {
  return new Class4({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _isoDuration(Class4, params) {
  return new Class4({
    type: "string",
    format: "duration",
    check: "string_format",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _number(Class4, params) {
  return new Class4({
    type: "number",
    checks: [],
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _coercedNumber(Class4, params) {
  return new Class4({
    type: "number",
    coerce: true,
    checks: [],
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _int(Class4, params) {
  return new Class4({
    type: "number",
    check: "number_format",
    abort: false,
    format: "safeint",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _boolean(Class4, params) {
  return new Class4({
    type: "boolean",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _coercedBoolean(Class4, params) {
  return new Class4({
    type: "boolean",
    coerce: true,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _coercedBigint(Class4, params) {
  return new Class4({
    type: "bigint",
    coerce: true,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _null2(Class4, params) {
  return new Class4({
    type: "null",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _any(Class4) {
  return new Class4({
    type: "any"
  });
}
// @__NO_SIDE_EFFECTS__
function _unknown(Class4) {
  return new Class4({
    type: "unknown"
  });
}
// @__NO_SIDE_EFFECTS__
function _never(Class4, params) {
  return new Class4({
    type: "never",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _coercedDate(Class4, params) {
  return new Class4({
    type: "date",
    coerce: true,
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _lt(value, params) {
  return new $ZodCheckLessThan({
    check: "less_than",
    ...normalizeParams(params),
    value,
    inclusive: false
  });
}
// @__NO_SIDE_EFFECTS__
function _lte(value, params) {
  return new $ZodCheckLessThan({
    check: "less_than",
    ...normalizeParams(params),
    value,
    inclusive: true
  });
}
// @__NO_SIDE_EFFECTS__
function _gt(value, params) {
  return new $ZodCheckGreaterThan({
    check: "greater_than",
    ...normalizeParams(params),
    value,
    inclusive: false
  });
}
// @__NO_SIDE_EFFECTS__
function _gte(value, params) {
  return new $ZodCheckGreaterThan({
    check: "greater_than",
    ...normalizeParams(params),
    value,
    inclusive: true
  });
}
// @__NO_SIDE_EFFECTS__
function _multipleOf(value, params) {
  return new $ZodCheckMultipleOf({
    check: "multiple_of",
    ...normalizeParams(params),
    value
  });
}
// @__NO_SIDE_EFFECTS__
function _maxLength(maximum, params) {
  const ch = new $ZodCheckMaxLength({
    check: "max_length",
    ...normalizeParams(params),
    maximum
  });
  return ch;
}
// @__NO_SIDE_EFFECTS__
function _minLength(minimum, params) {
  return new $ZodCheckMinLength({
    check: "min_length",
    ...normalizeParams(params),
    minimum
  });
}
// @__NO_SIDE_EFFECTS__
function _length(length, params) {
  return new $ZodCheckLengthEquals({
    check: "length_equals",
    ...normalizeParams(params),
    length
  });
}
// @__NO_SIDE_EFFECTS__
function _regex(pattern, params) {
  return new $ZodCheckRegex({
    check: "string_format",
    format: "regex",
    ...normalizeParams(params),
    pattern
  });
}
// @__NO_SIDE_EFFECTS__
function _lowercase(params) {
  return new $ZodCheckLowerCase({
    check: "string_format",
    format: "lowercase",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _uppercase(params) {
  return new $ZodCheckUpperCase({
    check: "string_format",
    format: "uppercase",
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _includes(includes, params) {
  return new $ZodCheckIncludes({
    check: "string_format",
    format: "includes",
    ...normalizeParams(params),
    includes
  });
}
// @__NO_SIDE_EFFECTS__
function _startsWith(prefix, params) {
  return new $ZodCheckStartsWith({
    check: "string_format",
    format: "starts_with",
    ...normalizeParams(params),
    prefix
  });
}
// @__NO_SIDE_EFFECTS__
function _endsWith(suffix, params) {
  return new $ZodCheckEndsWith({
    check: "string_format",
    format: "ends_with",
    ...normalizeParams(params),
    suffix
  });
}
// @__NO_SIDE_EFFECTS__
function _overwrite(tx) {
  return new $ZodCheckOverwrite({
    check: "overwrite",
    tx
  });
}
// @__NO_SIDE_EFFECTS__
function _normalize(form) {
  return /* @__PURE__ */ _overwrite((input) => input.normalize(form));
}
// @__NO_SIDE_EFFECTS__
function _trim() {
  return /* @__PURE__ */ _overwrite((input) => input.trim());
}
// @__NO_SIDE_EFFECTS__
function _toLowerCase() {
  return /* @__PURE__ */ _overwrite((input) => input.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function _toUpperCase() {
  return /* @__PURE__ */ _overwrite((input) => input.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function _slugify() {
  return /* @__PURE__ */ _overwrite((input) => slugify(input));
}
// @__NO_SIDE_EFFECTS__
function _array(Class4, element, params) {
  return new Class4({
    type: "array",
    element,
    // get element() {
    //   return element;
    // },
    ...normalizeParams(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _refine(Class4, fn, _params) {
  const schema = new Class4({
    type: "custom",
    check: "custom",
    fn,
    ...normalizeParams(_params)
  });
  return schema;
}
// @__NO_SIDE_EFFECTS__
function _superRefine(fn, params) {
  const ch = /* @__PURE__ */ _check((payload) => {
    payload.addIssue = (issue4) => {
      if (typeof issue4 === "string") {
        payload.issues.push(issue(issue4, payload.value, ch._zod.def));
      } else {
        const _issue = issue4;
        if (_issue.fatal)
          _issue.continue = false;
        _issue.code ?? (_issue.code = "custom");
        if (!("input" in _issue))
          _issue.input = payload.value;
        _issue.inst ?? (_issue.inst = ch);
        _issue.continue ?? (_issue.continue = !ch._zod.def.abort);
        payload.issues.push(issue(_issue));
      }
    };
    return fn(payload.value, payload);
  }, params);
  return ch;
}
// @__NO_SIDE_EFFECTS__
function _check(fn, params) {
  const ch = new $ZodCheck({
    check: "custom",
    ...normalizeParams(params)
  });
  ch._zod.check = fn;
  return ch;
}

// node_modules/@modelcontextprotocol/core/node_modules/zod/v4/core/to-json-schema.js
function assignProps(target, ...sources) {
  for (const source of sources) {
    for (const key of Reflect.ownKeys(source)) {
      if (Object.prototype.propertyIsEnumerable.call(source, key)) {
        assignProp(target, key, source[key]);
      }
    }
  }
  return target;
}
function initializeContext(params) {
  let target = params?.target ?? "draft-2020-12";
  if (target === "draft-4")
    target = "draft-04";
  if (target === "draft-7")
    target = "draft-07";
  return {
    processors: params.processors ?? {},
    metadataRegistry: params?.metadata ?? globalRegistry,
    target,
    unrepresentable: params?.unrepresentable ?? "throw",
    override: params?.override ?? (() => {
    }),
    io: params?.io ?? "output",
    counter: 0,
    seen: /* @__PURE__ */ new Map(),
    sharedDefsExtractedFor: void 0,
    sharedEmitDoneFor: void 0,
    cycles: params?.cycles ?? "ref",
    reused: params?.reused ?? "inline",
    intersections: [],
    deferred: [],
    external: params?.external ?? void 0
  };
}
function handleUnrepresentable(schema, ctx, json, params, message) {
  const result = typeof ctx.unrepresentable === "function" ? ctx.unrepresentable({ zodSchema: schema, path: params.path, message }) : ctx.unrepresentable;
  if (result === "any")
    return false;
  if (result === void 0 || result === "throw")
    throw new Error(message);
  Object.assign(json, result);
  return true;
}
function process(schema, ctx, _params = { path: [], schemaPath: [] }) {
  var _a5;
  const def = schema._zod.def;
  const seen = ctx.seen.get(schema);
  if (seen) {
    seen.count++;
    const isCycle = _params.schemaPath.includes(schema);
    if (isCycle) {
      seen.cycle = _params.path;
    }
    return seen.schema;
  }
  const result = { schema: {}, count: 1, cycle: void 0, path: _params.path };
  ctx.seen.set(schema, result);
  ctx.sharedDefsExtractedFor = void 0;
  ctx.sharedEmitDoneFor = void 0;
  const overrideSchema = schema._zod.toJSONSchema?.();
  if (overrideSchema) {
    result.schema = overrideSchema;
  } else {
    const params = {
      ..._params,
      schemaPath: [..._params.schemaPath, schema],
      path: _params.path
    };
    if (schema._zod.processJSONSchema) {
      schema._zod.processJSONSchema(ctx, result.schema, params);
    } else {
      const _json = result.schema;
      const processor = ctx.processors[def.type];
      if (!processor) {
        throw new Error(`[toJSONSchema]: Non-representable type encountered: ${def.type}`);
      }
      processor(schema, ctx, _json, params);
    }
    const parent = schema._zod.parent;
    if (parent) {
      if (!result.ref)
        result.ref = parent;
      process(parent, ctx, params);
      ctx.seen.get(parent).isParent = true;
    }
  }
  const meta3 = ctx.metadataRegistry.get(schema);
  if (meta3)
    assignProps(result.schema, meta3);
  if (ctx.io === "input" && isTransforming(schema)) {
    delete result.schema.examples;
    delete result.schema.default;
  }
  if (ctx.io === "input" && "_prefault" in result.schema)
    (_a5 = result.schema).default ?? (_a5.default = result.schema._prefault);
  delete result.schema._prefault;
  const _result = ctx.seen.get(schema);
  return _result.schema;
}
function encodeJSONPointerSegment(segment) {
  return segment.replace(/~/g, "~0").replace(/\//g, "~1");
}
function extractDefs(ctx, schema) {
  const root = ctx.seen.get(schema);
  if (!root)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  if (ctx.external && ctx.sharedDefsExtractedFor === ctx.external)
    return;
  const idToSchema = /* @__PURE__ */ new Map();
  for (const entry of ctx.seen.entries()) {
    const id = ctx.metadataRegistry.get(entry[0])?.id;
    if (id) {
      const existing = idToSchema.get(id);
      if (existing && existing !== entry[0]) {
        throw new Error(`Duplicate schema id "${id}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
      }
      idToSchema.set(id, entry[0]);
    }
  }
  const makeURI = (entry) => {
    const defsSegment = ctx.target === "draft-2020-12" ? "$defs" : "definitions";
    if (ctx.external) {
      const externalId = ctx.external.registry.get(entry[0])?.id;
      const uriGenerator = ctx.external.uri ?? ((id2) => id2);
      if (externalId) {
        return { ref: uriGenerator(externalId) };
      }
      const id = entry[1].defId ?? entry[1].schema.id ?? `schema${ctx.counter++}`;
      entry[1].defId = id;
      return { defId: id, ref: `${uriGenerator("__shared")}#/${defsSegment}/${encodeJSONPointerSegment(id)}` };
    }
    const uriPrefix = `#`;
    const defUriPrefix = `${uriPrefix}/${defsSegment}/`;
    if (entry[1] === root && !entry[1].schema.id) {
      return { ref: uriPrefix };
    }
    const defId = entry[1].schema.id ?? `__schema${ctx.counter++}`;
    return { defId, ref: defUriPrefix + encodeJSONPointerSegment(defId) };
  };
  const extractToDef = (entry) => {
    if (entry[1].schema.$ref) {
      return;
    }
    const seen = entry[1];
    const { ref, defId } = makeURI(entry);
    seen.def = { ...seen.schema };
    if (defId)
      seen.defId = defId;
    const schema2 = seen.schema;
    for (const key in schema2) {
      delete schema2[key];
    }
    schema2.$ref = ref;
  };
  if (ctx.cycles === "throw") {
    for (const entry of ctx.seen.entries()) {
      const seen = entry[1];
      if (seen.cycle) {
        throw new Error(`Cycle detected: #/${seen.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
      }
    }
  }
  for (const entry of ctx.seen.entries()) {
    const seen = entry[1];
    if (schema === entry[0]) {
      extractToDef(entry);
      continue;
    }
    if (ctx.external) {
      const ext = ctx.external.registry.get(entry[0])?.id;
      if (schema !== entry[0] && ext) {
        extractToDef(entry);
        continue;
      }
    }
    const id = ctx.metadataRegistry.get(entry[0])?.id;
    if (id) {
      extractToDef(entry);
      continue;
    }
    if (seen.cycle) {
      extractToDef(entry);
      continue;
    }
    if (seen.count > 1) {
      if (ctx.reused === "ref") {
        extractToDef(entry);
        continue;
      }
    }
  }
  if (ctx.external)
    ctx.sharedDefsExtractedFor = ctx.external;
}
function compactTypeUnion(schema) {
  const options = schema.anyOf;
  if (!Array.isArray(options) || options.length === 0 || schema.type !== void 0)
    return;
  const types = [];
  for (const option of options) {
    if (!option || typeof option !== "object")
      return;
    compactTypeUnion(option);
    const keys = Object.keys(option);
    if (keys.length !== 1 || keys[0] !== "type")
      return;
    const type = option.type;
    for (const member of Array.isArray(type) ? type : [type]) {
      if (typeof member !== "string")
        return;
      if (!types.includes(member))
        types.push(member);
    }
  }
  delete schema.anyOf;
  schema.type = types.length === 1 ? types[0] : types;
}
var FOLDABLE_KEYS = /* @__PURE__ */ new Set(["type", "properties", "required", "additionalProperties"]);
var UNION_KEYS = ["oneOf", "anyOf"];
function undeclaredConstraint(member) {
  const extra = member.additionalProperties;
  if (extra === void 0 || extra === false || typeof extra !== "object" || extra === null)
    return null;
  return Object.keys(extra).length ? extra : null;
}
function foldObjects(members3) {
  const objects = [];
  for (const member of members3) {
    if (typeof member !== "object" || member.type !== "object")
      return null;
    for (const key in member) {
      if (!FOLDABLE_KEYS.has(key))
        return null;
    }
    objects.push(member);
  }
  const properties = {};
  const required4 = /* @__PURE__ */ new Set();
  for (const object4 of objects) {
    for (const key in object4.properties) {
      if (Object.prototype.hasOwnProperty.call(properties, key))
        continue;
      const parts = [];
      for (const other of objects) {
        const part = other.properties?.[key] ?? undeclaredConstraint(other);
        if (part === null || part === void 0)
          continue;
        if (!parts.some((seen) => JSON.stringify(seen) === JSON.stringify(part)))
          parts.push(part);
      }
      const merged = parts.length === 1 ? parts[0] : foldObjects(parts) ?? { allOf: parts };
      assignProp(properties, key, merged);
    }
    for (const key of object4.required ?? [])
      required4.add(key);
  }
  const folded = { type: "object", properties };
  if (required4.size)
    folded.required = [...required4];
  if (objects.every((object4) => object4.additionalProperties === false)) {
    folded.additionalProperties = false;
  } else {
    const constraints = [];
    for (const object4 of objects) {
      const constraint = undeclaredConstraint(object4);
      if (constraint && !constraints.some((seen) => JSON.stringify(seen) === JSON.stringify(constraint)))
        constraints.push(constraint);
    }
    if (constraints.length === 1)
      folded.additionalProperties = constraints[0];
    else if (constraints.length > 1)
      folded.additionalProperties = { allOf: constraints };
  }
  return folded;
}
function foldIntersection(json) {
  const allOf = json.allOf;
  if (!Array.isArray(allOf) || allOf.length < 2)
    return;
  for (const key of FOLDABLE_KEYS)
    if (key in json)
      return;
  const unions = allOf.filter((m) => UNION_KEYS.some((k) => Array.isArray(m[k])));
  let folded = null;
  if (!unions.length) {
    folded = foldObjects(allOf);
  } else {
    const union4 = unions[0];
    const keyword = UNION_KEYS.find((k) => Array.isArray(union4[k]));
    if (Object.keys(union4).length !== 1)
      return;
    const rest = allOf.filter((m) => m !== union4);
    const branches = union4[keyword].map((branch) => foldObjects([...rest, branch]));
    if (branches.some((b) => !b))
      return;
    folded = { [keyword]: branches };
  }
  if (!folded)
    return;
  delete json.allOf;
  assignProps(json, folded);
}
function finalize(ctx, schema) {
  const root = ctx.seen.get(schema);
  if (!root)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const flattenRef = (zodSchema) => {
    const seen = ctx.seen.get(zodSchema);
    if (seen.ref === null)
      return;
    const schema2 = seen.def ?? seen.schema;
    const _cached = { ...schema2 };
    const ref = seen.ref;
    seen.ref = null;
    if (ref) {
      flattenRef(ref);
      const refSeen = ctx.seen.get(ref);
      const refSchema = refSeen.schema;
      if (refSchema.$ref && (ctx.target === "draft-07" || ctx.target === "draft-04" || ctx.target === "openapi-3.0")) {
        schema2.allOf = schema2.allOf ?? [];
        schema2.allOf.push(refSchema);
      } else {
        assignProps(schema2, refSchema);
      }
      assignProps(schema2, _cached);
      const isParentRef = zodSchema._zod.parent === ref;
      if (isParentRef) {
        for (const key in schema2) {
          if (key === "$ref" || key === "allOf")
            continue;
          if (!(key in _cached)) {
            delete schema2[key];
          }
        }
      }
      if (refSchema.$ref && refSeen.def) {
        for (const key in schema2) {
          if (key === "$ref" || key === "allOf")
            continue;
          if (key in refSeen.def && JSON.stringify(schema2[key]) === JSON.stringify(refSeen.def[key])) {
            delete schema2[key];
          }
        }
      }
    }
    const parent = zodSchema._zod.parent;
    if (parent && parent !== ref) {
      flattenRef(parent);
      const parentSeen = ctx.seen.get(parent);
      if (parentSeen?.schema.$ref) {
        schema2.$ref = parentSeen.schema.$ref;
        if (parentSeen.def) {
          for (const key in schema2) {
            if (key === "$ref" || key === "allOf")
              continue;
            if (key in parentSeen.def && JSON.stringify(schema2[key]) === JSON.stringify(parentSeen.def[key])) {
              delete schema2[key];
            }
          }
        }
      }
    }
    ctx.override({
      zodSchema,
      jsonSchema: schema2,
      path: seen.path ?? []
    });
  };
  if (!ctx.external || ctx.sharedEmitDoneFor !== ctx.external) {
    for (const entry of [...ctx.seen.entries()].reverse()) {
      flattenRef(entry[0]);
    }
    if (ctx.target !== "openapi-3.0") {
      for (const entry of ctx.seen.entries()) {
        compactTypeUnion(entry[1].def ?? entry[1].schema);
      }
    }
    for (const rewrite of ctx.deferred)
      rewrite();
    if (ctx.intersections.length) {
      const carriers = /* @__PURE__ */ new Map();
      for (const seen of ctx.seen.values()) {
        for (const json of [seen.schema, seen.def]) {
          const allOf = json?.allOf;
          if (!Array.isArray(allOf))
            continue;
          const existing = carriers.get(allOf);
          if (existing)
            existing.push(json);
          else
            carriers.set(allOf, [json]);
        }
      }
      for (const allOf of ctx.intersections) {
        for (const json of carriers.get(allOf) ?? [])
          foldIntersection(json);
      }
    }
  }
  const result = {};
  if (ctx.target === "draft-2020-12") {
    result.$schema = "https://json-schema.org/draft/2020-12/schema";
  } else if (ctx.target === "draft-07") {
    result.$schema = "http://json-schema.org/draft-07/schema#";
  } else if (ctx.target === "draft-04") {
    result.$schema = "http://json-schema.org/draft-04/schema#";
  } else if (ctx.target === "openapi-3.0") {
  } else {
  }
  if (ctx.external?.uri) {
    const id = ctx.external.registry.get(schema)?.id;
    if (!id)
      throw new Error("Schema is missing an `id` property");
    result.$id = ctx.external.uri(id);
  }
  assignProps(result, root.defId ? root.schema : root.def ?? root.schema);
  const rootMetaId = ctx.metadataRegistry.get(schema)?.id;
  if (rootMetaId !== void 0 && result.id === rootMetaId)
    delete result.id;
  const defs = ctx.external?.defs ?? {};
  if (!ctx.external || ctx.sharedEmitDoneFor !== ctx.external) {
    for (const entry of ctx.seen.entries()) {
      const seen = entry[1];
      if (seen.def && seen.defId) {
        if (seen.def.id === seen.defId)
          delete seen.def.id;
        assignProp(defs, seen.defId, seen.def);
      }
    }
  }
  if (ctx.external)
    ctx.sharedEmitDoneFor = ctx.external;
  if (ctx.external) {
  } else {
    if (Object.keys(defs).length > 0) {
      if (ctx.target === "draft-2020-12") {
        result.$defs = defs;
      } else {
        result.definitions = defs;
      }
    }
  }
  try {
    const finalized = JSON.parse(JSON.stringify(result));
    Object.defineProperty(finalized, "~standard", {
      value: {
        ...schema["~standard"],
        jsonSchema: {
          input: createStandardJSONSchemaMethod(schema, "input", ctx.processors),
          output: createStandardJSONSchemaMethod(schema, "output", ctx.processors)
        }
      },
      enumerable: false,
      writable: false
    });
    return finalized;
  } catch (_err) {
    throw new Error("Error converting schema to JSON.");
  }
}
function isTransforming(_schema, _ctx) {
  const ctx = _ctx ?? { seen: /* @__PURE__ */ new Set() };
  if (ctx.seen.has(_schema))
    return false;
  ctx.seen.add(_schema);
  const def = _schema._zod.def;
  if (def.type === "transform")
    return true;
  if (def.type === "array")
    return isTransforming(def.element, ctx);
  if (def.type === "set")
    return isTransforming(def.valueType, ctx);
  if (def.type === "lazy")
    return isTransforming(def.getter(), ctx);
  if (def.type === "promise" || def.type === "optional" || def.type === "nonoptional" || def.type === "nullable" || def.type === "readonly" || def.type === "default" || def.type === "prefault" || def.type === "catch") {
    return isTransforming(def.innerType, ctx);
  }
  if (def.type === "intersection") {
    return isTransforming(def.left, ctx) || isTransforming(def.right, ctx);
  }
  if (def.type === "record" || def.type === "map") {
    return isTransforming(def.keyType, ctx) || isTransforming(def.valueType, ctx);
  }
  if (def.type === "pipe") {
    if (_schema._zod.traits.has("$ZodCodec"))
      return true;
    return isTransforming(def.in, ctx) || isTransforming(def.out, ctx);
  }
  if (def.type === "object") {
    for (const key in def.shape) {
      if (isTransforming(def.shape[key], ctx))
        return true;
    }
    return false;
  }
  if (def.type === "union") {
    for (const option of def.options) {
      if (isTransforming(option, ctx))
        return true;
    }
    return false;
  }
  if (def.type === "tuple") {
    for (const item of def.items) {
      if (isTransforming(item, ctx))
        return true;
    }
    if (def.rest && isTransforming(def.rest, ctx))
      return true;
    return false;
  }
  return false;
}
var createToJSONSchemaMethod = (schema, processors = {}) => (params) => {
  const ctx = initializeContext({ ...params, processors });
  process(schema, ctx);
  extractDefs(ctx, schema);
  return finalize(ctx, schema);
};
var createStandardJSONSchemaMethod = (schema, io, processors = {}) => (params) => {
  const { libraryOptions, target } = params ?? {};
  const ctx = initializeContext({ ...libraryOptions ?? {}, target, io, processors });
  process(schema, ctx);
  extractDefs(ctx, schema);
  return finalize(ctx, schema);
};

// node_modules/@modelcontextprotocol/core/node_modules/zod/v4/core/json-schema-processors.js
var formatMap = {
  guid: "uuid",
  url: "uri",
  datetime: "date-time",
  json_string: "json-string",
  regex: ""
  // do not set
};
var stringProcessor = (schema, ctx, _json, _params) => {
  const json = _json;
  json.type = "string";
  const { minimum, maximum, format: format2, patterns, contentEncoding, laxFormat } = schema._zod.bag;
  if (typeof minimum === "number")
    json.minLength = minimum;
  if (typeof maximum === "number")
    json.maxLength = maximum;
  if (format2) {
    json.format = formatMap[format2] ?? format2;
    if (json.format === "")
      delete json.format;
    if (format2 === "time" || laxFormat) {
      delete json.format;
    }
  }
  if (contentEncoding)
    json.contentEncoding = contentEncoding;
  if (patterns && patterns.size > 0) {
    const patternList = [...patterns];
    if (patternList.length === 1)
      json.pattern = patternList[0].source;
    else if (patternList.length > 1) {
      json.allOf = [
        ...patternList.map((regex2) => ({
          ...ctx.target === "draft-07" || ctx.target === "draft-04" || ctx.target === "openapi-3.0" ? { type: "string" } : {},
          pattern: regex2.source
        }))
      ];
    }
  }
};
var numberProcessor = (schema, ctx, _json, params) => {
  const json = _json;
  const { minimum, maximum, format: format2, multipleOf, exclusiveMaximum, exclusiveMinimum } = schema._zod.bag;
  if (typeof format2 === "string" && format2.includes("int"))
    json.type = "integer";
  else
    json.type = "number";
  const exMin = typeof exclusiveMinimum === "number" && exclusiveMinimum >= (minimum ?? Number.NEGATIVE_INFINITY);
  const exMax = typeof exclusiveMaximum === "number" && exclusiveMaximum <= (maximum ?? Number.POSITIVE_INFINITY);
  const legacy = ctx.target === "draft-04" || ctx.target === "openapi-3.0";
  if (exMin) {
    if (legacy) {
      json.minimum = exclusiveMinimum;
      json.exclusiveMinimum = true;
    } else {
      json.exclusiveMinimum = exclusiveMinimum;
    }
  } else if (typeof minimum === "number") {
    json.minimum = minimum;
  }
  if (exMax) {
    if (legacy) {
      json.maximum = exclusiveMaximum;
      json.exclusiveMaximum = true;
    } else {
      json.exclusiveMaximum = exclusiveMaximum;
    }
  } else if (typeof maximum === "number") {
    json.maximum = maximum;
  }
  if (typeof multipleOf === "number") {
    if (Number.isFinite(multipleOf) && multipleOf !== 0)
      json.multipleOf = Math.abs(multipleOf);
    else
      handleUnrepresentable(schema, ctx, json, params, `A multipleOf divisor of ${multipleOf} cannot be represented in JSON Schema`);
  }
};
var booleanProcessor = (_schema, _ctx, json, _params) => {
  json.type = "boolean";
};
var bigintProcessor = (schema, ctx, json, params) => {
  handleUnrepresentable(schema, ctx, json, params, "BigInt cannot be represented in JSON Schema");
};
var nullProcessor = (_schema, ctx, json, _params) => {
  if (ctx.target === "openapi-3.0") {
    json.type = "string";
    json.nullable = true;
    json.enum = [null];
  } else {
    json.type = "null";
  }
};
var neverProcessor = (_schema, _ctx, json, _params) => {
  json.not = {};
};
var anyProcessor = (_schema, _ctx, _json, _params) => {
};
var unknownProcessor = (_schema, _ctx, _json, _params) => {
};
var dateProcessor = (schema, ctx, json, params) => {
  handleUnrepresentable(schema, ctx, json, params, "Date cannot be represented in JSON Schema");
};
var enumProcessor = (schema, _ctx, json, _params) => {
  const def = schema._zod.def;
  const values = getEnumValues(def.entries);
  if (values.length === 0) {
    json.not = {};
    return;
  }
  if (values.every((v) => typeof v === "number"))
    json.type = "number";
  if (values.every((v) => typeof v === "string"))
    json.type = "string";
  json.enum = values;
};
var literalProcessor = (schema, ctx, json, params) => {
  const def = schema._zod.def;
  if (def.values.length === 0) {
    json.not = {};
    return;
  }
  const vals = [];
  for (const val of def.values) {
    if (val === void 0) {
      if (handleUnrepresentable(schema, ctx, json, params, "Literal `undefined` cannot be represented in JSON Schema"))
        return;
    } else if (typeof val === "bigint") {
      if (handleUnrepresentable(schema, ctx, json, params, "BigInt literals cannot be represented in JSON Schema"))
        return;
      vals.push(Number(val));
    } else {
      vals.push(val);
    }
  }
  if (vals.length === 0) {
  } else if (vals.length === 1) {
    const val = vals[0];
    json.type = val === null ? "null" : typeof val;
    if (ctx.target === "draft-04" || ctx.target === "openapi-3.0") {
      json.enum = [val];
    } else {
      json.const = val;
    }
  } else {
    if (vals.every((v) => typeof v === "number"))
      json.type = "number";
    if (vals.every((v) => typeof v === "string"))
      json.type = "string";
    if (vals.every((v) => typeof v === "boolean"))
      json.type = "boolean";
    if (vals.every((v) => v === null))
      json.type = "null";
    json.enum = vals;
  }
};
var customProcessor = (schema, ctx, json, params) => {
  handleUnrepresentable(schema, ctx, json, params, "Custom types cannot be represented in JSON Schema");
};
var transformProcessor = (schema, ctx, json, params) => {
  handleUnrepresentable(schema, ctx, json, params, "Transforms cannot be represented in JSON Schema");
};
var arrayProcessor = (schema, ctx, _json, params) => {
  const json = _json;
  const def = schema._zod.def;
  const { minimum, maximum } = schema._zod.bag;
  if (typeof minimum === "number")
    json.minItems = minimum;
  if (typeof maximum === "number")
    json.maxItems = maximum;
  json.type = "array";
  json.items = process(def.element, ctx, {
    ...params,
    path: [...params.path, "items"]
  });
};
function inputOptin(schema) {
  const def = schema._zod.def;
  if (def.type === "pipe" && def.in._zod.traits.has("$ZodTransform")) {
    return inputOptin(def.out);
  }
  if (def.type === "catch") {
    return inputOptin(def.innerType);
  }
  return schema._zod.optin;
}
var objectProcessor = (schema, ctx, _json, params) => {
  const json = _json;
  const def = schema._zod.def;
  const shape = def.shape;
  const symbolKeys = Object.getOwnPropertySymbols(shape);
  if (symbolKeys.length && handleUnrepresentable(schema, ctx, json, params, "Symbol keys cannot be represented in JSON Schema")) {
    return;
  }
  json.type = "object";
  json.properties = {};
  for (const key in shape) {
    assignProp(json.properties, key, process(shape[key], ctx, {
      ...params,
      path: [...params.path, "properties", key]
    }));
  }
  const allKeys = new Set(Object.keys(shape));
  const requiredKeys = new Set([...allKeys].filter((key) => {
    const field = def.shape[key];
    if (ctx.io === "input") {
      return inputOptin(field) === void 0;
    } else {
      return field._zod.optout === void 0;
    }
  }));
  if (requiredKeys.size > 0) {
    json.required = Array.from(requiredKeys);
  }
  if (def.catchall?._zod.def.type === "never") {
    json.additionalProperties = false;
  } else if (!def.catchall) {
    if (ctx.io === "output")
      json.additionalProperties = false;
  } else if (def.catchall) {
    json.additionalProperties = process(def.catchall, ctx, {
      ...params,
      path: [...params.path, "additionalProperties"]
    });
  }
};
var unionProcessor = (schema, ctx, json, params) => {
  const def = schema._zod.def;
  const isExclusive = def.inclusive === false;
  const options = def.options.map((x, i) => process(x, ctx, {
    ...params,
    path: [...params.path, isExclusive ? "oneOf" : "anyOf", i]
  }));
  if (isExclusive) {
    json.oneOf = options;
  } else {
    json.anyOf = options;
  }
};
var intersectionProcessor = (schema, ctx, json, params) => {
  const def = schema._zod.def;
  const a = process(def.left, ctx, {
    ...params,
    path: [...params.path, "allOf", 0]
  });
  const b = process(def.right, ctx, {
    ...params,
    path: [...params.path, "allOf", 1]
  });
  const isSimpleIntersection = (val) => "allOf" in val && Object.keys(val).length === 1;
  const allOf = [
    ...isSimpleIntersection(a) ? a.allOf : [a],
    ...isSimpleIntersection(b) ? b.allOf : [b]
  ];
  json.allOf = allOf;
  ctx.intersections.push(allOf);
};
function stringifyKeyNames(bySchema, json, visited) {
  if (json.$ref) {
    if (visited.has(json))
      return json;
    visited.add(json);
    const def = bySchema.get(json)?.def;
    if (!def)
      return json;
    const inlined = stringifyKeyNames(bySchema, def, visited);
    return inlined === def ? json : inlined;
  }
  for (const keyword of ["anyOf", "oneOf"]) {
    const branches = json[keyword];
    if (!Array.isArray(branches))
      continue;
    const mapped = branches.map((branch) => stringifyKeyNames(bySchema, branch, visited));
    if (mapped.some((branch, i) => branch !== branches[i]))
      json = { ...json, [keyword]: mapped };
  }
  const types = Array.isArray(json.type) ? json.type : [json.type];
  const numericType = !types.includes("string") && types.some((t) => t === "number" || t === "integer");
  const values = json.enum ?? (json.const !== void 0 ? [json.const] : void 0);
  if (!numericType && !values?.some((v) => typeof v === "number"))
    return json;
  const { minimum, maximum, exclusiveMinimum, exclusiveMaximum, multipleOf, format: format2, id, ...rest } = json;
  if (rest.enum)
    rest.enum = rest.enum.map((v) => typeof v === "number" ? String(v) : v);
  else if (typeof rest.const === "number")
    rest.const = String(rest.const);
  if (!numericType)
    return rest;
  rest.type = "string";
  if (!values)
    rest.pattern = (types.includes("number") ? number : integer).source;
  return rest;
}
var pendingRecords = /* @__PURE__ */ new WeakMap();
function rewriteKeyNames(ctx) {
  const bySchema = /* @__PURE__ */ new Map();
  for (const entry of ctx.seen.values()) {
    if (entry.def && !bySchema.has(entry.schema))
      bySchema.set(entry.schema, entry);
  }
  const rewrites = /* @__PURE__ */ new Map();
  for (const record3 of pendingRecords.get(ctx) ?? []) {
    const seen = ctx.seen.get(record3);
    const names = (seen?.def ?? seen?.schema)?.propertyNames;
    if (!names || names === true || rewrites.has(names))
      continue;
    const rewritten = stringifyKeyNames(bySchema, names, /* @__PURE__ */ new Set());
    if (rewritten !== names)
      rewrites.set(names, rewritten);
  }
  if (!rewrites.size)
    return;
  for (const entry of ctx.seen.values()) {
    for (const carrier of [entry.schema, entry.def]) {
      const rewritten = carrier && rewrites.get(carrier.propertyNames);
      if (rewritten)
        carrier.propertyNames = rewritten;
    }
  }
}
var recordProcessor = (schema, ctx, _json, params) => {
  const json = _json;
  const def = schema._zod.def;
  json.type = "object";
  const keyType = def.keyType;
  const keyBag = keyType._zod.bag;
  const patterns = keyBag?.patterns;
  if (def.mode === "loose" && patterns && patterns.size > 0) {
    const valueSchema = process(def.valueType, ctx, {
      ...params,
      path: [...params.path, "patternProperties", "*"]
    });
    json.patternProperties = {};
    for (const pattern of patterns) {
      assignProp(json.patternProperties, pattern.source, valueSchema);
    }
  } else {
    if (ctx.target === "draft-07" || ctx.target === "draft-2020-12") {
      json.propertyNames = process(def.keyType, ctx, {
        ...params,
        path: [...params.path, "propertyNames"]
      });
      let pending = pendingRecords.get(ctx);
      if (!pending) {
        pending = [];
        pendingRecords.set(ctx, pending);
        ctx.deferred.push(() => rewriteKeyNames(ctx));
      }
      pending.push(schema);
    }
    json.additionalProperties = process(def.valueType, ctx, {
      ...params,
      path: [...params.path, "additionalProperties"]
    });
  }
  const keyValues = keyType._zod.values;
  const omittableOnInput = ctx.io === "input" && inputOptin(def.valueType) !== void 0;
  if (keyValues && !def.partial && !omittableOnInput) {
    const validKeyValues = [...keyValues].filter((v) => typeof v === "string" || typeof v === "number");
    if (validKeyValues.length > 0) {
      json.required = validKeyValues.map(String);
    }
  }
};
var nullableProcessor = (schema, ctx, json, params) => {
  const def = schema._zod.def;
  const inner = process(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  if (ctx.target === "openapi-3.0") {
    seen.ref = def.innerType;
    json.nullable = true;
  } else {
    json.anyOf = [inner, { type: "null" }];
  }
};
var nonoptionalProcessor = (schema, ctx, _json, params) => {
  const def = schema._zod.def;
  process(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
};
var UNREPRESENTABLE_DEFAULT = /* @__PURE__ */ Symbol();
function serializeDefaultValue(value, schema, ctx, json, params) {
  let unrepresentable = false;
  const serialized = JSON.stringify(value, (_, val) => {
    if (typeof val !== "bigint")
      return val;
    unrepresentable = true;
    return null;
  });
  if (!unrepresentable)
    return JSON.parse(serialized);
  handleUnrepresentable(schema, ctx, json, params, "BigInt defaults cannot be represented in JSON Schema");
  return UNREPRESENTABLE_DEFAULT;
}
var defaultProcessor = (schema, ctx, json, params) => {
  const def = schema._zod.def;
  process(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
  const value = serializeDefaultValue(def.defaultValue, schema, ctx, json, params);
  if (value !== UNREPRESENTABLE_DEFAULT)
    json.default = value;
};
var prefaultProcessor = (schema, ctx, json, params) => {
  const def = schema._zod.def;
  process(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
  if (ctx.io !== "input")
    return;
  const value = serializeDefaultValue(def.defaultValue, schema, ctx, json, params);
  if (value !== UNREPRESENTABLE_DEFAULT)
    json._prefault = value;
};
var catchProcessor = (schema, ctx, json, params) => {
  const def = schema._zod.def;
  process(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
  let catchValue;
  try {
    catchValue = def.catchValue(void 0);
  } catch {
    handleUnrepresentable(schema, ctx, json, params, "Dynamic catch values are not supported in JSON Schema");
    return;
  }
  json.default = catchValue;
};
var pipeProcessor = (schema, ctx, _json, params) => {
  const def = schema._zod.def;
  const inIsTransform = def.in._zod.traits.has("$ZodTransform");
  const innerType = ctx.io === "input" ? inIsTransform ? def.out : def.in : def.out;
  process(innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = innerType;
};
var readonlyProcessor = (schema, ctx, json, params) => {
  const def = schema._zod.def;
  process(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
  json.readOnly = true;
};
var optionalProcessor = (schema, ctx, _json, params) => {
  const def = schema._zod.def;
  process(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
};
var lazyProcessor = (schema, ctx, _json, params) => {
  const innerType = schema._zod.innerType;
  process(innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = innerType;
};

// node_modules/@modelcontextprotocol/core/node_modules/zod/v4/classic/errors.js
var _installedErrorProtos = /* @__PURE__ */ new WeakSet([Object.prototype, Error.prototype]);
function _lazyMethod(proto, key, make) {
  Object.defineProperty(proto, key, {
    configurable: true,
    enumerable: false,
    get() {
      const value = make(this);
      Object.defineProperty(this, key, { value, configurable: true, writable: true });
      return value;
    },
    set(value) {
      Object.defineProperty(this, key, { value, configurable: true, writable: true });
    }
  });
}
var initializer2 = (inst, issues) => {
  $ZodError.init(inst, issues);
  inst.name = "ZodError";
  const proto = Object.getPrototypeOf(inst);
  if (_installedErrorProtos.has(proto))
    return;
  _installedErrorProtos.add(proto);
  _lazyMethod(proto, "format", (self2) => (mapper) => formatError(self2, mapper));
  _lazyMethod(proto, "flatten", (self2) => (mapper) => flattenError(self2, mapper));
  _lazyMethod(proto, "addIssue", (self2) => (issue4) => {
    self2.issues.push(issue4);
    self2.message = JSON.stringify(self2.issues, jsonStringifyReplacer, 2);
  });
  _lazyMethod(proto, "addIssues", (self2) => (issues2) => {
    self2.issues.push(...issues2);
    self2.message = JSON.stringify(self2.issues, jsonStringifyReplacer, 2);
  });
  Object.defineProperty(proto, "isEmpty", {
    configurable: true,
    enumerable: false,
    get() {
      return this.issues.length === 0;
    }
  });
};
var ZodRealError = /* @__PURE__ */ $constructor("ZodError", initializer2, void 0, {
  Parent: Error
});

// node_modules/@modelcontextprotocol/core/node_modules/zod/v4/classic/parse.js
var parse2 = /* @__PURE__ */ _parse(ZodRealError);
var parseAsync2 = /* @__PURE__ */ _parseAsync(ZodRealError);
var safeParse2 = /* @__PURE__ */ _safeParse(ZodRealError);
var safeParseAsync2 = /* @__PURE__ */ _safeParseAsync(ZodRealError);
var encode = /* @__PURE__ */ _encode(ZodRealError);
var decode = /* @__PURE__ */ _decode(ZodRealError);
var encodeAsync = /* @__PURE__ */ _encodeAsync(ZodRealError);
var decodeAsync = /* @__PURE__ */ _decodeAsync(ZodRealError);
var safeEncode = /* @__PURE__ */ _safeEncode(ZodRealError);
var safeDecode = /* @__PURE__ */ _safeDecode(ZodRealError);
var safeEncodeAsync = /* @__PURE__ */ _safeEncodeAsync(ZodRealError);
var safeDecodeAsync = /* @__PURE__ */ _safeDecodeAsync(ZodRealError);

// node_modules/@modelcontextprotocol/core/node_modules/zod/v4/classic/schemas.js
function _ensureDefaultLocale() {
  if (!globalConfig.localeError)
    config(en_default());
}
function _ensureDefaultMemoizer() {
  if (!globalConfig.memoizer)
    config({ memoizer: memoizer() });
}
var ZodType = /* @__PURE__ */ $constructor("ZodType", (inst, def) => {
  _ensureDefaultLocale();
  $ZodType.init(inst, def);
  inst.def = def;
  inst.type = def.type;
  return inst;
}, {
  check(...chks) {
    const def = this.def;
    return this.clone(util_exports.mergeDefs(def, {
      checks: [
        ...def.checks ?? [],
        ...chks.map((ch) => typeof ch === "function" ? { _zod: { check: ch, def: { check: "custom" }, onattach: [] } } : ch)
      ]
    }), { parent: true });
  },
  with(...chks) {
    return this.check(...chks);
  },
  clone(def, params) {
    return clone(this, def, params);
  },
  brand() {
    return this;
  },
  register(reg, meta3) {
    reg.add(this, meta3);
    return this;
  },
  refine(check2, params) {
    return this.check(refine(check2, params));
  },
  superRefine(refinement, params) {
    return this.check(superRefine(refinement, params));
  },
  overwrite(fn) {
    return this.check(_overwrite(fn));
  },
  optional() {
    return optional(this);
  },
  exactOptional() {
    return exactOptional(this);
  },
  nullable() {
    return nullable(this);
  },
  nullish() {
    return optional(nullable(this));
  },
  nonoptional(params) {
    return nonoptional(this, params);
  },
  array() {
    return array(this);
  },
  or(arg) {
    return union([this, arg]);
  },
  and(arg) {
    return intersection(this, arg);
  },
  transform(tx) {
    return pipe(this, transform(tx));
  },
  default(d) {
    return _default(this, d);
  },
  prefault(d) {
    return prefault(this, d);
  },
  catch(params) {
    return _catch(this, params);
  },
  pipe(target) {
    return pipe(this, target);
  },
  readonly() {
    return readonly(this);
  },
  describe(description) {
    const cl = this.clone();
    globalRegistry.add(cl, { description });
    return cl;
  },
  meta(...args) {
    if (args.length === 0)
      return globalRegistry.get(this);
    const cl = this.clone();
    globalRegistry.add(cl, args[0]);
    return cl;
  },
  isOptional() {
    return this.safeParse(void 0).success;
  },
  isNullable() {
    return this.safeParse(null).success;
  },
  apply(fn, ...args) {
    return args.length === 0 ? fn(this) : fn(this, ...args);
  },
  // Overrides core's `~standard` to add `jsonSchema`. Must stay a prototype entry: redefining it per instance demotes instances to dictionary mode.
  get "~standard"() {
    return util_exports.hide(this, "~standard", {
      ...standardProps(this),
      jsonSchema: {
        input: createStandardJSONSchemaMethod(this, "input"),
        output: createStandardJSONSchemaMethod(this, "output")
      }
    });
  },
  set "~standard"(value) {
    util_exports.own(this, "~standard", value);
  },
  parse: function _parse2(data, params) {
    return parse2(this, data, params, { callee: _parse2 });
  },
  parseAsync: async function _parseAsync2(data, params) {
    return await parseAsync2(this, data, params, { callee: _parseAsync2 });
  },
  safeParse(data, params) {
    return safeParse2(this, data, params);
  },
  async safeParseAsync(data, params) {
    return safeParseAsync2(this, data, params);
  },
  // `spa` is an alias: same function object as `safeParseAsync`, as before.
  get spa() {
    return this?.safeParseAsync;
  },
  set spa(value) {
    util_exports.own(this, "spa", value);
  },
  encode: function _encode2(data, params) {
    return encode(this, data, params, { callee: _encode2 });
  },
  decode: function _decode2(data, params) {
    return decode(this, data, params, { callee: _decode2 });
  },
  encodeAsync: async function _encodeAsync2(data, params) {
    return await encodeAsync(this, data, params, { callee: _encodeAsync2 });
  },
  decodeAsync: async function _decodeAsync2(data, params) {
    return await decodeAsync(this, data, params, { callee: _decodeAsync2 });
  },
  safeEncode(data, params) {
    return safeEncode(this, data, params);
  },
  safeDecode(data, params) {
    return safeDecode(this, data, params);
  },
  async safeEncodeAsync(data, params) {
    return safeEncodeAsync(this, data, params);
  },
  async safeDecodeAsync(data, params) {
    return safeDecodeAsync(this, data, params);
  },
  toJSONSchema(params) {
    return createToJSONSchemaMethod(this, {})(params);
  },
  // Reads through to the registry on every access, so it must not cache.
  get description() {
    return globalRegistry.get(this)?.description;
  },
  // No setter: `schema._def = x` throws, as it did when `_def` was a non-writable own property.
  get _def() {
    return this._zod.def;
  }
});
var _ZodString = /* @__PURE__ */ $constructor("_ZodString", (inst, def) => {
  $ZodString.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => stringProcessor(inst, ctx, json, params);
  const bag = inst._zod.bag;
  inst.format = bag.format ?? null;
  inst.minLength = bag.minimum ?? null;
  inst.maxLength = bag.maximum ?? null;
}, {
  regex(...args) {
    return this.check(_regex(...args));
  },
  includes(...args) {
    return this.check(_includes(...args));
  },
  startsWith(...args) {
    return this.check(_startsWith(...args));
  },
  endsWith(...args) {
    return this.check(_endsWith(...args));
  },
  min(...args) {
    return this.check(_minLength(...args));
  },
  max(...args) {
    return this.check(_maxLength(...args));
  },
  length(...args) {
    return this.check(_length(...args));
  },
  nonempty(...args) {
    return this.check(_minLength(1, ...args));
  },
  lowercase(params) {
    return this.check(_lowercase(params));
  },
  uppercase(params) {
    return this.check(_uppercase(params));
  },
  trim() {
    return this.check(_trim());
  },
  normalize(...args) {
    return this.check(_normalize(...args));
  },
  toLowerCase() {
    return this.check(_toLowerCase());
  },
  toUpperCase() {
    return this.check(_toUpperCase());
  },
  slugify() {
    return this.check(_slugify());
  }
});
var ZodString = /* @__PURE__ */ $constructor("ZodString", (inst, def) => {
  $ZodString.init(inst, def);
  _ZodString.init(inst, def);
}, {
  email(params) {
    return this.check(_email(ZodEmail, params));
  },
  url(params) {
    return this.check(_url(ZodURL, params));
  },
  jwt(params) {
    return this.check(_jwt(ZodJWT, params));
  },
  emoji(params) {
    return this.check(_emoji2(ZodEmoji, params));
  },
  guid(params) {
    return this.check(_guid(ZodGUID, params));
  },
  uuid(params) {
    return this.check(_uuid(ZodUUID, params));
  },
  uuidv4(params) {
    return this.check(_uuidv4(ZodUUID, params));
  },
  uuidv6(params) {
    return this.check(_uuidv6(ZodUUID, params));
  },
  uuidv7(params) {
    return this.check(_uuidv7(ZodUUID, params));
  },
  nanoid(params) {
    return this.check(_nanoid(ZodNanoID, params));
  },
  cuid(params) {
    return this.check(_cuid(ZodCUID, params));
  },
  cuid2(params) {
    return this.check(_cuid2(ZodCUID2, params));
  },
  ulid(params) {
    return this.check(_ulid(ZodULID, params));
  },
  base64(params) {
    return this.check(_base64(ZodBase64, params));
  },
  base64url(params) {
    return this.check(_base64url(ZodBase64URL, params));
  },
  xid(params) {
    return this.check(_xid(ZodXID, params));
  },
  ksuid(params) {
    return this.check(_ksuid(ZodKSUID, params));
  },
  ipv4(params) {
    return this.check(_ipv4(ZodIPv4, params));
  },
  ipv6(params) {
    return this.check(_ipv6(ZodIPv6, params));
  },
  cidrv4(params) {
    return this.check(_cidrv4(ZodCIDRv4, params));
  },
  cidrv6(params) {
    return this.check(_cidrv6(ZodCIDRv6, params));
  },
  e164(params) {
    return this.check(_e164(ZodE164, params));
  },
  datetime(params) {
    return this.check(_isoDateTime(ZodISODateTime, params));
  },
  date(params) {
    return this.check(_isoDate(ZodISODate, params));
  },
  time(params) {
    return this.check(_isoTime(ZodISOTime, params));
  },
  duration(params) {
    return this.check(_isoDuration(ZodISODuration, params));
  }
});
function string2(params) {
  return _string(ZodString, params);
}
var ZodStringFormat = /* @__PURE__ */ $constructor("ZodStringFormat", (inst, def) => {
  $ZodStringFormat.init(inst, def);
  _ZodString.init(inst, def);
});
var ZodISODateTime = /* @__PURE__ */ $constructor("ZodISODateTime", (inst, def) => {
  $ZodISODateTime.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodISODate = /* @__PURE__ */ $constructor("ZodISODate", (inst, def) => {
  $ZodISODate.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodISOTime = /* @__PURE__ */ $constructor("ZodISOTime", (inst, def) => {
  $ZodISOTime.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodISODuration = /* @__PURE__ */ $constructor("ZodISODuration", (inst, def) => {
  $ZodISODuration.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodEmail = /* @__PURE__ */ $constructor("ZodEmail", (inst, def) => {
  $ZodEmail.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodGUID = /* @__PURE__ */ $constructor("ZodGUID", (inst, def) => {
  $ZodGUID.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodUUID = /* @__PURE__ */ $constructor("ZodUUID", (inst, def) => {
  $ZodUUID.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodURL = /* @__PURE__ */ $constructor("ZodURL", (inst, def) => {
  $ZodURL.init(inst, def);
  ZodStringFormat.init(inst, def);
});
function url(params) {
  return _url(ZodURL, params);
}
var ZodEmoji = /* @__PURE__ */ $constructor("ZodEmoji", (inst, def) => {
  $ZodEmoji.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodNanoID = /* @__PURE__ */ $constructor("ZodNanoID", (inst, def) => {
  $ZodNanoID.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodCUID = /* @__PURE__ */ $constructor("ZodCUID", (inst, def) => {
  $ZodCUID.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodCUID2 = /* @__PURE__ */ $constructor("ZodCUID2", (inst, def) => {
  $ZodCUID2.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodULID = /* @__PURE__ */ $constructor("ZodULID", (inst, def) => {
  $ZodULID.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodXID = /* @__PURE__ */ $constructor("ZodXID", (inst, def) => {
  $ZodXID.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodKSUID = /* @__PURE__ */ $constructor("ZodKSUID", (inst, def) => {
  $ZodKSUID.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodIPv4 = /* @__PURE__ */ $constructor("ZodIPv4", (inst, def) => {
  $ZodIPv4.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodIPv6 = /* @__PURE__ */ $constructor("ZodIPv6", (inst, def) => {
  $ZodIPv6.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodCIDRv4 = /* @__PURE__ */ $constructor("ZodCIDRv4", (inst, def) => {
  $ZodCIDRv4.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodCIDRv6 = /* @__PURE__ */ $constructor("ZodCIDRv6", (inst, def) => {
  $ZodCIDRv6.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodBase64 = /* @__PURE__ */ $constructor("ZodBase64", (inst, def) => {
  $ZodBase64.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodBase64URL = /* @__PURE__ */ $constructor("ZodBase64URL", (inst, def) => {
  $ZodBase64URL.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodE164 = /* @__PURE__ */ $constructor("ZodE164", (inst, def) => {
  $ZodE164.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodJWT = /* @__PURE__ */ $constructor("ZodJWT", (inst, def) => {
  $ZodJWT.init(inst, def);
  ZodStringFormat.init(inst, def);
});
var ZodNumber = /* @__PURE__ */ $constructor("ZodNumber", (inst, def) => {
  $ZodNumber.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => numberProcessor(inst, ctx, json, params);
  const bag = inst._zod.bag;
  inst.minValue = Math.max(bag.minimum ?? Number.NEGATIVE_INFINITY, bag.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null;
  inst.maxValue = Math.min(bag.maximum ?? Number.POSITIVE_INFINITY, bag.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null;
  inst.isInt = (bag.format ?? "").includes("int") || Number.isSafeInteger(bag.multipleOf ?? 0.5);
  inst.isFinite = true;
  inst.format = bag.format ?? null;
}, {
  gt(value, params) {
    return this.check(_gt(value, params));
  },
  gte(value, params) {
    return this.check(_gte(value, params));
  },
  min(value, params) {
    return this.check(_gte(value, params));
  },
  lt(value, params) {
    return this.check(_lt(value, params));
  },
  lte(value, params) {
    return this.check(_lte(value, params));
  },
  max(value, params) {
    return this.check(_lte(value, params));
  },
  int(params) {
    return this.check(int(params));
  },
  safe(params) {
    return this.check(int(params));
  },
  positive(params) {
    return this.check(_gt(0, params));
  },
  nonnegative(params) {
    return this.check(_gte(0, params));
  },
  negative(params) {
    return this.check(_lt(0, params));
  },
  nonpositive(params) {
    return this.check(_lte(0, params));
  },
  multipleOf(value, params) {
    return this.check(_multipleOf(value, params));
  },
  step(value, params) {
    return this.check(_multipleOf(value, params));
  },
  finite() {
    return this;
  }
});
function number2(params) {
  return _number(ZodNumber, params);
}
var ZodNumberFormat = /* @__PURE__ */ $constructor("ZodNumberFormat", (inst, def) => {
  $ZodNumberFormat.init(inst, def);
  ZodNumber.init(inst, def);
});
function int(params) {
  return _int(ZodNumberFormat, params);
}
var ZodBoolean = /* @__PURE__ */ $constructor("ZodBoolean", (inst, def) => {
  $ZodBoolean.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => booleanProcessor(inst, ctx, json, params);
});
function boolean2(params) {
  return _boolean(ZodBoolean, params);
}
var ZodBigInt = /* @__PURE__ */ $constructor("ZodBigInt", (inst, def) => {
  $ZodBigInt.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => bigintProcessor(inst, ctx, json, params);
  const bag = inst._zod.bag;
  inst.minValue = bag.minimum ?? null;
  inst.maxValue = bag.maximum ?? null;
  inst.format = bag.format ?? null;
}, {
  gte(value, params) {
    return this.check(_gte(value, params));
  },
  min(value, params) {
    return this.check(_gte(value, params));
  },
  gt(value, params) {
    return this.check(_gt(value, params));
  },
  lt(value, params) {
    return this.check(_lt(value, params));
  },
  lte(value, params) {
    return this.check(_lte(value, params));
  },
  max(value, params) {
    return this.check(_lte(value, params));
  },
  positive(params) {
    return this.check(_gt(BigInt(0), params));
  },
  negative(params) {
    return this.check(_lt(BigInt(0), params));
  },
  nonpositive(params) {
    return this.check(_lte(BigInt(0), params));
  },
  nonnegative(params) {
    return this.check(_gte(BigInt(0), params));
  },
  multipleOf(value, params) {
    return this.check(_multipleOf(value, params));
  }
});
var ZodNull = /* @__PURE__ */ $constructor("ZodNull", (inst, def) => {
  $ZodNull.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => nullProcessor(inst, ctx, json, params);
});
function _null3(params) {
  return _null2(ZodNull, params);
}
var ZodAny = /* @__PURE__ */ $constructor("ZodAny", (inst, def) => {
  $ZodAny.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => anyProcessor(inst, ctx, json, params);
});
function any() {
  return _any(ZodAny);
}
var ZodUnknown = /* @__PURE__ */ $constructor("ZodUnknown", (inst, def) => {
  $ZodUnknown.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => unknownProcessor(inst, ctx, json, params);
});
function unknown() {
  return _unknown(ZodUnknown);
}
var ZodNever = /* @__PURE__ */ $constructor("ZodNever", (inst, def) => {
  $ZodNever.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => neverProcessor(inst, ctx, json, params);
});
function never(params) {
  return _never(ZodNever, params);
}
var ZodDate = /* @__PURE__ */ $constructor("ZodDate", (inst, def) => {
  $ZodDate.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => dateProcessor(inst, ctx, json, params);
  inst.min = (value, params) => inst.check(_gte(value, params));
  inst.max = (value, params) => inst.check(_lte(value, params));
  const c = inst._zod.bag;
  inst.minDate = c.minimum ? new Date(c.minimum) : null;
  inst.maxDate = c.maximum ? new Date(c.maximum) : null;
});
var ZodArray = /* @__PURE__ */ $constructor("ZodArray", (inst, def) => {
  _ensureDefaultMemoizer();
  $ZodArray.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => arrayProcessor(inst, ctx, json, params);
  inst.element = def.element;
}, {
  min(n, params) {
    return this.check(_minLength(n, params));
  },
  nonempty(params) {
    return this.check(_minLength(1, params));
  },
  max(n, params) {
    return this.check(_maxLength(n, params));
  },
  length(n, params) {
    return this.check(_length(n, params));
  },
  unwrap() {
    return this.element;
  }
});
function array(element, params) {
  return _array(ZodArray, element, params);
}
var ZodObject = /* @__PURE__ */ $constructor("ZodObject", (inst, def) => {
  _ensureDefaultMemoizer();
  $ZodObjectJIT.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => objectProcessor(inst, ctx, json, params);
  util_exports.installLazyProp(inst, "shape", (self2) => self2._zod.def.shape, false);
}, {
  keyof() {
    return _enum(Object.keys(this._zod.def.shape));
  },
  catchall(catchall) {
    return this.clone({ ...this._zod.def, catchall });
  },
  passthrough() {
    return this.clone({ ...this._zod.def, catchall: unknown() });
  },
  loose() {
    return this.clone({ ...this._zod.def, catchall: unknown() });
  },
  strict() {
    return this.clone({ ...this._zod.def, catchall: never() });
  },
  strip() {
    return this.clone({ ...this._zod.def, catchall: void 0 });
  },
  extend(incoming) {
    return util_exports.extend(this, incoming);
  },
  safeExtend(incoming) {
    return util_exports.safeExtend(this, incoming);
  },
  merge(other) {
    return util_exports.merge(this, other);
  },
  pick(mask) {
    return util_exports.pick(this, mask);
  },
  omit(mask) {
    return util_exports.omit(this, mask);
  },
  partial(...args) {
    return util_exports.partial(ZodOptional, this, args[0]);
  },
  exactPartial(...args) {
    return util_exports.partial(ZodExactOptional, this, args[0], "exactPartial");
  },
  required(...args) {
    return util_exports.required(ZodNonOptional, this, args[0]);
  }
});
function object(shape, params) {
  const def = {
    type: "object",
    shape: shape ?? {},
    ...util_exports.normalizeParams(params)
  };
  return new ZodObject(def);
}
function looseObject(shape, params) {
  return new ZodObject({
    type: "object",
    shape,
    catchall: unknown(),
    ...util_exports.normalizeParams(params)
  });
}
var ZodUnion = /* @__PURE__ */ $constructor("ZodUnion", (inst, def) => {
  $ZodUnion.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => unionProcessor(inst, ctx, json, params);
  inst.options = def.options;
});
function union(options, params) {
  return new ZodUnion({
    type: "union",
    options,
    ...util_exports.normalizeParams(params)
  });
}
var ZodDiscriminatedUnion = /* @__PURE__ */ $constructor("ZodDiscriminatedUnion", (inst, def) => {
  ZodUnion.init(inst, def);
  $ZodDiscriminatedUnion.init(inst, def);
});
function discriminatedUnion(discriminator, options, params) {
  return new ZodDiscriminatedUnion({
    type: "union",
    options,
    discriminator,
    ...util_exports.normalizeParams(params)
  });
}
var ZodIntersection = /* @__PURE__ */ $constructor("ZodIntersection", (inst, def) => {
  $ZodIntersection.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => intersectionProcessor(inst, ctx, json, params);
});
function intersection(left, right) {
  return new ZodIntersection({
    type: "intersection",
    left,
    right
  });
}
var ZodRecord = /* @__PURE__ */ $constructor("ZodRecord", (inst, def) => {
  _ensureDefaultMemoizer();
  $ZodRecord.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => recordProcessor(inst, ctx, json, params);
  inst.keyType = def.keyType;
  inst.valueType = def.valueType;
});
function record(keyType, valueType, params) {
  if (!valueType || !valueType._zod) {
    return new ZodRecord({
      type: "record",
      keyType: string2(),
      valueType: keyType,
      ...util_exports.normalizeParams(valueType)
    });
  }
  return new ZodRecord({
    type: "record",
    keyType,
    valueType,
    ...util_exports.normalizeParams(params)
  });
}
var ZodEnum = /* @__PURE__ */ $constructor("ZodEnum", (inst, def) => {
  $ZodEnum.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => enumProcessor(inst, ctx, json, params);
  inst.enum = def.entries;
  inst.options = Object.values(def.entries);
  const keys = new Set(Object.keys(def.entries));
  inst.extract = (values, params) => {
    const newEntries = {};
    for (const value of values) {
      if (keys.has(value)) {
        newEntries[value] = def.entries[value];
      } else
        throw new Error(`Key ${value} not found in enum`);
    }
    return new ZodEnum({
      ...def,
      checks: [],
      ...util_exports.normalizeParams(params),
      entries: newEntries
    });
  };
  inst.exclude = (values, params) => {
    const newEntries = { ...def.entries };
    for (const value of values) {
      if (keys.has(value)) {
        delete newEntries[value];
      } else
        throw new Error(`Key ${value} not found in enum`);
    }
    return new ZodEnum({
      ...def,
      checks: [],
      ...util_exports.normalizeParams(params),
      entries: newEntries
    });
  };
});
function _enum(values, params) {
  const entries = Array.isArray(values) ? Object.fromEntries(values.map((v) => [v, v])) : values;
  return new ZodEnum({
    type: "enum",
    entries,
    ...util_exports.normalizeParams(params)
  });
}
var ZodLiteral = /* @__PURE__ */ $constructor("ZodLiteral", (inst, def) => {
  $ZodLiteral.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => literalProcessor(inst, ctx, json, params);
  inst.values = new Set(def.values);
  Object.defineProperty(inst, "value", {
    get() {
      if (def.values.length > 1) {
        throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
      }
      return def.values[0];
    }
  });
});
function literal(value, params) {
  return new ZodLiteral({
    type: "literal",
    values: Array.isArray(value) ? value : [value],
    ...util_exports.normalizeParams(params)
  });
}
var ZodTransform = /* @__PURE__ */ $constructor("ZodTransform", (inst, def) => {
  _ensureDefaultMemoizer();
  $ZodTransform.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => transformProcessor(inst, ctx, json, params);
  inst._zod.parse = (payload, _ctx) => {
    if (_ctx.direction === "backward") {
      throw new $ZodEncodeError(inst.constructor.name);
    }
    payload.addIssue = (issue4) => {
      if (typeof issue4 === "string") {
        payload.issues.push(util_exports.issue(issue4, payload.value, def));
      } else {
        const _issue = issue4;
        if (_issue.fatal)
          _issue.continue = false;
        _issue.code ?? (_issue.code = "custom");
        if (!("input" in _issue))
          _issue.input = payload.value;
        _issue.inst ?? (_issue.inst = inst);
        payload.issues.push(util_exports.issue(_issue));
      }
    };
    const output = def.transform(payload.value, payload);
    if (output instanceof Promise) {
      return output.then((output2) => {
        payload.value = output2;
        return payload;
      });
    }
    payload.value = output;
    return payload;
  };
});
function transform(fn) {
  return new ZodTransform({
    type: "transform",
    transform: fn
  });
}
var ZodOptional = /* @__PURE__ */ $constructor("ZodOptional", (inst, def) => {
  $ZodOptional.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => optionalProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function optional(innerType) {
  return new ZodOptional({
    type: "optional",
    innerType
  });
}
var ZodExactOptional = /* @__PURE__ */ $constructor("ZodExactOptional", (inst, def) => {
  $ZodExactOptional.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => optionalProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function exactOptional(innerType) {
  return new ZodExactOptional({
    type: "optional",
    innerType
  });
}
var ZodNullable = /* @__PURE__ */ $constructor("ZodNullable", (inst, def) => {
  $ZodNullable.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => nullableProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function nullable(innerType) {
  return new ZodNullable({
    type: "nullable",
    innerType
  });
}
var ZodDefault = /* @__PURE__ */ $constructor("ZodDefault", (inst, def) => {
  $ZodDefault.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => defaultProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
  inst.removeDefault = inst.unwrap;
});
function _default(innerType, defaultValue) {
  return new ZodDefault({
    type: "default",
    innerType,
    get defaultValue() {
      return typeof defaultValue === "function" ? defaultValue() : util_exports.shallowClone(defaultValue);
    }
  });
}
var ZodPrefault = /* @__PURE__ */ $constructor("ZodPrefault", (inst, def) => {
  $ZodPrefault.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => prefaultProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function prefault(innerType, defaultValue) {
  return new ZodPrefault({
    type: "prefault",
    innerType,
    get defaultValue() {
      return typeof defaultValue === "function" ? defaultValue() : util_exports.shallowClone(defaultValue);
    }
  });
}
var ZodNonOptional = /* @__PURE__ */ $constructor("ZodNonOptional", (inst, def) => {
  $ZodNonOptional.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => nonoptionalProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function nonoptional(innerType, params) {
  return new ZodNonOptional({
    type: "nonoptional",
    innerType,
    ...util_exports.normalizeParams(params)
  });
}
var ZodCatch = /* @__PURE__ */ $constructor("ZodCatch", (inst, def) => {
  $ZodCatch.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => catchProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
  inst.removeCatch = inst.unwrap;
});
function _catch(innerType, catchValue) {
  return new ZodCatch({
    type: "catch",
    innerType,
    catchValue: typeof catchValue === "function" ? catchValue : util_exports.constantCatch(catchValue)
  });
}
var ZodPipe = /* @__PURE__ */ $constructor("ZodPipe", (inst, def) => {
  $ZodPipe.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => pipeProcessor(inst, ctx, json, params);
  inst.in = def.in;
  inst.out = def.out;
});
function pipe(in_, out) {
  return new ZodPipe({
    type: "pipe",
    in: in_,
    out
    // ...util.normalizeParams(params),
  });
}
var ZodPreprocess = /* @__PURE__ */ $constructor("ZodPreprocess", (inst, def) => {
  ZodPipe.init(inst, def);
  $ZodPreprocess.init(inst, def);
});
var ZodReadonly = /* @__PURE__ */ $constructor("ZodReadonly", (inst, def) => {
  $ZodReadonly.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => readonlyProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function readonly(innerType) {
  return new ZodReadonly({
    type: "readonly",
    innerType
  });
}
var ZodLazy = /* @__PURE__ */ $constructor("ZodLazy", (inst, def) => {
  $ZodLazy.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => lazyProcessor(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.getter();
});
function lazy(getter) {
  return new ZodLazy({
    type: "lazy",
    getter
  });
}
var ZodCustom = /* @__PURE__ */ $constructor("ZodCustom", (inst, def) => {
  $ZodCustom.init(inst, def);
  ZodType.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => customProcessor(inst, ctx, json, params);
});
function refine(fn, _params = {}) {
  return _refine(ZodCustom, fn, _params);
}
function superRefine(fn, params) {
  return _superRefine(fn, params);
}
function preprocess(fn, schema) {
  return new ZodPreprocess({
    type: "pipe",
    in: transform(fn),
    out: schema
  });
}

// node_modules/@modelcontextprotocol/core/node_modules/zod/v4/classic/compat.js
var ZodIssueCode = {
  invalid_type: "invalid_type",
  too_big: "too_big",
  too_small: "too_small",
  invalid_format: "invalid_format",
  not_multiple_of: "not_multiple_of",
  unrecognized_keys: "unrecognized_keys",
  invalid_union: "invalid_union",
  invalid_key: "invalid_key",
  invalid_element: "invalid_element",
  invalid_value: "invalid_value",
  custom: "custom"
};
var ZodFirstPartyTypeKind;
/* @__PURE__ */ (function(ZodFirstPartyTypeKind2) {
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));

// node_modules/@modelcontextprotocol/core/node_modules/zod/v4/classic/iso.js
var iso_exports = {};
__export(iso_exports, {
  ZodISODate: () => ZodISODate,
  ZodISODateTime: () => ZodISODateTime,
  ZodISODuration: () => ZodISODuration,
  ZodISOTime: () => ZodISOTime,
  date: () => date2,
  datetime: () => datetime2,
  duration: () => duration2,
  time: () => time2
});
function datetime2(params) {
  return _isoDateTime(ZodISODateTime, params);
}
function date2(params) {
  return _isoDate(ZodISODate, params);
}
function time2(params) {
  return _isoTime(ZodISOTime, params);
}
function duration2(params) {
  return _isoDuration(ZodISODuration, params);
}

// node_modules/@modelcontextprotocol/core/node_modules/zod/v4/classic/coerce.js
var coerce_exports = {};
__export(coerce_exports, {
  bigint: () => bigint2,
  boolean: () => boolean3,
  date: () => date3,
  number: () => number3,
  string: () => string3
});
function string3(params) {
  return _coercedString(ZodString, params);
}
function number3(params) {
  return _coercedNumber(ZodNumber, params);
}
function boolean3(params) {
  return _coercedBoolean(ZodBoolean, params);
}
function bigint2(params) {
  return _coercedBigint(ZodBigInt, params);
}
function date3(params) {
  return _coercedDate(ZodDate, params);
}

// node_modules/@modelcontextprotocol/core/dist/auth-CUe6YdwF.mjs
var LATEST_PROTOCOL_VERSION = "2025-11-25";
var DEFAULT_NEGOTIATED_PROTOCOL_VERSION = "2025-03-26";
var SUPPORTED_PROTOCOL_VERSIONS = [
  LATEST_PROTOCOL_VERSION,
  "2025-06-18",
  "2025-03-26",
  "2024-11-05",
  "2024-10-07"
];
var RELATED_TASK_META_KEY = "io.modelcontextprotocol/related-task";
var PROTOCOL_VERSION_META_KEY = "io.modelcontextprotocol/protocolVersion";
var CLIENT_INFO_META_KEY = "io.modelcontextprotocol/clientInfo";
var SERVER_INFO_META_KEY = "io.modelcontextprotocol/serverInfo";
var CLIENT_CAPABILITIES_META_KEY = "io.modelcontextprotocol/clientCapabilities";
var SUBSCRIPTION_ID_META_KEY = "io.modelcontextprotocol/subscriptionId";
var LOG_LEVEL_META_KEY = "io.modelcontextprotocol/logLevel";
var JSONRPC_VERSION = "2.0";
var JSONValueSchema = lazy(() => union([
  string2(),
  number2(),
  boolean2(),
  _null3(),
  record(string2(), JSONValueSchema),
  array(JSONValueSchema)
]));
var JSONObjectSchema = record(string2(), JSONValueSchema);
var JSONArraySchema = array(JSONValueSchema);
var ProgressTokenSchema = union([string2(), number2().int()]);
var CursorSchema = string2();
var TaskMetadataSchema = object({ ttl: number2().optional() });
var RelatedTaskMetadataSchema = object({ taskId: string2() });
var RequestMetaSchema = looseObject({
  progressToken: ProgressTokenSchema.optional(),
  [RELATED_TASK_META_KEY]: RelatedTaskMetadataSchema.optional()
});
var BaseRequestParamsSchema = object({ _meta: RequestMetaSchema.optional() });
var TaskAugmentedRequestParamsSchema = BaseRequestParamsSchema.extend({ task: TaskMetadataSchema.optional() });
var RequestSchema = object({
  method: string2(),
  params: BaseRequestParamsSchema.loose().optional()
});
var NotificationsParamsSchema = object({ _meta: RequestMetaSchema.optional() });
var NotificationSchema = object({
  method: string2(),
  params: NotificationsParamsSchema.loose().optional()
});
var ResultMetaObjectSchema = looseObject({ get [SERVER_INFO_META_KEY]() {
  return ImplementationSchema.optional().catch(void 0);
} });
var ResultSchema = looseObject({ _meta: ResultMetaObjectSchema.optional() });
var RequestIdSchema = union([string2(), number2().int()]);
var JSONRPCRequestSchema = object({
  jsonrpc: literal(JSONRPC_VERSION),
  id: RequestIdSchema,
  ...RequestSchema.shape
}).strict();
var JSONRPCNotificationSchema = object({
  jsonrpc: literal(JSONRPC_VERSION),
  ...NotificationSchema.shape
}).strict();
var JSONRPCResultResponseSchema = object({
  jsonrpc: literal(JSONRPC_VERSION),
  id: RequestIdSchema,
  result: ResultSchema
}).strict();
var JSONRPCErrorResponseSchema = object({
  jsonrpc: literal(JSONRPC_VERSION),
  id: RequestIdSchema.optional(),
  error: object({
    code: number2().int(),
    message: string2(),
    data: unknown().optional()
  })
}).strict();
var JSONRPCMessageSchema = union([
  JSONRPCRequestSchema,
  JSONRPCNotificationSchema,
  JSONRPCResultResponseSchema,
  JSONRPCErrorResponseSchema
]);
var JSONRPCResponseSchema = union([JSONRPCResultResponseSchema, JSONRPCErrorResponseSchema]);
var EmptyResultSchema = ResultSchema.strict();
var CancelledNotificationParamsSchema = NotificationsParamsSchema.extend({
  requestId: RequestIdSchema.optional(),
  reason: string2().optional()
});
var CancelledNotificationSchema = NotificationSchema.extend({
  method: literal("notifications/cancelled"),
  params: CancelledNotificationParamsSchema
});
var IconSchema = object({
  src: string2(),
  mimeType: string2().optional(),
  sizes: array(string2()).optional(),
  theme: _enum(["light", "dark"]).optional()
});
var IconsSchema = object({ icons: array(IconSchema).optional() });
var BaseMetadataSchema = object({
  name: string2(),
  title: string2().optional()
});
var ImplementationSchema = BaseMetadataSchema.extend({
  ...BaseMetadataSchema.shape,
  ...IconsSchema.shape,
  version: string2(),
  websiteUrl: string2().optional(),
  description: string2().optional()
});
var FormElicitationCapabilitySchema = intersection(object({ applyDefaults: boolean2().optional() }), JSONObjectSchema);
var ElicitationCapabilitySchema = preprocess((value) => {
  if (value && typeof value === "object" && !Array.isArray(value) && Object.keys(value).length === 0) return { form: {} };
  return value;
}, intersection(object({
  form: FormElicitationCapabilitySchema.optional(),
  url: JSONObjectSchema.optional()
}), JSONObjectSchema.optional()));
var ClientTasksCapabilitySchema = looseObject({
  list: JSONObjectSchema.optional(),
  cancel: JSONObjectSchema.optional(),
  requests: looseObject({
    sampling: looseObject({ createMessage: JSONObjectSchema.optional() }).optional(),
    elicitation: looseObject({ create: JSONObjectSchema.optional() }).optional()
  }).optional()
});
var ServerTasksCapabilitySchema = looseObject({
  list: JSONObjectSchema.optional(),
  cancel: JSONObjectSchema.optional(),
  requests: looseObject({ tools: looseObject({ call: JSONObjectSchema.optional() }).optional() }).optional()
});
var ClientCapabilitiesSchema = object({
  experimental: record(string2(), JSONObjectSchema).optional(),
  sampling: object({
    context: JSONObjectSchema.optional(),
    tools: JSONObjectSchema.optional()
  }).optional(),
  elicitation: ElicitationCapabilitySchema.optional(),
  roots: object({ listChanged: boolean2().optional() }).optional(),
  tasks: ClientTasksCapabilitySchema.optional(),
  extensions: record(string2(), JSONObjectSchema).optional()
});
var InitializeRequestParamsSchema = BaseRequestParamsSchema.extend({
  protocolVersion: string2(),
  capabilities: ClientCapabilitiesSchema,
  clientInfo: ImplementationSchema
});
var InitializeRequestSchema = RequestSchema.extend({
  method: literal("initialize"),
  params: InitializeRequestParamsSchema
});
var ServerCapabilitiesSchema = object({
  experimental: record(string2(), JSONObjectSchema).optional(),
  logging: JSONObjectSchema.optional(),
  completions: JSONObjectSchema.optional(),
  prompts: object({ listChanged: boolean2().optional() }).optional(),
  resources: object({
    subscribe: boolean2().optional(),
    listChanged: boolean2().optional()
  }).optional(),
  tools: object({ listChanged: boolean2().optional() }).optional(),
  tasks: ServerTasksCapabilitySchema.optional(),
  extensions: record(string2(), JSONObjectSchema).optional()
});
var InitializeResultSchema = ResultSchema.extend({
  protocolVersion: string2(),
  capabilities: ServerCapabilitiesSchema,
  serverInfo: ImplementationSchema,
  instructions: string2().optional()
});
var InitializedNotificationSchema = NotificationSchema.extend({
  method: literal("notifications/initialized"),
  params: NotificationsParamsSchema.optional()
});
var DiscoverRequestSchema = RequestSchema.extend({
  method: literal("server/discover"),
  params: BaseRequestParamsSchema.optional()
});
var DiscoverResultSchema = ResultSchema.extend({
  supportedVersions: array(string2()),
  capabilities: ServerCapabilitiesSchema,
  instructions: string2().optional()
});
var PingRequestSchema = RequestSchema.extend({
  method: literal("ping"),
  params: BaseRequestParamsSchema.optional()
});
var ProgressSchema = object({
  progress: number2(),
  total: optional(number2()),
  message: optional(string2())
});
var ProgressNotificationParamsSchema = object({
  ...NotificationsParamsSchema.shape,
  ...ProgressSchema.shape,
  progressToken: ProgressTokenSchema
});
var ProgressNotificationSchema = NotificationSchema.extend({
  method: literal("notifications/progress"),
  params: ProgressNotificationParamsSchema
});
var PaginatedRequestParamsSchema = BaseRequestParamsSchema.extend({ cursor: CursorSchema.optional() });
var PaginatedRequestSchema = RequestSchema.extend({ params: PaginatedRequestParamsSchema.optional() });
var PaginatedResultSchema = ResultSchema.extend({ nextCursor: CursorSchema.optional() });
var ResourceContentsSchema = object({
  uri: string2(),
  mimeType: optional(string2()),
  _meta: record(string2(), unknown()).optional()
});
var TextResourceContentsSchema = ResourceContentsSchema.extend({ text: string2() });
var Base64Schema = string2().refine((val) => {
  try {
    atob(val);
    return true;
  } catch {
    return false;
  }
}, { message: "Invalid Base64 string" });
var BlobResourceContentsSchema = ResourceContentsSchema.extend({ blob: Base64Schema });
var RoleSchema = _enum(["user", "assistant"]);
var AnnotationsSchema = object({
  audience: array(RoleSchema).optional(),
  priority: number2().min(0).max(1).optional(),
  lastModified: iso_exports.datetime({ offset: true }).optional()
});
var ResourceSchema = object({
  ...BaseMetadataSchema.shape,
  ...IconsSchema.shape,
  uri: string2(),
  description: optional(string2()),
  mimeType: optional(string2()),
  size: optional(number2()),
  annotations: AnnotationsSchema.optional(),
  _meta: optional(looseObject({}))
});
var ResourceTemplateSchema = object({
  ...BaseMetadataSchema.shape,
  ...IconsSchema.shape,
  uriTemplate: string2(),
  description: optional(string2()),
  mimeType: optional(string2()),
  annotations: AnnotationsSchema.optional(),
  _meta: optional(looseObject({}))
});
var ListResourcesRequestSchema = PaginatedRequestSchema.extend({ method: literal("resources/list") });
var ListResourcesResultSchema = PaginatedResultSchema.extend({ resources: array(ResourceSchema) });
var ListResourceTemplatesRequestSchema = PaginatedRequestSchema.extend({ method: literal("resources/templates/list") });
var ListResourceTemplatesResultSchema = PaginatedResultSchema.extend({ resourceTemplates: array(ResourceTemplateSchema) });
var ResourceRequestParamsSchema = BaseRequestParamsSchema.extend({ uri: string2() });
var ReadResourceRequestParamsSchema = ResourceRequestParamsSchema;
var ReadResourceRequestSchema = RequestSchema.extend({
  method: literal("resources/read"),
  params: ReadResourceRequestParamsSchema
});
var ReadResourceResultSchema = ResultSchema.extend({ contents: array(union([TextResourceContentsSchema, BlobResourceContentsSchema])) });
var ResourceListChangedNotificationSchema = NotificationSchema.extend({
  method: literal("notifications/resources/list_changed"),
  params: NotificationsParamsSchema.optional()
});
var SubscribeRequestParamsSchema = ResourceRequestParamsSchema;
var SubscribeRequestSchema = RequestSchema.extend({
  method: literal("resources/subscribe"),
  params: SubscribeRequestParamsSchema
});
var UnsubscribeRequestParamsSchema = ResourceRequestParamsSchema;
var UnsubscribeRequestSchema = RequestSchema.extend({
  method: literal("resources/unsubscribe"),
  params: UnsubscribeRequestParamsSchema
});
var SubscriptionFilterSchema = object({
  toolsListChanged: boolean2().optional(),
  promptsListChanged: boolean2().optional(),
  resourcesListChanged: boolean2().optional(),
  resourceSubscriptions: array(string2()).optional()
});
var SubscriptionsListenRequestParamsSchema = BaseRequestParamsSchema.extend({ notifications: SubscriptionFilterSchema });
var SubscriptionsListenRequestSchema = RequestSchema.extend({
  method: literal("subscriptions/listen"),
  params: SubscriptionsListenRequestParamsSchema
});
var SubscriptionsAcknowledgedNotificationParamsSchema = NotificationsParamsSchema.extend({ notifications: SubscriptionFilterSchema });
var SubscriptionsAcknowledgedNotificationSchema = NotificationSchema.extend({
  method: literal("notifications/subscriptions/acknowledged"),
  params: SubscriptionsAcknowledgedNotificationParamsSchema
});
var SubscriptionsListenResultMetaSchema = ResultMetaObjectSchema.extend({ [SUBSCRIPTION_ID_META_KEY]: RequestIdSchema });
var SubscriptionsListenResultSchema = ResultSchema.extend({ _meta: SubscriptionsListenResultMetaSchema });
var ResourceUpdatedNotificationParamsSchema = NotificationsParamsSchema.extend({ uri: string2() });
var ResourceUpdatedNotificationSchema = NotificationSchema.extend({
  method: literal("notifications/resources/updated"),
  params: ResourceUpdatedNotificationParamsSchema
});
var PromptArgumentSchema = object({
  name: string2(),
  description: optional(string2()),
  required: optional(boolean2())
});
var PromptSchema = object({
  ...BaseMetadataSchema.shape,
  ...IconsSchema.shape,
  description: optional(string2()),
  arguments: optional(array(PromptArgumentSchema)),
  _meta: optional(looseObject({}))
});
var ListPromptsRequestSchema = PaginatedRequestSchema.extend({ method: literal("prompts/list") });
var ListPromptsResultSchema = PaginatedResultSchema.extend({ prompts: array(PromptSchema) });
var GetPromptRequestParamsSchema = BaseRequestParamsSchema.extend({
  name: string2(),
  arguments: record(string2(), string2()).optional()
});
var GetPromptRequestSchema = RequestSchema.extend({
  method: literal("prompts/get"),
  params: GetPromptRequestParamsSchema
});
var TextContentSchema = object({
  type: literal("text"),
  text: string2(),
  annotations: AnnotationsSchema.optional(),
  _meta: record(string2(), unknown()).optional()
});
var ImageContentSchema = object({
  type: literal("image"),
  data: Base64Schema,
  mimeType: string2(),
  annotations: AnnotationsSchema.optional(),
  _meta: record(string2(), unknown()).optional()
});
var AudioContentSchema = object({
  type: literal("audio"),
  data: Base64Schema,
  mimeType: string2(),
  annotations: AnnotationsSchema.optional(),
  _meta: record(string2(), unknown()).optional()
});
var ToolUseContentSchema = object({
  type: literal("tool_use"),
  name: string2(),
  id: string2(),
  input: record(string2(), unknown()),
  _meta: record(string2(), unknown()).optional()
});
var EmbeddedResourceSchema = object({
  type: literal("resource"),
  resource: union([TextResourceContentsSchema, BlobResourceContentsSchema]),
  annotations: AnnotationsSchema.optional(),
  _meta: record(string2(), unknown()).optional()
});
var ResourceLinkSchema = ResourceSchema.extend({ type: literal("resource_link") });
var ContentBlockSchema = union([
  TextContentSchema,
  ImageContentSchema,
  AudioContentSchema,
  ResourceLinkSchema,
  EmbeddedResourceSchema
]);
var PromptMessageSchema = object({
  role: RoleSchema,
  content: ContentBlockSchema
});
var GetPromptResultSchema = ResultSchema.extend({
  description: string2().optional(),
  messages: array(PromptMessageSchema)
});
var PromptListChangedNotificationSchema = NotificationSchema.extend({
  method: literal("notifications/prompts/list_changed"),
  params: NotificationsParamsSchema.optional()
});
var ToolAnnotationsSchema = object({
  title: string2().optional(),
  readOnlyHint: boolean2().optional(),
  destructiveHint: boolean2().optional(),
  idempotentHint: boolean2().optional(),
  openWorldHint: boolean2().optional()
});
var ToolExecutionSchema = object({ taskSupport: _enum([
  "required",
  "optional",
  "forbidden"
]).optional() });
var ToolSchema = object({
  ...BaseMetadataSchema.shape,
  ...IconsSchema.shape,
  description: string2().optional(),
  inputSchema: object({
    type: literal("object"),
    properties: record(string2(), JSONValueSchema).optional(),
    required: array(string2()).optional()
  }).catchall(unknown()),
  outputSchema: looseObject({ $schema: string2().optional() }).optional(),
  annotations: ToolAnnotationsSchema.optional(),
  execution: ToolExecutionSchema.optional(),
  _meta: record(string2(), unknown()).optional()
});
var ListToolsRequestSchema = PaginatedRequestSchema.extend({ method: literal("tools/list") });
var ListToolsResultSchema = PaginatedResultSchema.extend({ tools: array(ToolSchema) });
var CallToolResultSchema = ResultSchema.extend({
  content: array(ContentBlockSchema).default([]),
  structuredContent: unknown().optional(),
  isError: boolean2().optional()
});
var CompatibilityCallToolResultSchema = CallToolResultSchema.or(ResultSchema.extend({ toolResult: unknown() }));
var CallToolRequestParamsSchema = TaskAugmentedRequestParamsSchema.extend({
  name: string2(),
  arguments: record(string2(), unknown()).optional()
});
var CallToolRequestSchema = RequestSchema.extend({
  method: literal("tools/call"),
  params: CallToolRequestParamsSchema
});
var ToolListChangedNotificationSchema = NotificationSchema.extend({
  method: literal("notifications/tools/list_changed"),
  params: NotificationsParamsSchema.optional()
});
var ListChangedOptionsBaseSchema = object({
  autoRefresh: boolean2().default(true),
  debounceMs: number2().int().nonnegative().default(300)
});
var LoggingLevelSchema = _enum([
  "debug",
  "info",
  "notice",
  "warning",
  "error",
  "critical",
  "alert",
  "emergency"
]);
var SetLevelRequestParamsSchema = BaseRequestParamsSchema.extend({ level: LoggingLevelSchema });
var SetLevelRequestSchema = RequestSchema.extend({
  method: literal("logging/setLevel"),
  params: SetLevelRequestParamsSchema
});
var LoggingMessageNotificationParamsSchema = NotificationsParamsSchema.extend({
  level: LoggingLevelSchema,
  logger: string2().optional(),
  data: unknown()
});
var LoggingMessageNotificationSchema = NotificationSchema.extend({
  method: literal("notifications/message"),
  params: LoggingMessageNotificationParamsSchema
});
var ModelHintSchema = object({ name: string2().optional() });
var ModelPreferencesSchema = object({
  hints: array(ModelHintSchema).optional(),
  costPriority: number2().min(0).max(1).optional(),
  speedPriority: number2().min(0).max(1).optional(),
  intelligencePriority: number2().min(0).max(1).optional()
});
var ToolChoiceSchema = object({ mode: _enum([
  "auto",
  "required",
  "none"
]).optional() });
var ToolResultContentSchema = object({
  type: literal("tool_result"),
  toolUseId: string2().describe("The unique identifier for the corresponding tool call."),
  content: array(ContentBlockSchema),
  structuredContent: unknown().optional(),
  isError: boolean2().optional(),
  _meta: record(string2(), unknown()).optional()
});
var SamplingContentSchema = discriminatedUnion("type", [
  TextContentSchema,
  ImageContentSchema,
  AudioContentSchema
]);
var SamplingMessageContentBlockSchema = discriminatedUnion("type", [
  TextContentSchema,
  ImageContentSchema,
  AudioContentSchema,
  ToolUseContentSchema,
  ToolResultContentSchema
]);
var SamplingMessageSchema = object({
  role: RoleSchema,
  content: union([SamplingMessageContentBlockSchema, array(SamplingMessageContentBlockSchema)]),
  _meta: record(string2(), unknown()).optional()
});
var CreateMessageRequestParamsSchema = TaskAugmentedRequestParamsSchema.extend({
  messages: array(SamplingMessageSchema),
  modelPreferences: ModelPreferencesSchema.optional(),
  systemPrompt: string2().optional(),
  includeContext: _enum([
    "none",
    "thisServer",
    "allServers"
  ]).optional(),
  temperature: number2().optional(),
  maxTokens: number2().int(),
  stopSequences: array(string2()).optional(),
  metadata: JSONObjectSchema.optional(),
  tools: array(ToolSchema).optional(),
  toolChoice: ToolChoiceSchema.optional()
});
var CreateMessageRequestSchema = RequestSchema.extend({
  method: literal("sampling/createMessage"),
  params: CreateMessageRequestParamsSchema
});
var CreateMessageResultSchema = ResultSchema.extend({
  model: string2(),
  stopReason: optional(_enum([
    "endTurn",
    "stopSequence",
    "maxTokens"
  ]).or(string2())),
  role: RoleSchema,
  content: SamplingContentSchema
});
var CreateMessageResultWithToolsSchema = ResultSchema.extend({
  model: string2(),
  stopReason: optional(_enum([
    "endTurn",
    "stopSequence",
    "maxTokens",
    "toolUse"
  ]).or(string2())),
  role: RoleSchema,
  content: union([SamplingMessageContentBlockSchema, array(SamplingMessageContentBlockSchema)])
});
var BooleanSchemaSchema = object({
  type: literal("boolean"),
  title: string2().optional(),
  description: string2().optional(),
  default: boolean2().optional()
});
var StringSchemaSchema = object({
  type: literal("string"),
  title: string2().optional(),
  description: string2().optional(),
  minLength: number2().optional(),
  maxLength: number2().optional(),
  format: _enum([
    "email",
    "uri",
    "date",
    "date-time"
  ]).optional(),
  default: string2().optional()
});
var NumberSchemaSchema = object({
  type: _enum(["number", "integer"]),
  title: string2().optional(),
  description: string2().optional(),
  minimum: number2().optional(),
  maximum: number2().optional(),
  default: number2().optional()
});
var UntitledSingleSelectEnumSchemaSchema = object({
  type: literal("string"),
  title: string2().optional(),
  description: string2().optional(),
  enum: array(string2()),
  default: string2().optional()
});
var TitledSingleSelectEnumSchemaSchema = object({
  type: literal("string"),
  title: string2().optional(),
  description: string2().optional(),
  oneOf: array(object({
    const: string2(),
    title: string2()
  })),
  default: string2().optional()
});
var LegacyTitledEnumSchemaSchema = object({
  type: literal("string"),
  title: string2().optional(),
  description: string2().optional(),
  enum: array(string2()),
  enumNames: array(string2()).optional(),
  default: string2().optional()
});
var SingleSelectEnumSchemaSchema = union([UntitledSingleSelectEnumSchemaSchema, TitledSingleSelectEnumSchemaSchema]);
var UntitledMultiSelectEnumSchemaSchema = object({
  type: literal("array"),
  title: string2().optional(),
  description: string2().optional(),
  minItems: number2().optional(),
  maxItems: number2().optional(),
  items: object({
    type: literal("string"),
    enum: array(string2())
  }),
  default: array(string2()).optional()
});
var TitledMultiSelectEnumSchemaSchema = object({
  type: literal("array"),
  title: string2().optional(),
  description: string2().optional(),
  minItems: number2().optional(),
  maxItems: number2().optional(),
  items: object({ anyOf: array(object({
    const: string2(),
    title: string2()
  })) }),
  default: array(string2()).optional()
});
var MultiSelectEnumSchemaSchema = union([UntitledMultiSelectEnumSchemaSchema, TitledMultiSelectEnumSchemaSchema]);
var EnumSchemaSchema = union([
  LegacyTitledEnumSchemaSchema,
  SingleSelectEnumSchemaSchema,
  MultiSelectEnumSchemaSchema
]);
var PrimitiveSchemaDefinitionSchema = union([
  EnumSchemaSchema,
  BooleanSchemaSchema,
  StringSchemaSchema,
  NumberSchemaSchema
]);
var ElicitRequestFormParamsSchema = TaskAugmentedRequestParamsSchema.extend({
  mode: literal("form").optional(),
  message: string2(),
  requestedSchema: object({
    type: literal("object"),
    properties: record(string2(), PrimitiveSchemaDefinitionSchema),
    required: array(string2()).optional()
  }).catchall(unknown())
});
var ElicitRequestURLParamsSchema = TaskAugmentedRequestParamsSchema.extend({
  mode: literal("url"),
  message: string2(),
  elicitationId: string2(),
  url: string2().url()
});
var ElicitRequestParamsSchema = union([ElicitRequestFormParamsSchema, ElicitRequestURLParamsSchema]);
var ElicitRequestSchema = RequestSchema.extend({
  method: literal("elicitation/create"),
  params: ElicitRequestParamsSchema
});
var ElicitationCompleteNotificationParamsSchema = NotificationsParamsSchema.extend({ elicitationId: string2() });
var ElicitationCompleteNotificationSchema = NotificationSchema.extend({
  method: literal("notifications/elicitation/complete"),
  params: ElicitationCompleteNotificationParamsSchema
});
var ElicitResultSchema = ResultSchema.extend({
  action: _enum([
    "accept",
    "decline",
    "cancel"
  ]),
  content: preprocess((val) => val === null ? void 0 : val, record(string2(), union([
    string2(),
    number2(),
    boolean2(),
    array(string2())
  ])).optional())
});
var ResourceTemplateReferenceSchema = object({
  type: literal("ref/resource"),
  uri: string2()
});
var PromptReferenceSchema = object({
  type: literal("ref/prompt"),
  name: string2()
});
var CompleteRequestParamsSchema = BaseRequestParamsSchema.extend({
  ref: union([PromptReferenceSchema, ResourceTemplateReferenceSchema]),
  argument: object({
    name: string2(),
    value: string2()
  }),
  context: object({ arguments: record(string2(), string2()).optional() }).optional()
});
var CompleteRequestSchema = RequestSchema.extend({
  method: literal("completion/complete"),
  params: CompleteRequestParamsSchema
});
var CompleteResultSchema = ResultSchema.extend({ completion: looseObject({
  values: array(string2()).max(100),
  total: optional(number2().int()),
  hasMore: optional(boolean2())
}) });
var RootSchema = object({
  uri: string2().startsWith("file://"),
  name: string2().optional(),
  _meta: record(string2(), unknown()).optional()
});
var ListRootsRequestSchema = RequestSchema.extend({
  method: literal("roots/list"),
  params: BaseRequestParamsSchema.optional()
});
var ListRootsResultSchema = ResultSchema.extend({ roots: array(RootSchema) });
var RootsListChangedNotificationSchema = NotificationSchema.extend({
  method: literal("notifications/roots/list_changed"),
  params: NotificationsParamsSchema.optional()
});
var TaskCreationParamsSchema = looseObject({
  ttl: number2().optional(),
  pollInterval: number2().optional()
});
var TaskStatusSchema = _enum([
  "working",
  "input_required",
  "completed",
  "failed",
  "cancelled"
]);
var TaskSchema = object({
  taskId: string2(),
  status: TaskStatusSchema,
  ttl: union([number2(), _null3()]),
  createdAt: string2(),
  lastUpdatedAt: string2(),
  pollInterval: optional(number2()),
  statusMessage: optional(string2())
});
var CreateTaskResultSchema = ResultSchema.extend({ task: TaskSchema });
var TaskStatusNotificationParamsSchema = NotificationsParamsSchema.merge(TaskSchema);
var TaskStatusNotificationSchema = NotificationSchema.extend({
  method: literal("notifications/tasks/status"),
  params: TaskStatusNotificationParamsSchema
});
var GetTaskRequestSchema = RequestSchema.extend({
  method: literal("tasks/get"),
  params: BaseRequestParamsSchema.extend({ taskId: string2() })
});
var GetTaskResultSchema = ResultSchema.merge(TaskSchema);
var GetTaskPayloadRequestSchema = RequestSchema.extend({
  method: literal("tasks/result"),
  params: BaseRequestParamsSchema.extend({ taskId: string2() })
});
var GetTaskPayloadResultSchema = ResultSchema.loose();
var ListTasksRequestSchema = PaginatedRequestSchema.extend({ method: literal("tasks/list") });
var ListTasksResultSchema = PaginatedResultSchema.extend({ tasks: array(TaskSchema) });
var CancelTaskRequestSchema = RequestSchema.extend({
  method: literal("tasks/cancel"),
  params: BaseRequestParamsSchema.extend({ taskId: string2() })
});
var CancelTaskResultSchema = ResultSchema.merge(TaskSchema);
var ClientRequestSchema = union([
  PingRequestSchema,
  InitializeRequestSchema,
  DiscoverRequestSchema,
  CompleteRequestSchema,
  SetLevelRequestSchema,
  GetPromptRequestSchema,
  ListPromptsRequestSchema,
  ListResourcesRequestSchema,
  ListResourceTemplatesRequestSchema,
  ReadResourceRequestSchema,
  SubscribeRequestSchema,
  UnsubscribeRequestSchema,
  SubscriptionsListenRequestSchema,
  CallToolRequestSchema,
  ListToolsRequestSchema
]);
var ClientNotificationSchema = union([
  CancelledNotificationSchema,
  ProgressNotificationSchema,
  InitializedNotificationSchema,
  RootsListChangedNotificationSchema
]);
var ClientResultSchema = union([
  EmptyResultSchema,
  CreateMessageResultSchema,
  CreateMessageResultWithToolsSchema,
  ElicitResultSchema,
  ListRootsResultSchema
]);
var ServerRequestSchema = union([
  PingRequestSchema,
  CreateMessageRequestSchema,
  ElicitRequestSchema,
  ListRootsRequestSchema
]);
var ServerNotificationSchema = union([
  CancelledNotificationSchema,
  ProgressNotificationSchema,
  LoggingMessageNotificationSchema,
  ResourceUpdatedNotificationSchema,
  ResourceListChangedNotificationSchema,
  ToolListChangedNotificationSchema,
  PromptListChangedNotificationSchema,
  SubscriptionsAcknowledgedNotificationSchema,
  ElicitationCompleteNotificationSchema
]);
var ServerResultSchema = union([
  EmptyResultSchema,
  InitializeResultSchema,
  DiscoverResultSchema,
  CompleteResultSchema,
  GetPromptResultSchema,
  ListPromptsResultSchema,
  ListResourcesResultSchema,
  ListResourceTemplatesResultSchema,
  ReadResourceResultSchema,
  CallToolResultSchema,
  ListToolsResultSchema,
  SubscriptionsListenResultSchema
]);
var SafeUrlSchema = url().superRefine((val, ctx) => {
  if (!URL.canParse(val)) {
    ctx.addIssue({
      code: ZodIssueCode.custom,
      message: "URL must be parseable",
      fatal: true
    });
    return NEVER;
  }
}).refine((url3) => {
  const u = new URL(url3);
  return u.protocol !== "javascript:" && u.protocol !== "data:" && u.protocol !== "vbscript:";
}, { message: "URL cannot use javascript:, data:, or vbscript: scheme" });
var OAuthProtectedResourceMetadataSchema = looseObject({
  resource: string2().url(),
  authorization_servers: array(SafeUrlSchema).optional(),
  jwks_uri: string2().url().optional(),
  scopes_supported: array(string2()).optional(),
  bearer_methods_supported: array(string2()).optional(),
  resource_signing_alg_values_supported: array(string2()).optional(),
  resource_name: string2().optional(),
  resource_documentation: string2().optional(),
  resource_policy_uri: string2().url().optional(),
  resource_tos_uri: string2().url().optional(),
  tls_client_certificate_bound_access_tokens: boolean2().optional(),
  authorization_details_types_supported: array(string2()).optional(),
  dpop_signing_alg_values_supported: array(string2()).optional(),
  dpop_bound_access_tokens_required: boolean2().optional()
});
var OAuthMetadataSchema = looseObject({
  issuer: string2(),
  authorization_endpoint: SafeUrlSchema,
  token_endpoint: SafeUrlSchema,
  registration_endpoint: SafeUrlSchema.optional(),
  scopes_supported: array(string2()).optional(),
  response_types_supported: array(string2()),
  response_modes_supported: array(string2()).optional(),
  grant_types_supported: array(string2()).optional(),
  token_endpoint_auth_methods_supported: array(string2()).optional(),
  token_endpoint_auth_signing_alg_values_supported: array(string2()).optional(),
  service_documentation: SafeUrlSchema.optional(),
  revocation_endpoint: SafeUrlSchema.optional(),
  revocation_endpoint_auth_methods_supported: array(string2()).optional(),
  revocation_endpoint_auth_signing_alg_values_supported: array(string2()).optional(),
  introspection_endpoint: string2().optional(),
  introspection_endpoint_auth_methods_supported: array(string2()).optional(),
  introspection_endpoint_auth_signing_alg_values_supported: array(string2()).optional(),
  code_challenge_methods_supported: array(string2()).optional(),
  client_id_metadata_document_supported: boolean2().optional(),
  authorization_response_iss_parameter_supported: boolean2().optional().catch(void 0)
});
var OpenIdProviderMetadataSchema = looseObject({
  issuer: string2(),
  authorization_endpoint: SafeUrlSchema,
  token_endpoint: SafeUrlSchema,
  userinfo_endpoint: SafeUrlSchema.optional(),
  jwks_uri: SafeUrlSchema,
  registration_endpoint: SafeUrlSchema.optional(),
  scopes_supported: array(string2()).optional(),
  response_types_supported: array(string2()),
  response_modes_supported: array(string2()).optional(),
  grant_types_supported: array(string2()).optional(),
  acr_values_supported: array(string2()).optional(),
  subject_types_supported: array(string2()),
  id_token_signing_alg_values_supported: array(string2()),
  id_token_encryption_alg_values_supported: array(string2()).optional(),
  id_token_encryption_enc_values_supported: array(string2()).optional(),
  userinfo_signing_alg_values_supported: array(string2()).optional(),
  userinfo_encryption_alg_values_supported: array(string2()).optional(),
  userinfo_encryption_enc_values_supported: array(string2()).optional(),
  request_object_signing_alg_values_supported: array(string2()).optional(),
  request_object_encryption_alg_values_supported: array(string2()).optional(),
  request_object_encryption_enc_values_supported: array(string2()).optional(),
  token_endpoint_auth_methods_supported: array(string2()).optional(),
  token_endpoint_auth_signing_alg_values_supported: array(string2()).optional(),
  display_values_supported: array(string2()).optional(),
  claim_types_supported: array(string2()).optional(),
  claims_supported: array(string2()).optional(),
  service_documentation: string2().optional(),
  claims_locales_supported: array(string2()).optional(),
  ui_locales_supported: array(string2()).optional(),
  claims_parameter_supported: boolean2().optional(),
  request_parameter_supported: boolean2().optional(),
  request_uri_parameter_supported: boolean2().optional(),
  require_request_uri_registration: boolean2().optional(),
  op_policy_uri: SafeUrlSchema.optional(),
  op_tos_uri: SafeUrlSchema.optional(),
  client_id_metadata_document_supported: boolean2().optional(),
  authorization_response_iss_parameter_supported: boolean2().optional().catch(void 0)
});
var OpenIdProviderDiscoveryMetadataSchema = object({
  ...OpenIdProviderMetadataSchema.shape,
  ...OAuthMetadataSchema.pick({ code_challenge_methods_supported: true }).shape
});
var OAuthTokensSchema = object({
  access_token: string2(),
  id_token: string2().optional(),
  token_type: string2(),
  expires_in: coerce_exports.number().optional(),
  scope: string2().optional(),
  refresh_token: string2().optional()
}).strip();
var IdJagTokenExchangeResponseSchema = object({
  issued_token_type: literal("urn:ietf:params:oauth:token-type:id-jag"),
  access_token: string2(),
  token_type: string2().optional(),
  expires_in: number2().optional(),
  scope: string2().optional()
}).strip();
var OAuthErrorResponseSchema = object({
  error: string2(),
  error_description: string2().optional(),
  error_uri: string2().optional()
});
var OptionalSafeUrlSchema = SafeUrlSchema.optional().or(literal("").transform(() => void 0));
var OAuthClientMetadataSchema = object({
  redirect_uris: array(SafeUrlSchema),
  token_endpoint_auth_method: string2().optional(),
  grant_types: array(string2()).optional(),
  response_types: array(string2()).optional(),
  application_type: string2().optional(),
  client_name: string2().optional(),
  client_uri: SafeUrlSchema.optional(),
  logo_uri: OptionalSafeUrlSchema,
  scope: string2().optional(),
  contacts: array(string2()).optional(),
  tos_uri: OptionalSafeUrlSchema,
  policy_uri: string2().optional(),
  jwks_uri: SafeUrlSchema.optional(),
  jwks: any().optional(),
  software_id: string2().optional(),
  software_version: string2().optional(),
  software_statement: string2().optional()
}).strip();
var OAuthClientInformationSchema = object({
  client_id: string2(),
  client_secret: string2().optional(),
  client_id_issued_at: number2().optional(),
  client_secret_expires_at: number2().optional()
}).strip();
var OAuthClientInformationFullSchema = OAuthClientMetadataSchema.merge(OAuthClientInformationSchema);
var OAuthClientRegistrationErrorSchema = object({
  error: string2(),
  error_description: string2().optional()
}).strip();
var OAuthTokenRevocationRequestSchema = object({
  token: string2(),
  token_type_hint: string2().optional()
}).strip();

// node_modules/@modelcontextprotocol/server/node_modules/zod/v4/core/util.js
var util_exports2 = {};
__export(util_exports2, {
  BIGINT_FORMAT_RANGES: () => BIGINT_FORMAT_RANGES2,
  CONSTANT_CATCH: () => CONSTANT_CATCH2,
  Class: () => Class2,
  NUMBER_FORMAT_RANGES: () => NUMBER_FORMAT_RANGES2,
  aborted: () => aborted2,
  allowsEval: () => allowsEval2,
  assert: () => assert2,
  assertEqual: () => assertEqual2,
  assertIs: () => assertIs2,
  assertNever: () => assertNever2,
  assertNotEqual: () => assertNotEqual2,
  assignProp: () => assignProp2,
  attachSchema: () => attachSchema2,
  base64ToUint8Array: () => base64ToUint8Array2,
  base64urlToUint8Array: () => base64urlToUint8Array2,
  cached: () => cached2,
  captureStackTrace: () => captureStackTrace2,
  cleanEnum: () => cleanEnum2,
  cleanRegex: () => cleanRegex2,
  clone: () => clone2,
  cloneDef: () => cloneDef2,
  codePointLength: () => codePointLength2,
  constantCatch: () => constantCatch2,
  createTransparentProxy: () => createTransparentProxy2,
  defineLazy: () => defineLazy2,
  defineLazyInternal: () => defineLazyInternal2,
  esc: () => esc2,
  escapeRegex: () => escapeRegex2,
  explicitlyAborted: () => explicitlyAborted2,
  extend: () => extend2,
  finalizeIssue: () => finalizeIssue2,
  floatSafeRemainder: () => floatSafeRemainder2,
  getElementAtPath: () => getElementAtPath2,
  getEnumValues: () => getEnumValues2,
  getLengthableOrigin: () => getLengthableOrigin2,
  getParsedType: () => getParsedType2,
  getSizableOrigin: () => getSizableOrigin2,
  hexToUint8Array: () => hexToUint8Array2,
  hide: () => hide2,
  installLazyProp: () => installLazyProp2,
  isObject: () => isObject2,
  isPlainObject: () => isPlainObject2,
  issue: () => issue2,
  joinValues: () => joinValues2,
  jsonStringifyReplacer: () => jsonStringifyReplacer2,
  members: () => members2,
  merge: () => merge2,
  mergeDefs: () => mergeDefs2,
  normalizeParams: () => normalizeParams2,
  nullish: () => nullish2,
  numKeys: () => numKeys2,
  objectClone: () => objectClone2,
  omit: () => omit2,
  optionalKeys: () => optionalKeys2,
  own: () => own2,
  parsedType: () => parsedType2,
  partial: () => partial2,
  pick: () => pick2,
  prefixIssues: () => prefixIssues2,
  primitiveTypes: () => primitiveTypes2,
  promiseAllObject: () => promiseAllObject2,
  propertyKeyTypes: () => propertyKeyTypes2,
  randomString: () => randomString2,
  required: () => required2,
  safeExtend: () => safeExtend2,
  shallowClone: () => shallowClone2,
  slugify: () => slugify2,
  stringifyPrimitive: () => stringifyPrimitive2,
  toZod: () => toZod2,
  uint8ArrayToBase64: () => uint8ArrayToBase642,
  uint8ArrayToBase64url: () => uint8ArrayToBase64url2,
  uint8ArrayToHex: () => uint8ArrayToHex2,
  unwrapMessage: () => unwrapMessage2
});
function assertEqual2(val) {
  return val;
}
function assertNotEqual2(val) {
  return val;
}
function toZod2() {
  return (schema) => schema;
}
function assertIs2(_arg) {
}
function assertNever2(_x) {
  throw new Error("Unexpected value in exhaustive check");
}
function assert2(_) {
}
function getEnumValues2(entries) {
  const numericValues = Object.values(entries).filter((v) => typeof v === "number");
  const values = Object.entries(entries).filter(([k, _]) => numericValues.indexOf(+k) === -1).map(([_, v]) => v);
  return values;
}
function joinValues2(array4, separator = "|") {
  return array4.map((val) => stringifyPrimitive2(val)).join(separator);
}
function jsonStringifyReplacer2(_, value) {
  if (typeof value === "bigint")
    return value.toString();
  return value;
}
function cached2(getter) {
  const set = false;
  return {
    get value() {
      if (!set) {
        const value = getter();
        Object.defineProperty(this, "value", { value });
        return value;
      }
      throw new Error("cached value already set");
    }
  };
}
function nullish2(input) {
  return input === null || input === void 0;
}
function cleanRegex2(source) {
  const start = source.startsWith("^") ? 1 : 0;
  const end = source.endsWith("$") ? source.length - 1 : source.length;
  return source.slice(start, end);
}
function floatSafeRemainder2(val, step) {
  const ratio = val / step;
  const roundedRatio = Math.round(ratio);
  const tolerance = 4 * Number.EPSILON * Math.max(Math.abs(ratio), 1);
  if (Math.abs(ratio - roundedRatio) < tolerance)
    return 0;
  return ratio - roundedRatio;
}
var EVALUATING2 = /* @__PURE__ */ Symbol("evaluating");
function defineLazy2(object4, key, getter) {
  let value = void 0;
  Object.defineProperty(object4, key, {
    get() {
      if (value === EVALUATING2) {
        return void 0;
      }
      if (value === void 0) {
        value = EVALUATING2;
        value = getter();
      }
      return value;
    },
    set(v) {
      Object.defineProperty(object4, key, {
        value: v
        // configurable: true,
      });
    },
    configurable: true
  });
}
function objectClone2(obj) {
  return Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));
}
function assignProp2(target, prop, value) {
  Object.defineProperty(target, prop, {
    value,
    writable: true,
    enumerable: true,
    configurable: true
  });
}
function mergeDefs2(...defs) {
  const mergedDescriptors = {};
  for (const def of defs) {
    const descriptors = Object.getOwnPropertyDescriptors(def);
    Object.assign(mergedDescriptors, descriptors);
  }
  return Object.defineProperties({}, mergedDescriptors);
}
function cloneDef2(schema) {
  return mergeDefs2(schema._zod.def);
}
function getElementAtPath2(obj, path) {
  if (!path)
    return obj;
  return path.reduce((acc, key) => acc?.[key], obj);
}
function promiseAllObject2(promisesObj) {
  const keys = Object.keys(promisesObj);
  const promises = keys.map((key) => promisesObj[key]);
  return Promise.all(promises).then((results) => {
    const resolvedObj = {};
    for (let i = 0; i < keys.length; i++) {
      resolvedObj[keys[i]] = results[i];
    }
    return resolvedObj;
  });
}
function randomString2(length = 10) {
  const chars = "abcdefghijklmnopqrstuvwxyz";
  let str = "";
  for (let i = 0; i < length; i++) {
    str += chars[Math.floor(Math.random() * chars.length)];
  }
  return str;
}
function esc2(str) {
  return JSON.stringify(str);
}
function slugify2(input) {
  return input.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
var captureStackTrace2 = "captureStackTrace" in Error ? Error.captureStackTrace : (..._args) => {
};
function isObject2(data) {
  return typeof data === "object" && data !== null && !Array.isArray(data);
}
var allowsEval2 = /* @__PURE__ */ cached2(() => {
  if (globalConfig2.jitless) {
    return false;
  }
  if (typeof navigator !== "undefined" && navigator?.userAgent?.includes("Cloudflare")) {
    return false;
  }
  try {
    const F = Function;
    new F("");
    return true;
  } catch (_) {
    return false;
  }
});
function isPlainObject2(o) {
  if (isObject2(o) === false)
    return false;
  const ctor = o.constructor;
  if (ctor === void 0)
    return true;
  if (typeof ctor !== "function")
    return true;
  const prot = ctor.prototype;
  if (isObject2(prot) === false)
    return false;
  if (Object.prototype.hasOwnProperty.call(prot, "isPrototypeOf") === false) {
    return false;
  }
  return true;
}
function shallowClone2(o) {
  if (isPlainObject2(o))
    return { ...o };
  if (Array.isArray(o))
    return [...o];
  if (o instanceof Map)
    return new Map(o);
  if (o instanceof Set)
    return new Set(o);
  return o;
}
function numKeys2(data) {
  let keyCount = 0;
  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      keyCount++;
    }
  }
  return keyCount;
}
var getParsedType2 = (data) => {
  const t = typeof data;
  switch (t) {
    case "undefined":
      return "undefined";
    case "string":
      return "string";
    case "number":
      return Number.isNaN(data) ? "nan" : "number";
    case "boolean":
      return "boolean";
    case "function":
      return "function";
    case "bigint":
      return "bigint";
    case "symbol":
      return "symbol";
    case "object":
      if (Array.isArray(data)) {
        return "array";
      }
      if (data === null) {
        return "null";
      }
      if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
        return "promise";
      }
      if (typeof Map !== "undefined" && data instanceof Map) {
        return "map";
      }
      if (typeof Set !== "undefined" && data instanceof Set) {
        return "set";
      }
      if (typeof Date !== "undefined" && data instanceof Date) {
        return "date";
      }
      if (typeof File !== "undefined" && data instanceof File) {
        return "file";
      }
      return "object";
    default:
      throw new Error(`Unknown data type: ${t}`);
  }
};
var propertyKeyTypes2 = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
var primitiveTypes2 = /* @__PURE__ */ new Set([
  "string",
  "number",
  "bigint",
  "boolean",
  "symbol",
  "undefined"
]);
function escapeRegex2(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function clone2(inst, def, params) {
  const cl = new inst._zod.constr(def ?? inst._zod.def);
  if (!def || params?.parent)
    cl._zod.parent = inst;
  return cl;
}
function normalizeParams2(_params) {
  const params = _params;
  if (!params)
    return {};
  if (typeof params === "string")
    return { error: () => params };
  if (params?.message !== void 0) {
    if (params?.error !== void 0)
      throw new Error("Cannot specify both `message` and `error` params");
    params.error = params.message;
  }
  delete params.message;
  if (typeof params.error === "string")
    return { ...params, error: () => params.error };
  return params;
}
function createTransparentProxy2(getter) {
  let target;
  return new Proxy({}, {
    get(_, prop, receiver) {
      target ?? (target = getter());
      return Reflect.get(target, prop, receiver);
    },
    set(_, prop, value, receiver) {
      target ?? (target = getter());
      return Reflect.set(target, prop, value, receiver);
    },
    has(_, prop) {
      target ?? (target = getter());
      return Reflect.has(target, prop);
    },
    deleteProperty(_, prop) {
      target ?? (target = getter());
      return Reflect.deleteProperty(target, prop);
    },
    ownKeys(_) {
      target ?? (target = getter());
      return Reflect.ownKeys(target);
    },
    getOwnPropertyDescriptor(_, prop) {
      target ?? (target = getter());
      return Reflect.getOwnPropertyDescriptor(target, prop);
    },
    defineProperty(_, prop, descriptor) {
      target ?? (target = getter());
      return Reflect.defineProperty(target, prop, descriptor);
    }
  });
}
function stringifyPrimitive2(value) {
  if (typeof value === "bigint")
    return value.toString() + "n";
  if (typeof value === "string")
    return `"${value}"`;
  return `${value}`;
}
function optionalKeys2(shape) {
  return Object.keys(shape).filter((k) => {
    return shape[k]._zod.optin !== void 0 && shape[k]._zod.optout === "optional";
  });
}
var NUMBER_FORMAT_RANGES2 = /* @__PURE__ */ (() => ({
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
}))();
var BIGINT_FORMAT_RANGES2 = {
  int64: [/* @__PURE__ */ BigInt("-9223372036854775808"), /* @__PURE__ */ BigInt("9223372036854775807")],
  uint64: [/* @__PURE__ */ BigInt(0), /* @__PURE__ */ BigInt("18446744073709551615")]
};
function pick2(schema, mask) {
  const currDef = schema._zod.def;
  const checks = currDef.checks;
  const hasChecks = checks && checks.length > 0;
  if (hasChecks) {
    throw new Error(".pick() cannot be used on object schemas containing refinements");
  }
  const def = mergeDefs2(schema._zod.def, {
    get shape() {
      const newShape = {};
      for (const key of Reflect.ownKeys(mask)) {
        if (!Object.prototype.hasOwnProperty.call(currDef.shape, key)) {
          throw new Error(`Unrecognized key: "${String(key)}"`);
        }
        if (!mask[key])
          continue;
        assignProp2(newShape, key, currDef.shape[key]);
      }
      assignProp2(this, "shape", newShape);
      return newShape;
    },
    checks: []
  });
  return clone2(schema, def);
}
function omit2(schema, mask) {
  const currDef = schema._zod.def;
  const checks = currDef.checks;
  const hasChecks = checks && checks.length > 0;
  if (hasChecks) {
    throw new Error(".omit() cannot be used on object schemas containing refinements");
  }
  const def = mergeDefs2(schema._zod.def, {
    get shape() {
      const newShape = { ...schema._zod.def.shape };
      for (const key of Reflect.ownKeys(mask)) {
        if (!Object.prototype.hasOwnProperty.call(currDef.shape, key)) {
          throw new Error(`Unrecognized key: "${String(key)}"`);
        }
        if (!mask[key])
          continue;
        delete newShape[key];
      }
      assignProp2(this, "shape", newShape);
      return newShape;
    },
    checks: []
  });
  return clone2(schema, def);
}
function extend2(schema, shape) {
  if (!isPlainObject2(shape)) {
    throw new Error("Invalid input to extend: expected a plain object");
  }
  const checks = schema._zod.def.checks;
  const hasChecks = checks && checks.length > 0;
  if (hasChecks) {
    const existingShape = schema._zod.def.shape;
    for (const key of Reflect.ownKeys(shape)) {
      if (Object.getOwnPropertyDescriptor(existingShape, key) !== void 0) {
        throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
      }
    }
  }
  const def = mergeDefs2(schema._zod.def, {
    get shape() {
      const _shape = { ...schema._zod.def.shape, ...shape };
      assignProp2(this, "shape", _shape);
      return _shape;
    }
  });
  return clone2(schema, def);
}
function safeExtend2(schema, shape) {
  if (!isPlainObject2(shape)) {
    throw new Error("Invalid input to safeExtend: expected a plain object");
  }
  const def = mergeDefs2(schema._zod.def, {
    get shape() {
      const _shape = { ...schema._zod.def.shape, ...shape };
      assignProp2(this, "shape", _shape);
      return _shape;
    }
  });
  return clone2(schema, def);
}
function merge2(a, b) {
  if (!b?._zod?.def) {
    throw new Error("Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.");
  }
  if (a._zod.def.checks?.length) {
    throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
  }
  const def = mergeDefs2(a._zod.def, {
    get shape() {
      const _shape = { ...a._zod.def.shape, ...b._zod.def.shape };
      assignProp2(this, "shape", _shape);
      return _shape;
    },
    get catchall() {
      return b._zod.def.catchall;
    },
    checks: b._zod.def.checks ?? []
  });
  return clone2(a, def);
}
function partial2(Class4, schema, mask, name = "partial") {
  const currDef = schema._zod.def;
  const checks = currDef.checks;
  const hasChecks = checks && checks.length > 0;
  if (hasChecks) {
    throw new Error(`.${name}() cannot be used on object schemas containing refinements`);
  }
  const def = mergeDefs2(schema._zod.def, {
    get shape() {
      const oldShape = schema._zod.def.shape;
      const shape = { ...oldShape };
      if (mask) {
        for (const key of Reflect.ownKeys(mask)) {
          if (!Object.prototype.hasOwnProperty.call(oldShape, key)) {
            throw new Error(`Unrecognized key: "${String(key)}"`);
          }
          if (!mask[key])
            continue;
          shape[key] = Class4 ? new Class4({
            type: "optional",
            innerType: oldShape[key]
          }) : oldShape[key];
        }
      } else {
        for (const key of Reflect.ownKeys(oldShape)) {
          shape[key] = Class4 ? new Class4({
            type: "optional",
            innerType: oldShape[key]
          }) : oldShape[key];
        }
      }
      assignProp2(this, "shape", shape);
      return shape;
    },
    checks: []
  });
  return clone2(schema, def);
}
function required2(Class4, schema, mask) {
  const def = mergeDefs2(schema._zod.def, {
    get shape() {
      const oldShape = schema._zod.def.shape;
      const shape = { ...oldShape };
      if (mask) {
        for (const key of Reflect.ownKeys(mask)) {
          if (!Object.prototype.hasOwnProperty.call(shape, key)) {
            throw new Error(`Unrecognized key: "${String(key)}"`);
          }
          if (!mask[key])
            continue;
          shape[key] = new Class4({
            type: "nonoptional",
            innerType: oldShape[key]
          });
        }
      } else {
        for (const key of Reflect.ownKeys(oldShape)) {
          shape[key] = new Class4({
            type: "nonoptional",
            innerType: oldShape[key]
          });
        }
      }
      assignProp2(this, "shape", shape);
      return shape;
    }
  });
  return clone2(schema, def);
}
function aborted2(x, startIndex = 0) {
  if (x.aborted === true)
    return true;
  for (let i = startIndex; i < x.issues.length; i++) {
    if (x.issues[i]?.continue !== true) {
      return true;
    }
  }
  return false;
}
function explicitlyAborted2(x, startIndex = 0) {
  if (x.aborted === true)
    return true;
  for (let i = startIndex; i < x.issues.length; i++) {
    if (x.issues[i]?.continue === false) {
      return true;
    }
  }
  return false;
}
function prefixIssues2(path, issues) {
  return issues.map((iss) => {
    var _a5;
    (_a5 = iss).path ?? (_a5.path = []);
    iss.path.unshift(path);
    return iss;
  });
}
function unwrapMessage2(message) {
  return typeof message === "string" ? message : message?.message;
}
function attachSchema2(issues, start, inst) {
  var _a5;
  for (let i = start; i < issues.length; i++) {
    (_a5 = issues[i]).schema ?? (_a5.schema = inst);
  }
}
function finalizeIssue2(iss, ctx, config4) {
  var _a5;
  const traits = iss.inst?._zod?.traits;
  if (traits?.has("$ZodType")) {
    if (traits.has("$ZodCheck"))
      (_a5 = iss).schema ?? (_a5.schema = iss.inst);
    else
      iss.schema = iss.inst;
  }
  const schemaError = iss.schema !== iss.inst ? iss.schema?._zod.def?.error : void 0;
  const message = iss.message ? iss.message : unwrapMessage2(iss.inst?._zod.def?.error?.(iss)) ?? unwrapMessage2(schemaError?.(iss)) ?? unwrapMessage2(ctx?.error?.(iss)) ?? unwrapMessage2(config4.customError?.(iss)) ?? unwrapMessage2(config4.localeError?.(iss)) ?? "Invalid input";
  const { inst: _inst, schema: _schema, continue: _continue, input: _input, ...rest } = iss;
  rest.path ?? (rest.path = []);
  rest.message = message;
  if (ctx?.reportInput) {
    rest.input = _input;
  }
  return rest;
}
function getSizableOrigin2(input) {
  if (input instanceof Set)
    return "set";
  if (input instanceof Map)
    return "map";
  if (input instanceof File)
    return "file";
  return "unknown";
}
var highSurrogate2 = /[\uD800-\uDBFF]/;
function codePointLength2(str) {
  const units = str.length;
  if (!highSurrogate2.test(str))
    return units;
  let count = units;
  for (let i = 0; i < units - 1; i++) {
    if ((str.charCodeAt(i) & 64512) === 55296 && (str.charCodeAt(i + 1) & 64512) === 56320) {
      count--;
      i++;
    }
  }
  return count;
}
function getLengthableOrigin2(input) {
  if (Array.isArray(input))
    return "array";
  if (typeof input === "string")
    return "string";
  return "unknown";
}
function parsedType2(data) {
  const t = typeof data;
  switch (t) {
    case "number": {
      return Number.isNaN(data) ? "nan" : "number";
    }
    case "object": {
      if (data === null) {
        return "null";
      }
      if (Array.isArray(data)) {
        return "array";
      }
      const obj = data;
      if (obj && Object.getPrototypeOf(obj) !== Object.prototype && "constructor" in obj && obj.constructor) {
        return obj.constructor.name;
      }
    }
  }
  return t;
}
function issue2(...args) {
  const [iss, input, inst] = args;
  if (typeof iss === "string") {
    return {
      message: iss,
      code: "custom",
      input,
      inst
    };
  }
  return { ...iss };
}
function cleanEnum2(obj) {
  return Object.entries(obj).filter(([k, _]) => {
    return Number.isNaN(Number.parseInt(k, 10));
  }).map((el) => el[1]);
}
function base64ToUint8Array2(base644) {
  const binaryString = atob(base644);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}
function uint8ArrayToBase642(bytes) {
  let binaryString = "";
  for (let i = 0; i < bytes.length; i++) {
    binaryString += String.fromCharCode(bytes[i]);
  }
  return btoa(binaryString);
}
function base64urlToUint8Array2(base64url4) {
  const base644 = base64url4.replace(/-/g, "+").replace(/_/g, "/");
  const padding = "=".repeat((4 - base644.length % 4) % 4);
  return base64ToUint8Array2(base644 + padding);
}
function uint8ArrayToBase64url2(bytes) {
  return uint8ArrayToBase642(bytes).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}
function hexToUint8Array2(hex) {
  const cleanHex = hex.replace(/^0x/, "");
  if (cleanHex.length % 2 !== 0) {
    throw new Error("Invalid hex string length");
  }
  const bytes = new Uint8Array(cleanHex.length / 2);
  for (let i = 0; i < cleanHex.length; i += 2) {
    bytes[i / 2] = Number.parseInt(cleanHex.slice(i, i + 2), 16);
  }
  return bytes;
}
function uint8ArrayToHex2(bytes) {
  return Array.from(bytes).map((b) => b.toString(16).padStart(2, "0")).join("");
}
var Class2 = class {
  constructor(..._args) {
  }
};
function members2(proto, table) {
  for (const key in table) {
    const desc = Object.getOwnPropertyDescriptor(table, key);
    if (desc.get)
      Object.defineProperty(proto, key, { ...desc, enumerable: false });
    else
      defineBound2(proto, key, desc.value);
  }
}
function own2(inst, key, value, enumerable = true) {
  Object.defineProperty(inst, key, { configurable: true, writable: true, enumerable, value });
  return value;
}
function hide2(inst, key, value) {
  return own2(inst, key, value, false);
}
function defineBound2(proto, key, fn) {
  Object.defineProperty(proto, key, {
    configurable: true,
    get() {
      return this == null ? fn : own2(this, key, fn.bind(this));
    },
    set(value) {
      own2(this, key, value);
    }
  });
}
function claim2(inst, sentinel) {
  const proto = Object.getPrototypeOf(inst);
  return sentinel in proto ? void 0 : proto;
}
var installing2;
var broke2 = false;
var breaker2 = {
  configurable: true,
  get() {
    broke2 = true;
    return void 0;
  }
};
function defineLazyInternal2(inst, key, compute) {
  const proto = Object.getPrototypeOf(inst._zod);
  if (key in proto && installing2 !== inst._zod) {
    installing2 = void 0;
    return;
  }
  installing2 = inst._zod;
  Object.defineProperty(proto, key, {
    configurable: true,
    get() {
      Object.defineProperty(this, key, breaker2);
      const outer = broke2;
      broke2 = false;
      try {
        const value = compute(this);
        if (broke2)
          delete this[key];
        else
          Object.defineProperty(this, key, { configurable: true, writable: true, value });
        broke2 = broke2 || outer;
        return value;
      } catch (err) {
        delete this[key];
        broke2 = broke2 || outer;
        throw err;
      }
    },
    set(value) {
      Object.defineProperty(this, key, { configurable: true, writable: true, value });
    }
  });
}
function installLazyProp2(inst, key, make, enumerable) {
  const proto = claim2(inst, key);
  if (!proto)
    return;
  Object.defineProperty(proto, key, {
    configurable: true,
    get() {
      const desc = { configurable: true, writable: true, enumerable, value: void 0 };
      Object.defineProperty(this, key, desc);
      desc.value = make(this);
      Object.defineProperty(this, key, desc);
      return desc.value;
    },
    set(value) {
      Object.defineProperty(this, key, { configurable: true, writable: true, enumerable, value });
    }
  });
}
var CONSTANT_CATCH2 = "~constantCatch";
function constantCatch2(value) {
  const fn = () => value;
  fn[CONSTANT_CATCH2] = true;
  return fn;
}

// node_modules/@modelcontextprotocol/server/node_modules/zod/v4/core/core.js
var _a3;
var _zodDesc3 = { value: void 0, enumerable: false };
var _E2 = "captureStackTrace" in Error ? Error : null;
function newError2(Definition) {
  const E = _E2;
  if (E) {
    const saved = E.stackTraceLimit;
    if (typeof saved === "number") {
      try {
        E.stackTraceLimit = 0;
      } catch {
        _E2 = null;
        return new Definition();
      }
      try {
        return new Definition();
      } finally {
        E.stackTraceLimit = saved;
      }
    }
  }
  return new Definition();
}
// @__NO_SIDE_EFFECTS__
function $constructor2(name, initializer7, proto, params) {
  const zodProto = {};
  function Internals(def) {
    this.def = def;
    this.constr = _;
    this.traits = /* @__PURE__ */ new Set();
  }
  Internals.prototype = zodProto;
  const protoMembers = proto;
  const initialized = protoMembers && /* @__PURE__ */ new WeakSet();
  function init(inst, def) {
    if (!inst._zod) {
      _zodDesc3.value = new Internals(def);
      try {
        Object.defineProperty(inst, "_zod", _zodDesc3);
      } finally {
        _zodDesc3.value = void 0;
      }
    }
    if (inst._zod.traits.has(name)) {
      return;
    }
    inst._zod.traits.add(name);
    initializer7(inst, def);
    if (initialized) {
      const own3 = Object.getPrototypeOf(inst);
      const ctorProto = inst._zod.constr.prototype;
      let up = own3;
      while (up && up !== ctorProto)
        up = Object.getPrototypeOf(up);
      const target = up ?? own3;
      if (!initialized.has(target)) {
        initialized.add(target);
        members2(target, protoMembers);
      }
    }
    const proto2 = _.prototype;
    for (const k in proto2) {
      if (!Object.prototype.hasOwnProperty.call(proto2, k))
        continue;
      if (!(k in inst)) {
        inst[k] = proto2[k].bind(inst);
      }
    }
  }
  const Parent = params?.Parent ?? Object;
  class Definition extends Parent {
  }
  Object.defineProperty(Definition, "name", { value: name });
  function _(def) {
    const inst = params?.Parent ? newError2(Definition) : this;
    init(inst, def);
    const deferred = inst._zod.deferred;
    if (deferred) {
      for (const fn of deferred) {
        fn();
      }
      inst._zod.deferred = void 0;
    }
    const pp = globalThis.__zod_globalConfig?.postProcessor;
    if (pp)
      pp(inst);
    return inst;
  }
  Object.defineProperty(_, "init", { value: init });
  Object.defineProperty(_, Symbol.hasInstance, {
    value: (inst) => {
      if (params?.Parent && inst instanceof params.Parent)
        return true;
      return inst?._zod?.traits?.has(name);
    }
  });
  Object.defineProperty(_, "name", { value: name });
  return _;
}
var $ZodAsyncError2 = class extends Error {
  constructor() {
    super(`Encountered Promise during synchronous parse. Use .parseAsync() instead.`);
  }
};
var $ZodEncodeError2 = class extends Error {
  constructor(name) {
    super(`Encountered unidirectional transform during encode: ${name}`);
    this.name = "ZodEncodeError";
  }
};
(_a3 = globalThis).__zod_globalConfig ?? (_a3.__zod_globalConfig = {});
var globalConfig2 = globalThis.__zod_globalConfig;
function config2(newConfig) {
  if (newConfig)
    Object.assign(globalConfig2, newConfig);
  return globalConfig2;
}

// node_modules/@modelcontextprotocol/server/node_modules/zod/v4/core/errors.js
function _getMessage2() {
  const internals = this._zod;
  internals.message ?? (internals.message = JSON.stringify(internals.def, jsonStringifyReplacer2, 2));
  return internals.message;
}
function _setMessage2(value) {
  this._zod.message = value;
}
var _messageDesc2 = {
  get: _getMessage2,
  set: _setMessage2,
  enumerable: true,
  configurable: true
};
var _zodDesc4 = { value: void 0, enumerable: false };
var _issuesDesc2 = { value: void 0, enumerable: false };
var _installedToString2 = /* @__PURE__ */ new WeakSet([Object.prototype, Error.prototype]);
var initializer3 = (inst, def) => {
  inst.name = "$ZodError";
  _zodDesc4.value = inst._zod;
  Object.defineProperty(inst, "_zod", _zodDesc4);
  _issuesDesc2.value = def;
  Object.defineProperty(inst, "issues", _issuesDesc2);
  _zodDesc4.value = void 0;
  _issuesDesc2.value = void 0;
  Object.defineProperty(inst, "message", _messageDesc2);
  const proto = Object.getPrototypeOf(inst);
  if (!_installedToString2.has(proto)) {
    _installedToString2.add(proto);
    Object.defineProperty(proto, "toString", {
      configurable: true,
      enumerable: false,
      get() {
        const value = () => this.message;
        Object.defineProperty(this, "toString", { value, configurable: true, writable: true });
        return value;
      },
      set(value) {
        Object.defineProperty(this, "toString", { value, configurable: true, writable: true });
      }
    });
  }
};
var $ZodError2 = $constructor2("$ZodError", initializer3);
var $ZodRealError2 = $constructor2("$ZodError", initializer3, void 0, {
  Parent: Error
});
function node2(obj, key, make) {
  if (!Object.prototype.hasOwnProperty.call(obj, key)) {
    if (key === "__proto__") {
      Object.defineProperty(obj, key, { value: make(), writable: true, enumerable: true, configurable: true });
    } else {
      obj[key] = make();
    }
  }
  return obj[key];
}
function flattenError2(error3, mapper = (issue4) => issue4.message) {
  const fieldErrors = {};
  const formErrors = [];
  for (const sub of error3.issues) {
    if (sub.path.length > 0) {
      node2(fieldErrors, sub.path[0], () => []).push(mapper(sub));
    } else {
      formErrors.push(mapper(sub));
    }
  }
  return { formErrors, fieldErrors };
}
function formatError2(error3, mapper = (issue4) => issue4.message) {
  const fieldErrors = { _errors: [] };
  const processError = (error4, path = []) => {
    for (const issue4 of error4.issues) {
      if (issue4.code === "invalid_union" && issue4.errors.length) {
        issue4.errors.map((issues) => processError({ issues }, [...path, ...issue4.path]));
      } else if (issue4.code === "invalid_key") {
        processError({ issues: issue4.issues }, [...path, ...issue4.path]);
      } else if (issue4.code === "invalid_element") {
        processError({ issues: issue4.issues }, [...path, ...issue4.path]);
      } else {
        const fullpath = [...path, ...issue4.path];
        if (fullpath.length === 0) {
          fieldErrors._errors.push(mapper(issue4));
        } else {
          let curr = fieldErrors;
          let i = 0;
          while (i < fullpath.length) {
            const el = fullpath[i];
            const terminal = i === fullpath.length - 1;
            if (el === "_errors") {
              if (terminal)
                curr._errors.push(mapper(issue4));
              i++;
              continue;
            }
            if (!Object.prototype.hasOwnProperty.call(curr, el)) {
              Object.defineProperty(curr, el, {
                value: { _errors: [] },
                enumerable: true,
                writable: true,
                configurable: true
              });
            }
            const node3 = curr[el];
            if (terminal) {
              node3._errors.push(mapper(issue4));
            }
            curr = node3;
            i++;
          }
        }
      }
    }
  };
  processError(error3);
  return fieldErrors;
}

// node_modules/@modelcontextprotocol/server/node_modules/zod/v4/core/parse.js
function finalizeParams2(callee, params) {
  return { callee: params?.callee ?? callee, Err: params?.Err };
}
var _parse3 = (_Err) => {
  const fn = (schema, value, _ctx, _params) => {
    const ctx = _ctx ? { ..._ctx, async: false } : { async: false };
    const result = schema._zod.run({ value, issues: [] }, ctx);
    if (result instanceof Promise) {
      throw new $ZodAsyncError2();
    }
    if (result.issues.length) {
      const e = new (_params?.Err ?? _Err)(result.issues.map((iss) => finalizeIssue2(iss, ctx, config2())));
      captureStackTrace2(e, _params?.callee ?? fn);
      throw e;
    }
    return result.value;
  };
  return fn;
};
var _parseAsync3 = (_Err) => {
  const fn = async (schema, value, _ctx, params) => {
    const ctx = _ctx ? { ..._ctx, async: true } : { async: true };
    let result = schema._zod.run({ value, issues: [] }, ctx);
    if (result instanceof Promise)
      result = await result;
    if (result.issues.length) {
      const e = new (params?.Err ?? _Err)(result.issues.map((iss) => finalizeIssue2(iss, ctx, config2())));
      captureStackTrace2(e, params?.callee ?? fn);
      throw e;
    }
    return result.value;
  };
  return fn;
};
var _safeParse2 = (_Err) => (schema, value, _ctx) => {
  const ctx = _ctx ? { ..._ctx, async: false } : { async: false };
  const result = schema._zod.run({ value, issues: [] }, ctx);
  if (result instanceof Promise) {
    throw new $ZodAsyncError2();
  }
  return result.issues.length ? {
    success: false,
    error: new (_Err ?? $ZodError2)(result.issues.map((iss) => finalizeIssue2(iss, ctx, config2())))
  } : { success: true, data: result.value };
};
var safeParse3 = /* @__PURE__ */ _safeParse2($ZodRealError2);
var _safeParseAsync2 = (_Err) => async (schema, value, _ctx) => {
  const ctx = _ctx ? { ..._ctx, async: true } : { async: true };
  let result = schema._zod.run({ value, issues: [] }, ctx);
  if (result instanceof Promise)
    result = await result;
  return result.issues.length ? {
    success: false,
    error: new _Err(result.issues.map((iss) => finalizeIssue2(iss, ctx, config2())))
  } : { success: true, data: result.value };
};
var safeParseAsync3 = /* @__PURE__ */ _safeParseAsync2($ZodRealError2);
var _encode3 = (_Err) => {
  const parse6 = _parse3(_Err);
  const fn = (schema, value, _ctx, _params) => {
    const ctx = _ctx ? { ..._ctx, direction: "backward" } : { direction: "backward" };
    return parse6(schema, value, ctx, finalizeParams2(fn, _params));
  };
  return fn;
};
var _decode3 = (_Err) => {
  const parse6 = _parse3(_Err);
  const fn = (schema, value, _ctx, _params) => {
    return parse6(schema, value, _ctx, finalizeParams2(fn, _params));
  };
  return fn;
};
var _encodeAsync3 = (_Err) => {
  const parseAsync6 = _parseAsync3(_Err);
  const fn = async (schema, value, _ctx, _params) => {
    const ctx = _ctx ? { ..._ctx, direction: "backward" } : { direction: "backward" };
    return await parseAsync6(schema, value, ctx, finalizeParams2(fn, _params));
  };
  return fn;
};
var _decodeAsync3 = (_Err) => {
  const parseAsync6 = _parseAsync3(_Err);
  const fn = async (schema, value, _ctx, _params) => {
    return await parseAsync6(schema, value, _ctx, finalizeParams2(fn, _params));
  };
  return fn;
};
var _safeEncode2 = (_Err) => (schema, value, _ctx) => {
  const ctx = _ctx ? { ..._ctx, direction: "backward" } : { direction: "backward" };
  return _safeParse2(_Err)(schema, value, ctx);
};
var _safeDecode2 = (_Err) => (schema, value, _ctx) => {
  return _safeParse2(_Err)(schema, value, _ctx);
};
var _safeEncodeAsync2 = (_Err) => async (schema, value, _ctx) => {
  const ctx = _ctx ? { ..._ctx, direction: "backward" } : { direction: "backward" };
  return _safeParseAsync2(_Err)(schema, value, ctx);
};
var _safeDecodeAsync2 = (_Err) => async (schema, value, _ctx) => {
  return _safeParseAsync2(_Err)(schema, value, _ctx);
};

// node_modules/@modelcontextprotocol/server/node_modules/zod/v4/core/regexes.js
var cuid3 = /^[cC][0-9a-z]{6,}$/;
var cuid22 = /^[0-9a-z]+$/;
var ulid2 = /^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/;
var xid2 = /^[0-9a-vA-V]{20}$/;
var ksuid2 = /^[A-Za-z0-9]{27}$/;
var nanoid2 = /^[a-zA-Z0-9_-]{21}$/;
function nanoidOfLength2(length) {
  return new RegExp(`^[a-zA-Z0-9_-]{${length}}$`);
}
var duration3 = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;
var guid2 = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/;
var uuid2 = (version4) => {
  if (!version4)
    return /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;
  return new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${version4}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`);
};
var email2 = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;
var _emoji3 = `^[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$`;
function emoji2() {
  return new RegExp(_emoji3, "u");
}
var ipv42 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var ipv62 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/;
var cidrv42 = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/;
var cidrv62 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
var base642 = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/;
var base64url2 = /^[A-Za-z0-9_-]*$/;
var httpProtocol2 = /^https?$/;
var e1642 = /^\+[1-9]\d{6,14}$/;
var dateSource2 = `(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))`;
function anchor2(source) {
  return new RegExp(`^${source}$`);
}
var date4 = /* @__PURE__ */ anchor2(dateSource2);
function timeSource2(args) {
  const hhmm = `(?:[01]\\d|2[0-3]):[0-5]\\d`;
  const regex2 = typeof args.precision === "number" ? args.precision === -1 ? `${hhmm}` : args.precision === 0 ? `${hhmm}:[0-5]\\d` : `${hhmm}:[0-5]\\d\\.\\d{${args.precision}}` : args.seconds ? `${hhmm}:[0-5]\\d(?:\\.\\d+)?` : `${hhmm}(?::[0-5]\\d(?:\\.\\d+)?)?`;
  return regex2;
}
function time3(args) {
  return new RegExp(`^${timeSource2(args)}$`);
}
function datetime3(args) {
  const opts = ["Z"];
  if (args.offset)
    opts.push(`([+-](?:[01]\\d|2[0-3]):[0-5]\\d)`);
  const qualified = `${timeSource2({ precision: args.precision, seconds: true })}(?:${opts.join("|")})`;
  const timeRegex = args.local ? `${qualified}|${timeSource2({ precision: args.precision })}` : qualified;
  return new RegExp(`^${dateSource2}T(?:${timeRegex})$`);
}
var string4 = (params) => {
  const regex2 = params ? `[\\s\\S]{${params?.minimum ?? 0},${params?.maximum ?? ""}}` : `[\\s\\S]*`;
  return new RegExp(`^${regex2}$`);
};
var integer2 = /^-?\d+$/;
var number4 = /^-?\d+(?:\.\d+)?$/;
var boolean4 = /^(?:true|false)$/i;
var _null4 = /^null$/i;
var lowercase2 = /^[^A-Z]*$/;
var uppercase2 = /^[^a-z]*$/;

// node_modules/@modelcontextprotocol/server/node_modules/zod/v4/core/checks.js
var $ZodCheck2 = /* @__PURE__ */ $constructor2("$ZodCheck", (inst, def) => {
  var _a5;
  inst._zod ?? (inst._zod = {});
  inst._zod.def = def;
  (_a5 = inst._zod).onattach ?? (_a5.onattach = []);
});
var _whenHasLength2 = (payload) => {
  const val = payload.value;
  return !nullish2(val) && val.length !== void 0;
};
var numericOriginMap2 = {
  number: "number",
  bigint: "bigint",
  object: "date"
};
var $ZodCheckLessThan2 = /* @__PURE__ */ $constructor2("$ZodCheckLessThan", (inst, def) => {
  $ZodCheck2.init(inst, def);
  const origin = numericOriginMap2[typeof def.value];
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    const curr = (def.inclusive ? bag.maximum : bag.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
    if (def.value < curr) {
      if (def.inclusive)
        bag.maximum = def.value;
      else
        bag.exclusiveMaximum = def.value;
    }
  });
  inst._zod.check = (payload) => {
    if (def.inclusive ? payload.value <= def.value : payload.value < def.value) {
      return;
    }
    payload.issues.push({
      origin: numericOriginMap2[typeof payload.value] ?? origin,
      code: "too_big",
      maximum: typeof def.value === "object" ? def.value.getTime() : def.value,
      input: payload.value,
      inclusive: def.inclusive,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckGreaterThan2 = /* @__PURE__ */ $constructor2("$ZodCheckGreaterThan", (inst, def) => {
  $ZodCheck2.init(inst, def);
  const origin = numericOriginMap2[typeof def.value];
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    const curr = (def.inclusive ? bag.minimum : bag.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
    if (def.value > curr) {
      if (def.inclusive)
        bag.minimum = def.value;
      else
        bag.exclusiveMinimum = def.value;
    }
  });
  inst._zod.check = (payload) => {
    if (def.inclusive ? payload.value >= def.value : payload.value > def.value) {
      return;
    }
    payload.issues.push({
      origin: numericOriginMap2[typeof payload.value] ?? origin,
      code: "too_small",
      minimum: typeof def.value === "object" ? def.value.getTime() : def.value,
      input: payload.value,
      inclusive: def.inclusive,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckMultipleOf2 = /* @__PURE__ */ $constructor2("$ZodCheckMultipleOf", (inst, def) => {
  $ZodCheck2.init(inst, def);
  inst._zod.onattach.push((inst2) => {
    var _a5;
    (_a5 = inst2._zod.bag).multipleOf ?? (_a5.multipleOf = def.value);
  });
  inst._zod.check = (payload) => {
    if (typeof payload.value !== typeof def.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    const isMultiple = typeof payload.value === "bigint" ? (
      // `value % 0n` throws, and nothing is a multiple of zero — the number branch already fails this way via NaN
      def.value !== BigInt(0) && payload.value % def.value === BigInt(0)
    ) : floatSafeRemainder2(payload.value, def.value) === 0;
    if (isMultiple)
      return;
    payload.issues.push({
      origin: typeof payload.value,
      code: "not_multiple_of",
      divisor: def.value,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckNumberFormat2 = /* @__PURE__ */ $constructor2("$ZodCheckNumberFormat", (inst, def) => {
  $ZodCheck2.init(inst, def);
  def.format = def.format || "float64";
  const isInt = def.format?.includes("int");
  const origin = isInt ? "int" : "number";
  const [minimum, maximum] = NUMBER_FORMAT_RANGES2[def.format];
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    bag.format = def.format;
    bag.minimum = minimum;
    bag.maximum = maximum;
    if (isInt)
      bag.pattern = integer2;
  });
  inst._zod.check = (payload) => {
    const input = payload.value;
    if (isInt) {
      if (!Number.isInteger(input)) {
        payload.issues.push({
          expected: origin,
          format: def.format,
          code: "invalid_type",
          continue: false,
          input,
          inst
        });
        return;
      }
      if (!Number.isSafeInteger(input)) {
        if (input > 0) {
          payload.issues.push({
            input,
            code: "too_big",
            maximum: Number.MAX_SAFE_INTEGER,
            note: "Integers must be within the safe integer range.",
            inst,
            origin,
            inclusive: true,
            continue: !def.abort
          });
        } else {
          payload.issues.push({
            input,
            code: "too_small",
            minimum: Number.MIN_SAFE_INTEGER,
            note: "Integers must be within the safe integer range.",
            inst,
            origin,
            inclusive: true,
            continue: !def.abort
          });
        }
        return;
      }
    }
    if (input < minimum) {
      payload.issues.push({
        origin: "number",
        input,
        code: "too_small",
        minimum,
        inclusive: true,
        inst,
        continue: !def.abort
      });
    }
    if (input > maximum) {
      payload.issues.push({
        origin: "number",
        input,
        code: "too_big",
        maximum,
        inclusive: true,
        inst,
        continue: !def.abort
      });
    }
  };
});
var $ZodCheckMaxLength2 = /* @__PURE__ */ $constructor2("$ZodCheckMaxLength", (inst, def) => {
  var _a5;
  $ZodCheck2.init(inst, def);
  (_a5 = inst._zod.def).when ?? (_a5.when = _whenHasLength2);
  inst._zod.onattach.push((inst2) => {
    const curr = inst2._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    if (def.maximum < curr)
      inst2._zod.bag.maximum = def.maximum;
  });
  inst._zod.check = (payload) => {
    const input = payload.value;
    const units = input.length;
    const length = typeof input === "string" && units > def.maximum ? codePointLength2(input) : units;
    if (length <= def.maximum)
      return;
    const origin = getLengthableOrigin2(input);
    payload.issues.push({
      origin,
      code: "too_big",
      maximum: def.maximum,
      inclusive: true,
      input,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckMinLength2 = /* @__PURE__ */ $constructor2("$ZodCheckMinLength", (inst, def) => {
  var _a5;
  $ZodCheck2.init(inst, def);
  (_a5 = inst._zod.def).when ?? (_a5.when = _whenHasLength2);
  inst._zod.onattach.push((inst2) => {
    const curr = inst2._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    if (def.minimum > curr)
      inst2._zod.bag.minimum = def.minimum;
  });
  inst._zod.check = (payload) => {
    const input = payload.value;
    const units = input.length;
    const length = typeof input === "string" && units >= def.minimum && units < def.minimum * 2 ? codePointLength2(input) : units;
    if (length >= def.minimum)
      return;
    const origin = getLengthableOrigin2(input);
    payload.issues.push({
      origin,
      code: "too_small",
      minimum: def.minimum,
      inclusive: true,
      input,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckLengthEquals2 = /* @__PURE__ */ $constructor2("$ZodCheckLengthEquals", (inst, def) => {
  var _a5;
  $ZodCheck2.init(inst, def);
  (_a5 = inst._zod.def).when ?? (_a5.when = _whenHasLength2);
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    bag.minimum = def.length;
    bag.maximum = def.length;
    bag.length = def.length;
  });
  inst._zod.check = (payload) => {
    const input = payload.value;
    const units = input.length;
    const length = typeof input === "string" && units >= def.length && units <= def.length * 2 ? codePointLength2(input) : units;
    if (length === def.length)
      return;
    const origin = getLengthableOrigin2(input);
    const tooBig = length > def.length;
    payload.issues.push({
      origin,
      ...tooBig ? { code: "too_big", maximum: def.length } : { code: "too_small", minimum: def.length },
      inclusive: true,
      exact: true,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckStringFormat2 = /* @__PURE__ */ $constructor2("$ZodCheckStringFormat", (inst, def) => {
  var _a5, _b;
  $ZodCheck2.init(inst, def);
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    bag.format = def.format;
    if (def.pattern) {
      bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
      bag.patterns.add(def.pattern);
    }
  });
  if (def.pattern)
    (_a5 = inst._zod).check ?? (_a5.check = (payload) => {
      def.pattern.lastIndex = 0;
      if (def.pattern.test(payload.value))
        return;
      payload.issues.push({
        origin: "string",
        code: "invalid_format",
        format: def.format,
        input: payload.value,
        ...def.pattern ? { pattern: def.pattern.toString() } : {},
        inst,
        continue: !def.abort
      });
    });
  else
    (_b = inst._zod).check ?? (_b.check = () => {
    });
});
var $ZodCheckRegex2 = /* @__PURE__ */ $constructor2("$ZodCheckRegex", (inst, def) => {
  $ZodCheckStringFormat2.init(inst, def);
  inst._zod.check = (payload) => {
    def.pattern.lastIndex = 0;
    if (def.pattern.test(payload.value))
      return;
    payload.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: payload.value,
      pattern: def.pattern.toString(),
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckLowerCase2 = /* @__PURE__ */ $constructor2("$ZodCheckLowerCase", (inst, def) => {
  def.pattern ?? (def.pattern = lowercase2);
  $ZodCheckStringFormat2.init(inst, def);
});
var $ZodCheckUpperCase2 = /* @__PURE__ */ $constructor2("$ZodCheckUpperCase", (inst, def) => {
  def.pattern ?? (def.pattern = uppercase2);
  $ZodCheckStringFormat2.init(inst, def);
});
var $ZodCheckIncludes2 = /* @__PURE__ */ $constructor2("$ZodCheckIncludes", (inst, def) => {
  $ZodCheck2.init(inst, def);
  const escapedRegex = escapeRegex2(def.includes);
  const pattern = new RegExp(typeof def.position === "number" ? `^.{${def.position},}${escapedRegex}` : escapedRegex);
  def.pattern = pattern;
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
    bag.patterns.add(pattern);
  });
  inst._zod.check = (payload) => {
    if (payload.value.includes(def.includes, def.position))
      return;
    payload.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: def.includes,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckStartsWith2 = /* @__PURE__ */ $constructor2("$ZodCheckStartsWith", (inst, def) => {
  $ZodCheck2.init(inst, def);
  const pattern = new RegExp(`^${escapeRegex2(def.prefix)}.*`);
  def.pattern ?? (def.pattern = pattern);
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
    bag.patterns.add(pattern);
  });
  inst._zod.check = (payload) => {
    if (payload.value.startsWith(def.prefix))
      return;
    payload.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: def.prefix,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckEndsWith2 = /* @__PURE__ */ $constructor2("$ZodCheckEndsWith", (inst, def) => {
  $ZodCheck2.init(inst, def);
  const pattern = new RegExp(`.*${escapeRegex2(def.suffix)}$`);
  def.pattern ?? (def.pattern = pattern);
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
    bag.patterns.add(pattern);
  });
  inst._zod.check = (payload) => {
    if (payload.value.endsWith(def.suffix))
      return;
    payload.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: def.suffix,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckOverwrite2 = /* @__PURE__ */ $constructor2("$ZodCheckOverwrite", (inst, def) => {
  $ZodCheck2.init(inst, def);
  inst._zod.check = (payload) => {
    payload.value = def.tx(payload.value);
  };
});

// node_modules/@modelcontextprotocol/server/node_modules/zod/v4/core/doc.js
var Doc2 = class {
  constructor(args = [], closed = {}) {
    this.content = [];
    this.indent = 0;
    this.args = args;
    this.closed = closed;
  }
  indented(fn) {
    this.indent += 1;
    fn(this);
    this.indent -= 1;
  }
  write(arg) {
    if (typeof arg === "function") {
      arg(this, { execution: "sync" });
      arg(this, { execution: "async" });
      return;
    }
    const content = arg;
    const lines = content.split("\n").filter((x) => x);
    const minIndent = Math.min(...lines.map((x) => x.length - x.trimStart().length));
    const dedented = lines.map((x) => x.slice(minIndent)).map((x) => " ".repeat(this.indent * 2) + x);
    for (const line of dedented) {
      this.content.push(line);
    }
  }
  compile() {
    const F = Function;
    const content = this?.content ?? [``];
    const factory = new F(...Object.keys(this.closed), `return function (${this.args.join(", ")}) {
${content.join("\n")}
};`);
    return factory(...Object.values(this.closed));
  }
};

// node_modules/@modelcontextprotocol/server/node_modules/zod/v4/core/versions.js
var version2 = {
  major: 4,
  minor: 5,
  patch: 4
};

// node_modules/@modelcontextprotocol/server/node_modules/zod/v4/core/schemas.js
var $ZodType2 = /* @__PURE__ */ $constructor2("$ZodType", (inst, def) => {
  var _a5;
  inst ?? (inst = {});
  inst._zod.def = def;
  inst._zod.bag = inst._zod.bag || {};
  inst._zod.version = version2;
  const defChecks = inst._zod.def.checks;
  const checks = inst._zod.traits.has("$ZodCheck") ? [inst, ...defChecks ?? []] : defChecks?.length ? [...defChecks] : [];
  for (const ch of checks) {
    for (const fn of ch._zod.onattach) {
      fn(inst);
    }
  }
  if (checks.length === 0) {
    (_a5 = inst._zod).deferred ?? (_a5.deferred = []);
    inst._zod.deferred?.push(() => {
      inst._zod.run = inst._zod.parse;
    });
  } else {
    const runChecks = (payload, checks2, ctx) => {
      if (payload.memo)
        return payload;
      let isAborted = aborted2(payload);
      let asyncResult;
      for (const ch of checks2) {
        if (ch._zod.def.when) {
          if (explicitlyAborted2(payload))
            continue;
          const shouldRun = ch._zod.def.when(payload);
          if (!shouldRun)
            continue;
        } else if (isAborted) {
          continue;
        }
        const currLen = payload.issues.length;
        const _ = ch._zod.check(payload);
        if (_ instanceof Promise && ctx?.async === false) {
          throw new $ZodAsyncError2();
        }
        if (asyncResult || _ instanceof Promise) {
          asyncResult = (asyncResult ?? Promise.resolve()).then(async () => {
            await _;
            const nextLen = payload.issues.length;
            if (nextLen === currLen)
              return;
            attachSchema2(payload.issues, currLen, inst);
            if (!isAborted)
              isAborted = aborted2(payload, currLen);
          });
        } else {
          const nextLen = payload.issues.length;
          if (nextLen === currLen)
            continue;
          attachSchema2(payload.issues, currLen, inst);
          if (!isAborted)
            isAborted = aborted2(payload, currLen);
        }
      }
      if (asyncResult) {
        return asyncResult.then(() => {
          return payload;
        });
      }
      return payload;
    };
    const handleCanaryResult = (canary, payload, ctx) => {
      if (aborted2(canary)) {
        canary.aborted = true;
        return canary;
      }
      const checkResult = runChecks(payload, checks, ctx);
      if (checkResult instanceof Promise) {
        if (ctx.async === false)
          throw new $ZodAsyncError2();
        return checkResult.then((checkResult2) => inst._zod.parse(checkResult2, ctx));
      }
      return inst._zod.parse(checkResult, ctx);
    };
    inst._zod.run = (payload, ctx) => {
      if (ctx.skipChecks) {
        return inst._zod.parse(payload, ctx);
      }
      if (ctx.direction === "backward") {
        const canary = inst._zod.parse({ value: payload.value, issues: [] }, { ...ctx, skipChecks: true });
        if (canary instanceof Promise) {
          return canary.then((canary2) => {
            return handleCanaryResult(canary2, payload, ctx);
          });
        }
        return handleCanaryResult(canary, payload, ctx);
      }
      const result = inst._zod.parse(payload, ctx);
      if (result instanceof Promise) {
        if (ctx.async === false)
          throw new $ZodAsyncError2();
        return result.then((result2) => runChecks(result2, checks, ctx));
      }
      return runChecks(result, checks, ctx);
    };
  }
}, {
  // Wrappers extend this by installing a richer factory over it; reading it eagerly would defeat the laziness.
  get "~standard"() {
    return hide2(this, "~standard", standardProps2(this));
  },
  set "~standard"(value) {
    own2(this, "~standard", value);
  }
});
var toStandardResult2 = (r) => r.success ? { value: r.data } : { issues: r.error?.issues };
function standardProps2(inst) {
  return {
    validate: (value) => {
      try {
        return toStandardResult2(safeParse3(inst, value));
      } catch (_) {
        return safeParseAsync3(inst, value).then(toStandardResult2);
      }
    },
    vendor: "zod",
    version: 1
  };
}
var $ZodString2 = /* @__PURE__ */ $constructor2("$ZodString", (inst, def) => {
  $ZodType2.init(inst, def);
  inst._zod.pattern = [...inst?._zod.bag?.patterns ?? []].pop() ?? string4(inst._zod.bag);
  inst._zod.parse = (payload, _) => {
    if (def.coerce)
      try {
        payload.value = String(payload.value);
      } catch (_2) {
      }
    if (typeof payload.value === "string")
      return payload;
    payload.issues.push({
      expected: "string",
      code: "invalid_type",
      input: payload.value,
      inst
    });
    return payload;
  };
});
var $ZodStringFormat2 = /* @__PURE__ */ $constructor2("$ZodStringFormat", (inst, def) => {
  $ZodCheckStringFormat2.init(inst, def);
  $ZodString2.init(inst, def);
});
var $ZodGUID2 = /* @__PURE__ */ $constructor2("$ZodGUID", (inst, def) => {
  def.pattern ?? (def.pattern = guid2);
  $ZodStringFormat2.init(inst, def);
});
var $ZodUUID2 = /* @__PURE__ */ $constructor2("$ZodUUID", (inst, def) => {
  if (def.version) {
    const versionMap = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    };
    const v = versionMap[def.version];
    if (v === void 0)
      throw new Error(`Invalid UUID version: "${def.version}"`);
    def.pattern ?? (def.pattern = uuid2(v));
  } else
    def.pattern ?? (def.pattern = uuid2());
  $ZodStringFormat2.init(inst, def);
});
var $ZodEmail2 = /* @__PURE__ */ $constructor2("$ZodEmail", (inst, def) => {
  def.pattern ?? (def.pattern = email2);
  $ZodStringFormat2.init(inst, def);
});
var URL_BAD_FORMAT2 = 1;
var URL_UNPARSEABLE2 = 2;
function parseURLObject2(trimmed, def) {
  if (!def.normalize && def.protocol?.source === httpProtocol2.source && !/^https?:\/\//i.test(trimmed)) {
    return URL_BAD_FORMAT2;
  }
  try {
    return new URL(trimmed);
  } catch {
    return URL_UNPARSEABLE2;
  }
}
var asciiTabOrNewline2 = /[\t\n\r]/g;
function stripTabAndNewline2(value) {
  return value.replace(asciiTabOrNewline2, "");
}
function urlHostnameOk2(url3, hostname2) {
  hostname2.lastIndex = 0;
  return hostname2.test(url3.hostname);
}
function urlProtocolOk2(url3, protocol) {
  protocol.lastIndex = 0;
  return protocol.test(url3.protocol.endsWith(":") ? url3.protocol.slice(0, -1) : url3.protocol);
}
var $ZodURL2 = /* @__PURE__ */ $constructor2("$ZodURL", (inst, def) => {
  $ZodStringFormat2.init(inst, def);
  inst._zod.check = (payload) => {
    try {
      const trimmed = payload.value.trim();
      const url3 = parseURLObject2(trimmed, def);
      if (url3 === URL_BAD_FORMAT2) {
        payload.issues.push({
          code: "invalid_format",
          format: "url",
          note: "Invalid URL format",
          input: payload.value,
          inst,
          continue: !def.abort
        });
        return;
      }
      if (url3 === URL_UNPARSEABLE2) {
        payload.issues.push({
          code: "invalid_format",
          format: "url",
          input: payload.value,
          inst,
          continue: !def.abort
        });
        return;
      }
      if (def.hostname && !urlHostnameOk2(url3, def.hostname)) {
        payload.issues.push({
          code: "invalid_format",
          format: "url",
          note: "Invalid hostname",
          pattern: def.hostname.source,
          input: payload.value,
          inst,
          continue: !def.abort
        });
      }
      if (def.protocol && !urlProtocolOk2(url3, def.protocol)) {
        payload.issues.push({
          code: "invalid_format",
          format: "url",
          note: "Invalid protocol",
          pattern: def.protocol.source,
          input: payload.value,
          inst,
          continue: !def.abort
        });
      }
      payload.value = def.normalize ? url3.href : stripTabAndNewline2(trimmed);
      return;
    } catch (_) {
      payload.issues.push({
        code: "invalid_format",
        format: "url",
        input: payload.value,
        inst,
        continue: !def.abort
      });
    }
  };
});
var $ZodEmoji2 = /* @__PURE__ */ $constructor2("$ZodEmoji", (inst, def) => {
  def.pattern ?? (def.pattern = emoji2());
  $ZodStringFormat2.init(inst, def);
});
var $ZodNanoID2 = /* @__PURE__ */ $constructor2("$ZodNanoID", (inst, def) => {
  if (def.length !== void 0 && (!Number.isInteger(def.length) || def.length < 1))
    throw new Error(`Invalid nanoid length: ${def.length}`);
  def.pattern ?? (def.pattern = def.length === void 0 ? nanoid2 : nanoidOfLength2(def.length));
  $ZodStringFormat2.init(inst, def);
});
var $ZodCUID3 = /* @__PURE__ */ $constructor2("$ZodCUID", (inst, def) => {
  def.pattern ?? (def.pattern = cuid3);
  $ZodStringFormat2.init(inst, def);
});
var $ZodCUID22 = /* @__PURE__ */ $constructor2("$ZodCUID2", (inst, def) => {
  def.pattern ?? (def.pattern = cuid22);
  $ZodStringFormat2.init(inst, def);
});
var $ZodULID2 = /* @__PURE__ */ $constructor2("$ZodULID", (inst, def) => {
  def.pattern ?? (def.pattern = ulid2);
  $ZodStringFormat2.init(inst, def);
});
var $ZodXID2 = /* @__PURE__ */ $constructor2("$ZodXID", (inst, def) => {
  def.pattern ?? (def.pattern = xid2);
  $ZodStringFormat2.init(inst, def);
});
var $ZodKSUID2 = /* @__PURE__ */ $constructor2("$ZodKSUID", (inst, def) => {
  def.pattern ?? (def.pattern = ksuid2);
  $ZodStringFormat2.init(inst, def);
});
var $ZodISODateTime2 = /* @__PURE__ */ $constructor2("$ZodISODateTime", (inst, def) => {
  def.pattern ?? (def.pattern = datetime3(def));
  $ZodStringFormat2.init(inst, def);
  if (def.local || def.precision === -1) {
    inst._zod.bag.laxFormat = true;
    inst._zod.onattach.push((s) => {
      s._zod.bag.laxFormat = true;
    });
  }
});
var $ZodISODate2 = /* @__PURE__ */ $constructor2("$ZodISODate", (inst, def) => {
  def.pattern ?? (def.pattern = date4);
  $ZodStringFormat2.init(inst, def);
});
var $ZodISOTime2 = /* @__PURE__ */ $constructor2("$ZodISOTime", (inst, def) => {
  def.pattern ?? (def.pattern = time3(def));
  $ZodStringFormat2.init(inst, def);
});
var $ZodISODuration2 = /* @__PURE__ */ $constructor2("$ZodISODuration", (inst, def) => {
  def.pattern ?? (def.pattern = duration3);
  $ZodStringFormat2.init(inst, def);
});
var $ZodIPv42 = /* @__PURE__ */ $constructor2("$ZodIPv4", (inst, def) => {
  def.pattern ?? (def.pattern = ipv42);
  $ZodStringFormat2.init(inst, def);
  inst._zod.bag.format = `ipv4`;
});
var ipv6Alphabet2 = /^[0-9a-fA-F:.]+$/;
function isValidIPv62(value) {
  if (!ipv6Alphabet2.test(value))
    return false;
  try {
    new URL(`http://[${value}]`);
    return true;
  } catch {
    return false;
  }
}
var $ZodIPv62 = /* @__PURE__ */ $constructor2("$ZodIPv6", (inst, def) => {
  def.pattern ?? (def.pattern = ipv62);
  $ZodStringFormat2.init(inst, def);
  inst._zod.bag.format = `ipv6`;
  inst._zod.check = (payload) => {
    if (!isValidIPv62(payload.value)) {
      payload.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: payload.value,
        inst,
        continue: !def.abort
      });
    }
  };
});
var $ZodCIDRv42 = /* @__PURE__ */ $constructor2("$ZodCIDRv4", (inst, def) => {
  def.pattern ?? (def.pattern = cidrv42);
  $ZodStringFormat2.init(inst, def);
});
function isValidCIDRv62(value) {
  const parts = value.split("/");
  if (parts.length !== 2)
    return false;
  const [address, prefix] = parts;
  if (!prefix)
    return false;
  const prefixNum = Number(prefix);
  if (`${prefixNum}` !== prefix)
    return false;
  if (prefixNum < 0 || prefixNum > 128)
    return false;
  return isValidIPv62(address);
}
var $ZodCIDRv62 = /* @__PURE__ */ $constructor2("$ZodCIDRv6", (inst, def) => {
  def.pattern ?? (def.pattern = cidrv62);
  $ZodStringFormat2.init(inst, def);
  inst._zod.check = (payload) => {
    if (!isValidCIDRv62(payload.value)) {
      payload.issues.push({
        code: "invalid_format",
        format: "cidrv6",
        input: payload.value,
        inst,
        continue: !def.abort
      });
    }
  };
});
function isValidBase642(data) {
  if (data === "")
    return true;
  if (/\s/.test(data))
    return false;
  if (data.length % 4 !== 0)
    return false;
  try {
    atob(data);
    return true;
  } catch {
    return false;
  }
}
var $ZodBase642 = /* @__PURE__ */ $constructor2("$ZodBase64", (inst, def) => {
  def.pattern ?? (def.pattern = base642);
  $ZodStringFormat2.init(inst, def);
  inst._zod.bag.contentEncoding = "base64";
  inst._zod.check = (payload) => {
    if (isValidBase642(payload.value))
      return;
    payload.issues.push({
      code: "invalid_format",
      format: "base64",
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
function isValidBase64URL2(data) {
  if (!base64url2.test(data))
    return false;
  const base644 = data.replace(/[-_]/g, (c) => c === "-" ? "+" : "/");
  const padded = base644.padEnd(Math.ceil(base644.length / 4) * 4, "=");
  return isValidBase642(padded);
}
var $ZodBase64URL2 = /* @__PURE__ */ $constructor2("$ZodBase64URL", (inst, def) => {
  def.pattern ?? (def.pattern = base64url2);
  $ZodStringFormat2.init(inst, def);
  inst._zod.bag.contentEncoding = "base64url";
  inst._zod.check = (payload) => {
    if (isValidBase64URL2(payload.value))
      return;
    payload.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodE1642 = /* @__PURE__ */ $constructor2("$ZodE164", (inst, def) => {
  def.pattern ?? (def.pattern = e1642);
  $ZodStringFormat2.init(inst, def);
});
function isValidJWT2(token, algorithm = null) {
  try {
    const tokensParts = token.split(".");
    if (tokensParts.length !== 3)
      return false;
    const [header] = tokensParts;
    if (!header)
      return false;
    const parsedHeader = JSON.parse(atob(header));
    if ("typ" in parsedHeader && parsedHeader?.typ !== "JWT")
      return false;
    if (!parsedHeader.alg)
      return false;
    if (algorithm && (!("alg" in parsedHeader) || parsedHeader.alg !== algorithm))
      return false;
    return true;
  } catch {
    return false;
  }
}
var $ZodJWT2 = /* @__PURE__ */ $constructor2("$ZodJWT", (inst, def) => {
  $ZodStringFormat2.init(inst, def);
  inst._zod.check = (payload) => {
    if (isValidJWT2(payload.value, def.alg))
      return;
    payload.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodNumber2 = /* @__PURE__ */ $constructor2("$ZodNumber", (inst, def) => {
  $ZodType2.init(inst, def);
  inst._zod.pattern = inst._zod.bag.pattern ?? number4;
  inst._zod.parse = (payload, _ctx) => {
    if (def.coerce)
      try {
        payload.value = Number(payload.value);
      } catch (_) {
      }
    const input = payload.value;
    if (typeof input === "number" && !Number.isNaN(input) && Number.isFinite(input)) {
      return payload;
    }
    const received = typeof input === "number" ? Number.isNaN(input) ? "NaN" : !Number.isFinite(input) ? String(input) : void 0 : void 0;
    payload.issues.push({
      expected: "number",
      code: "invalid_type",
      input,
      inst,
      ...received ? { received } : {}
    });
    return payload;
  };
});
var $ZodNumberFormat2 = /* @__PURE__ */ $constructor2("$ZodNumberFormat", (inst, def) => {
  $ZodCheckNumberFormat2.init(inst, def);
  $ZodNumber2.init(inst, def);
});
var $ZodBoolean2 = /* @__PURE__ */ $constructor2("$ZodBoolean", (inst, def) => {
  $ZodType2.init(inst, def);
  inst._zod.pattern = boolean4;
  inst._zod.parse = (payload, _ctx) => {
    if (def.coerce)
      try {
        payload.value = Boolean(payload.value);
      } catch (_) {
      }
    const input = payload.value;
    if (typeof input === "boolean")
      return payload;
    payload.issues.push({
      expected: "boolean",
      code: "invalid_type",
      input,
      inst
    });
    return payload;
  };
});
var $ZodNull2 = /* @__PURE__ */ $constructor2("$ZodNull", (inst, def) => {
  $ZodType2.init(inst, def);
  inst._zod.pattern = _null4;
  inst._zod.values = /* @__PURE__ */ new Set([null]);
  inst._zod.parse = (payload, _ctx) => {
    const input = payload.value;
    if (input === null)
      return payload;
    payload.issues.push({
      expected: "null",
      code: "invalid_type",
      input,
      inst
    });
    return payload;
  };
});
var $ZodUnknown2 = /* @__PURE__ */ $constructor2("$ZodUnknown", (inst, def) => {
  $ZodType2.init(inst, def);
  inst._zod.parse = (payload) => payload;
});
var $ZodNever2 = /* @__PURE__ */ $constructor2("$ZodNever", (inst, def) => {
  $ZodType2.init(inst, def);
  inst._zod.parse = (payload, _ctx) => {
    payload.issues.push({
      expected: "never",
      code: "invalid_type",
      input: payload.value,
      inst
    });
    return payload;
  };
});
function handleArrayResult2(result, final, index) {
  if (result.issues.length) {
    final.issues.push(...prefixIssues2(index, result.issues));
  }
  final.value[index] = result.value;
}
var $ZodArray2 = /* @__PURE__ */ $constructor2("$ZodArray", (inst, def) => {
  $ZodType2.init(inst, def);
  const memo4 = globalConfig2.memoizer;
  memo4?.attach(inst);
  inst._zod.parse = (payload, ctx) => {
    const input = payload.value;
    if (!Array.isArray(input)) {
      payload.issues.push({
        expected: "array",
        code: "invalid_type",
        input,
        inst
      });
      return payload;
    }
    payload.value = memo4 ? memo4.alloc(inst, payload, Array(input.length), ctx) : Array(input.length);
    const proms = [];
    for (let i = 0; i < input.length; i++) {
      const item = input[i];
      const result = def.element._zod.run({
        value: item,
        issues: []
      }, ctx);
      if (result instanceof Promise) {
        proms.push(result.then((result2) => handleArrayResult2(result2, payload, i)));
      } else {
        handleArrayResult2(result, payload, i);
      }
    }
    if (proms.length) {
      return Promise.all(proms).then(() => payload);
    }
    return payload;
  };
});
function handlePropertyResult2(result, final, key, input, optin, optout) {
  const isPresent = key in input;
  const isOptionalOut = optout === "optional";
  if (!isPresent && isOptionalOut && optin === "optional") {
    return;
  }
  if (result.issues.length) {
    if (optin !== void 0 && isOptionalOut && !isPresent) {
      return;
    }
    final.issues.push(...prefixIssues2(key, result.issues));
  }
  if (!isPresent && optin === void 0) {
    if (!result.issues.length) {
      final.issues.push({
        code: "invalid_type",
        expected: "nonoptional",
        input: void 0,
        path: [key]
      });
    }
    return;
  }
  if (result.value === void 0) {
    if (isPresent) {
      final.value[key] = void 0;
    }
  } else {
    final.value[key] = result.value;
  }
}
var NO_SYMBOL_KEYS2 = [];
function normalizeDef2(def) {
  const keys = Object.keys(def.shape);
  const ownSymbols = Object.getOwnPropertySymbols(def.shape);
  const symbolKeys = ownSymbols.length ? ownSymbols : NO_SYMBOL_KEYS2;
  const allKeys = symbolKeys.length ? [...keys, ...symbolKeys] : keys;
  for (const k of allKeys) {
    if (!def.shape?.[k]?._zod?.traits?.has("$ZodType")) {
      throw new Error(`Invalid element at key "${String(k)}": expected a Zod schema`);
    }
  }
  const okeys = optionalKeys2(def.shape);
  return {
    ...def,
    allKeys,
    symbolKeys,
    // string-only: handleCatchall matches it against `for...in`, which never yields a symbol
    keySet: new Set(keys),
    numKeys: keys.length,
    optionalKeys: new Set(okeys)
  };
}
function handleCatchall2(proms, input, payload, ctx, def, inst) {
  const unrecognized = [];
  const keySet = def.keySet;
  const _catchall = def.catchall._zod;
  const t = _catchall.def.type;
  const optin = _catchall.optin;
  const optout = _catchall.optout;
  for (const key in input) {
    if (keySet.has(key))
      continue;
    if (key === "__proto__") {
      if (t === "never")
        unrecognized.push(key);
      continue;
    }
    if (t === "never") {
      unrecognized.push(key);
      continue;
    }
    const r = _catchall.run({ value: input[key], issues: [] }, ctx);
    if (r instanceof Promise) {
      proms.push(r.then((r2) => handlePropertyResult2(r2, payload, key, input, optin, optout)));
    } else {
      handlePropertyResult2(r, payload, key, input, optin, optout);
    }
  }
  if (unrecognized.length) {
    payload.issues.push({
      code: "unrecognized_keys",
      keys: unrecognized,
      input,
      inst,
      // Describes the shape of the input, not the validity of the parsed value, so it never aborts. The parse still fails; the schema's own checks just get to run first, and an enclosing intersection can reconcile the key against a sibling operand.
      continue: true
    });
  }
  if (!proms.length)
    return payload;
  return Promise.all(proms).then(() => {
    return payload;
  });
}
var propShapes2 = /* @__PURE__ */ new WeakMap();
var $ZodObject2 = /* @__PURE__ */ $constructor2("$ZodObject", (inst, def) => {
  $ZodType2.init(inst, def);
  const desc = Object.getOwnPropertyDescriptor(def, "shape");
  if (!desc?.get) {
    const sh = def.shape;
    propShapes2.set(def, sh);
    Object.defineProperty(def, "shape", {
      get: () => {
        const newSh = { ...sh };
        Object.defineProperty(def, "shape", {
          value: newSh
        });
        propShapes2.set(def, newSh);
        return newSh;
      }
    });
  }
  const _normalized = cached2(() => normalizeDef2(def));
  defineLazyInternal2(inst, "propValues", (zod) => {
    const shape = zod.def.shape;
    const propValues = {};
    for (const key in shape) {
      const field = shape[key]._zod;
      if (field.values) {
        if (!Object.prototype.hasOwnProperty.call(propValues, key)) {
          assignProp2(propValues, key, /* @__PURE__ */ new Set());
        }
        for (const v of field.values)
          propValues[key].add(v);
        if (field.optin !== void 0)
          propValues[key].add(void 0);
      }
    }
    return propValues;
  });
  const isObject4 = isObject2;
  const catchall = def.catchall;
  let value;
  const memo4 = globalConfig2.memoizer;
  memo4?.attach(inst);
  inst._zod.parse = (payload, ctx) => {
    value ?? (value = _normalized.value);
    const input = payload.value;
    if (!isObject4(input)) {
      payload.issues.push({
        expected: "object",
        code: "invalid_type",
        input,
        inst
      });
      return payload;
    }
    payload.value = memo4 ? memo4.alloc(inst, payload, {}, ctx) : {};
    const proms = [];
    const shape = value.shape;
    for (const key of value.allKeys) {
      if (key === "__proto__")
        continue;
      const el = shape[key];
      const optin = el._zod.optin;
      const optout = el._zod.optout;
      const r = el._zod.run({ value: input[key], issues: [] }, ctx);
      if (r instanceof Promise) {
        proms.push(r.then((r2) => handlePropertyResult2(r2, payload, key, input, optin, optout)));
      } else {
        handlePropertyResult2(r, payload, key, input, optin, optout);
      }
    }
    if (!catchall) {
      return proms.length ? Promise.all(proms).then(() => payload) : payload;
    }
    return handleCatchall2(proms, input, payload, ctx, _normalized.value, inst);
  };
});
var $ZodObjectJIT2 = /* @__PURE__ */ $constructor2("$ZodObjectJIT", (inst, def) => {
  $ZodObject2.init(inst, def);
  const superParse = inst._zod.parse;
  const _normalized = cached2(() => normalizeDef2(def));
  const memo4 = globalConfig2.memoizer;
  const generateFastpass = (shape) => {
    const normalized = _normalized.value;
    const syms = normalized.symbolKeys;
    const doc = new Doc2(["payload", "ctx"], { shape, inst, memo: memo4, syms });
    const parseStr = (k) => `shape[${k}]._zod.run({ value: input[${k}], issues: [] }, ctx)`;
    const prefixStr = (id, k) => `
          for (let i = 0; i < ${id}.issues.length; i++) {
            const iss = ${id}.issues[i];
            iss.path = iss.path ? [${k}, ...iss.path] : [${k}];
            payload.issues.push(iss);
          }`;
    doc.write(`const input = payload.value;`);
    const ids = /* @__PURE__ */ Object.create(null);
    let counter = 0;
    for (const key of normalized.allKeys) {
      ids[key] = `key_${counter++}`;
    }
    doc.write(memo4 ? `const newResult = memo.alloc(inst, payload, {}, ctx);` : `const newResult = {};`);
    for (const key of normalized.allKeys) {
      if (key === "__proto__")
        continue;
      const id = ids[key];
      const k = typeof key === "symbol" ? `syms[${syms.indexOf(key)}]` : esc2(key);
      const isPresent = `${k} in input`;
      const schema = shape[key];
      const optin = schema?._zod?.optin;
      const isOptionalIn = optin !== void 0;
      const isOptionalOut = schema?._zod?.optout === "optional";
      doc.write(`const ${id} = ${parseStr(k)};`);
      if (isOptionalIn && isOptionalOut) {
        const assign = optin === "optional" ? `${id}_present` : `${id}.value !== undefined || ${id}_present`;
        doc.write(`
        const ${id}_present = ${isPresent};
        if (!${id}.issues.length || ${id}_present) {
          if (${id}.issues.length) {${prefixStr(id, k)}
          }

          if (${assign}) {
            newResult[${k}] = ${id}.value;
          }
        }

      `);
      } else if (!isOptionalIn) {
        doc.write(`
        const ${id}_present = ${isPresent};
        if (${id}.issues.length) {${prefixStr(id, k)}
        }
        if (!${id}_present && !${id}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${k}]
          });
        }

        if (${id}_present) {
          newResult[${k}] = ${id}.value;
        }

      `);
      } else {
        doc.write(`
        if (${id}.issues.length) {${prefixStr(id, k)}
        }
        
        if (${id}.value === undefined) {
          if (${isPresent}) {
            newResult[${k}] = undefined;
          }
        } else {
          newResult[${k}] = ${id}.value;
        }

      `);
      }
    }
    doc.write(`payload.value = newResult;`);
    doc.write(`return payload;`);
    return doc.compile();
  };
  let fastpass;
  const isObject4 = isObject2;
  const jit = !globalConfig2.jitless;
  const allowsEval4 = allowsEval2;
  const fastEnabled = jit && allowsEval4.value;
  const catchall = def.catchall;
  let value;
  inst._zod.parse = (payload, ctx) => {
    value ?? (value = _normalized.value);
    const input = payload.value;
    if (!isObject4(input)) {
      payload.issues.push({
        expected: "object",
        code: "invalid_type",
        input,
        inst
      });
      return payload;
    }
    if (jit && fastEnabled && ctx?.async === false && ctx.jitless !== true) {
      if (!fastpass)
        fastpass = generateFastpass(def.shape);
      payload = fastpass(payload, ctx);
      if (!catchall)
        return payload;
      return handleCatchall2([], input, payload, ctx, value, inst);
    }
    return superParse(payload, ctx);
  };
});
function handleUnionResults2(results, final, inst, ctx) {
  for (const result of results) {
    if (result.issues.length === 0) {
      final.value = result.value;
      return final;
    }
  }
  const nonaborted = results.filter((r) => !aborted2(r));
  if (nonaborted.length === 1) {
    final.value = nonaborted[0].value;
    return nonaborted[0];
  }
  final.issues.push({
    code: "invalid_union",
    input: final.value,
    inst,
    errors: results.map((result) => result.issues.map((iss) => finalizeIssue2(iss, ctx, config2())))
  });
  return final;
}
var $ZodUnion2 = /* @__PURE__ */ $constructor2("$ZodUnion", (inst, def) => {
  $ZodType2.init(inst, def);
  defineLazyInternal2(inst, "optin", (zod) => zod.def.options.some((o) => o._zod.optin === "defaulted") ? "defaulted" : zod.def.options.some((o) => o._zod.optin !== void 0) ? "optional" : void 0);
  defineLazyInternal2(inst, "optout", (zod) => zod.def.options.some((o) => o._zod.optout === "optional") ? "optional" : void 0);
  defineLazyInternal2(inst, "values", (zod) => {
    if (zod.def.options.every((o) => o._zod.values)) {
      return new Set(zod.def.options.flatMap((option) => Array.from(option._zod.values)));
    }
    return void 0;
  });
  defineLazyInternal2(inst, "pattern", (zod) => {
    if (zod.def.options.every((o) => o._zod.pattern)) {
      const patterns = zod.def.options.map((o) => o._zod.pattern);
      return new RegExp(`^(${patterns.map((p) => cleanRegex2(p.source)).join("|")})$`);
    }
    return void 0;
  });
  const first = def.options.length === 1 ? def.options[0]._zod.run : null;
  inst._zod.parse = (payload, ctx) => {
    if (first) {
      return first(payload, ctx);
    }
    let async = false;
    const results = [];
    for (const option of def.options) {
      const result = option._zod.run({
        value: payload.value,
        issues: []
      }, ctx);
      if (result instanceof Promise) {
        results.push(result);
        async = true;
      } else {
        if (result.issues.length === 0)
          return result;
        results.push(result);
      }
    }
    if (!async)
      return handleUnionResults2(results, payload, inst, ctx);
    return Promise.all(results).then((results2) => {
      return handleUnionResults2(results2, payload, inst, ctx);
    });
  };
});
var $ZodDiscriminatedUnion2 = /* @__PURE__ */ $constructor2("$ZodDiscriminatedUnion", (inst, def) => {
  def.inclusive = false;
  $ZodUnion2.init(inst, def);
  const _super = inst._zod.parse;
  defineLazyInternal2(inst, "propValues", (zod) => {
    const propValues = {};
    for (const option of zod.def.options) {
      const pv = option._zod.propValues;
      if (!pv || Object.keys(pv).length === 0)
        throw new Error(`Invalid discriminated union option at index "${zod.def.options.indexOf(option)}"`);
      for (const [k, v] of Object.entries(pv)) {
        if (!Object.prototype.hasOwnProperty.call(propValues, k)) {
          assignProp2(propValues, k, /* @__PURE__ */ new Set());
        }
        for (const val of v) {
          propValues[k].add(val);
        }
      }
    }
    return propValues;
  });
  def.options.forEach((option, i) => {
    const propShape = propShapes2.get(option._zod.def);
    if (propShape && !Object.prototype.hasOwnProperty.call(propShape, def.discriminator)) {
      throw new Error(`Invalid discriminated union option at index "${i}"`);
    }
  });
  const disc = cached2(() => {
    const opts = def.options;
    const map = /* @__PURE__ */ new Map();
    for (const o of opts) {
      const values = o._zod.propValues?.[def.discriminator];
      if (!values || values.size === 0)
        throw new Error(`Invalid discriminated union option at index "${def.options.indexOf(o)}"`);
      for (const v of values) {
        if (map.has(v)) {
          throw new Error(`Duplicate discriminator value "${String(v)}"`);
        }
        map.set(v, o);
      }
    }
    return map;
  });
  inst._zod.parse = (payload, ctx) => {
    const input = payload.value;
    if (!isObject2(input)) {
      payload.issues.push({
        code: "invalid_type",
        expected: "object",
        input,
        inst
      });
      return payload;
    }
    const opt = disc.value.get(input?.[def.discriminator]);
    if (opt) {
      return opt._zod.run(payload, ctx);
    }
    if (def.unionFallback || ctx.direction === "backward") {
      return _super(payload, ctx);
    }
    payload.issues.push({
      code: "invalid_union",
      errors: [],
      note: "No matching discriminator",
      discriminator: def.discriminator,
      options: Array.from(disc.value.keys()),
      input,
      path: [def.discriminator],
      inst
    });
    return payload;
  };
});
var $ZodIntersection2 = /* @__PURE__ */ $constructor2("$ZodIntersection", (inst, def) => {
  $ZodType2.init(inst, def);
  inst._zod.parse = (payload, ctx) => {
    const input = payload.value;
    const left = def.left._zod.run({ value: input, issues: [] }, ctx);
    const right = def.right._zod.run({ value: input, issues: [] }, ctx);
    const async = left instanceof Promise || right instanceof Promise;
    if (async) {
      return Promise.all([left, right]).then(([left2, right2]) => {
        return handleIntersectionResults2(payload, left2, right2);
      });
    }
    return handleIntersectionResults2(payload, left, right);
  };
});
function mergeValues2(a, b) {
  if (a === b) {
    return { valid: true, data: a };
  }
  if (a instanceof Date && b instanceof Date && +a === +b) {
    return { valid: true, data: a };
  }
  if (isPlainObject2(a) && isPlainObject2(b)) {
    const bKeys = Object.keys(b);
    const sharedKeys = Object.keys(a).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = { ...a, ...b };
    if (Object.prototype.hasOwnProperty.call(newObj, "__proto__"))
      delete newObj.__proto__;
    for (const key of sharedKeys) {
      if (key === "__proto__")
        continue;
      const sharedValue = mergeValues2(a[key], b[key]);
      if (!sharedValue.valid) {
        return {
          valid: false,
          mergeErrorPath: [key, ...sharedValue.mergeErrorPath]
        };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  }
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) {
      return { valid: false, mergeErrorPath: [] };
    }
    const newArray = [];
    for (let index = 0; index < a.length; index++) {
      const itemA = a[index];
      const itemB = b[index];
      const sharedValue = mergeValues2(itemA, itemB);
      if (!sharedValue.valid) {
        return {
          valid: false,
          mergeErrorPath: [index, ...sharedValue.mergeErrorPath]
        };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  }
  return { valid: false, mergeErrorPath: [] };
}
function handleIntersectionResults2(result, left, right) {
  const unrecKeys = /* @__PURE__ */ new Map();
  let unrecIssue;
  const keyIssues = /* @__PURE__ */ new Map();
  const collect = (iss, side) => {
    let keys;
    if (iss.code === "unrecognized_keys" && !iss.path?.length) {
      unrecIssue ?? (unrecIssue = iss);
      keys = iss.keys;
    } else if (iss.code === "invalid_key" && iss.origin === "record" && iss.path?.length === 1) {
      const k = String(iss.path[0]);
      if (!keyIssues.has(k))
        keyIssues.set(k, iss);
      keys = [k];
    } else {
      return false;
    }
    for (const k of keys) {
      if (!unrecKeys.has(k))
        unrecKeys.set(k, {});
      unrecKeys.get(k)[side] = true;
    }
    return true;
  };
  for (const iss of left.issues) {
    if (!collect(iss, "l"))
      result.issues.push(iss);
  }
  for (const iss of right.issues) {
    if (!collect(iss, "r"))
      result.issues.push(iss);
  }
  const bothKeys = [...unrecKeys].filter(([, f]) => f.l && f.r).map(([k]) => k);
  if (bothKeys.length) {
    const aggregated = unrecIssue ? bothKeys.filter((k) => unrecIssue.keys.includes(k)) : [];
    if (aggregated.length)
      result.issues.push({ ...unrecIssue, keys: aggregated });
    for (const k of bothKeys) {
      if (!aggregated.includes(k) && keyIssues.has(k))
        result.issues.push(keyIssues.get(k));
    }
  }
  const merged = mergeValues2(left.value, right.value);
  if (!merged.valid) {
    if (aborted2(result))
      return result;
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(merged.mergeErrorPath)}`);
  }
  result.value = merged.data;
  return result;
}
var $ZodRecord2 = /* @__PURE__ */ $constructor2("$ZodRecord", (inst, def) => {
  $ZodType2.init(inst, def);
  const memo4 = globalConfig2.memoizer;
  memo4?.attach(inst);
  inst._zod.parse = (payload, ctx) => {
    const input = payload.value;
    if (!isPlainObject2(input)) {
      payload.issues.push({
        expected: "record",
        code: "invalid_type",
        input,
        inst
      });
      return payload;
    }
    const proms = [];
    const values = def.keyType._zod.values;
    if (values && !def.partial) {
      payload.value = memo4 ? memo4.alloc(inst, payload, {}, ctx) : {};
      const recordKeys = /* @__PURE__ */ new Set();
      for (const key of values) {
        if (typeof key === "string" || typeof key === "number" || typeof key === "symbol") {
          recordKeys.add(typeof key === "number" ? key.toString() : key);
          if (key === "__proto__")
            continue;
          const keyResult = def.keyType._zod.run({ value: key, issues: [] }, ctx);
          if (keyResult instanceof Promise) {
            throw new Error("Async schemas not supported in object keys currently");
          }
          if (keyResult.issues.length) {
            payload.issues.push({
              code: "invalid_key",
              origin: "record",
              issues: keyResult.issues.map((iss) => finalizeIssue2(iss, ctx, config2())),
              input: key,
              path: [key],
              inst
            });
            continue;
          }
          const outKey = keyResult.value;
          if (outKey === "__proto__")
            continue;
          const result = def.valueType._zod.run({ value: input[key], issues: [] }, ctx);
          if (result instanceof Promise) {
            proms.push(result.then((result2) => {
              if (result2.issues.length) {
                payload.issues.push(...prefixIssues2(key, result2.issues));
              }
              payload.value[outKey] = result2.value;
            }));
          } else {
            if (result.issues.length) {
              payload.issues.push(...prefixIssues2(key, result.issues));
            }
            payload.value[outKey] = result.value;
          }
        }
      }
      let unrecognized;
      for (const key in input) {
        if (!recordKeys.has(key)) {
          if (def.mode === "loose") {
            if (key === "__proto__")
              continue;
            payload.value[key] = input[key];
          } else {
            unrecognized = unrecognized ?? [];
            unrecognized.push(key);
          }
        }
      }
      if (unrecognized && unrecognized.length > 0) {
        payload.issues.push({
          code: "unrecognized_keys",
          input,
          inst,
          keys: unrecognized,
          continue: true
        });
      }
    } else {
      payload.value = memo4 ? memo4.alloc(inst, payload, {}, ctx) : {};
      let unrecognized;
      for (const key of Reflect.ownKeys(input)) {
        if (key === "__proto__")
          continue;
        if (!Object.prototype.propertyIsEnumerable.call(input, key))
          continue;
        let keyResult = def.keyType._zod.run({ value: key, issues: [] }, ctx);
        if (keyResult instanceof Promise) {
          throw new Error("Async schemas not supported in object keys currently");
        }
        const checkNumericKey = typeof key === "string" && number4.test(key) && keyResult.issues.length;
        if (checkNumericKey) {
          const retryResult = def.keyType._zod.run({ value: Number(key), issues: [] }, ctx);
          if (retryResult instanceof Promise) {
            throw new Error("Async schemas not supported in object keys currently");
          }
          if (retryResult.issues.length === 0) {
            keyResult = retryResult;
          }
        }
        if (keyResult.issues.length) {
          if (def.mode === "loose") {
            payload.value[key] = input[key];
          } else if (values) {
            unrecognized = unrecognized ?? [];
            unrecognized.push(key);
          } else {
            payload.issues.push({
              code: "invalid_key",
              origin: "record",
              issues: keyResult.issues.map((iss) => finalizeIssue2(iss, ctx, config2())),
              input: key,
              path: [key],
              inst
            });
          }
          continue;
        }
        const outKey = keyResult.value;
        if (outKey === "__proto__")
          continue;
        const result = def.valueType._zod.run({ value: input[key], issues: [] }, ctx);
        if (result instanceof Promise) {
          proms.push(result.then((result2) => {
            if (result2.issues.length) {
              payload.issues.push(...prefixIssues2(key, result2.issues));
            }
            payload.value[outKey] = result2.value;
          }));
        } else {
          if (result.issues.length) {
            payload.issues.push(...prefixIssues2(key, result.issues));
          }
          payload.value[outKey] = result.value;
        }
      }
      if (unrecognized && unrecognized.length > 0) {
        payload.issues.push({
          code: "unrecognized_keys",
          input,
          inst,
          keys: unrecognized,
          continue: true
        });
      }
    }
    if (proms.length) {
      return Promise.all(proms).then(() => payload);
    }
    return payload;
  };
});
var $ZodEnum2 = /* @__PURE__ */ $constructor2("$ZodEnum", (inst, def) => {
  $ZodType2.init(inst, def);
  const values = getEnumValues2(def.entries);
  const valuesSet = new Set(values);
  inst._zod.values = valuesSet;
  const patternValues = values.filter((k) => propertyKeyTypes2.has(typeof k));
  inst._zod.pattern = new RegExp(patternValues.length ? `^(${patternValues.map((o) => escapeRegex2(o.toString())).join("|")})$` : "^[^\\s\\S]$");
  inst._zod.parse = (payload, _ctx) => {
    const input = payload.value;
    if (valuesSet.has(input)) {
      return payload;
    }
    payload.issues.push({
      code: "invalid_value",
      values,
      input,
      inst
    });
    return payload;
  };
});
var $ZodLiteral2 = /* @__PURE__ */ $constructor2("$ZodLiteral", (inst, def) => {
  $ZodType2.init(inst, def);
  const values = new Set(def.values);
  inst._zod.values = values;
  inst._zod.pattern = new RegExp(def.values.length ? `^(${def.values.map((o) => typeof o === "string" ? escapeRegex2(o) : o ? escapeRegex2(o.toString()) : String(o)).join("|")})$` : "^[^\\s\\S]$");
  inst._zod.parse = (payload, _ctx) => {
    const input = payload.value;
    if (values.has(input)) {
      return payload;
    }
    payload.issues.push({
      code: "invalid_value",
      values: def.values,
      input,
      inst
    });
    return payload;
  };
});
var $ZodTransform2 = /* @__PURE__ */ $constructor2("$ZodTransform", (inst, def) => {
  $ZodType2.init(inst, def);
  inst._zod.optin = "optional";
  globalConfig2.memoizer?.guard(inst);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      throw new $ZodEncodeError2(inst.constructor.name);
    }
    const _out = def.transform(payload.value, payload);
    if (ctx.async) {
      const output = _out instanceof Promise ? _out : Promise.resolve(_out);
      return output.then((output2) => {
        payload.value = output2;
        return payload;
      });
    }
    if (_out instanceof Promise) {
      throw new $ZodAsyncError2();
    }
    payload.value = _out;
    return payload;
  };
});
function handleOptionalResult2(payload, result) {
  payload.value = result.issues.length ? void 0 : result.value;
  return payload;
}
var $ZodOptional2 = /* @__PURE__ */ $constructor2("$ZodOptional", (inst, def) => {
  $ZodType2.init(inst, def);
  defineLazyInternal2(inst, "optin", (zod) => zod.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional");
  inst._zod.optout = "optional";
  defineLazyInternal2(inst, "values", (zod) => {
    const values = zod.def.innerType._zod.values;
    return values ? /* @__PURE__ */ new Set([...values, void 0]) : void 0;
  });
  defineLazyInternal2(inst, "pattern", (zod) => {
    const pattern = zod.def.innerType._zod.pattern;
    return pattern ? new RegExp(`^(${cleanRegex2(pattern.source)})?$`) : void 0;
  });
  inst._zod.parse = (payload, ctx) => {
    if (payload.value === void 0) {
      if (def.innerType._zod.optin !== "defaulted")
        return payload;
      const result = def.innerType._zod.run({ value: payload.value, issues: [] }, ctx);
      if (result instanceof Promise)
        return result.then((result2) => handleOptionalResult2(payload, result2));
      return handleOptionalResult2(payload, result);
    }
    return def.innerType._zod.run(payload, ctx);
  };
});
var $ZodExactOptional2 = /* @__PURE__ */ $constructor2("$ZodExactOptional", (inst, def) => {
  $ZodOptional2.init(inst, def);
  defineLazyInternal2(inst, "values", (zod) => zod.def.innerType._zod.values);
  defineLazyInternal2(inst, "pattern", (zod) => zod.def.innerType._zod.pattern);
  inst._zod.parse = (payload, ctx) => {
    return def.innerType._zod.run(payload, ctx);
  };
});
var $ZodNullable2 = /* @__PURE__ */ $constructor2("$ZodNullable", (inst, def) => {
  $ZodType2.init(inst, def);
  defineLazyInternal2(inst, "optin", (zod) => zod.def.innerType._zod.optin);
  defineLazyInternal2(inst, "optout", (zod) => zod.def.innerType._zod.optout);
  defineLazyInternal2(inst, "pattern", (zod) => {
    const pattern = zod.def.innerType._zod.pattern;
    return pattern ? new RegExp(`^(${cleanRegex2(pattern.source)}|null)$`) : void 0;
  });
  defineLazyInternal2(inst, "values", (zod) => {
    return zod.def.innerType._zod.values ? /* @__PURE__ */ new Set([...zod.def.innerType._zod.values, null]) : void 0;
  });
  inst._zod.parse = (payload, ctx) => {
    if (payload.value === null)
      return payload;
    return def.innerType._zod.run(payload, ctx);
  };
});
var $ZodDefault2 = /* @__PURE__ */ $constructor2("$ZodDefault", (inst, def) => {
  $ZodType2.init(inst, def);
  inst._zod.optin = "defaulted";
  defineLazyInternal2(inst, "values", (zod) => zod.def.innerType._zod.values);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      return def.innerType._zod.run(payload, ctx);
    }
    if (payload.value === void 0) {
      payload.value = def.defaultValue;
      return payload;
    }
    const result = def.innerType._zod.run(payload, ctx);
    if (result instanceof Promise) {
      return result.then((result2) => handleDefaultResult2(result2, def));
    }
    return handleDefaultResult2(result, def);
  };
});
function handleDefaultResult2(payload, def) {
  if (payload.value === void 0) {
    payload.value = def.defaultValue;
  }
  return payload;
}
var $ZodPrefault2 = /* @__PURE__ */ $constructor2("$ZodPrefault", (inst, def) => {
  $ZodType2.init(inst, def);
  inst._zod.optin = "defaulted";
  defineLazyInternal2(inst, "values", (zod) => zod.def.innerType._zod.values);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      return def.innerType._zod.run(payload, ctx);
    }
    if (payload.value === void 0) {
      payload.value = def.defaultValue;
    }
    return def.innerType._zod.run(payload, ctx);
  };
});
var $ZodNonOptional2 = /* @__PURE__ */ $constructor2("$ZodNonOptional", (inst, def) => {
  $ZodType2.init(inst, def);
  defineLazyInternal2(inst, "values", (zod) => {
    const v = zod.def.innerType._zod.values;
    return v ? new Set([...v].filter((x) => x !== void 0)) : void 0;
  });
  inst._zod.parse = (payload, ctx) => {
    const result = def.innerType._zod.run(payload, ctx);
    if (result instanceof Promise) {
      return result.then((result2) => handleNonOptionalResult2(result2, inst));
    }
    return handleNonOptionalResult2(result, inst);
  };
});
function handleNonOptionalResult2(payload, inst) {
  if (!payload.issues.length && payload.value === void 0) {
    payload.issues.push({
      code: "invalid_type",
      expected: "nonoptional",
      input: payload.value,
      inst
    });
  }
  return payload;
}
function handleCatchResult2(payload, result, def, ctx) {
  if (!result.issues.length) {
    payload.value = result.value;
    if (result.memo)
      payload.memo = true;
    return payload;
  }
  payload.value = def.catchValue({
    ...result,
    value: payload.value,
    error: {
      issues: result.issues.map((iss) => finalizeIssue2(iss, ctx, config2()))
    },
    input: payload.value
  });
  return payload;
}
var $ZodCatch2 = /* @__PURE__ */ $constructor2("$ZodCatch", (inst, def) => {
  $ZodType2.init(inst, def);
  defineLazyInternal2(inst, "optin", (zod) => zod.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional");
  defineLazyInternal2(inst, "optout", (zod) => zod.def.innerType._zod.optout);
  defineLazyInternal2(inst, "values", (zod) => zod.def.innerType._zod.values);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      return def.innerType._zod.run(payload, ctx);
    }
    const result = def.innerType._zod.run({ value: payload.value, issues: [] }, ctx);
    if (result instanceof Promise) {
      return result.then((result2) => handleCatchResult2(payload, result2, def, ctx));
    }
    return handleCatchResult2(payload, result, def, ctx);
  };
});
var $ZodPipe2 = /* @__PURE__ */ $constructor2("$ZodPipe", (inst, def) => {
  $ZodType2.init(inst, def);
  defineLazyInternal2(inst, "values", (zod) => zod.def.in._zod.values);
  defineLazyInternal2(inst, "optin", (zod) => zod.def.in._zod.optin);
  defineLazyInternal2(inst, "optout", (zod) => zod.def.out._zod.optout);
  defineLazyInternal2(inst, "propValues", (zod) => zod.def.in._zod.propValues);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      const right = def.out._zod.run(payload, ctx);
      if (right instanceof Promise) {
        return right.then((right2) => handlePipeResult2(right2, def.in, ctx));
      }
      return handlePipeResult2(right, def.in, ctx);
    }
    const left = def.in._zod.run(payload, ctx);
    if (left instanceof Promise) {
      return left.then((left2) => handlePipeResult2(left2, def.out, ctx));
    }
    return handlePipeResult2(left, def.out, ctx);
  };
});
function handlePipeResult2(left, next, ctx) {
  if (left.issues.some((iss) => iss.code !== "unrecognized_keys")) {
    left.aborted = true;
    return left;
  }
  return next._zod.run({ value: left.value, issues: left.issues }, ctx);
}
var $ZodPreprocess2 = /* @__PURE__ */ $constructor2("$ZodPreprocess", (inst, def) => {
  $ZodPipe2.init(inst, def);
});
var $ZodReadonly2 = /* @__PURE__ */ $constructor2("$ZodReadonly", (inst, def) => {
  $ZodType2.init(inst, def);
  defineLazyInternal2(inst, "propValues", (zod) => zod.def.innerType._zod.propValues);
  defineLazyInternal2(inst, "values", (zod) => zod.def.innerType._zod.values);
  defineLazyInternal2(inst, "optin", (zod) => zod.def.innerType?._zod?.optin);
  defineLazyInternal2(inst, "optout", (zod) => zod.def.innerType?._zod?.optout);
  inst._zod.parse = (payload, ctx) => {
    if (ctx.direction === "backward") {
      return def.innerType._zod.run(payload, ctx);
    }
    const result = def.innerType._zod.run(payload, ctx);
    if (result instanceof Promise) {
      return result.then(handleReadonlyResult2);
    }
    return handleReadonlyResult2(result);
  };
});
function handleReadonlyResult2(payload) {
  if (!payload.memo)
    payload.value = Object.freeze(payload.value);
  return payload;
}
var $ZodLazy2 = /* @__PURE__ */ $constructor2("$ZodLazy", (inst, def) => {
  $ZodType2.init(inst, def);
  defineLazy2(inst._zod, "innerType", () => {
    const d = def;
    if (!d._cachedInner)
      d._cachedInner = def.getter();
    return d._cachedInner;
  });
  defineLazyInternal2(inst, "pattern", (zod) => zod.innerType?._zod?.pattern);
  defineLazyInternal2(inst, "propValues", (zod) => zod.innerType?._zod?.propValues);
  defineLazyInternal2(inst, "optin", (zod) => zod.innerType?._zod?.optin ?? void 0);
  defineLazyInternal2(inst, "optout", (zod) => zod.innerType?._zod?.optout ?? void 0);
  inst._zod.parse = (payload, ctx) => {
    const inner = inst._zod.innerType;
    return inner._zod.run(payload, ctx);
  };
});
var $ZodCustom2 = /* @__PURE__ */ $constructor2("$ZodCustom", (inst, def) => {
  $ZodCheck2.init(inst, def);
  $ZodType2.init(inst, def);
  inst._zod.parse = (payload, _) => {
    return payload;
  };
  inst._zod.check = (payload) => {
    const input = payload.value;
    const r = def.fn(input);
    if (r instanceof Promise) {
      return r.then((r2) => handleRefineResult2(r2, payload, input, inst));
    }
    handleRefineResult2(r, payload, input, inst);
    return;
  };
});
function handleRefineResult2(result, payload, input, inst) {
  if (!result) {
    const _iss = {
      code: "custom",
      input,
      inst,
      // incorporates params.error into issue reporting
      path: [...inst._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !inst._zod.def.abort
      // params: inst._zod.def.params,
    };
    if (inst._zod.def.params)
      _iss.params = inst._zod.def.params;
    payload.issues.push(issue2(_iss));
  }
}

// node_modules/@modelcontextprotocol/server/node_modules/zod/v4/core/memoizer.js
var $ZodCyclicError2 = class extends Error {
  constructor() {
    super(`Cannot parse a reference cycle that closes through a transform`);
    this.name = "ZodCyclicError";
  }
};
var STATE2 = "~memo";
var NO_ISSUES2 = [];
function cloneIssues2(issues) {
  return issues.map((iss) => iss.path ? { ...iss, path: iss.path.slice() } : { ...iss });
}
var recursive2 = /* @__PURE__ */ new WeakMap();
function isRecursive2(inst, stack) {
  const cached4 = recursive2.get(inst);
  if (cached4 !== void 0)
    return cached4;
  if (stack.has(inst))
    return true;
  stack.add(inst);
  let result = false;
  const check2 = (child) => {
    if (!result && child?._zod && isRecursive2(child, stack))
      result = true;
  };
  const def = inst._zod.def;
  const kind = def.type;
  switch (kind) {
    case "object": {
      for (const key of Reflect.ownKeys(def.shape))
        check2(def.shape[key]);
      check2(def.catchall);
      break;
    }
    case "array":
      check2(def.element);
      break;
    case "tuple":
      for (const el of def.items)
        check2(el);
      check2(def.rest);
      break;
    case "record":
    case "map":
      check2(def.keyType);
      check2(def.valueType);
      break;
    case "set":
      check2(def.valueType);
      break;
    case "union":
      for (const el of def.options)
        check2(el);
      break;
    case "intersection":
      check2(def.left);
      check2(def.right);
      break;
    case "optional":
    case "nullable":
    case "default":
    case "prefault":
    case "catch":
    case "readonly":
    case "nonoptional":
    case "promise":
    case "success":
      check2(def.innerType);
      break;
    case "pipe":
      check2(def.in);
      check2(def.out);
      break;
    case "function":
      check2(def.input);
      check2(def.output);
      break;
    // reading `_zod.innerType` resolves the getter once and caches it
    case "lazy":
      check2(inst._zod.innerType);
      break;
    // a leaf by choice: `parts` are regex fragments, not data positions
    case "template_literal":
    // leaves
    case "string":
    case "number":
    case "int":
    case "boolean":
    case "bigint":
    case "symbol":
    case "undefined":
    case "null":
    case "void":
    case "never":
    case "any":
    case "unknown":
    case "date":
    case "nan":
    case "enum":
    case "literal":
    case "file":
    case "transform":
    case "custom":
      break;
    default: {
      kind;
      for (const key in def) {
        const desc = Object.getOwnPropertyDescriptor(def, key);
        if (!desc || desc.get)
          continue;
        const value = desc.value;
        if (!value || typeof value !== "object")
          continue;
        if (value._zod)
          check2(value);
        else if (Array.isArray(value))
          for (const el of value)
            check2(el);
      }
    }
  }
  stack.delete(inst);
  recursive2.set(inst, result);
  return result;
}
function bucketFor2(state, inst) {
  let bucket = state.buckets.get(inst);
  if (!bucket) {
    bucket = /* @__PURE__ */ new Map();
    state.buckets.set(inst, bucket);
  }
  return bucket;
}
var handoff2;
var open2 = [];
var memo2 = {
  alloc(_inst, payload, empty) {
    const bucket = handoff2;
    if (!bucket)
      return empty;
    handoff2 = void 0;
    const entry = { value: empty, issues: null };
    bucket.set(payload.value, entry);
    open2.push(entry);
    return empty;
  },
  guard(inst) {
    var _a5;
    (_a5 = inst._zod).deferred ?? (_a5.deferred = []);
    inst._zod.deferred.push(() => {
      const base = inst._zod.parse;
      const wrapped = (payload, ctx) => {
        if (ctx.direction !== "backward" && isBackEdge2(ctx, payload.value))
          throw new $ZodCyclicError2();
        return base(payload, ctx);
      };
      inst._zod.parse = wrapped;
      if (inst._zod.run === base)
        inst._zod.run = wrapped;
    });
  },
  attach(inst) {
    var _a5;
    let isRecursiveInst;
    let lastCtx;
    let lastBucket;
    (_a5 = inst._zod).deferred ?? (_a5.deferred = []);
    inst._zod.deferred.push(() => {
      const base = inst._zod.parse;
      const wrapped = (payload, ctx) => {
        if (isRecursiveInst === void 0) {
          isRecursiveInst = isRecursive2(inst, /* @__PURE__ */ new Set());
          if (!isRecursiveInst) {
            inst._zod.parse = base;
            if (inst._zod.run === wrapped)
              inst._zod.run = base;
            return base(payload, ctx);
          }
        }
        const input = payload.value;
        if (input === null || typeof input !== "object")
          return base(payload, ctx);
        let state = ctx[STATE2];
        if (!state) {
          state = { buckets: /* @__PURE__ */ new Map(), backEdges: void 0 };
          ctx[STATE2] = state;
        }
        let bucket;
        if (lastCtx === ctx) {
          bucket = lastBucket;
        } else {
          bucket = bucketFor2(state, inst);
          lastCtx = ctx;
          lastBucket = bucket;
        }
        const hit = bucket.get(input);
        if (hit) {
          payload.value = hit.value;
          if (hit.issues) {
            if (hit.issues.length)
              payload.issues.push(...cloneIssues2(hit.issues));
          } else {
            payload.memo = true;
            state.backEdges ?? (state.backEdges = /* @__PURE__ */ new Set());
            state.backEdges.add(hit.value);
          }
          return payload;
        }
        handoff2 = bucket;
        const depth = open2.length;
        const result = base(payload, ctx);
        handoff2 = void 0;
        const entry = open2.length > depth ? open2.pop() : void 0;
        if (result instanceof Promise) {
          return result.then((r) => {
            if (entry)
              entry.issues = r.issues.length ? cloneIssues2(r.issues) : NO_ISSUES2;
            return r;
          });
        }
        if (entry)
          entry.issues = result.issues.length ? cloneIssues2(result.issues) : NO_ISSUES2;
        return result;
      };
      inst._zod.parse = wrapped;
      if (inst._zod.run === base)
        inst._zod.run = wrapped;
    });
  }
};
function memoizer2() {
  return memo2;
}
function isBackEdge2(ctx, value) {
  const backEdges = ctx[STATE2]?.backEdges;
  return backEdges !== void 0 && value !== null && typeof value === "object" && backEdges.has(value);
}

// node_modules/@modelcontextprotocol/server/node_modules/zod/v4/locales/en.js
var error2 = () => {
  const Sizable = {
    string: { unit: "characters", verb: "to have" },
    file: { unit: "bytes", verb: "to have" },
    array: { unit: "items", verb: "to have" },
    set: { unit: "items", verb: "to have" },
    map: { unit: "entries", verb: "to have" }
  };
  function getSizing(origin) {
    return Sizable[origin] ?? null;
  }
  const FormatDictionary = {
    regex: "input",
    email: "email address",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datetime",
    date: "ISO date",
    time: "ISO time",
    duration: "ISO duration",
    ipv4: "IPv4 address",
    ipv6: "IPv6 address",
    mac: "MAC address",
    cidrv4: "IPv4 range",
    cidrv6: "IPv6 range",
    base64: "base64-encoded string",
    base64url: "base64url-encoded string",
    json_string: "JSON string",
    e164: "E.164 number",
    credit_card: "credit card number",
    jwt: "JWT",
    template_literal: "input"
  };
  const TypeDictionary = {
    // Compatibility: "nan" -> "NaN" for display
    nan: "NaN"
    // All other type names omitted - they fall back to raw values via ?? operator
  };
  function getTypeName(type, input) {
    if (type === "number" && typeof input === "number" && !Number.isFinite(input)) {
      return String(input);
    }
    return TypeDictionary[type] ?? type;
  }
  return (issue4) => {
    switch (issue4.code) {
      case "invalid_type": {
        const expected = getTypeName(issue4.expected);
        const receivedType = parsedType2(issue4.input);
        const received = getTypeName(receivedType, issue4.input);
        return `Invalid input: expected ${expected}, received ${received}`;
      }
      case "invalid_value":
        if (issue4.values.length === 1)
          return `Invalid input: expected ${stringifyPrimitive2(issue4.values[0])}`;
        return `Invalid option: expected one of ${joinValues2(issue4.values, "|")}`;
      case "too_big": {
        const adj = issue4.exact ? "exactly " : issue4.inclusive ? "<=" : "<";
        const sizing = getSizing(issue4.origin);
        if (sizing)
          return `Too big: expected ${issue4.origin ?? "value"} to have ${adj}${issue4.maximum.toString()} ${sizing.unit ?? "elements"}`;
        return `Too big: expected ${issue4.origin ?? "value"} to be ${adj}${issue4.maximum.toString()}`;
      }
      case "too_small": {
        const adj = issue4.exact ? "exactly " : issue4.inclusive ? ">=" : ">";
        const sizing = getSizing(issue4.origin);
        if (sizing) {
          return `Too small: expected ${issue4.origin} to have ${adj}${issue4.minimum.toString()} ${sizing.unit}`;
        }
        return `Too small: expected ${issue4.origin} to be ${adj}${issue4.minimum.toString()}`;
      }
      case "invalid_format": {
        const _issue = issue4;
        if (_issue.format === "starts_with") {
          return `Invalid string: must start with "${_issue.prefix}"`;
        }
        if (_issue.format === "ends_with")
          return `Invalid string: must end with "${_issue.suffix}"`;
        if (_issue.format === "includes")
          return `Invalid string: must include "${_issue.includes}"`;
        if (_issue.format === "regex")
          return `Invalid string: must match pattern ${_issue.pattern}`;
        return `Invalid ${FormatDictionary[_issue.format] ?? issue4.format}`;
      }
      case "not_multiple_of":
        return `Invalid number: must be a multiple of ${issue4.divisor}`;
      case "unrecognized_keys":
        return `Unrecognized key${issue4.keys.length > 1 ? "s" : ""}: ${joinValues2(issue4.keys, ", ")}`;
      case "invalid_key":
        return `Invalid key in ${issue4.origin}`;
      case "invalid_union":
        if (issue4.options && Array.isArray(issue4.options) && issue4.options.length > 0) {
          const opts = issue4.options.map((o) => `'${o}'`).join(" | ");
          return `Invalid discriminator value. Expected ${opts}`;
        }
        if (issue4.inclusive === false) {
          return "Invalid input: more than one option matched";
        }
        return "Invalid input";
      case "invalid_element":
        return `Invalid value in ${issue4.origin}`;
      default:
        return `Invalid input`;
    }
  };
};
function en_default2() {
  return {
    localeError: error2()
  };
}

// node_modules/@modelcontextprotocol/server/node_modules/zod/v4/core/registries.js
var _a4;
var $ZodRegistry2 = class {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap();
    this._idmap = /* @__PURE__ */ new Map();
  }
  add(schema, ..._meta) {
    const meta3 = _meta[0];
    this._map.set(schema, meta3);
    if (meta3 && typeof meta3 === "object" && "id" in meta3) {
      this._idmap.set(meta3.id, schema);
    }
    return this;
  }
  clear() {
    this._map = /* @__PURE__ */ new WeakMap();
    this._idmap = /* @__PURE__ */ new Map();
    return this;
  }
  remove(schema) {
    const meta3 = this._map.get(schema);
    if (meta3 && typeof meta3 === "object" && "id" in meta3) {
      this._idmap.delete(meta3.id);
    }
    this._map.delete(schema);
    return this;
  }
  get(schema) {
    const p = schema._zod.parent;
    if (p) {
      const pm = { ...this.get(p) ?? {} };
      delete pm.id;
      const f = { ...pm, ...this._map.get(schema) };
      return Object.keys(f).length ? f : void 0;
    }
    return this._map.get(schema);
  }
  has(schema) {
    return this._map.has(schema);
  }
};
function registry2() {
  return new $ZodRegistry2();
}
(_a4 = globalThis).__zod_globalRegistry ?? (_a4.__zod_globalRegistry = registry2());
var globalRegistry2 = globalThis.__zod_globalRegistry;

// node_modules/@modelcontextprotocol/server/node_modules/zod/v4/core/api.js
// @__NO_SIDE_EFFECTS__
function _string2(Class4, params) {
  return new Class4({
    type: "string",
    ...normalizeParams2(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _email2(Class4, params) {
  return new Class4({
    type: "string",
    format: "email",
    check: "string_format",
    abort: false,
    ...normalizeParams2(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _guid2(Class4, params) {
  return new Class4({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: false,
    ...normalizeParams2(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _uuid2(Class4, params) {
  return new Class4({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: false,
    ...normalizeParams2(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _uuidv42(Class4, params) {
  return new Class4({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: false,
    version: "v4",
    ...normalizeParams2(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _uuidv62(Class4, params) {
  return new Class4({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: false,
    version: "v6",
    ...normalizeParams2(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _uuidv72(Class4, params) {
  return new Class4({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: false,
    version: "v7",
    ...normalizeParams2(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _url2(Class4, params) {
  return new Class4({
    type: "string",
    format: "url",
    check: "string_format",
    abort: false,
    ...normalizeParams2(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _emoji4(Class4, params) {
  return new Class4({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: false,
    ...normalizeParams2(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _nanoid2(Class4, params) {
  return new Class4({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: false,
    ...normalizeParams2(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _cuid3(Class4, params) {
  return new Class4({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: false,
    ...normalizeParams2(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _cuid22(Class4, params) {
  return new Class4({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: false,
    ...normalizeParams2(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _ulid2(Class4, params) {
  return new Class4({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: false,
    ...normalizeParams2(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _xid2(Class4, params) {
  return new Class4({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: false,
    ...normalizeParams2(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _ksuid2(Class4, params) {
  return new Class4({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: false,
    ...normalizeParams2(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _ipv42(Class4, params) {
  return new Class4({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: false,
    ...normalizeParams2(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _ipv62(Class4, params) {
  return new Class4({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: false,
    ...normalizeParams2(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _cidrv42(Class4, params) {
  return new Class4({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: false,
    ...normalizeParams2(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _cidrv62(Class4, params) {
  return new Class4({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: false,
    ...normalizeParams2(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _base642(Class4, params) {
  return new Class4({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: false,
    ...normalizeParams2(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _base64url2(Class4, params) {
  return new Class4({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: false,
    ...normalizeParams2(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _e1642(Class4, params) {
  return new Class4({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: false,
    ...normalizeParams2(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _jwt2(Class4, params) {
  return new Class4({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: false,
    ...normalizeParams2(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _isoDateTime2(Class4, params) {
  return new Class4({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: false,
    local: false,
    precision: null,
    ...normalizeParams2(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _isoDate2(Class4, params) {
  return new Class4({
    type: "string",
    format: "date",
    check: "string_format",
    ...normalizeParams2(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _isoTime2(Class4, params) {
  return new Class4({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...normalizeParams2(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _isoDuration2(Class4, params) {
  return new Class4({
    type: "string",
    format: "duration",
    check: "string_format",
    ...normalizeParams2(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _number2(Class4, params) {
  return new Class4({
    type: "number",
    checks: [],
    ...normalizeParams2(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _int2(Class4, params) {
  return new Class4({
    type: "number",
    check: "number_format",
    abort: false,
    format: "safeint",
    ...normalizeParams2(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _boolean2(Class4, params) {
  return new Class4({
    type: "boolean",
    ...normalizeParams2(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _null5(Class4, params) {
  return new Class4({
    type: "null",
    ...normalizeParams2(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _unknown2(Class4) {
  return new Class4({
    type: "unknown"
  });
}
// @__NO_SIDE_EFFECTS__
function _never2(Class4, params) {
  return new Class4({
    type: "never",
    ...normalizeParams2(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _lt2(value, params) {
  return new $ZodCheckLessThan2({
    check: "less_than",
    ...normalizeParams2(params),
    value,
    inclusive: false
  });
}
// @__NO_SIDE_EFFECTS__
function _lte2(value, params) {
  return new $ZodCheckLessThan2({
    check: "less_than",
    ...normalizeParams2(params),
    value,
    inclusive: true
  });
}
// @__NO_SIDE_EFFECTS__
function _gt2(value, params) {
  return new $ZodCheckGreaterThan2({
    check: "greater_than",
    ...normalizeParams2(params),
    value,
    inclusive: false
  });
}
// @__NO_SIDE_EFFECTS__
function _gte2(value, params) {
  return new $ZodCheckGreaterThan2({
    check: "greater_than",
    ...normalizeParams2(params),
    value,
    inclusive: true
  });
}
// @__NO_SIDE_EFFECTS__
function _multipleOf2(value, params) {
  return new $ZodCheckMultipleOf2({
    check: "multiple_of",
    ...normalizeParams2(params),
    value
  });
}
// @__NO_SIDE_EFFECTS__
function _maxLength2(maximum, params) {
  const ch = new $ZodCheckMaxLength2({
    check: "max_length",
    ...normalizeParams2(params),
    maximum
  });
  return ch;
}
// @__NO_SIDE_EFFECTS__
function _minLength2(minimum, params) {
  return new $ZodCheckMinLength2({
    check: "min_length",
    ...normalizeParams2(params),
    minimum
  });
}
// @__NO_SIDE_EFFECTS__
function _length2(length, params) {
  return new $ZodCheckLengthEquals2({
    check: "length_equals",
    ...normalizeParams2(params),
    length
  });
}
// @__NO_SIDE_EFFECTS__
function _regex2(pattern, params) {
  return new $ZodCheckRegex2({
    check: "string_format",
    format: "regex",
    ...normalizeParams2(params),
    pattern
  });
}
// @__NO_SIDE_EFFECTS__
function _lowercase2(params) {
  return new $ZodCheckLowerCase2({
    check: "string_format",
    format: "lowercase",
    ...normalizeParams2(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _uppercase2(params) {
  return new $ZodCheckUpperCase2({
    check: "string_format",
    format: "uppercase",
    ...normalizeParams2(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _includes2(includes, params) {
  return new $ZodCheckIncludes2({
    check: "string_format",
    format: "includes",
    ...normalizeParams2(params),
    includes
  });
}
// @__NO_SIDE_EFFECTS__
function _startsWith2(prefix, params) {
  return new $ZodCheckStartsWith2({
    check: "string_format",
    format: "starts_with",
    ...normalizeParams2(params),
    prefix
  });
}
// @__NO_SIDE_EFFECTS__
function _endsWith2(suffix, params) {
  return new $ZodCheckEndsWith2({
    check: "string_format",
    format: "ends_with",
    ...normalizeParams2(params),
    suffix
  });
}
// @__NO_SIDE_EFFECTS__
function _overwrite2(tx) {
  return new $ZodCheckOverwrite2({
    check: "overwrite",
    tx
  });
}
// @__NO_SIDE_EFFECTS__
function _normalize2(form) {
  return /* @__PURE__ */ _overwrite2((input) => input.normalize(form));
}
// @__NO_SIDE_EFFECTS__
function _trim2() {
  return /* @__PURE__ */ _overwrite2((input) => input.trim());
}
// @__NO_SIDE_EFFECTS__
function _toLowerCase2() {
  return /* @__PURE__ */ _overwrite2((input) => input.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function _toUpperCase2() {
  return /* @__PURE__ */ _overwrite2((input) => input.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function _slugify2() {
  return /* @__PURE__ */ _overwrite2((input) => slugify2(input));
}
// @__NO_SIDE_EFFECTS__
function _array2(Class4, element, params) {
  return new Class4({
    type: "array",
    element,
    // get element() {
    //   return element;
    // },
    ...normalizeParams2(params)
  });
}
// @__NO_SIDE_EFFECTS__
function _refine2(Class4, fn, _params) {
  const schema = new Class4({
    type: "custom",
    check: "custom",
    fn,
    ...normalizeParams2(_params)
  });
  return schema;
}
// @__NO_SIDE_EFFECTS__
function _superRefine2(fn, params) {
  const ch = /* @__PURE__ */ _check2((payload) => {
    payload.addIssue = (issue4) => {
      if (typeof issue4 === "string") {
        payload.issues.push(issue2(issue4, payload.value, ch._zod.def));
      } else {
        const _issue = issue4;
        if (_issue.fatal)
          _issue.continue = false;
        _issue.code ?? (_issue.code = "custom");
        if (!("input" in _issue))
          _issue.input = payload.value;
        _issue.inst ?? (_issue.inst = ch);
        _issue.continue ?? (_issue.continue = !ch._zod.def.abort);
        payload.issues.push(issue2(_issue));
      }
    };
    return fn(payload.value, payload);
  }, params);
  return ch;
}
// @__NO_SIDE_EFFECTS__
function _check2(fn, params) {
  const ch = new $ZodCheck2({
    check: "custom",
    ...normalizeParams2(params)
  });
  ch._zod.check = fn;
  return ch;
}

// node_modules/@modelcontextprotocol/server/node_modules/zod/v4/core/to-json-schema.js
function assignProps2(target, ...sources) {
  for (const source of sources) {
    for (const key of Reflect.ownKeys(source)) {
      if (Object.prototype.propertyIsEnumerable.call(source, key)) {
        assignProp2(target, key, source[key]);
      }
    }
  }
  return target;
}
function initializeContext2(params) {
  let target = params?.target ?? "draft-2020-12";
  if (target === "draft-4")
    target = "draft-04";
  if (target === "draft-7")
    target = "draft-07";
  return {
    processors: params.processors ?? {},
    metadataRegistry: params?.metadata ?? globalRegistry2,
    target,
    unrepresentable: params?.unrepresentable ?? "throw",
    override: params?.override ?? (() => {
    }),
    io: params?.io ?? "output",
    counter: 0,
    seen: /* @__PURE__ */ new Map(),
    sharedDefsExtractedFor: void 0,
    sharedEmitDoneFor: void 0,
    cycles: params?.cycles ?? "ref",
    reused: params?.reused ?? "inline",
    intersections: [],
    deferred: [],
    external: params?.external ?? void 0
  };
}
function handleUnrepresentable2(schema, ctx, json, params, message) {
  const result = typeof ctx.unrepresentable === "function" ? ctx.unrepresentable({ zodSchema: schema, path: params.path, message }) : ctx.unrepresentable;
  if (result === "any")
    return false;
  if (result === void 0 || result === "throw")
    throw new Error(message);
  Object.assign(json, result);
  return true;
}
function process2(schema, ctx, _params = { path: [], schemaPath: [] }) {
  var _a5;
  const def = schema._zod.def;
  const seen = ctx.seen.get(schema);
  if (seen) {
    seen.count++;
    const isCycle = _params.schemaPath.includes(schema);
    if (isCycle) {
      seen.cycle = _params.path;
    }
    return seen.schema;
  }
  const result = { schema: {}, count: 1, cycle: void 0, path: _params.path };
  ctx.seen.set(schema, result);
  ctx.sharedDefsExtractedFor = void 0;
  ctx.sharedEmitDoneFor = void 0;
  const overrideSchema = schema._zod.toJSONSchema?.();
  if (overrideSchema) {
    result.schema = overrideSchema;
  } else {
    const params = {
      ..._params,
      schemaPath: [..._params.schemaPath, schema],
      path: _params.path
    };
    if (schema._zod.processJSONSchema) {
      schema._zod.processJSONSchema(ctx, result.schema, params);
    } else {
      const _json = result.schema;
      const processor = ctx.processors[def.type];
      if (!processor) {
        throw new Error(`[toJSONSchema]: Non-representable type encountered: ${def.type}`);
      }
      processor(schema, ctx, _json, params);
    }
    const parent = schema._zod.parent;
    if (parent) {
      if (!result.ref)
        result.ref = parent;
      process2(parent, ctx, params);
      ctx.seen.get(parent).isParent = true;
    }
  }
  const meta3 = ctx.metadataRegistry.get(schema);
  if (meta3)
    assignProps2(result.schema, meta3);
  if (ctx.io === "input" && isTransforming2(schema)) {
    delete result.schema.examples;
    delete result.schema.default;
  }
  if (ctx.io === "input" && "_prefault" in result.schema)
    (_a5 = result.schema).default ?? (_a5.default = result.schema._prefault);
  delete result.schema._prefault;
  const _result = ctx.seen.get(schema);
  return _result.schema;
}
function encodeJSONPointerSegment2(segment) {
  return segment.replace(/~/g, "~0").replace(/\//g, "~1");
}
function extractDefs2(ctx, schema) {
  const root = ctx.seen.get(schema);
  if (!root)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  if (ctx.external && ctx.sharedDefsExtractedFor === ctx.external)
    return;
  const idToSchema = /* @__PURE__ */ new Map();
  for (const entry of ctx.seen.entries()) {
    const id = ctx.metadataRegistry.get(entry[0])?.id;
    if (id) {
      const existing = idToSchema.get(id);
      if (existing && existing !== entry[0]) {
        throw new Error(`Duplicate schema id "${id}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
      }
      idToSchema.set(id, entry[0]);
    }
  }
  const makeURI = (entry) => {
    const defsSegment = ctx.target === "draft-2020-12" ? "$defs" : "definitions";
    if (ctx.external) {
      const externalId = ctx.external.registry.get(entry[0])?.id;
      const uriGenerator = ctx.external.uri ?? ((id2) => id2);
      if (externalId) {
        return { ref: uriGenerator(externalId) };
      }
      const id = entry[1].defId ?? entry[1].schema.id ?? `schema${ctx.counter++}`;
      entry[1].defId = id;
      return { defId: id, ref: `${uriGenerator("__shared")}#/${defsSegment}/${encodeJSONPointerSegment2(id)}` };
    }
    const uriPrefix = `#`;
    const defUriPrefix = `${uriPrefix}/${defsSegment}/`;
    if (entry[1] === root && !entry[1].schema.id) {
      return { ref: uriPrefix };
    }
    const defId = entry[1].schema.id ?? `__schema${ctx.counter++}`;
    return { defId, ref: defUriPrefix + encodeJSONPointerSegment2(defId) };
  };
  const extractToDef = (entry) => {
    if (entry[1].schema.$ref) {
      return;
    }
    const seen = entry[1];
    const { ref, defId } = makeURI(entry);
    seen.def = { ...seen.schema };
    if (defId)
      seen.defId = defId;
    const schema2 = seen.schema;
    for (const key in schema2) {
      delete schema2[key];
    }
    schema2.$ref = ref;
  };
  if (ctx.cycles === "throw") {
    for (const entry of ctx.seen.entries()) {
      const seen = entry[1];
      if (seen.cycle) {
        throw new Error(`Cycle detected: #/${seen.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
      }
    }
  }
  for (const entry of ctx.seen.entries()) {
    const seen = entry[1];
    if (schema === entry[0]) {
      extractToDef(entry);
      continue;
    }
    if (ctx.external) {
      const ext = ctx.external.registry.get(entry[0])?.id;
      if (schema !== entry[0] && ext) {
        extractToDef(entry);
        continue;
      }
    }
    const id = ctx.metadataRegistry.get(entry[0])?.id;
    if (id) {
      extractToDef(entry);
      continue;
    }
    if (seen.cycle) {
      extractToDef(entry);
      continue;
    }
    if (seen.count > 1) {
      if (ctx.reused === "ref") {
        extractToDef(entry);
        continue;
      }
    }
  }
  if (ctx.external)
    ctx.sharedDefsExtractedFor = ctx.external;
}
function compactTypeUnion2(schema) {
  const options = schema.anyOf;
  if (!Array.isArray(options) || options.length === 0 || schema.type !== void 0)
    return;
  const types = [];
  for (const option of options) {
    if (!option || typeof option !== "object")
      return;
    compactTypeUnion2(option);
    const keys = Object.keys(option);
    if (keys.length !== 1 || keys[0] !== "type")
      return;
    const type = option.type;
    for (const member of Array.isArray(type) ? type : [type]) {
      if (typeof member !== "string")
        return;
      if (!types.includes(member))
        types.push(member);
    }
  }
  delete schema.anyOf;
  schema.type = types.length === 1 ? types[0] : types;
}
var FOLDABLE_KEYS2 = /* @__PURE__ */ new Set(["type", "properties", "required", "additionalProperties"]);
var UNION_KEYS2 = ["oneOf", "anyOf"];
function undeclaredConstraint2(member) {
  const extra = member.additionalProperties;
  if (extra === void 0 || extra === false || typeof extra !== "object" || extra === null)
    return null;
  return Object.keys(extra).length ? extra : null;
}
function foldObjects2(members3) {
  const objects = [];
  for (const member of members3) {
    if (typeof member !== "object" || member.type !== "object")
      return null;
    for (const key in member) {
      if (!FOLDABLE_KEYS2.has(key))
        return null;
    }
    objects.push(member);
  }
  const properties = {};
  const required4 = /* @__PURE__ */ new Set();
  for (const object4 of objects) {
    for (const key in object4.properties) {
      if (Object.prototype.hasOwnProperty.call(properties, key))
        continue;
      const parts = [];
      for (const other of objects) {
        const part = other.properties?.[key] ?? undeclaredConstraint2(other);
        if (part === null || part === void 0)
          continue;
        if (!parts.some((seen) => JSON.stringify(seen) === JSON.stringify(part)))
          parts.push(part);
      }
      const merged = parts.length === 1 ? parts[0] : foldObjects2(parts) ?? { allOf: parts };
      assignProp2(properties, key, merged);
    }
    for (const key of object4.required ?? [])
      required4.add(key);
  }
  const folded = { type: "object", properties };
  if (required4.size)
    folded.required = [...required4];
  if (objects.every((object4) => object4.additionalProperties === false)) {
    folded.additionalProperties = false;
  } else {
    const constraints = [];
    for (const object4 of objects) {
      const constraint = undeclaredConstraint2(object4);
      if (constraint && !constraints.some((seen) => JSON.stringify(seen) === JSON.stringify(constraint)))
        constraints.push(constraint);
    }
    if (constraints.length === 1)
      folded.additionalProperties = constraints[0];
    else if (constraints.length > 1)
      folded.additionalProperties = { allOf: constraints };
  }
  return folded;
}
function foldIntersection2(json) {
  const allOf = json.allOf;
  if (!Array.isArray(allOf) || allOf.length < 2)
    return;
  for (const key of FOLDABLE_KEYS2)
    if (key in json)
      return;
  const unions = allOf.filter((m) => UNION_KEYS2.some((k) => Array.isArray(m[k])));
  let folded = null;
  if (!unions.length) {
    folded = foldObjects2(allOf);
  } else {
    const union4 = unions[0];
    const keyword = UNION_KEYS2.find((k) => Array.isArray(union4[k]));
    if (Object.keys(union4).length !== 1)
      return;
    const rest = allOf.filter((m) => m !== union4);
    const branches = union4[keyword].map((branch) => foldObjects2([...rest, branch]));
    if (branches.some((b) => !b))
      return;
    folded = { [keyword]: branches };
  }
  if (!folded)
    return;
  delete json.allOf;
  assignProps2(json, folded);
}
function finalize2(ctx, schema) {
  const root = ctx.seen.get(schema);
  if (!root)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const flattenRef = (zodSchema) => {
    const seen = ctx.seen.get(zodSchema);
    if (seen.ref === null)
      return;
    const schema2 = seen.def ?? seen.schema;
    const _cached = { ...schema2 };
    const ref = seen.ref;
    seen.ref = null;
    if (ref) {
      flattenRef(ref);
      const refSeen = ctx.seen.get(ref);
      const refSchema = refSeen.schema;
      if (refSchema.$ref && (ctx.target === "draft-07" || ctx.target === "draft-04" || ctx.target === "openapi-3.0")) {
        schema2.allOf = schema2.allOf ?? [];
        schema2.allOf.push(refSchema);
      } else {
        assignProps2(schema2, refSchema);
      }
      assignProps2(schema2, _cached);
      const isParentRef = zodSchema._zod.parent === ref;
      if (isParentRef) {
        for (const key in schema2) {
          if (key === "$ref" || key === "allOf")
            continue;
          if (!(key in _cached)) {
            delete schema2[key];
          }
        }
      }
      if (refSchema.$ref && refSeen.def) {
        for (const key in schema2) {
          if (key === "$ref" || key === "allOf")
            continue;
          if (key in refSeen.def && JSON.stringify(schema2[key]) === JSON.stringify(refSeen.def[key])) {
            delete schema2[key];
          }
        }
      }
    }
    const parent = zodSchema._zod.parent;
    if (parent && parent !== ref) {
      flattenRef(parent);
      const parentSeen = ctx.seen.get(parent);
      if (parentSeen?.schema.$ref) {
        schema2.$ref = parentSeen.schema.$ref;
        if (parentSeen.def) {
          for (const key in schema2) {
            if (key === "$ref" || key === "allOf")
              continue;
            if (key in parentSeen.def && JSON.stringify(schema2[key]) === JSON.stringify(parentSeen.def[key])) {
              delete schema2[key];
            }
          }
        }
      }
    }
    ctx.override({
      zodSchema,
      jsonSchema: schema2,
      path: seen.path ?? []
    });
  };
  if (!ctx.external || ctx.sharedEmitDoneFor !== ctx.external) {
    for (const entry of [...ctx.seen.entries()].reverse()) {
      flattenRef(entry[0]);
    }
    if (ctx.target !== "openapi-3.0") {
      for (const entry of ctx.seen.entries()) {
        compactTypeUnion2(entry[1].def ?? entry[1].schema);
      }
    }
    for (const rewrite of ctx.deferred)
      rewrite();
    if (ctx.intersections.length) {
      const carriers = /* @__PURE__ */ new Map();
      for (const seen of ctx.seen.values()) {
        for (const json of [seen.schema, seen.def]) {
          const allOf = json?.allOf;
          if (!Array.isArray(allOf))
            continue;
          const existing = carriers.get(allOf);
          if (existing)
            existing.push(json);
          else
            carriers.set(allOf, [json]);
        }
      }
      for (const allOf of ctx.intersections) {
        for (const json of carriers.get(allOf) ?? [])
          foldIntersection2(json);
      }
    }
  }
  const result = {};
  if (ctx.target === "draft-2020-12") {
    result.$schema = "https://json-schema.org/draft/2020-12/schema";
  } else if (ctx.target === "draft-07") {
    result.$schema = "http://json-schema.org/draft-07/schema#";
  } else if (ctx.target === "draft-04") {
    result.$schema = "http://json-schema.org/draft-04/schema#";
  } else if (ctx.target === "openapi-3.0") {
  } else {
  }
  if (ctx.external?.uri) {
    const id = ctx.external.registry.get(schema)?.id;
    if (!id)
      throw new Error("Schema is missing an `id` property");
    result.$id = ctx.external.uri(id);
  }
  assignProps2(result, root.defId ? root.schema : root.def ?? root.schema);
  const rootMetaId = ctx.metadataRegistry.get(schema)?.id;
  if (rootMetaId !== void 0 && result.id === rootMetaId)
    delete result.id;
  const defs = ctx.external?.defs ?? {};
  if (!ctx.external || ctx.sharedEmitDoneFor !== ctx.external) {
    for (const entry of ctx.seen.entries()) {
      const seen = entry[1];
      if (seen.def && seen.defId) {
        if (seen.def.id === seen.defId)
          delete seen.def.id;
        assignProp2(defs, seen.defId, seen.def);
      }
    }
  }
  if (ctx.external)
    ctx.sharedEmitDoneFor = ctx.external;
  if (ctx.external) {
  } else {
    if (Object.keys(defs).length > 0) {
      if (ctx.target === "draft-2020-12") {
        result.$defs = defs;
      } else {
        result.definitions = defs;
      }
    }
  }
  try {
    const finalized = JSON.parse(JSON.stringify(result));
    Object.defineProperty(finalized, "~standard", {
      value: {
        ...schema["~standard"],
        jsonSchema: {
          input: createStandardJSONSchemaMethod2(schema, "input", ctx.processors),
          output: createStandardJSONSchemaMethod2(schema, "output", ctx.processors)
        }
      },
      enumerable: false,
      writable: false
    });
    return finalized;
  } catch (_err) {
    throw new Error("Error converting schema to JSON.");
  }
}
function isTransforming2(_schema, _ctx) {
  const ctx = _ctx ?? { seen: /* @__PURE__ */ new Set() };
  if (ctx.seen.has(_schema))
    return false;
  ctx.seen.add(_schema);
  const def = _schema._zod.def;
  if (def.type === "transform")
    return true;
  if (def.type === "array")
    return isTransforming2(def.element, ctx);
  if (def.type === "set")
    return isTransforming2(def.valueType, ctx);
  if (def.type === "lazy")
    return isTransforming2(def.getter(), ctx);
  if (def.type === "promise" || def.type === "optional" || def.type === "nonoptional" || def.type === "nullable" || def.type === "readonly" || def.type === "default" || def.type === "prefault" || def.type === "catch") {
    return isTransforming2(def.innerType, ctx);
  }
  if (def.type === "intersection") {
    return isTransforming2(def.left, ctx) || isTransforming2(def.right, ctx);
  }
  if (def.type === "record" || def.type === "map") {
    return isTransforming2(def.keyType, ctx) || isTransforming2(def.valueType, ctx);
  }
  if (def.type === "pipe") {
    if (_schema._zod.traits.has("$ZodCodec"))
      return true;
    return isTransforming2(def.in, ctx) || isTransforming2(def.out, ctx);
  }
  if (def.type === "object") {
    for (const key in def.shape) {
      if (isTransforming2(def.shape[key], ctx))
        return true;
    }
    return false;
  }
  if (def.type === "union") {
    for (const option of def.options) {
      if (isTransforming2(option, ctx))
        return true;
    }
    return false;
  }
  if (def.type === "tuple") {
    for (const item of def.items) {
      if (isTransforming2(item, ctx))
        return true;
    }
    if (def.rest && isTransforming2(def.rest, ctx))
      return true;
    return false;
  }
  return false;
}
var createToJSONSchemaMethod2 = (schema, processors = {}) => (params) => {
  const ctx = initializeContext2({ ...params, processors });
  process2(schema, ctx);
  extractDefs2(ctx, schema);
  return finalize2(ctx, schema);
};
var createStandardJSONSchemaMethod2 = (schema, io, processors = {}) => (params) => {
  const { libraryOptions, target } = params ?? {};
  const ctx = initializeContext2({ ...libraryOptions ?? {}, target, io, processors });
  process2(schema, ctx);
  extractDefs2(ctx, schema);
  return finalize2(ctx, schema);
};

// node_modules/@modelcontextprotocol/server/node_modules/zod/v4/core/json-schema-processors.js
var formatMap2 = {
  guid: "uuid",
  url: "uri",
  datetime: "date-time",
  json_string: "json-string",
  regex: ""
  // do not set
};
var stringProcessor2 = (schema, ctx, _json, _params) => {
  const json = _json;
  json.type = "string";
  const { minimum, maximum, format: format2, patterns, contentEncoding, laxFormat } = schema._zod.bag;
  if (typeof minimum === "number")
    json.minLength = minimum;
  if (typeof maximum === "number")
    json.maxLength = maximum;
  if (format2) {
    json.format = formatMap2[format2] ?? format2;
    if (json.format === "")
      delete json.format;
    if (format2 === "time" || laxFormat) {
      delete json.format;
    }
  }
  if (contentEncoding)
    json.contentEncoding = contentEncoding;
  if (patterns && patterns.size > 0) {
    const patternList = [...patterns];
    if (patternList.length === 1)
      json.pattern = patternList[0].source;
    else if (patternList.length > 1) {
      json.allOf = [
        ...patternList.map((regex2) => ({
          ...ctx.target === "draft-07" || ctx.target === "draft-04" || ctx.target === "openapi-3.0" ? { type: "string" } : {},
          pattern: regex2.source
        }))
      ];
    }
  }
};
var numberProcessor2 = (schema, ctx, _json, params) => {
  const json = _json;
  const { minimum, maximum, format: format2, multipleOf, exclusiveMaximum, exclusiveMinimum } = schema._zod.bag;
  if (typeof format2 === "string" && format2.includes("int"))
    json.type = "integer";
  else
    json.type = "number";
  const exMin = typeof exclusiveMinimum === "number" && exclusiveMinimum >= (minimum ?? Number.NEGATIVE_INFINITY);
  const exMax = typeof exclusiveMaximum === "number" && exclusiveMaximum <= (maximum ?? Number.POSITIVE_INFINITY);
  const legacy = ctx.target === "draft-04" || ctx.target === "openapi-3.0";
  if (exMin) {
    if (legacy) {
      json.minimum = exclusiveMinimum;
      json.exclusiveMinimum = true;
    } else {
      json.exclusiveMinimum = exclusiveMinimum;
    }
  } else if (typeof minimum === "number") {
    json.minimum = minimum;
  }
  if (exMax) {
    if (legacy) {
      json.maximum = exclusiveMaximum;
      json.exclusiveMaximum = true;
    } else {
      json.exclusiveMaximum = exclusiveMaximum;
    }
  } else if (typeof maximum === "number") {
    json.maximum = maximum;
  }
  if (typeof multipleOf === "number") {
    if (Number.isFinite(multipleOf) && multipleOf !== 0)
      json.multipleOf = Math.abs(multipleOf);
    else
      handleUnrepresentable2(schema, ctx, json, params, `A multipleOf divisor of ${multipleOf} cannot be represented in JSON Schema`);
  }
};
var booleanProcessor2 = (_schema, _ctx, json, _params) => {
  json.type = "boolean";
};
var bigintProcessor2 = (schema, ctx, json, params) => {
  handleUnrepresentable2(schema, ctx, json, params, "BigInt cannot be represented in JSON Schema");
};
var symbolProcessor2 = (schema, ctx, json, params) => {
  handleUnrepresentable2(schema, ctx, json, params, "Symbols cannot be represented in JSON Schema");
};
var nullProcessor2 = (_schema, ctx, json, _params) => {
  if (ctx.target === "openapi-3.0") {
    json.type = "string";
    json.nullable = true;
    json.enum = [null];
  } else {
    json.type = "null";
  }
};
var undefinedProcessor2 = (schema, ctx, json, params) => {
  handleUnrepresentable2(schema, ctx, json, params, "Undefined cannot be represented in JSON Schema");
};
var voidProcessor2 = (schema, ctx, json, params) => {
  handleUnrepresentable2(schema, ctx, json, params, "Void cannot be represented in JSON Schema");
};
var neverProcessor2 = (_schema, _ctx, json, _params) => {
  json.not = {};
};
var anyProcessor2 = (_schema, _ctx, _json, _params) => {
};
var unknownProcessor2 = (_schema, _ctx, _json, _params) => {
};
var dateProcessor2 = (schema, ctx, json, params) => {
  handleUnrepresentable2(schema, ctx, json, params, "Date cannot be represented in JSON Schema");
};
var enumProcessor2 = (schema, _ctx, json, _params) => {
  const def = schema._zod.def;
  const values = getEnumValues2(def.entries);
  if (values.length === 0) {
    json.not = {};
    return;
  }
  if (values.every((v) => typeof v === "number"))
    json.type = "number";
  if (values.every((v) => typeof v === "string"))
    json.type = "string";
  json.enum = values;
};
var literalProcessor2 = (schema, ctx, json, params) => {
  const def = schema._zod.def;
  if (def.values.length === 0) {
    json.not = {};
    return;
  }
  const vals = [];
  for (const val of def.values) {
    if (val === void 0) {
      if (handleUnrepresentable2(schema, ctx, json, params, "Literal `undefined` cannot be represented in JSON Schema"))
        return;
    } else if (typeof val === "bigint") {
      if (handleUnrepresentable2(schema, ctx, json, params, "BigInt literals cannot be represented in JSON Schema"))
        return;
      vals.push(Number(val));
    } else {
      vals.push(val);
    }
  }
  if (vals.length === 0) {
  } else if (vals.length === 1) {
    const val = vals[0];
    json.type = val === null ? "null" : typeof val;
    if (ctx.target === "draft-04" || ctx.target === "openapi-3.0") {
      json.enum = [val];
    } else {
      json.const = val;
    }
  } else {
    if (vals.every((v) => typeof v === "number"))
      json.type = "number";
    if (vals.every((v) => typeof v === "string"))
      json.type = "string";
    if (vals.every((v) => typeof v === "boolean"))
      json.type = "boolean";
    if (vals.every((v) => v === null))
      json.type = "null";
    json.enum = vals;
  }
};
var nanProcessor2 = (schema, ctx, json, params) => {
  handleUnrepresentable2(schema, ctx, json, params, "NaN cannot be represented in JSON Schema");
};
var templateLiteralProcessor2 = (schema, _ctx, json, _params) => {
  const _json = json;
  const pattern = schema._zod.pattern;
  if (!pattern)
    throw new Error("Pattern not found in template literal");
  _json.type = "string";
  _json.pattern = pattern.source;
};
var fileProcessor2 = (schema, _ctx, json, _params) => {
  const _json = json;
  const file = {
    type: "string",
    format: "binary",
    contentEncoding: "binary"
  };
  const { minimum, maximum, mime } = schema._zod.bag;
  if (minimum !== void 0)
    file.minLength = minimum;
  if (maximum !== void 0)
    file.maxLength = maximum;
  if (mime) {
    if (mime.length === 1) {
      file.contentMediaType = mime[0];
      Object.assign(_json, file);
    } else {
      Object.assign(_json, file);
      _json.anyOf = mime.map((m) => ({ contentMediaType: m }));
    }
  } else {
    Object.assign(_json, file);
  }
};
var successProcessor2 = (_schema, _ctx, json, _params) => {
  json.type = "boolean";
};
var customProcessor2 = (schema, ctx, json, params) => {
  handleUnrepresentable2(schema, ctx, json, params, "Custom types cannot be represented in JSON Schema");
};
var functionProcessor2 = (schema, ctx, json, params) => {
  handleUnrepresentable2(schema, ctx, json, params, "Function types cannot be represented in JSON Schema");
};
var transformProcessor2 = (schema, ctx, json, params) => {
  handleUnrepresentable2(schema, ctx, json, params, "Transforms cannot be represented in JSON Schema");
};
var mapProcessor2 = (schema, ctx, json, params) => {
  handleUnrepresentable2(schema, ctx, json, params, "Map cannot be represented in JSON Schema");
};
var setProcessor2 = (schema, ctx, json, params) => {
  handleUnrepresentable2(schema, ctx, json, params, "Set cannot be represented in JSON Schema");
};
var arrayProcessor2 = (schema, ctx, _json, params) => {
  const json = _json;
  const def = schema._zod.def;
  const { minimum, maximum } = schema._zod.bag;
  if (typeof minimum === "number")
    json.minItems = minimum;
  if (typeof maximum === "number")
    json.maxItems = maximum;
  json.type = "array";
  json.items = process2(def.element, ctx, {
    ...params,
    path: [...params.path, "items"]
  });
};
function inputOptin2(schema) {
  const def = schema._zod.def;
  if (def.type === "pipe" && def.in._zod.traits.has("$ZodTransform")) {
    return inputOptin2(def.out);
  }
  if (def.type === "catch") {
    return inputOptin2(def.innerType);
  }
  return schema._zod.optin;
}
var objectProcessor2 = (schema, ctx, _json, params) => {
  const json = _json;
  const def = schema._zod.def;
  const shape = def.shape;
  const symbolKeys = Object.getOwnPropertySymbols(shape);
  if (symbolKeys.length && handleUnrepresentable2(schema, ctx, json, params, "Symbol keys cannot be represented in JSON Schema")) {
    return;
  }
  json.type = "object";
  json.properties = {};
  for (const key in shape) {
    assignProp2(json.properties, key, process2(shape[key], ctx, {
      ...params,
      path: [...params.path, "properties", key]
    }));
  }
  const allKeys = new Set(Object.keys(shape));
  const requiredKeys = new Set([...allKeys].filter((key) => {
    const field = def.shape[key];
    if (ctx.io === "input") {
      return inputOptin2(field) === void 0;
    } else {
      return field._zod.optout === void 0;
    }
  }));
  if (requiredKeys.size > 0) {
    json.required = Array.from(requiredKeys);
  }
  if (def.catchall?._zod.def.type === "never") {
    json.additionalProperties = false;
  } else if (!def.catchall) {
    if (ctx.io === "output")
      json.additionalProperties = false;
  } else if (def.catchall) {
    json.additionalProperties = process2(def.catchall, ctx, {
      ...params,
      path: [...params.path, "additionalProperties"]
    });
  }
};
var unionProcessor2 = (schema, ctx, json, params) => {
  const def = schema._zod.def;
  const isExclusive = def.inclusive === false;
  const options = def.options.map((x, i) => process2(x, ctx, {
    ...params,
    path: [...params.path, isExclusive ? "oneOf" : "anyOf", i]
  }));
  if (isExclusive) {
    json.oneOf = options;
  } else {
    json.anyOf = options;
  }
};
var intersectionProcessor2 = (schema, ctx, json, params) => {
  const def = schema._zod.def;
  const a = process2(def.left, ctx, {
    ...params,
    path: [...params.path, "allOf", 0]
  });
  const b = process2(def.right, ctx, {
    ...params,
    path: [...params.path, "allOf", 1]
  });
  const isSimpleIntersection = (val) => "allOf" in val && Object.keys(val).length === 1;
  const allOf = [
    ...isSimpleIntersection(a) ? a.allOf : [a],
    ...isSimpleIntersection(b) ? b.allOf : [b]
  ];
  json.allOf = allOf;
  ctx.intersections.push(allOf);
};
var tupleProcessor2 = (schema, ctx, _json, params) => {
  const json = _json;
  const def = schema._zod.def;
  json.type = "array";
  const prefixPath = ctx.target === "draft-2020-12" ? "prefixItems" : "items";
  const restPath = ctx.target === "draft-2020-12" ? "items" : ctx.target === "openapi-3.0" ? "items" : "additionalItems";
  const prefixItems = def.items.map((x, i) => process2(x, ctx, {
    ...params,
    path: [...params.path, prefixPath, i]
  }));
  const rest = def.rest ? process2(def.rest, ctx, {
    ...params,
    path: [...params.path, restPath, ...ctx.target === "openapi-3.0" ? [def.items.length] : []]
  }) : null;
  let minItems = def.items.length;
  while (minItems > 0) {
    const item = def.items[minItems - 1];
    const optional4 = ctx.io === "input" ? inputOptin2(item) !== void 0 : item._zod.optout === "optional";
    if (!optional4)
      break;
    minItems--;
  }
  const maxItems = def.items.length;
  const isClosed = !def.rest;
  if (ctx.target === "draft-2020-12") {
    json.prefixItems = prefixItems;
    if (isClosed) {
      json.items = false;
    } else if (rest) {
      json.items = rest;
    }
    if (minItems > 0)
      json.minItems = minItems;
    if (isClosed)
      json.maxItems = maxItems;
  } else if (ctx.target === "openapi-3.0") {
    json.items = {
      anyOf: prefixItems
    };
    if (rest) {
      json.items.anyOf.push(rest);
    }
    if (minItems > 0)
      json.minItems = minItems;
    if (isClosed)
      json.maxItems = maxItems;
  } else {
    json.items = prefixItems;
    if (isClosed) {
      json.additionalItems = false;
    } else if (rest) {
      json.additionalItems = rest;
    }
    if (minItems > 0)
      json.minItems = minItems;
    if (isClosed)
      json.maxItems = maxItems;
  }
  const { minimum, maximum } = schema._zod.bag;
  if (typeof minimum === "number")
    json.minItems = minimum;
  if (typeof maximum === "number")
    json.maxItems = maximum;
};
function stringifyKeyNames2(bySchema, json, visited) {
  if (json.$ref) {
    if (visited.has(json))
      return json;
    visited.add(json);
    const def = bySchema.get(json)?.def;
    if (!def)
      return json;
    const inlined = stringifyKeyNames2(bySchema, def, visited);
    return inlined === def ? json : inlined;
  }
  for (const keyword of ["anyOf", "oneOf"]) {
    const branches = json[keyword];
    if (!Array.isArray(branches))
      continue;
    const mapped = branches.map((branch) => stringifyKeyNames2(bySchema, branch, visited));
    if (mapped.some((branch, i) => branch !== branches[i]))
      json = { ...json, [keyword]: mapped };
  }
  const types = Array.isArray(json.type) ? json.type : [json.type];
  const numericType = !types.includes("string") && types.some((t) => t === "number" || t === "integer");
  const values = json.enum ?? (json.const !== void 0 ? [json.const] : void 0);
  if (!numericType && !values?.some((v) => typeof v === "number"))
    return json;
  const { minimum, maximum, exclusiveMinimum, exclusiveMaximum, multipleOf, format: format2, id, ...rest } = json;
  if (rest.enum)
    rest.enum = rest.enum.map((v) => typeof v === "number" ? String(v) : v);
  else if (typeof rest.const === "number")
    rest.const = String(rest.const);
  if (!numericType)
    return rest;
  rest.type = "string";
  if (!values)
    rest.pattern = (types.includes("number") ? number4 : integer2).source;
  return rest;
}
var pendingRecords2 = /* @__PURE__ */ new WeakMap();
function rewriteKeyNames2(ctx) {
  const bySchema = /* @__PURE__ */ new Map();
  for (const entry of ctx.seen.values()) {
    if (entry.def && !bySchema.has(entry.schema))
      bySchema.set(entry.schema, entry);
  }
  const rewrites = /* @__PURE__ */ new Map();
  for (const record3 of pendingRecords2.get(ctx) ?? []) {
    const seen = ctx.seen.get(record3);
    const names = (seen?.def ?? seen?.schema)?.propertyNames;
    if (!names || names === true || rewrites.has(names))
      continue;
    const rewritten = stringifyKeyNames2(bySchema, names, /* @__PURE__ */ new Set());
    if (rewritten !== names)
      rewrites.set(names, rewritten);
  }
  if (!rewrites.size)
    return;
  for (const entry of ctx.seen.values()) {
    for (const carrier of [entry.schema, entry.def]) {
      const rewritten = carrier && rewrites.get(carrier.propertyNames);
      if (rewritten)
        carrier.propertyNames = rewritten;
    }
  }
}
var recordProcessor2 = (schema, ctx, _json, params) => {
  const json = _json;
  const def = schema._zod.def;
  json.type = "object";
  const keyType = def.keyType;
  const keyBag = keyType._zod.bag;
  const patterns = keyBag?.patterns;
  if (def.mode === "loose" && patterns && patterns.size > 0) {
    const valueSchema = process2(def.valueType, ctx, {
      ...params,
      path: [...params.path, "patternProperties", "*"]
    });
    json.patternProperties = {};
    for (const pattern of patterns) {
      assignProp2(json.patternProperties, pattern.source, valueSchema);
    }
  } else {
    if (ctx.target === "draft-07" || ctx.target === "draft-2020-12") {
      json.propertyNames = process2(def.keyType, ctx, {
        ...params,
        path: [...params.path, "propertyNames"]
      });
      let pending = pendingRecords2.get(ctx);
      if (!pending) {
        pending = [];
        pendingRecords2.set(ctx, pending);
        ctx.deferred.push(() => rewriteKeyNames2(ctx));
      }
      pending.push(schema);
    }
    json.additionalProperties = process2(def.valueType, ctx, {
      ...params,
      path: [...params.path, "additionalProperties"]
    });
  }
  const keyValues = keyType._zod.values;
  const omittableOnInput = ctx.io === "input" && inputOptin2(def.valueType) !== void 0;
  if (keyValues && !def.partial && !omittableOnInput) {
    const validKeyValues = [...keyValues].filter((v) => typeof v === "string" || typeof v === "number");
    if (validKeyValues.length > 0) {
      json.required = validKeyValues.map(String);
    }
  }
};
var nullableProcessor2 = (schema, ctx, json, params) => {
  const def = schema._zod.def;
  const inner = process2(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  if (ctx.target === "openapi-3.0") {
    seen.ref = def.innerType;
    json.nullable = true;
  } else {
    json.anyOf = [inner, { type: "null" }];
  }
};
var nonoptionalProcessor2 = (schema, ctx, _json, params) => {
  const def = schema._zod.def;
  process2(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
};
var UNREPRESENTABLE_DEFAULT2 = /* @__PURE__ */ Symbol();
function serializeDefaultValue2(value, schema, ctx, json, params) {
  let unrepresentable = false;
  const serialized = JSON.stringify(value, (_, val) => {
    if (typeof val !== "bigint")
      return val;
    unrepresentable = true;
    return null;
  });
  if (!unrepresentable)
    return JSON.parse(serialized);
  handleUnrepresentable2(schema, ctx, json, params, "BigInt defaults cannot be represented in JSON Schema");
  return UNREPRESENTABLE_DEFAULT2;
}
var defaultProcessor2 = (schema, ctx, json, params) => {
  const def = schema._zod.def;
  process2(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
  const value = serializeDefaultValue2(def.defaultValue, schema, ctx, json, params);
  if (value !== UNREPRESENTABLE_DEFAULT2)
    json.default = value;
};
var prefaultProcessor2 = (schema, ctx, json, params) => {
  const def = schema._zod.def;
  process2(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
  if (ctx.io !== "input")
    return;
  const value = serializeDefaultValue2(def.defaultValue, schema, ctx, json, params);
  if (value !== UNREPRESENTABLE_DEFAULT2)
    json._prefault = value;
};
var catchProcessor2 = (schema, ctx, json, params) => {
  const def = schema._zod.def;
  process2(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
  let catchValue;
  try {
    catchValue = def.catchValue(void 0);
  } catch {
    handleUnrepresentable2(schema, ctx, json, params, "Dynamic catch values are not supported in JSON Schema");
    return;
  }
  json.default = catchValue;
};
var pipeProcessor2 = (schema, ctx, _json, params) => {
  const def = schema._zod.def;
  const inIsTransform = def.in._zod.traits.has("$ZodTransform");
  const innerType = ctx.io === "input" ? inIsTransform ? def.out : def.in : def.out;
  process2(innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = innerType;
};
var readonlyProcessor2 = (schema, ctx, json, params) => {
  const def = schema._zod.def;
  process2(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
  json.readOnly = true;
};
var promiseProcessor2 = (schema, ctx, _json, params) => {
  const def = schema._zod.def;
  process2(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
};
var optionalProcessor2 = (schema, ctx, _json, params) => {
  const def = schema._zod.def;
  process2(def.innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = def.innerType;
};
var lazyProcessor2 = (schema, ctx, _json, params) => {
  const innerType = schema._zod.innerType;
  process2(innerType, ctx, params);
  const seen = ctx.seen.get(schema);
  seen.ref = innerType;
};
var allProcessors = {
  string: stringProcessor2,
  number: numberProcessor2,
  boolean: booleanProcessor2,
  bigint: bigintProcessor2,
  symbol: symbolProcessor2,
  null: nullProcessor2,
  undefined: undefinedProcessor2,
  void: voidProcessor2,
  never: neverProcessor2,
  any: anyProcessor2,
  unknown: unknownProcessor2,
  date: dateProcessor2,
  enum: enumProcessor2,
  literal: literalProcessor2,
  nan: nanProcessor2,
  template_literal: templateLiteralProcessor2,
  file: fileProcessor2,
  success: successProcessor2,
  custom: customProcessor2,
  function: functionProcessor2,
  transform: transformProcessor2,
  map: mapProcessor2,
  set: setProcessor2,
  array: arrayProcessor2,
  object: objectProcessor2,
  union: unionProcessor2,
  intersection: intersectionProcessor2,
  tuple: tupleProcessor2,
  record: recordProcessor2,
  nullable: nullableProcessor2,
  nonoptional: nonoptionalProcessor2,
  default: defaultProcessor2,
  prefault: prefaultProcessor2,
  catch: catchProcessor2,
  pipe: pipeProcessor2,
  readonly: readonlyProcessor2,
  promise: promiseProcessor2,
  optional: optionalProcessor2,
  lazy: lazyProcessor2
};
function toJSONSchema(input, params) {
  if ("_idmap" in input) {
    const registry4 = input;
    const ctx2 = initializeContext2({ ...params, processors: allProcessors });
    const defs = {};
    for (const entry of registry4._idmap.entries()) {
      const [_, schema] = entry;
      process2(schema, ctx2);
    }
    const schemas = {};
    const external = {
      registry: registry4,
      uri: params?.uri,
      defs
    };
    ctx2.external = external;
    for (const entry of registry4._idmap.entries()) {
      const [key, schema] = entry;
      extractDefs2(ctx2, schema);
      assignProp2(schemas, key, finalize2(ctx2, schema));
    }
    if (Object.keys(defs).length > 0) {
      const defsSegment = ctx2.target === "draft-2020-12" ? "$defs" : "definitions";
      schemas.__shared = {
        [defsSegment]: defs
      };
    }
    return { schemas };
  }
  const ctx = initializeContext2({ ...params, processors: allProcessors });
  process2(input, ctx);
  extractDefs2(ctx, input);
  return finalize2(ctx, input);
}

// node_modules/@modelcontextprotocol/server/node_modules/zod/v4/classic/errors.js
var _installedErrorProtos2 = /* @__PURE__ */ new WeakSet([Object.prototype, Error.prototype]);
function _lazyMethod2(proto, key, make) {
  Object.defineProperty(proto, key, {
    configurable: true,
    enumerable: false,
    get() {
      const value = make(this);
      Object.defineProperty(this, key, { value, configurable: true, writable: true });
      return value;
    },
    set(value) {
      Object.defineProperty(this, key, { value, configurable: true, writable: true });
    }
  });
}
var initializer4 = (inst, issues) => {
  $ZodError2.init(inst, issues);
  inst.name = "ZodError";
  const proto = Object.getPrototypeOf(inst);
  if (_installedErrorProtos2.has(proto))
    return;
  _installedErrorProtos2.add(proto);
  _lazyMethod2(proto, "format", (self2) => (mapper) => formatError2(self2, mapper));
  _lazyMethod2(proto, "flatten", (self2) => (mapper) => flattenError2(self2, mapper));
  _lazyMethod2(proto, "addIssue", (self2) => (issue4) => {
    self2.issues.push(issue4);
    self2.message = JSON.stringify(self2.issues, jsonStringifyReplacer2, 2);
  });
  _lazyMethod2(proto, "addIssues", (self2) => (issues2) => {
    self2.issues.push(...issues2);
    self2.message = JSON.stringify(self2.issues, jsonStringifyReplacer2, 2);
  });
  Object.defineProperty(proto, "isEmpty", {
    configurable: true,
    enumerable: false,
    get() {
      return this.issues.length === 0;
    }
  });
};
var ZodRealError2 = /* @__PURE__ */ $constructor2("ZodError", initializer4, void 0, {
  Parent: Error
});

// node_modules/@modelcontextprotocol/server/node_modules/zod/v4/classic/parse.js
var parse4 = /* @__PURE__ */ _parse3(ZodRealError2);
var parseAsync4 = /* @__PURE__ */ _parseAsync3(ZodRealError2);
var safeParse4 = /* @__PURE__ */ _safeParse2(ZodRealError2);
var safeParseAsync4 = /* @__PURE__ */ _safeParseAsync2(ZodRealError2);
var encode2 = /* @__PURE__ */ _encode3(ZodRealError2);
var decode2 = /* @__PURE__ */ _decode3(ZodRealError2);
var encodeAsync2 = /* @__PURE__ */ _encodeAsync3(ZodRealError2);
var decodeAsync2 = /* @__PURE__ */ _decodeAsync3(ZodRealError2);
var safeEncode2 = /* @__PURE__ */ _safeEncode2(ZodRealError2);
var safeDecode2 = /* @__PURE__ */ _safeDecode2(ZodRealError2);
var safeEncodeAsync2 = /* @__PURE__ */ _safeEncodeAsync2(ZodRealError2);
var safeDecodeAsync2 = /* @__PURE__ */ _safeDecodeAsync2(ZodRealError2);

// node_modules/@modelcontextprotocol/server/node_modules/zod/v4/classic/schemas.js
function _ensureDefaultLocale2() {
  if (!globalConfig2.localeError)
    config2(en_default2());
}
function _ensureDefaultMemoizer2() {
  if (!globalConfig2.memoizer)
    config2({ memoizer: memoizer2() });
}
var ZodType2 = /* @__PURE__ */ $constructor2("ZodType", (inst, def) => {
  _ensureDefaultLocale2();
  $ZodType2.init(inst, def);
  inst.def = def;
  inst.type = def.type;
  return inst;
}, {
  check(...chks) {
    const def = this.def;
    return this.clone(util_exports2.mergeDefs(def, {
      checks: [
        ...def.checks ?? [],
        ...chks.map((ch) => typeof ch === "function" ? { _zod: { check: ch, def: { check: "custom" }, onattach: [] } } : ch)
      ]
    }), { parent: true });
  },
  with(...chks) {
    return this.check(...chks);
  },
  clone(def, params) {
    return clone2(this, def, params);
  },
  brand() {
    return this;
  },
  register(reg, meta3) {
    reg.add(this, meta3);
    return this;
  },
  refine(check2, params) {
    return this.check(refine2(check2, params));
  },
  superRefine(refinement, params) {
    return this.check(superRefine2(refinement, params));
  },
  overwrite(fn) {
    return this.check(_overwrite2(fn));
  },
  optional() {
    return optional2(this);
  },
  exactOptional() {
    return exactOptional2(this);
  },
  nullable() {
    return nullable2(this);
  },
  nullish() {
    return optional2(nullable2(this));
  },
  nonoptional(params) {
    return nonoptional2(this, params);
  },
  array() {
    return array2(this);
  },
  or(arg) {
    return union2([this, arg]);
  },
  and(arg) {
    return intersection2(this, arg);
  },
  transform(tx) {
    return pipe2(this, transform2(tx));
  },
  default(d) {
    return _default2(this, d);
  },
  prefault(d) {
    return prefault2(this, d);
  },
  catch(params) {
    return _catch2(this, params);
  },
  pipe(target) {
    return pipe2(this, target);
  },
  readonly() {
    return readonly2(this);
  },
  describe(description) {
    const cl = this.clone();
    globalRegistry2.add(cl, { description });
    return cl;
  },
  meta(...args) {
    if (args.length === 0)
      return globalRegistry2.get(this);
    const cl = this.clone();
    globalRegistry2.add(cl, args[0]);
    return cl;
  },
  isOptional() {
    return this.safeParse(void 0).success;
  },
  isNullable() {
    return this.safeParse(null).success;
  },
  apply(fn, ...args) {
    return args.length === 0 ? fn(this) : fn(this, ...args);
  },
  // Overrides core's `~standard` to add `jsonSchema`. Must stay a prototype entry: redefining it per instance demotes instances to dictionary mode.
  get "~standard"() {
    return util_exports2.hide(this, "~standard", {
      ...standardProps2(this),
      jsonSchema: {
        input: createStandardJSONSchemaMethod2(this, "input"),
        output: createStandardJSONSchemaMethod2(this, "output")
      }
    });
  },
  set "~standard"(value) {
    util_exports2.own(this, "~standard", value);
  },
  parse: function _parse4(data, params) {
    return parse4(this, data, params, { callee: _parse4 });
  },
  parseAsync: async function _parseAsync4(data, params) {
    return await parseAsync4(this, data, params, { callee: _parseAsync4 });
  },
  safeParse(data, params) {
    return safeParse4(this, data, params);
  },
  async safeParseAsync(data, params) {
    return safeParseAsync4(this, data, params);
  },
  // `spa` is an alias: same function object as `safeParseAsync`, as before.
  get spa() {
    return this?.safeParseAsync;
  },
  set spa(value) {
    util_exports2.own(this, "spa", value);
  },
  encode: function _encode4(data, params) {
    return encode2(this, data, params, { callee: _encode4 });
  },
  decode: function _decode4(data, params) {
    return decode2(this, data, params, { callee: _decode4 });
  },
  encodeAsync: async function _encodeAsync4(data, params) {
    return await encodeAsync2(this, data, params, { callee: _encodeAsync4 });
  },
  decodeAsync: async function _decodeAsync4(data, params) {
    return await decodeAsync2(this, data, params, { callee: _decodeAsync4 });
  },
  safeEncode(data, params) {
    return safeEncode2(this, data, params);
  },
  safeDecode(data, params) {
    return safeDecode2(this, data, params);
  },
  async safeEncodeAsync(data, params) {
    return safeEncodeAsync2(this, data, params);
  },
  async safeDecodeAsync(data, params) {
    return safeDecodeAsync2(this, data, params);
  },
  toJSONSchema(params) {
    return createToJSONSchemaMethod2(this, {})(params);
  },
  // Reads through to the registry on every access, so it must not cache.
  get description() {
    return globalRegistry2.get(this)?.description;
  },
  // No setter: `schema._def = x` throws, as it did when `_def` was a non-writable own property.
  get _def() {
    return this._zod.def;
  }
});
var _ZodString2 = /* @__PURE__ */ $constructor2("_ZodString", (inst, def) => {
  $ZodString2.init(inst, def);
  ZodType2.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => stringProcessor2(inst, ctx, json, params);
  const bag = inst._zod.bag;
  inst.format = bag.format ?? null;
  inst.minLength = bag.minimum ?? null;
  inst.maxLength = bag.maximum ?? null;
}, {
  regex(...args) {
    return this.check(_regex2(...args));
  },
  includes(...args) {
    return this.check(_includes2(...args));
  },
  startsWith(...args) {
    return this.check(_startsWith2(...args));
  },
  endsWith(...args) {
    return this.check(_endsWith2(...args));
  },
  min(...args) {
    return this.check(_minLength2(...args));
  },
  max(...args) {
    return this.check(_maxLength2(...args));
  },
  length(...args) {
    return this.check(_length2(...args));
  },
  nonempty(...args) {
    return this.check(_minLength2(1, ...args));
  },
  lowercase(params) {
    return this.check(_lowercase2(params));
  },
  uppercase(params) {
    return this.check(_uppercase2(params));
  },
  trim() {
    return this.check(_trim2());
  },
  normalize(...args) {
    return this.check(_normalize2(...args));
  },
  toLowerCase() {
    return this.check(_toLowerCase2());
  },
  toUpperCase() {
    return this.check(_toUpperCase2());
  },
  slugify() {
    return this.check(_slugify2());
  }
});
var ZodString2 = /* @__PURE__ */ $constructor2("ZodString", (inst, def) => {
  $ZodString2.init(inst, def);
  _ZodString2.init(inst, def);
}, {
  email(params) {
    return this.check(_email2(ZodEmail2, params));
  },
  url(params) {
    return this.check(_url2(ZodURL2, params));
  },
  jwt(params) {
    return this.check(_jwt2(ZodJWT2, params));
  },
  emoji(params) {
    return this.check(_emoji4(ZodEmoji2, params));
  },
  guid(params) {
    return this.check(_guid2(ZodGUID2, params));
  },
  uuid(params) {
    return this.check(_uuid2(ZodUUID2, params));
  },
  uuidv4(params) {
    return this.check(_uuidv42(ZodUUID2, params));
  },
  uuidv6(params) {
    return this.check(_uuidv62(ZodUUID2, params));
  },
  uuidv7(params) {
    return this.check(_uuidv72(ZodUUID2, params));
  },
  nanoid(params) {
    return this.check(_nanoid2(ZodNanoID2, params));
  },
  cuid(params) {
    return this.check(_cuid3(ZodCUID3, params));
  },
  cuid2(params) {
    return this.check(_cuid22(ZodCUID22, params));
  },
  ulid(params) {
    return this.check(_ulid2(ZodULID2, params));
  },
  base64(params) {
    return this.check(_base642(ZodBase642, params));
  },
  base64url(params) {
    return this.check(_base64url2(ZodBase64URL2, params));
  },
  xid(params) {
    return this.check(_xid2(ZodXID2, params));
  },
  ksuid(params) {
    return this.check(_ksuid2(ZodKSUID2, params));
  },
  ipv4(params) {
    return this.check(_ipv42(ZodIPv42, params));
  },
  ipv6(params) {
    return this.check(_ipv62(ZodIPv62, params));
  },
  cidrv4(params) {
    return this.check(_cidrv42(ZodCIDRv42, params));
  },
  cidrv6(params) {
    return this.check(_cidrv62(ZodCIDRv62, params));
  },
  e164(params) {
    return this.check(_e1642(ZodE1642, params));
  },
  datetime(params) {
    return this.check(_isoDateTime2(ZodISODateTime2, params));
  },
  date(params) {
    return this.check(_isoDate2(ZodISODate2, params));
  },
  time(params) {
    return this.check(_isoTime2(ZodISOTime2, params));
  },
  duration(params) {
    return this.check(_isoDuration2(ZodISODuration2, params));
  }
});
function string5(params) {
  return _string2(ZodString2, params);
}
var ZodStringFormat2 = /* @__PURE__ */ $constructor2("ZodStringFormat", (inst, def) => {
  $ZodStringFormat2.init(inst, def);
  _ZodString2.init(inst, def);
});
var ZodISODateTime2 = /* @__PURE__ */ $constructor2("ZodISODateTime", (inst, def) => {
  $ZodISODateTime2.init(inst, def);
  ZodStringFormat2.init(inst, def);
});
var ZodISODate2 = /* @__PURE__ */ $constructor2("ZodISODate", (inst, def) => {
  $ZodISODate2.init(inst, def);
  ZodStringFormat2.init(inst, def);
});
var ZodISOTime2 = /* @__PURE__ */ $constructor2("ZodISOTime", (inst, def) => {
  $ZodISOTime2.init(inst, def);
  ZodStringFormat2.init(inst, def);
});
var ZodISODuration2 = /* @__PURE__ */ $constructor2("ZodISODuration", (inst, def) => {
  $ZodISODuration2.init(inst, def);
  ZodStringFormat2.init(inst, def);
});
var ZodEmail2 = /* @__PURE__ */ $constructor2("ZodEmail", (inst, def) => {
  $ZodEmail2.init(inst, def);
  ZodStringFormat2.init(inst, def);
});
function email3(params) {
  return _email2(ZodEmail2, params);
}
var ZodGUID2 = /* @__PURE__ */ $constructor2("ZodGUID", (inst, def) => {
  $ZodGUID2.init(inst, def);
  ZodStringFormat2.init(inst, def);
});
var ZodUUID2 = /* @__PURE__ */ $constructor2("ZodUUID", (inst, def) => {
  $ZodUUID2.init(inst, def);
  ZodStringFormat2.init(inst, def);
});
var ZodURL2 = /* @__PURE__ */ $constructor2("ZodURL", (inst, def) => {
  $ZodURL2.init(inst, def);
  ZodStringFormat2.init(inst, def);
});
function url2(params) {
  return _url2(ZodURL2, params);
}
var ZodEmoji2 = /* @__PURE__ */ $constructor2("ZodEmoji", (inst, def) => {
  $ZodEmoji2.init(inst, def);
  ZodStringFormat2.init(inst, def);
});
var ZodNanoID2 = /* @__PURE__ */ $constructor2("ZodNanoID", (inst, def) => {
  $ZodNanoID2.init(inst, def);
  ZodStringFormat2.init(inst, def);
});
var ZodCUID3 = /* @__PURE__ */ $constructor2("ZodCUID", (inst, def) => {
  $ZodCUID3.init(inst, def);
  ZodStringFormat2.init(inst, def);
});
var ZodCUID22 = /* @__PURE__ */ $constructor2("ZodCUID2", (inst, def) => {
  $ZodCUID22.init(inst, def);
  ZodStringFormat2.init(inst, def);
});
var ZodULID2 = /* @__PURE__ */ $constructor2("ZodULID", (inst, def) => {
  $ZodULID2.init(inst, def);
  ZodStringFormat2.init(inst, def);
});
var ZodXID2 = /* @__PURE__ */ $constructor2("ZodXID", (inst, def) => {
  $ZodXID2.init(inst, def);
  ZodStringFormat2.init(inst, def);
});
var ZodKSUID2 = /* @__PURE__ */ $constructor2("ZodKSUID", (inst, def) => {
  $ZodKSUID2.init(inst, def);
  ZodStringFormat2.init(inst, def);
});
var ZodIPv42 = /* @__PURE__ */ $constructor2("ZodIPv4", (inst, def) => {
  $ZodIPv42.init(inst, def);
  ZodStringFormat2.init(inst, def);
});
var ZodIPv62 = /* @__PURE__ */ $constructor2("ZodIPv6", (inst, def) => {
  $ZodIPv62.init(inst, def);
  ZodStringFormat2.init(inst, def);
});
var ZodCIDRv42 = /* @__PURE__ */ $constructor2("ZodCIDRv4", (inst, def) => {
  $ZodCIDRv42.init(inst, def);
  ZodStringFormat2.init(inst, def);
});
var ZodCIDRv62 = /* @__PURE__ */ $constructor2("ZodCIDRv6", (inst, def) => {
  $ZodCIDRv62.init(inst, def);
  ZodStringFormat2.init(inst, def);
});
var ZodBase642 = /* @__PURE__ */ $constructor2("ZodBase64", (inst, def) => {
  $ZodBase642.init(inst, def);
  ZodStringFormat2.init(inst, def);
});
var ZodBase64URL2 = /* @__PURE__ */ $constructor2("ZodBase64URL", (inst, def) => {
  $ZodBase64URL2.init(inst, def);
  ZodStringFormat2.init(inst, def);
});
var ZodE1642 = /* @__PURE__ */ $constructor2("ZodE164", (inst, def) => {
  $ZodE1642.init(inst, def);
  ZodStringFormat2.init(inst, def);
});
var ZodJWT2 = /* @__PURE__ */ $constructor2("ZodJWT", (inst, def) => {
  $ZodJWT2.init(inst, def);
  ZodStringFormat2.init(inst, def);
});
var ZodNumber2 = /* @__PURE__ */ $constructor2("ZodNumber", (inst, def) => {
  $ZodNumber2.init(inst, def);
  ZodType2.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => numberProcessor2(inst, ctx, json, params);
  const bag = inst._zod.bag;
  inst.minValue = Math.max(bag.minimum ?? Number.NEGATIVE_INFINITY, bag.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null;
  inst.maxValue = Math.min(bag.maximum ?? Number.POSITIVE_INFINITY, bag.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null;
  inst.isInt = (bag.format ?? "").includes("int") || Number.isSafeInteger(bag.multipleOf ?? 0.5);
  inst.isFinite = true;
  inst.format = bag.format ?? null;
}, {
  gt(value, params) {
    return this.check(_gt2(value, params));
  },
  gte(value, params) {
    return this.check(_gte2(value, params));
  },
  min(value, params) {
    return this.check(_gte2(value, params));
  },
  lt(value, params) {
    return this.check(_lt2(value, params));
  },
  lte(value, params) {
    return this.check(_lte2(value, params));
  },
  max(value, params) {
    return this.check(_lte2(value, params));
  },
  int(params) {
    return this.check(int2(params));
  },
  safe(params) {
    return this.check(int2(params));
  },
  positive(params) {
    return this.check(_gt2(0, params));
  },
  nonnegative(params) {
    return this.check(_gte2(0, params));
  },
  negative(params) {
    return this.check(_lt2(0, params));
  },
  nonpositive(params) {
    return this.check(_lte2(0, params));
  },
  multipleOf(value, params) {
    return this.check(_multipleOf2(value, params));
  },
  step(value, params) {
    return this.check(_multipleOf2(value, params));
  },
  finite() {
    return this;
  }
});
function number5(params) {
  return _number2(ZodNumber2, params);
}
var ZodNumberFormat2 = /* @__PURE__ */ $constructor2("ZodNumberFormat", (inst, def) => {
  $ZodNumberFormat2.init(inst, def);
  ZodNumber2.init(inst, def);
});
function int2(params) {
  return _int2(ZodNumberFormat2, params);
}
var ZodBoolean2 = /* @__PURE__ */ $constructor2("ZodBoolean", (inst, def) => {
  $ZodBoolean2.init(inst, def);
  ZodType2.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => booleanProcessor2(inst, ctx, json, params);
});
function boolean5(params) {
  return _boolean2(ZodBoolean2, params);
}
var ZodNull2 = /* @__PURE__ */ $constructor2("ZodNull", (inst, def) => {
  $ZodNull2.init(inst, def);
  ZodType2.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => nullProcessor2(inst, ctx, json, params);
});
function _null6(params) {
  return _null5(ZodNull2, params);
}
var ZodUnknown2 = /* @__PURE__ */ $constructor2("ZodUnknown", (inst, def) => {
  $ZodUnknown2.init(inst, def);
  ZodType2.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => unknownProcessor2(inst, ctx, json, params);
});
function unknown2() {
  return _unknown2(ZodUnknown2);
}
var ZodNever2 = /* @__PURE__ */ $constructor2("ZodNever", (inst, def) => {
  $ZodNever2.init(inst, def);
  ZodType2.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => neverProcessor2(inst, ctx, json, params);
});
function never2(params) {
  return _never2(ZodNever2, params);
}
var ZodArray2 = /* @__PURE__ */ $constructor2("ZodArray", (inst, def) => {
  _ensureDefaultMemoizer2();
  $ZodArray2.init(inst, def);
  ZodType2.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => arrayProcessor2(inst, ctx, json, params);
  inst.element = def.element;
}, {
  min(n, params) {
    return this.check(_minLength2(n, params));
  },
  nonempty(params) {
    return this.check(_minLength2(1, params));
  },
  max(n, params) {
    return this.check(_maxLength2(n, params));
  },
  length(n, params) {
    return this.check(_length2(n, params));
  },
  unwrap() {
    return this.element;
  }
});
function array2(element, params) {
  return _array2(ZodArray2, element, params);
}
var ZodObject2 = /* @__PURE__ */ $constructor2("ZodObject", (inst, def) => {
  _ensureDefaultMemoizer2();
  $ZodObjectJIT2.init(inst, def);
  ZodType2.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => objectProcessor2(inst, ctx, json, params);
  util_exports2.installLazyProp(inst, "shape", (self2) => self2._zod.def.shape, false);
}, {
  keyof() {
    return _enum2(Object.keys(this._zod.def.shape));
  },
  catchall(catchall) {
    return this.clone({ ...this._zod.def, catchall });
  },
  passthrough() {
    return this.clone({ ...this._zod.def, catchall: unknown2() });
  },
  loose() {
    return this.clone({ ...this._zod.def, catchall: unknown2() });
  },
  strict() {
    return this.clone({ ...this._zod.def, catchall: never2() });
  },
  strip() {
    return this.clone({ ...this._zod.def, catchall: void 0 });
  },
  extend(incoming) {
    return util_exports2.extend(this, incoming);
  },
  safeExtend(incoming) {
    return util_exports2.safeExtend(this, incoming);
  },
  merge(other) {
    return util_exports2.merge(this, other);
  },
  pick(mask) {
    return util_exports2.pick(this, mask);
  },
  omit(mask) {
    return util_exports2.omit(this, mask);
  },
  partial(...args) {
    return util_exports2.partial(ZodOptional2, this, args[0]);
  },
  exactPartial(...args) {
    return util_exports2.partial(ZodExactOptional2, this, args[0], "exactPartial");
  },
  required(...args) {
    return util_exports2.required(ZodNonOptional2, this, args[0]);
  }
});
function object2(shape, params) {
  const def = {
    type: "object",
    shape: shape ?? {},
    ...util_exports2.normalizeParams(params)
  };
  return new ZodObject2(def);
}
function looseObject2(shape, params) {
  return new ZodObject2({
    type: "object",
    shape,
    catchall: unknown2(),
    ...util_exports2.normalizeParams(params)
  });
}
var ZodUnion2 = /* @__PURE__ */ $constructor2("ZodUnion", (inst, def) => {
  $ZodUnion2.init(inst, def);
  ZodType2.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => unionProcessor2(inst, ctx, json, params);
  inst.options = def.options;
});
function union2(options, params) {
  return new ZodUnion2({
    type: "union",
    options,
    ...util_exports2.normalizeParams(params)
  });
}
var ZodDiscriminatedUnion2 = /* @__PURE__ */ $constructor2("ZodDiscriminatedUnion", (inst, def) => {
  ZodUnion2.init(inst, def);
  $ZodDiscriminatedUnion2.init(inst, def);
});
function discriminatedUnion2(discriminator, options, params) {
  return new ZodDiscriminatedUnion2({
    type: "union",
    options,
    discriminator,
    ...util_exports2.normalizeParams(params)
  });
}
var ZodIntersection2 = /* @__PURE__ */ $constructor2("ZodIntersection", (inst, def) => {
  $ZodIntersection2.init(inst, def);
  ZodType2.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => intersectionProcessor2(inst, ctx, json, params);
});
function intersection2(left, right) {
  return new ZodIntersection2({
    type: "intersection",
    left,
    right
  });
}
var ZodRecord2 = /* @__PURE__ */ $constructor2("ZodRecord", (inst, def) => {
  _ensureDefaultMemoizer2();
  $ZodRecord2.init(inst, def);
  ZodType2.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => recordProcessor2(inst, ctx, json, params);
  inst.keyType = def.keyType;
  inst.valueType = def.valueType;
});
function record2(keyType, valueType, params) {
  if (!valueType || !valueType._zod) {
    return new ZodRecord2({
      type: "record",
      keyType: string5(),
      valueType: keyType,
      ...util_exports2.normalizeParams(valueType)
    });
  }
  return new ZodRecord2({
    type: "record",
    keyType,
    valueType,
    ...util_exports2.normalizeParams(params)
  });
}
var ZodEnum2 = /* @__PURE__ */ $constructor2("ZodEnum", (inst, def) => {
  $ZodEnum2.init(inst, def);
  ZodType2.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => enumProcessor2(inst, ctx, json, params);
  inst.enum = def.entries;
  inst.options = Object.values(def.entries);
  const keys = new Set(Object.keys(def.entries));
  inst.extract = (values, params) => {
    const newEntries = {};
    for (const value of values) {
      if (keys.has(value)) {
        newEntries[value] = def.entries[value];
      } else
        throw new Error(`Key ${value} not found in enum`);
    }
    return new ZodEnum2({
      ...def,
      checks: [],
      ...util_exports2.normalizeParams(params),
      entries: newEntries
    });
  };
  inst.exclude = (values, params) => {
    const newEntries = { ...def.entries };
    for (const value of values) {
      if (keys.has(value)) {
        delete newEntries[value];
      } else
        throw new Error(`Key ${value} not found in enum`);
    }
    return new ZodEnum2({
      ...def,
      checks: [],
      ...util_exports2.normalizeParams(params),
      entries: newEntries
    });
  };
});
function _enum2(values, params) {
  const entries = Array.isArray(values) ? Object.fromEntries(values.map((v) => [v, v])) : values;
  return new ZodEnum2({
    type: "enum",
    entries,
    ...util_exports2.normalizeParams(params)
  });
}
var ZodLiteral2 = /* @__PURE__ */ $constructor2("ZodLiteral", (inst, def) => {
  $ZodLiteral2.init(inst, def);
  ZodType2.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => literalProcessor2(inst, ctx, json, params);
  inst.values = new Set(def.values);
  Object.defineProperty(inst, "value", {
    get() {
      if (def.values.length > 1) {
        throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
      }
      return def.values[0];
    }
  });
});
function literal2(value, params) {
  return new ZodLiteral2({
    type: "literal",
    values: Array.isArray(value) ? value : [value],
    ...util_exports2.normalizeParams(params)
  });
}
var ZodTransform2 = /* @__PURE__ */ $constructor2("ZodTransform", (inst, def) => {
  _ensureDefaultMemoizer2();
  $ZodTransform2.init(inst, def);
  ZodType2.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => transformProcessor2(inst, ctx, json, params);
  inst._zod.parse = (payload, _ctx) => {
    if (_ctx.direction === "backward") {
      throw new $ZodEncodeError2(inst.constructor.name);
    }
    payload.addIssue = (issue4) => {
      if (typeof issue4 === "string") {
        payload.issues.push(util_exports2.issue(issue4, payload.value, def));
      } else {
        const _issue = issue4;
        if (_issue.fatal)
          _issue.continue = false;
        _issue.code ?? (_issue.code = "custom");
        if (!("input" in _issue))
          _issue.input = payload.value;
        _issue.inst ?? (_issue.inst = inst);
        payload.issues.push(util_exports2.issue(_issue));
      }
    };
    const output = def.transform(payload.value, payload);
    if (output instanceof Promise) {
      return output.then((output2) => {
        payload.value = output2;
        return payload;
      });
    }
    payload.value = output;
    return payload;
  };
});
function transform2(fn) {
  return new ZodTransform2({
    type: "transform",
    transform: fn
  });
}
var ZodOptional2 = /* @__PURE__ */ $constructor2("ZodOptional", (inst, def) => {
  $ZodOptional2.init(inst, def);
  ZodType2.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => optionalProcessor2(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function optional2(innerType) {
  return new ZodOptional2({
    type: "optional",
    innerType
  });
}
var ZodExactOptional2 = /* @__PURE__ */ $constructor2("ZodExactOptional", (inst, def) => {
  $ZodExactOptional2.init(inst, def);
  ZodType2.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => optionalProcessor2(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function exactOptional2(innerType) {
  return new ZodExactOptional2({
    type: "optional",
    innerType
  });
}
var ZodNullable2 = /* @__PURE__ */ $constructor2("ZodNullable", (inst, def) => {
  $ZodNullable2.init(inst, def);
  ZodType2.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => nullableProcessor2(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function nullable2(innerType) {
  return new ZodNullable2({
    type: "nullable",
    innerType
  });
}
var ZodDefault2 = /* @__PURE__ */ $constructor2("ZodDefault", (inst, def) => {
  $ZodDefault2.init(inst, def);
  ZodType2.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => defaultProcessor2(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
  inst.removeDefault = inst.unwrap;
});
function _default2(innerType, defaultValue) {
  return new ZodDefault2({
    type: "default",
    innerType,
    get defaultValue() {
      return typeof defaultValue === "function" ? defaultValue() : util_exports2.shallowClone(defaultValue);
    }
  });
}
var ZodPrefault2 = /* @__PURE__ */ $constructor2("ZodPrefault", (inst, def) => {
  $ZodPrefault2.init(inst, def);
  ZodType2.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => prefaultProcessor2(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function prefault2(innerType, defaultValue) {
  return new ZodPrefault2({
    type: "prefault",
    innerType,
    get defaultValue() {
      return typeof defaultValue === "function" ? defaultValue() : util_exports2.shallowClone(defaultValue);
    }
  });
}
var ZodNonOptional2 = /* @__PURE__ */ $constructor2("ZodNonOptional", (inst, def) => {
  $ZodNonOptional2.init(inst, def);
  ZodType2.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => nonoptionalProcessor2(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function nonoptional2(innerType, params) {
  return new ZodNonOptional2({
    type: "nonoptional",
    innerType,
    ...util_exports2.normalizeParams(params)
  });
}
var ZodCatch2 = /* @__PURE__ */ $constructor2("ZodCatch", (inst, def) => {
  $ZodCatch2.init(inst, def);
  ZodType2.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => catchProcessor2(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
  inst.removeCatch = inst.unwrap;
});
function _catch2(innerType, catchValue) {
  return new ZodCatch2({
    type: "catch",
    innerType,
    catchValue: typeof catchValue === "function" ? catchValue : util_exports2.constantCatch(catchValue)
  });
}
var ZodPipe2 = /* @__PURE__ */ $constructor2("ZodPipe", (inst, def) => {
  $ZodPipe2.init(inst, def);
  ZodType2.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => pipeProcessor2(inst, ctx, json, params);
  inst.in = def.in;
  inst.out = def.out;
});
function pipe2(in_, out) {
  return new ZodPipe2({
    type: "pipe",
    in: in_,
    out
    // ...util.normalizeParams(params),
  });
}
var ZodPreprocess2 = /* @__PURE__ */ $constructor2("ZodPreprocess", (inst, def) => {
  ZodPipe2.init(inst, def);
  $ZodPreprocess2.init(inst, def);
});
var ZodReadonly2 = /* @__PURE__ */ $constructor2("ZodReadonly", (inst, def) => {
  $ZodReadonly2.init(inst, def);
  ZodType2.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => readonlyProcessor2(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.innerType;
});
function readonly2(innerType) {
  return new ZodReadonly2({
    type: "readonly",
    innerType
  });
}
var ZodLazy2 = /* @__PURE__ */ $constructor2("ZodLazy", (inst, def) => {
  $ZodLazy2.init(inst, def);
  ZodType2.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => lazyProcessor2(inst, ctx, json, params);
  inst.unwrap = () => inst._zod.def.getter();
});
function lazy2(getter) {
  return new ZodLazy2({
    type: "lazy",
    getter
  });
}
var ZodCustom2 = /* @__PURE__ */ $constructor2("ZodCustom", (inst, def) => {
  $ZodCustom2.init(inst, def);
  ZodType2.init(inst, def);
  inst._zod.processJSONSchema = (ctx, json, params) => customProcessor2(inst, ctx, json, params);
});
function refine2(fn, _params = {}) {
  return _refine2(ZodCustom2, fn, _params);
}
function superRefine2(fn, params) {
  return _superRefine2(fn, params);
}
function preprocess2(fn, schema) {
  return new ZodPreprocess2({
    type: "pipe",
    in: transform2(fn),
    out: schema
  });
}

// node_modules/@modelcontextprotocol/server/node_modules/zod/v4/classic/iso.js
var iso_exports2 = {};
__export(iso_exports2, {
  ZodISODate: () => ZodISODate2,
  ZodISODateTime: () => ZodISODateTime2,
  ZodISODuration: () => ZodISODuration2,
  ZodISOTime: () => ZodISOTime2,
  date: () => date5,
  datetime: () => datetime4,
  duration: () => duration4,
  time: () => time4
});
function datetime4(params) {
  return _isoDateTime2(ZodISODateTime2, params);
}
function date5(params) {
  return _isoDate2(ZodISODate2, params);
}
function time4(params) {
  return _isoTime2(ZodISOTime2, params);
}
function duration4(params) {
  return _isoDuration2(ZodISODuration2, params);
}

// node_modules/@modelcontextprotocol/server/dist/src-CX2iR2pK.mjs
var BRANDS = /* @__PURE__ */ Symbol.for("mcp.sdk.errorBrands");
function stampErrorBrands(instance, ctor) {
  const brands = /* @__PURE__ */ new Set();
  let current = ctor;
  while (typeof current === "function") {
    const brand = current.mcpBrand;
    if (Object.prototype.hasOwnProperty.call(current, "mcpBrand") && typeof brand === "string") brands.add(brand);
    current = Object.getPrototypeOf(current);
  }
  if (brands.size === 0) return;
  Object.defineProperty(instance, BRANDS, {
    value: brands,
    enumerable: false,
    configurable: true
  });
}
function brandedHasInstance(cls, value) {
  try {
    if (typeof value === "object" && value !== null && Object.prototype.hasOwnProperty.call(cls, "mcpBrand") && typeof cls.mcpBrand === "string" && Object.prototype.hasOwnProperty.call(value, BRANDS)) {
      const carried = value[BRANDS];
      if (carried && typeof carried.has === "function" && carried.has(cls.mcpBrand)) return true;
    }
  } catch {
  }
  return Function.prototype[Symbol.hasInstance].call(cls, value);
}
var OAuthError = class OAuthError2 extends Error {
  static {
    Object.defineProperty(this, "mcpBrand", { value: "mcp.OAuthError" });
  }
  static [Symbol.hasInstance](value) {
    return brandedHasInstance(this, value);
  }
  /**
  * Brand-based type guard: equivalent to `value instanceof this`, as an
  * explicit static predicate (the axios/AWS-SDK `isInstance` style). Reads
  * the caller's own brand via `this`, so every branded subclass gets a
  * correctly-scoped guard by inheritance. Must be invoked on the class —
  * in callback position write `v => SdkError.isInstance(v)`, not
  * `.filter(SdkError.isInstance)` (detached calls throw rather than
  * silently matching nothing).
  */
  static isInstance(value) {
    if (typeof this !== "function") throw new TypeError("isInstance must be called on the class (e.g. `SdkError.isInstance(value)`); for callbacks use `v => SdkError.isInstance(v)`");
    return brandedHasInstance(this, value);
  }
  constructor(code, message, errorUri) {
    super(message);
    this.code = code;
    this.errorUri = errorUri;
    this.name = "OAuthError";
    stampErrorBrands(this, new.target);
  }
  /**
  * Converts the error to a standard OAuth error response object.
  */
  toResponseObject() {
    const response = {
      error: this.code,
      error_description: this.message
    };
    if (this.errorUri) response.error_uri = this.errorUri;
    return response;
  }
  /**
  * Creates an {@linkcode OAuthError} from an OAuth error response.
  */
  static fromResponse(response) {
    return new OAuthError2(response.error, response.error_description ?? response.error, response.error_uri);
  }
};
var SdkErrorCode = /* @__PURE__ */ (function(SdkErrorCode$1) {
  SdkErrorCode$1["NotConnected"] = "NOT_CONNECTED";
  SdkErrorCode$1["AlreadyConnected"] = "ALREADY_CONNECTED";
  SdkErrorCode$1["NotInitialized"] = "NOT_INITIALIZED";
  SdkErrorCode$1["CapabilityNotSupported"] = "CAPABILITY_NOT_SUPPORTED";
  SdkErrorCode$1["RequestTimeout"] = "REQUEST_TIMEOUT";
  SdkErrorCode$1["ConnectionClosed"] = "CONNECTION_CLOSED";
  SdkErrorCode$1["SendFailed"] = "SEND_FAILED";
  SdkErrorCode$1["InvalidResult"] = "INVALID_RESULT";
  SdkErrorCode$1["UnsupportedResultType"] = "UNSUPPORTED_RESULT_TYPE";
  SdkErrorCode$1["InputRequiredRoundsExceeded"] = "INPUT_REQUIRED_ROUNDS_EXCEEDED";
  SdkErrorCode$1["ListPaginationExceeded"] = "LIST_PAGINATION_EXCEEDED";
  SdkErrorCode$1["MethodNotSupportedByProtocolVersion"] = "METHOD_NOT_SUPPORTED_BY_PROTOCOL_VERSION";
  SdkErrorCode$1["EraNegotiationFailed"] = "ERA_NEGOTIATION_FAILED";
  SdkErrorCode$1["ClientHttpNotImplemented"] = "CLIENT_HTTP_NOT_IMPLEMENTED";
  SdkErrorCode$1["ClientHttpAuthentication"] = "CLIENT_HTTP_AUTHENTICATION";
  SdkErrorCode$1["ClientHttpForbidden"] = "CLIENT_HTTP_FORBIDDEN";
  SdkErrorCode$1["ClientHttpUnexpectedContent"] = "CLIENT_HTTP_UNEXPECTED_CONTENT";
  SdkErrorCode$1["ClientHttpFailedToOpenStream"] = "CLIENT_HTTP_FAILED_TO_OPEN_STREAM";
  SdkErrorCode$1["ClientHttpFailedToTerminateSession"] = "CLIENT_HTTP_FAILED_TO_TERMINATE_SESSION";
  return SdkErrorCode$1;
})({});
var SdkError = class extends Error {
  static {
    Object.defineProperty(this, "mcpBrand", { value: "mcp.SdkError" });
  }
  static [Symbol.hasInstance](value) {
    return brandedHasInstance(this, value);
  }
  /**
  * Brand-based type guard: equivalent to `value instanceof this`, as an
  * explicit static predicate (the axios/AWS-SDK `isInstance` style). Reads
  * the caller's own brand via `this`, so every branded subclass gets a
  * correctly-scoped guard by inheritance. Must be invoked on the class —
  * in callback position write `v => SdkError.isInstance(v)`, not
  * `.filter(SdkError.isInstance)` (detached calls throw rather than
  * silently matching nothing).
  */
  static isInstance(value) {
    if (typeof this !== "function") throw new TypeError("isInstance must be called on the class (e.g. `SdkError.isInstance(value)`); for callbacks use `v => SdkError.isInstance(v)`");
    return brandedHasInstance(this, value);
  }
  constructor(code, message, data) {
    super(message);
    this.code = code;
    this.data = data;
    this.name = "SdkError";
    stampErrorBrands(this, new.target);
  }
};
var SdkHttpError = class extends SdkError {
  static {
    Object.defineProperty(this, "mcpBrand", { value: "mcp.SdkHttpError" });
  }
  constructor(code, message, data) {
    super(code, message, data);
    this.name = "SdkHttpError";
  }
  get status() {
    return this.data.status;
  }
  get statusText() {
    return this.data.statusText;
  }
};
var REQUIRED_CLIENT_CAPABILITIES_BY_METHOD = {};
function requiredClientCapabilitiesForRequest(method) {
  return Object.hasOwn(REQUIRED_CLIENT_CAPABILITIES_BY_METHOD, method) ? REQUIRED_CLIENT_CAPABILITIES_BY_METHOD[method] : void 0;
}
function isPlainObject$7(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}
function isImpliedCapabilityMember(capability, member, declaredValue) {
  return capability === "elicitation" && member === "form" && declaredValue["form"] === void 0 && declaredValue["url"] === void 0;
}
function requiredClientCapabilitiesForInputRequest(entry) {
  switch (entry.method) {
    case "elicitation/create":
      if (entry.params?.["mode"] === "url") return { elicitation: { url: {} } };
      return { elicitation: { form: {} } };
    case "sampling/createMessage": {
      const params = entry.params;
      if (params !== void 0 && (params["tools"] !== void 0 || params["toolChoice"] !== void 0)) return { sampling: { tools: {} } };
      return { sampling: {} };
    }
    case "roots/list":
      return { roots: {} };
    default:
      return;
  }
}
function missingClientCapabilities(required4, declared) {
  const missing = {};
  for (const [capability, requirement] of Object.entries(required4)) {
    if (requirement === void 0) continue;
    const declaredValue = declared === void 0 ? void 0 : declared[capability];
    if (declaredValue === void 0) {
      missing[capability] = requirement;
      continue;
    }
    if (isPlainObject$7(requirement) && isPlainObject$7(declaredValue)) {
      const missingMembers = {};
      for (const [member, memberRequirement] of Object.entries(requirement)) if (memberRequirement !== void 0 && declaredValue[member] === void 0 && !isImpliedCapabilityMember(capability, member, declaredValue)) missingMembers[member] = memberRequirement;
      if (Object.keys(missingMembers).length > 0) missing[capability] = missingMembers;
    }
  }
  return Object.keys(missing).length > 0 ? missing : void 0;
}
var FIRST_MODERN_PROTOCOL_VERSION = "2026-07-28";
var SUPPORTED_MODERN_PROTOCOL_VERSIONS = [FIRST_MODERN_PROTOCOL_VERSION];
function isModernProtocolVersion(version4) {
  return version4 >= FIRST_MODERN_PROTOCOL_VERSION;
}
function legacyProtocolVersions(versions) {
  return versions.filter((version4) => !isModernProtocolVersion(version4));
}
function modernProtocolVersions(versions) {
  return versions.filter((version4) => isModernProtocolVersion(version4));
}
function appendTextFallbackForNonObject(result) {
  const sc = result.structuredContent;
  if (sc === void 0) return result;
  if (!(typeof sc !== "object" || sc === null || Array.isArray(sc))) return result;
  if (result.content?.some((c) => c.type === "text") ?? false) return result;
  return {
    ...result,
    content: [...result.content ?? [], {
      type: "text",
      text: JSON.stringify(sc)
    }]
  };
}
var TOOL_RESULT_FOREIGN_FAMILY_KEYS = [
  "task",
  "inputRequests",
  "requestState"
];
function normalizeContentlessToolResult(value) {
  if (value === null || typeof value !== "object" || Array.isArray(value) || value.content !== void 0 || TOOL_RESULT_FOREIGN_FAMILY_KEYS.some((key) => key in value)) return value;
  return {
    ...value,
    content: []
  };
}
function build$1() {
  const JSONValueSchema$1 = lazy2(() => union2([
    string5(),
    number5(),
    boolean5(),
    _null6(),
    record2(string5(), JSONValueSchema$1),
    array2(JSONValueSchema$1)
  ]));
  const JSONObjectSchema$1 = record2(string5(), JSONValueSchema$1);
  const ProgressTokenSchema$1 = union2([string5(), number5().int()]);
  const CursorSchema$1 = string5();
  const TaskMetadataSchema$1 = object2({ ttl: number5().optional() });
  const RelatedTaskMetadataSchema$1 = object2({ taskId: string5() });
  const RequestMetaSchema$1 = looseObject2({
    progressToken: ProgressTokenSchema$1.optional(),
    "io.modelcontextprotocol/related-task": RelatedTaskMetadataSchema$1.optional()
  });
  const BaseRequestParamsSchema$1 = object2({ _meta: RequestMetaSchema$1.optional() });
  const TaskAugmentedRequestParamsSchema$1 = BaseRequestParamsSchema$1.extend({ task: TaskMetadataSchema$1.optional() });
  const RequestSchema$1 = object2({
    method: string5(),
    params: BaseRequestParamsSchema$1.loose().optional()
  });
  const NotificationsParamsSchema$1 = object2({ _meta: RequestMetaSchema$1.optional() });
  const NotificationSchema$1 = object2({
    method: string5(),
    params: NotificationsParamsSchema$1.loose().optional()
  });
  const ResultSchema$1 = looseObject2({ _meta: RequestMetaSchema$1.optional() });
  const RequestIdSchema$1 = union2([string5(), number5().int()]);
  const EmptyResultSchema$1 = ResultSchema$1.strict();
  const CancelledNotificationParamsSchema$1 = NotificationsParamsSchema$1.extend({
    requestId: RequestIdSchema$1.optional(),
    reason: string5().optional()
  });
  const CancelledNotificationSchema$1 = NotificationSchema$1.extend({
    method: literal2("notifications/cancelled"),
    params: CancelledNotificationParamsSchema$1
  });
  const IconSchema$1 = object2({
    src: string5(),
    mimeType: string5().optional(),
    sizes: array2(string5()).optional(),
    theme: _enum2(["light", "dark"]).optional()
  });
  const IconsSchema$1 = object2({ icons: array2(IconSchema$1).optional() });
  const BaseMetadataSchema$1 = object2({
    name: string5(),
    title: string5().optional()
  });
  const ImplementationSchema$1 = BaseMetadataSchema$1.extend({
    ...BaseMetadataSchema$1.shape,
    ...IconsSchema$1.shape,
    version: string5(),
    websiteUrl: string5().optional(),
    description: string5().optional()
  });
  const FormElicitationCapabilitySchema2 = intersection2(object2({ applyDefaults: boolean5().optional() }), JSONObjectSchema$1);
  const ElicitationCapabilitySchema2 = preprocess2((value) => {
    if (value && typeof value === "object" && !Array.isArray(value) && Object.keys(value).length === 0) return { form: {} };
    return value;
  }, intersection2(object2({
    form: FormElicitationCapabilitySchema2.optional(),
    url: JSONObjectSchema$1.optional()
  }), JSONObjectSchema$1.optional()));
  const ClientTasksCapabilitySchema$1 = looseObject2({
    list: JSONObjectSchema$1.optional(),
    cancel: JSONObjectSchema$1.optional(),
    requests: looseObject2({
      sampling: looseObject2({ createMessage: JSONObjectSchema$1.optional() }).optional(),
      elicitation: looseObject2({ create: JSONObjectSchema$1.optional() }).optional()
    }).optional()
  });
  const ServerTasksCapabilitySchema$1 = looseObject2({
    list: JSONObjectSchema$1.optional(),
    cancel: JSONObjectSchema$1.optional(),
    requests: looseObject2({ tools: looseObject2({ call: JSONObjectSchema$1.optional() }).optional() }).optional()
  });
  const ClientCapabilitiesSchema$1 = object2({
    experimental: record2(string5(), JSONObjectSchema$1).optional(),
    sampling: object2({
      context: JSONObjectSchema$1.optional(),
      tools: JSONObjectSchema$1.optional()
    }).optional(),
    elicitation: ElicitationCapabilitySchema2.optional(),
    roots: object2({ listChanged: boolean5().optional() }).optional(),
    tasks: ClientTasksCapabilitySchema$1.optional(),
    extensions: record2(string5(), JSONObjectSchema$1).optional()
  });
  const InitializeRequestParamsSchema$1 = BaseRequestParamsSchema$1.extend({
    protocolVersion: string5(),
    capabilities: ClientCapabilitiesSchema$1,
    clientInfo: ImplementationSchema$1
  });
  const InitializeRequestSchema$1 = RequestSchema$1.extend({
    method: literal2("initialize"),
    params: InitializeRequestParamsSchema$1
  });
  const ServerCapabilitiesSchema$1 = object2({
    experimental: record2(string5(), JSONObjectSchema$1).optional(),
    logging: JSONObjectSchema$1.optional(),
    completions: JSONObjectSchema$1.optional(),
    prompts: object2({ listChanged: boolean5().optional() }).optional(),
    resources: object2({
      subscribe: boolean5().optional(),
      listChanged: boolean5().optional()
    }).optional(),
    tools: object2({ listChanged: boolean5().optional() }).optional(),
    tasks: ServerTasksCapabilitySchema$1.optional(),
    extensions: record2(string5(), JSONObjectSchema$1).optional()
  });
  const InitializeResultSchema$1 = ResultSchema$1.extend({
    protocolVersion: string5(),
    capabilities: ServerCapabilitiesSchema$1,
    serverInfo: ImplementationSchema$1,
    instructions: string5().optional()
  });
  const InitializedNotificationSchema$1 = NotificationSchema$1.extend({
    method: literal2("notifications/initialized"),
    params: NotificationsParamsSchema$1.optional()
  });
  const PingRequestSchema$1 = RequestSchema$1.extend({
    method: literal2("ping"),
    params: BaseRequestParamsSchema$1.optional()
  });
  const ProgressSchema$1 = object2({
    progress: number5(),
    total: optional2(number5()),
    message: optional2(string5())
  });
  const ProgressNotificationParamsSchema$1 = object2({
    ...NotificationsParamsSchema$1.shape,
    ...ProgressSchema$1.shape,
    progressToken: ProgressTokenSchema$1
  });
  const ProgressNotificationSchema$1 = NotificationSchema$1.extend({
    method: literal2("notifications/progress"),
    params: ProgressNotificationParamsSchema$1
  });
  const PaginatedRequestParamsSchema$1 = BaseRequestParamsSchema$1.extend({ cursor: CursorSchema$1.optional() });
  const PaginatedRequestSchema$1 = RequestSchema$1.extend({ params: PaginatedRequestParamsSchema$1.optional() });
  const PaginatedResultSchema$1 = ResultSchema$1.extend({ nextCursor: CursorSchema$1.optional() });
  const ResourceContentsSchema$1 = object2({
    uri: string5(),
    mimeType: optional2(string5()),
    _meta: record2(string5(), unknown2()).optional()
  });
  const TextResourceContentsSchema$1 = ResourceContentsSchema$1.extend({ text: string5() });
  const Base64Schema2 = string5().refine((val) => {
    try {
      atob(val);
      return true;
    } catch {
      return false;
    }
  }, { message: "Invalid Base64 string" });
  const BlobResourceContentsSchema$1 = ResourceContentsSchema$1.extend({ blob: Base64Schema2 });
  const RoleSchema$1 = _enum2(["user", "assistant"]);
  const AnnotationsSchema$1 = object2({
    audience: array2(RoleSchema$1).optional(),
    priority: number5().min(0).max(1).optional(),
    lastModified: iso_exports2.datetime({ offset: true }).optional()
  });
  const ResourceSchema$1 = object2({
    ...BaseMetadataSchema$1.shape,
    ...IconsSchema$1.shape,
    uri: string5(),
    description: optional2(string5()),
    mimeType: optional2(string5()),
    size: optional2(number5()),
    annotations: AnnotationsSchema$1.optional(),
    _meta: optional2(looseObject2({}))
  });
  const ResourceTemplateSchema$1 = object2({
    ...BaseMetadataSchema$1.shape,
    ...IconsSchema$1.shape,
    uriTemplate: string5(),
    description: optional2(string5()),
    mimeType: optional2(string5()),
    annotations: AnnotationsSchema$1.optional(),
    _meta: optional2(looseObject2({}))
  });
  const ListResourcesRequestSchema$1 = PaginatedRequestSchema$1.extend({ method: literal2("resources/list") });
  const ListResourcesResultSchema$1 = PaginatedResultSchema$1.extend({ resources: array2(ResourceSchema$1) });
  const ListResourceTemplatesRequestSchema$1 = PaginatedRequestSchema$1.extend({ method: literal2("resources/templates/list") });
  const ListResourceTemplatesResultSchema$1 = PaginatedResultSchema$1.extend({ resourceTemplates: array2(ResourceTemplateSchema$1) });
  const ResourceRequestParamsSchema$1 = BaseRequestParamsSchema$1.extend({ uri: string5() });
  const ReadResourceRequestParamsSchema$1 = ResourceRequestParamsSchema$1;
  const ReadResourceRequestSchema$1 = RequestSchema$1.extend({
    method: literal2("resources/read"),
    params: ReadResourceRequestParamsSchema$1
  });
  const ReadResourceResultSchema$1 = ResultSchema$1.extend({ contents: array2(union2([TextResourceContentsSchema$1, BlobResourceContentsSchema$1])) });
  const ResourceListChangedNotificationSchema$1 = NotificationSchema$1.extend({
    method: literal2("notifications/resources/list_changed"),
    params: NotificationsParamsSchema$1.optional()
  });
  const SubscribeRequestParamsSchema$1 = ResourceRequestParamsSchema$1;
  const SubscribeRequestSchema$1 = RequestSchema$1.extend({
    method: literal2("resources/subscribe"),
    params: SubscribeRequestParamsSchema$1
  });
  const UnsubscribeRequestParamsSchema$1 = ResourceRequestParamsSchema$1;
  const UnsubscribeRequestSchema$1 = RequestSchema$1.extend({
    method: literal2("resources/unsubscribe"),
    params: UnsubscribeRequestParamsSchema$1
  });
  const ResourceUpdatedNotificationParamsSchema$1 = NotificationsParamsSchema$1.extend({ uri: string5() });
  const ResourceUpdatedNotificationSchema$1 = NotificationSchema$1.extend({
    method: literal2("notifications/resources/updated"),
    params: ResourceUpdatedNotificationParamsSchema$1
  });
  const PromptArgumentSchema$1 = object2({
    name: string5(),
    description: optional2(string5()),
    required: optional2(boolean5())
  });
  const PromptSchema$1 = object2({
    ...BaseMetadataSchema$1.shape,
    ...IconsSchema$1.shape,
    description: optional2(string5()),
    arguments: optional2(array2(PromptArgumentSchema$1)),
    _meta: optional2(looseObject2({}))
  });
  const ListPromptsRequestSchema$1 = PaginatedRequestSchema$1.extend({ method: literal2("prompts/list") });
  const ListPromptsResultSchema$1 = PaginatedResultSchema$1.extend({ prompts: array2(PromptSchema$1) });
  const GetPromptRequestParamsSchema$1 = BaseRequestParamsSchema$1.extend({
    name: string5(),
    arguments: record2(string5(), string5()).optional()
  });
  const GetPromptRequestSchema$1 = RequestSchema$1.extend({
    method: literal2("prompts/get"),
    params: GetPromptRequestParamsSchema$1
  });
  const TextContentSchema$1 = object2({
    type: literal2("text"),
    text: string5(),
    annotations: AnnotationsSchema$1.optional(),
    _meta: record2(string5(), unknown2()).optional()
  });
  const ImageContentSchema$1 = object2({
    type: literal2("image"),
    data: Base64Schema2,
    mimeType: string5(),
    annotations: AnnotationsSchema$1.optional(),
    _meta: record2(string5(), unknown2()).optional()
  });
  const AudioContentSchema$1 = object2({
    type: literal2("audio"),
    data: Base64Schema2,
    mimeType: string5(),
    annotations: AnnotationsSchema$1.optional(),
    _meta: record2(string5(), unknown2()).optional()
  });
  const ToolUseContentSchema$1 = object2({
    type: literal2("tool_use"),
    name: string5(),
    id: string5(),
    input: record2(string5(), unknown2()),
    _meta: record2(string5(), unknown2()).optional()
  });
  const EmbeddedResourceSchema$1 = object2({
    type: literal2("resource"),
    resource: union2([TextResourceContentsSchema$1, BlobResourceContentsSchema$1]),
    annotations: AnnotationsSchema$1.optional(),
    _meta: record2(string5(), unknown2()).optional()
  });
  const ResourceLinkSchema$1 = ResourceSchema$1.extend({ type: literal2("resource_link") });
  const ContentBlockSchema$1 = union2([
    TextContentSchema$1,
    ImageContentSchema$1,
    AudioContentSchema$1,
    ResourceLinkSchema$1,
    EmbeddedResourceSchema$1
  ]);
  const PromptMessageSchema$1 = object2({
    role: RoleSchema$1,
    content: ContentBlockSchema$1
  });
  const GetPromptResultSchema$1 = ResultSchema$1.extend({
    description: string5().optional(),
    messages: array2(PromptMessageSchema$1)
  });
  const PromptListChangedNotificationSchema$1 = NotificationSchema$1.extend({
    method: literal2("notifications/prompts/list_changed"),
    params: NotificationsParamsSchema$1.optional()
  });
  const ToolAnnotationsSchema$1 = object2({
    title: string5().optional(),
    readOnlyHint: boolean5().optional(),
    destructiveHint: boolean5().optional(),
    idempotentHint: boolean5().optional(),
    openWorldHint: boolean5().optional()
  });
  const ToolExecutionSchema$1 = object2({ taskSupport: _enum2([
    "required",
    "optional",
    "forbidden"
  ]).optional() });
  const ToolSchema$1 = object2({
    ...BaseMetadataSchema$1.shape,
    ...IconsSchema$1.shape,
    description: string5().optional(),
    inputSchema: object2({
      type: literal2("object"),
      properties: record2(string5(), JSONValueSchema$1).optional(),
      required: array2(string5()).optional()
    }).catchall(unknown2()),
    outputSchema: object2({
      type: literal2("object"),
      properties: record2(string5(), JSONValueSchema$1).optional(),
      required: array2(string5()).optional()
    }).catchall(unknown2()).optional(),
    annotations: ToolAnnotationsSchema$1.optional(),
    execution: ToolExecutionSchema$1.optional(),
    _meta: record2(string5(), unknown2()).optional()
  });
  const ListToolsRequestSchema$1 = PaginatedRequestSchema$1.extend({ method: literal2("tools/list") });
  const ListToolsResultSchema$1 = PaginatedResultSchema$1.extend({ tools: array2(ToolSchema$1) });
  const CallToolResultSchema$1 = ResultSchema$1.extend({
    content: array2(ContentBlockSchema$1),
    structuredContent: record2(string5(), unknown2()).optional(),
    isError: boolean5().optional()
  });
  const CallToolRequestParamsSchema$1 = TaskAugmentedRequestParamsSchema$1.extend({
    name: string5(),
    arguments: record2(string5(), unknown2()).optional()
  });
  const CallToolRequestSchema$1 = RequestSchema$1.extend({
    method: literal2("tools/call"),
    params: CallToolRequestParamsSchema$1
  });
  const ToolListChangedNotificationSchema$1 = NotificationSchema$1.extend({
    method: literal2("notifications/tools/list_changed"),
    params: NotificationsParamsSchema$1.optional()
  });
  const LoggingLevelSchema$1 = _enum2([
    "debug",
    "info",
    "notice",
    "warning",
    "error",
    "critical",
    "alert",
    "emergency"
  ]);
  const SetLevelRequestParamsSchema$1 = BaseRequestParamsSchema$1.extend({ level: LoggingLevelSchema$1 });
  const SetLevelRequestSchema$1 = RequestSchema$1.extend({
    method: literal2("logging/setLevel"),
    params: SetLevelRequestParamsSchema$1
  });
  const LoggingMessageNotificationParamsSchema$1 = NotificationsParamsSchema$1.extend({
    level: LoggingLevelSchema$1,
    logger: string5().optional(),
    data: unknown2()
  });
  const LoggingMessageNotificationSchema$1 = NotificationSchema$1.extend({
    method: literal2("notifications/message"),
    params: LoggingMessageNotificationParamsSchema$1
  });
  const ModelHintSchema$1 = object2({ name: string5().optional() });
  const ModelPreferencesSchema$1 = object2({
    hints: array2(ModelHintSchema$1).optional(),
    costPriority: number5().min(0).max(1).optional(),
    speedPriority: number5().min(0).max(1).optional(),
    intelligencePriority: number5().min(0).max(1).optional()
  });
  const ToolChoiceSchema$1 = object2({ mode: _enum2([
    "auto",
    "required",
    "none"
  ]).optional() });
  const ToolResultContentSchema$1 = object2({
    type: literal2("tool_result"),
    toolUseId: string5().describe("The unique identifier for the corresponding tool call."),
    content: array2(ContentBlockSchema$1),
    structuredContent: object2({}).loose().optional(),
    isError: boolean5().optional(),
    _meta: record2(string5(), unknown2()).optional()
  });
  const SamplingContentSchema$1 = discriminatedUnion2("type", [
    TextContentSchema$1,
    ImageContentSchema$1,
    AudioContentSchema$1
  ]);
  const SamplingMessageContentBlockSchema$1 = discriminatedUnion2("type", [
    TextContentSchema$1,
    ImageContentSchema$1,
    AudioContentSchema$1,
    ToolUseContentSchema$1,
    ToolResultContentSchema$1
  ]);
  const SamplingMessageSchema$1 = object2({
    role: RoleSchema$1,
    content: union2([SamplingMessageContentBlockSchema$1, array2(SamplingMessageContentBlockSchema$1)]),
    _meta: record2(string5(), unknown2()).optional()
  });
  const CreateMessageRequestParamsSchema$1 = TaskAugmentedRequestParamsSchema$1.extend({
    messages: array2(SamplingMessageSchema$1),
    modelPreferences: ModelPreferencesSchema$1.optional(),
    systemPrompt: string5().optional(),
    includeContext: _enum2([
      "none",
      "thisServer",
      "allServers"
    ]).optional(),
    temperature: number5().optional(),
    maxTokens: number5().int(),
    stopSequences: array2(string5()).optional(),
    metadata: JSONObjectSchema$1.optional(),
    tools: array2(ToolSchema$1).optional(),
    toolChoice: ToolChoiceSchema$1.optional()
  });
  const CreateMessageRequestSchema$1 = RequestSchema$1.extend({
    method: literal2("sampling/createMessage"),
    params: CreateMessageRequestParamsSchema$1
  });
  const CreateMessageResultSchema$1 = ResultSchema$1.extend({
    model: string5(),
    stopReason: optional2(_enum2([
      "endTurn",
      "stopSequence",
      "maxTokens"
    ]).or(string5())),
    role: RoleSchema$1,
    content: SamplingContentSchema$1
  });
  const CreateMessageResultWithToolsSchema$1 = ResultSchema$1.extend({
    model: string5(),
    stopReason: optional2(_enum2([
      "endTurn",
      "stopSequence",
      "maxTokens",
      "toolUse"
    ]).or(string5())),
    role: RoleSchema$1,
    content: union2([SamplingMessageContentBlockSchema$1, array2(SamplingMessageContentBlockSchema$1)])
  });
  const BooleanSchemaSchema$1 = object2({
    type: literal2("boolean"),
    title: string5().optional(),
    description: string5().optional(),
    default: boolean5().optional()
  });
  const StringSchemaSchema$1 = object2({
    type: literal2("string"),
    title: string5().optional(),
    description: string5().optional(),
    minLength: number5().optional(),
    maxLength: number5().optional(),
    format: _enum2([
      "email",
      "uri",
      "date",
      "date-time"
    ]).optional(),
    default: string5().optional()
  });
  const NumberSchemaSchema$1 = object2({
    type: _enum2(["number", "integer"]),
    title: string5().optional(),
    description: string5().optional(),
    minimum: number5().optional(),
    maximum: number5().optional(),
    default: number5().optional()
  });
  const UntitledSingleSelectEnumSchemaSchema$1 = object2({
    type: literal2("string"),
    title: string5().optional(),
    description: string5().optional(),
    enum: array2(string5()),
    default: string5().optional()
  });
  const TitledSingleSelectEnumSchemaSchema$1 = object2({
    type: literal2("string"),
    title: string5().optional(),
    description: string5().optional(),
    oneOf: array2(object2({
      const: string5(),
      title: string5()
    })),
    default: string5().optional()
  });
  const LegacyTitledEnumSchemaSchema$1 = object2({
    type: literal2("string"),
    title: string5().optional(),
    description: string5().optional(),
    enum: array2(string5()),
    enumNames: array2(string5()).optional(),
    default: string5().optional()
  });
  const SingleSelectEnumSchemaSchema$1 = union2([UntitledSingleSelectEnumSchemaSchema$1, TitledSingleSelectEnumSchemaSchema$1]);
  const UntitledMultiSelectEnumSchemaSchema$1 = object2({
    type: literal2("array"),
    title: string5().optional(),
    description: string5().optional(),
    minItems: number5().optional(),
    maxItems: number5().optional(),
    items: object2({
      type: literal2("string"),
      enum: array2(string5())
    }),
    default: array2(string5()).optional()
  });
  const TitledMultiSelectEnumSchemaSchema$1 = object2({
    type: literal2("array"),
    title: string5().optional(),
    description: string5().optional(),
    minItems: number5().optional(),
    maxItems: number5().optional(),
    items: object2({ anyOf: array2(object2({
      const: string5(),
      title: string5()
    })) }),
    default: array2(string5()).optional()
  });
  const MultiSelectEnumSchemaSchema$1 = union2([UntitledMultiSelectEnumSchemaSchema$1, TitledMultiSelectEnumSchemaSchema$1]);
  const EnumSchemaSchema$1 = union2([
    LegacyTitledEnumSchemaSchema$1,
    SingleSelectEnumSchemaSchema$1,
    MultiSelectEnumSchemaSchema$1
  ]);
  const PrimitiveSchemaDefinitionSchema$1 = union2([
    EnumSchemaSchema$1,
    BooleanSchemaSchema$1,
    StringSchemaSchema$1,
    NumberSchemaSchema$1
  ]);
  const ElicitRequestFormParamsSchema$1 = TaskAugmentedRequestParamsSchema$1.extend({
    mode: literal2("form").optional(),
    message: string5(),
    requestedSchema: object2({
      type: literal2("object"),
      properties: record2(string5(), PrimitiveSchemaDefinitionSchema$1),
      required: array2(string5()).optional()
    }).catchall(unknown2())
  });
  const ElicitRequestURLParamsSchema$1 = TaskAugmentedRequestParamsSchema$1.extend({
    mode: literal2("url"),
    message: string5(),
    elicitationId: string5(),
    url: string5().url()
  });
  const ElicitRequestParamsSchema$1 = union2([ElicitRequestFormParamsSchema$1, ElicitRequestURLParamsSchema$1]);
  const ElicitRequestSchema$1 = RequestSchema$1.extend({
    method: literal2("elicitation/create"),
    params: ElicitRequestParamsSchema$1
  });
  const ElicitationCompleteNotificationParamsSchema$1 = NotificationsParamsSchema$1.extend({ elicitationId: string5() });
  const ElicitationCompleteNotificationSchema$1 = NotificationSchema$1.extend({
    method: literal2("notifications/elicitation/complete"),
    params: ElicitationCompleteNotificationParamsSchema$1
  });
  const ElicitResultSchema$1 = ResultSchema$1.extend({
    action: _enum2([
      "accept",
      "decline",
      "cancel"
    ]),
    content: preprocess2((val) => val === null ? void 0 : val, record2(string5(), union2([
      string5(),
      number5(),
      boolean5(),
      array2(string5())
    ])).optional())
  });
  const ResourceTemplateReferenceSchema$1 = object2({
    type: literal2("ref/resource"),
    uri: string5()
  });
  const PromptReferenceSchema$1 = object2({
    type: literal2("ref/prompt"),
    name: string5()
  });
  const CompleteRequestParamsSchema$1 = BaseRequestParamsSchema$1.extend({
    ref: union2([PromptReferenceSchema$1, ResourceTemplateReferenceSchema$1]),
    argument: object2({
      name: string5(),
      value: string5()
    }),
    context: object2({ arguments: record2(string5(), string5()).optional() }).optional()
  });
  const CompleteRequestSchema$1 = RequestSchema$1.extend({
    method: literal2("completion/complete"),
    params: CompleteRequestParamsSchema$1
  });
  const CompleteResultSchema$1 = ResultSchema$1.extend({ completion: looseObject2({
    values: array2(string5()).max(100),
    total: optional2(number5().int()),
    hasMore: optional2(boolean5())
  }) });
  const RootSchema$1 = object2({
    uri: string5().startsWith("file://"),
    name: string5().optional(),
    _meta: record2(string5(), unknown2()).optional()
  });
  const ListRootsRequestSchema$1 = RequestSchema$1.extend({
    method: literal2("roots/list"),
    params: BaseRequestParamsSchema$1.optional()
  });
  const ListRootsResultSchema$1 = ResultSchema$1.extend({ roots: array2(RootSchema$1) });
  const RootsListChangedNotificationSchema$1 = NotificationSchema$1.extend({
    method: literal2("notifications/roots/list_changed"),
    params: NotificationsParamsSchema$1.optional()
  });
  const TaskCreationParamsSchema$1 = looseObject2({
    ttl: number5().optional(),
    pollInterval: number5().optional()
  });
  const TaskStatusSchema$1 = _enum2([
    "working",
    "input_required",
    "completed",
    "failed",
    "cancelled"
  ]);
  const TaskSchema$1 = object2({
    taskId: string5(),
    status: TaskStatusSchema$1,
    ttl: union2([number5(), _null6()]),
    createdAt: string5(),
    lastUpdatedAt: string5(),
    pollInterval: optional2(number5()),
    statusMessage: optional2(string5())
  });
  const CreateTaskResultSchema$1 = ResultSchema$1.extend({ task: TaskSchema$1 });
  const TaskStatusNotificationParamsSchema$1 = NotificationsParamsSchema$1.merge(TaskSchema$1);
  const TaskStatusNotificationSchema$1 = NotificationSchema$1.extend({
    method: literal2("notifications/tasks/status"),
    params: TaskStatusNotificationParamsSchema$1
  });
  const GetTaskRequestSchema$1 = RequestSchema$1.extend({
    method: literal2("tasks/get"),
    params: BaseRequestParamsSchema$1.extend({ taskId: string5() })
  });
  const GetTaskResultSchema$1 = ResultSchema$1.merge(TaskSchema$1);
  const GetTaskPayloadRequestSchema$1 = RequestSchema$1.extend({
    method: literal2("tasks/result"),
    params: BaseRequestParamsSchema$1.extend({ taskId: string5() })
  });
  const GetTaskPayloadResultSchema$1 = ResultSchema$1.loose();
  const ListTasksRequestSchema$1 = PaginatedRequestSchema$1.extend({ method: literal2("tasks/list") });
  const ListTasksResultSchema$1 = PaginatedResultSchema$1.extend({ tasks: array2(TaskSchema$1) });
  const CancelTaskRequestSchema$1 = RequestSchema$1.extend({
    method: literal2("tasks/cancel"),
    params: BaseRequestParamsSchema$1.extend({ taskId: string5() })
  });
  return {
    JSONValueSchema: JSONValueSchema$1,
    JSONObjectSchema: JSONObjectSchema$1,
    ProgressTokenSchema: ProgressTokenSchema$1,
    CursorSchema: CursorSchema$1,
    TaskMetadataSchema: TaskMetadataSchema$1,
    RelatedTaskMetadataSchema: RelatedTaskMetadataSchema$1,
    RequestMetaSchema: RequestMetaSchema$1,
    BaseRequestParamsSchema: BaseRequestParamsSchema$1,
    TaskAugmentedRequestParamsSchema: TaskAugmentedRequestParamsSchema$1,
    RequestSchema: RequestSchema$1,
    NotificationsParamsSchema: NotificationsParamsSchema$1,
    NotificationSchema: NotificationSchema$1,
    ResultSchema: ResultSchema$1,
    RequestIdSchema: RequestIdSchema$1,
    EmptyResultSchema: EmptyResultSchema$1,
    CancelledNotificationParamsSchema: CancelledNotificationParamsSchema$1,
    CancelledNotificationSchema: CancelledNotificationSchema$1,
    IconSchema: IconSchema$1,
    IconsSchema: IconsSchema$1,
    BaseMetadataSchema: BaseMetadataSchema$1,
    ImplementationSchema: ImplementationSchema$1,
    ClientTasksCapabilitySchema: ClientTasksCapabilitySchema$1,
    ServerTasksCapabilitySchema: ServerTasksCapabilitySchema$1,
    ClientCapabilitiesSchema: ClientCapabilitiesSchema$1,
    InitializeRequestParamsSchema: InitializeRequestParamsSchema$1,
    InitializeRequestSchema: InitializeRequestSchema$1,
    ServerCapabilitiesSchema: ServerCapabilitiesSchema$1,
    InitializeResultSchema: InitializeResultSchema$1,
    InitializedNotificationSchema: InitializedNotificationSchema$1,
    PingRequestSchema: PingRequestSchema$1,
    ProgressSchema: ProgressSchema$1,
    ProgressNotificationParamsSchema: ProgressNotificationParamsSchema$1,
    ProgressNotificationSchema: ProgressNotificationSchema$1,
    PaginatedRequestParamsSchema: PaginatedRequestParamsSchema$1,
    PaginatedRequestSchema: PaginatedRequestSchema$1,
    PaginatedResultSchema: PaginatedResultSchema$1,
    ResourceContentsSchema: ResourceContentsSchema$1,
    TextResourceContentsSchema: TextResourceContentsSchema$1,
    BlobResourceContentsSchema: BlobResourceContentsSchema$1,
    RoleSchema: RoleSchema$1,
    AnnotationsSchema: AnnotationsSchema$1,
    ResourceSchema: ResourceSchema$1,
    ResourceTemplateSchema: ResourceTemplateSchema$1,
    ListResourcesRequestSchema: ListResourcesRequestSchema$1,
    ListResourcesResultSchema: ListResourcesResultSchema$1,
    ListResourceTemplatesRequestSchema: ListResourceTemplatesRequestSchema$1,
    ListResourceTemplatesResultSchema: ListResourceTemplatesResultSchema$1,
    ResourceRequestParamsSchema: ResourceRequestParamsSchema$1,
    ReadResourceRequestParamsSchema: ReadResourceRequestParamsSchema$1,
    ReadResourceRequestSchema: ReadResourceRequestSchema$1,
    ReadResourceResultSchema: ReadResourceResultSchema$1,
    ResourceListChangedNotificationSchema: ResourceListChangedNotificationSchema$1,
    SubscribeRequestParamsSchema: SubscribeRequestParamsSchema$1,
    SubscribeRequestSchema: SubscribeRequestSchema$1,
    UnsubscribeRequestParamsSchema: UnsubscribeRequestParamsSchema$1,
    UnsubscribeRequestSchema: UnsubscribeRequestSchema$1,
    ResourceUpdatedNotificationParamsSchema: ResourceUpdatedNotificationParamsSchema$1,
    ResourceUpdatedNotificationSchema: ResourceUpdatedNotificationSchema$1,
    PromptArgumentSchema: PromptArgumentSchema$1,
    PromptSchema: PromptSchema$1,
    ListPromptsRequestSchema: ListPromptsRequestSchema$1,
    ListPromptsResultSchema: ListPromptsResultSchema$1,
    GetPromptRequestParamsSchema: GetPromptRequestParamsSchema$1,
    GetPromptRequestSchema: GetPromptRequestSchema$1,
    TextContentSchema: TextContentSchema$1,
    ImageContentSchema: ImageContentSchema$1,
    AudioContentSchema: AudioContentSchema$1,
    ToolUseContentSchema: ToolUseContentSchema$1,
    EmbeddedResourceSchema: EmbeddedResourceSchema$1,
    ResourceLinkSchema: ResourceLinkSchema$1,
    ContentBlockSchema: ContentBlockSchema$1,
    PromptMessageSchema: PromptMessageSchema$1,
    GetPromptResultSchema: GetPromptResultSchema$1,
    PromptListChangedNotificationSchema: PromptListChangedNotificationSchema$1,
    ToolAnnotationsSchema: ToolAnnotationsSchema$1,
    ToolExecutionSchema: ToolExecutionSchema$1,
    ToolSchema: ToolSchema$1,
    ListToolsRequestSchema: ListToolsRequestSchema$1,
    ListToolsResultSchema: ListToolsResultSchema$1,
    CallToolResultSchema: CallToolResultSchema$1,
    CallToolRequestParamsSchema: CallToolRequestParamsSchema$1,
    CallToolRequestSchema: CallToolRequestSchema$1,
    ToolListChangedNotificationSchema: ToolListChangedNotificationSchema$1,
    LoggingLevelSchema: LoggingLevelSchema$1,
    SetLevelRequestParamsSchema: SetLevelRequestParamsSchema$1,
    SetLevelRequestSchema: SetLevelRequestSchema$1,
    LoggingMessageNotificationParamsSchema: LoggingMessageNotificationParamsSchema$1,
    LoggingMessageNotificationSchema: LoggingMessageNotificationSchema$1,
    ModelHintSchema: ModelHintSchema$1,
    ModelPreferencesSchema: ModelPreferencesSchema$1,
    ToolChoiceSchema: ToolChoiceSchema$1,
    ToolResultContentSchema: ToolResultContentSchema$1,
    SamplingContentSchema: SamplingContentSchema$1,
    SamplingMessageContentBlockSchema: SamplingMessageContentBlockSchema$1,
    SamplingMessageSchema: SamplingMessageSchema$1,
    CreateMessageRequestParamsSchema: CreateMessageRequestParamsSchema$1,
    CreateMessageRequestSchema: CreateMessageRequestSchema$1,
    CreateMessageResultSchema: CreateMessageResultSchema$1,
    CreateMessageResultWithToolsSchema: CreateMessageResultWithToolsSchema$1,
    BooleanSchemaSchema: BooleanSchemaSchema$1,
    StringSchemaSchema: StringSchemaSchema$1,
    NumberSchemaSchema: NumberSchemaSchema$1,
    UntitledSingleSelectEnumSchemaSchema: UntitledSingleSelectEnumSchemaSchema$1,
    TitledSingleSelectEnumSchemaSchema: TitledSingleSelectEnumSchemaSchema$1,
    LegacyTitledEnumSchemaSchema: LegacyTitledEnumSchemaSchema$1,
    SingleSelectEnumSchemaSchema: SingleSelectEnumSchemaSchema$1,
    UntitledMultiSelectEnumSchemaSchema: UntitledMultiSelectEnumSchemaSchema$1,
    TitledMultiSelectEnumSchemaSchema: TitledMultiSelectEnumSchemaSchema$1,
    MultiSelectEnumSchemaSchema: MultiSelectEnumSchemaSchema$1,
    EnumSchemaSchema: EnumSchemaSchema$1,
    PrimitiveSchemaDefinitionSchema: PrimitiveSchemaDefinitionSchema$1,
    ElicitRequestFormParamsSchema: ElicitRequestFormParamsSchema$1,
    ElicitRequestURLParamsSchema: ElicitRequestURLParamsSchema$1,
    ElicitRequestParamsSchema: ElicitRequestParamsSchema$1,
    ElicitRequestSchema: ElicitRequestSchema$1,
    ElicitationCompleteNotificationParamsSchema: ElicitationCompleteNotificationParamsSchema$1,
    ElicitationCompleteNotificationSchema: ElicitationCompleteNotificationSchema$1,
    ElicitResultSchema: ElicitResultSchema$1,
    ResourceTemplateReferenceSchema: ResourceTemplateReferenceSchema$1,
    PromptReferenceSchema: PromptReferenceSchema$1,
    CompleteRequestParamsSchema: CompleteRequestParamsSchema$1,
    CompleteRequestSchema: CompleteRequestSchema$1,
    CompleteResultSchema: CompleteResultSchema$1,
    RootSchema: RootSchema$1,
    ListRootsRequestSchema: ListRootsRequestSchema$1,
    ListRootsResultSchema: ListRootsResultSchema$1,
    RootsListChangedNotificationSchema: RootsListChangedNotificationSchema$1,
    TaskCreationParamsSchema: TaskCreationParamsSchema$1,
    TaskStatusSchema: TaskStatusSchema$1,
    TaskSchema: TaskSchema$1,
    CreateTaskResultSchema: CreateTaskResultSchema$1,
    TaskStatusNotificationParamsSchema: TaskStatusNotificationParamsSchema$1,
    TaskStatusNotificationSchema: TaskStatusNotificationSchema$1,
    GetTaskRequestSchema: GetTaskRequestSchema$1,
    GetTaskResultSchema: GetTaskResultSchema$1,
    GetTaskPayloadRequestSchema: GetTaskPayloadRequestSchema$1,
    GetTaskPayloadResultSchema: GetTaskPayloadResultSchema$1,
    ListTasksRequestSchema: ListTasksRequestSchema$1,
    ListTasksResultSchema: ListTasksResultSchema$1,
    CancelTaskRequestSchema: CancelTaskRequestSchema$1,
    CancelTaskResultSchema: ResultSchema$1.merge(TaskSchema$1),
    ClientRequestSchema: union2([
      PingRequestSchema$1,
      InitializeRequestSchema$1,
      CompleteRequestSchema$1,
      SetLevelRequestSchema$1,
      GetPromptRequestSchema$1,
      ListPromptsRequestSchema$1,
      ListResourcesRequestSchema$1,
      ListResourceTemplatesRequestSchema$1,
      ReadResourceRequestSchema$1,
      SubscribeRequestSchema$1,
      UnsubscribeRequestSchema$1,
      CallToolRequestSchema$1,
      ListToolsRequestSchema$1,
      GetTaskRequestSchema$1,
      GetTaskPayloadRequestSchema$1,
      ListTasksRequestSchema$1,
      CancelTaskRequestSchema$1
    ]),
    ClientNotificationSchema: union2([
      CancelledNotificationSchema$1,
      ProgressNotificationSchema$1,
      InitializedNotificationSchema$1,
      RootsListChangedNotificationSchema$1,
      TaskStatusNotificationSchema$1
    ]),
    ClientResultSchema: union2([
      EmptyResultSchema$1,
      CreateMessageResultSchema$1,
      CreateMessageResultWithToolsSchema$1,
      ElicitResultSchema$1,
      ListRootsResultSchema$1,
      GetTaskResultSchema$1,
      ListTasksResultSchema$1,
      CreateTaskResultSchema$1
    ]),
    ServerRequestSchema: union2([
      PingRequestSchema$1,
      CreateMessageRequestSchema$1,
      ElicitRequestSchema$1,
      ListRootsRequestSchema$1,
      GetTaskRequestSchema$1,
      GetTaskPayloadRequestSchema$1,
      ListTasksRequestSchema$1,
      CancelTaskRequestSchema$1
    ]),
    ServerNotificationSchema: union2([
      CancelledNotificationSchema$1,
      ProgressNotificationSchema$1,
      LoggingMessageNotificationSchema$1,
      ResourceUpdatedNotificationSchema$1,
      ResourceListChangedNotificationSchema$1,
      ToolListChangedNotificationSchema$1,
      PromptListChangedNotificationSchema$1,
      TaskStatusNotificationSchema$1,
      ElicitationCompleteNotificationSchema$1
    ]),
    ServerResultSchema: union2([
      EmptyResultSchema$1,
      InitializeResultSchema$1,
      CompleteResultSchema$1,
      GetPromptResultSchema$1,
      ListPromptsResultSchema$1,
      ListResourcesResultSchema$1,
      ListResourceTemplatesResultSchema$1,
      ReadResourceResultSchema$1,
      CallToolResultSchema$1,
      ListToolsResultSchema$1,
      GetTaskResultSchema$1,
      ListTasksResultSchema$1,
      CreateTaskResultSchema$1
    ]),
    CallToolResultWireSchema: unknown2().superRefine((value, ctx) => {
      if (typeof value !== "object" || value === null || Array.isArray(value) || value.content !== void 0) return;
      for (const key of TOOL_RESULT_FOREIGN_FAMILY_KEYS) if (key in value) {
        ctx.addIssue({
          code: "custom",
          message: `content is required when the body carries '${key}' \u2014 another result family cannot default into an empty tools/call success`
        });
        return;
      }
    }).transform(normalizeContentlessToolResult).pipe(CallToolResultSchema$1)
  };
}
var memo$1;
function buildSchemas2025() {
  return memo$1 ??= build$1();
}
function isNonObjectJsonSchemaRoot(json) {
  return json["type"] !== "object";
}
var REF_REWRITE_DATA_POSITION_KEYS = /* @__PURE__ */ new Set([
  "const",
  "enum",
  "default",
  "examples"
]);
var REF_REWRITE_NAME_MAP_KEYS = /* @__PURE__ */ new Set([
  "properties",
  "patternProperties",
  "$defs",
  "definitions",
  "dependentSchemas",
  "dependencies"
]);
function establishesNewBase(id) {
  return id !== void 0 && !(typeof id === "string" && id.startsWith("#"));
}
function wrapOutputSchemaForLegacy(natural) {
  const $schema = typeof natural["$schema"] === "string" ? natural["$schema"] : void 0;
  if (establishesNewBase(natural["$id"])) return {
    ...$schema !== void 0 && { $schema },
    type: "object",
    properties: { result: natural },
    required: ["result"]
  };
  const convertRecursiveRefs = declares2019Dialect(natural["$schema"]) && natural["$recursiveAnchor"] !== true;
  const rewriteRefs = (node3, parentIsNameMap) => {
    if (Array.isArray(node3)) return node3.map((item) => rewriteRefs(item, false));
    if (node3 === null || typeof node3 !== "object") return node3;
    if (!parentIsNameMap && establishesNewBase(node3["$id"])) return node3;
    const out = {};
    let convertedRecursion = false;
    for (const [k, v] of Object.entries(node3)) if (parentIsNameMap) out[k] = rewriteRefs(v, false);
    else if ((k === "$ref" || k === "$dynamicRef") && typeof v === "string") out[k] = v === "#" ? "#/properties/result" : v.startsWith("#/") ? `#/properties/result${v.slice(1)}` : v;
    else if (k === "$recursiveRef" && v === "#" && convertRecursiveRefs) convertedRecursion = true;
    else if (REF_REWRITE_DATA_POSITION_KEYS.has(k)) out[k] = v;
    else if (REF_REWRITE_NAME_MAP_KEYS.has(k)) out[k] = rewriteRefs(v, true);
    else out[k] = rewriteRefs(v, false);
    if (convertedRecursion) if ("$ref" in out) out["allOf"] = [...Array.isArray(out["allOf"]) ? out["allOf"] : [], { $ref: "#/properties/result" }];
    else out["$ref"] = "#/properties/result";
    return out;
  };
  return {
    ...$schema !== void 0 && { $schema },
    type: "object",
    properties: { result: rewriteRefs(natural, false) },
    required: ["result"]
  };
}
var requestMethodKeys$1 = {
  ping: null,
  initialize: null,
  "completion/complete": null,
  "logging/setLevel": null,
  "prompts/get": null,
  "prompts/list": null,
  "resources/list": null,
  "resources/templates/list": null,
  "resources/read": null,
  "resources/subscribe": null,
  "resources/unsubscribe": null,
  "tools/call": null,
  "tools/list": null,
  "tasks/get": null,
  "tasks/result": null,
  "tasks/list": null,
  "tasks/cancel": null,
  "sampling/createMessage": null,
  "elicitation/create": null,
  "roots/list": null
};
var notificationMethodKeys$1 = {
  "notifications/cancelled": null,
  "notifications/progress": null,
  "notifications/initialized": null,
  "notifications/roots/list_changed": null,
  "notifications/tasks/status": null,
  "notifications/message": null,
  "notifications/resources/updated": null,
  "notifications/resources/list_changed": null,
  "notifications/tools/list_changed": null,
  "notifications/prompts/list_changed": null,
  "notifications/elicitation/complete": null
};
var resultMethodKeys = {
  ping: null,
  initialize: null,
  "completion/complete": null,
  "logging/setLevel": null,
  "prompts/get": null,
  "prompts/list": null,
  "resources/list": null,
  "resources/templates/list": null,
  "resources/read": null,
  "resources/subscribe": null,
  "resources/unsubscribe": null,
  "tools/call": null,
  "tools/list": null,
  "sampling/createMessage": null,
  "elicitation/create": null,
  "roots/list": null
};
var maps$1;
function registryMaps() {
  if (maps$1) return maps$1;
  const s = buildSchemas2025();
  maps$1 = {
    requestSchemas: {
      ping: s.PingRequestSchema,
      initialize: s.InitializeRequestSchema,
      "completion/complete": s.CompleteRequestSchema,
      "logging/setLevel": s.SetLevelRequestSchema,
      "prompts/get": s.GetPromptRequestSchema,
      "prompts/list": s.ListPromptsRequestSchema,
      "resources/list": s.ListResourcesRequestSchema,
      "resources/templates/list": s.ListResourceTemplatesRequestSchema,
      "resources/read": s.ReadResourceRequestSchema,
      "resources/subscribe": s.SubscribeRequestSchema,
      "resources/unsubscribe": s.UnsubscribeRequestSchema,
      "tools/call": s.CallToolRequestSchema,
      "tools/list": s.ListToolsRequestSchema,
      "tasks/get": s.GetTaskRequestSchema,
      "tasks/result": s.GetTaskPayloadRequestSchema,
      "tasks/list": s.ListTasksRequestSchema,
      "tasks/cancel": s.CancelTaskRequestSchema,
      "sampling/createMessage": s.CreateMessageRequestSchema,
      "elicitation/create": s.ElicitRequestSchema,
      "roots/list": s.ListRootsRequestSchema
    },
    notificationSchemas: {
      "notifications/cancelled": s.CancelledNotificationSchema,
      "notifications/progress": s.ProgressNotificationSchema,
      "notifications/initialized": s.InitializedNotificationSchema,
      "notifications/roots/list_changed": s.RootsListChangedNotificationSchema,
      "notifications/tasks/status": s.TaskStatusNotificationSchema,
      "notifications/message": s.LoggingMessageNotificationSchema,
      "notifications/resources/updated": s.ResourceUpdatedNotificationSchema,
      "notifications/resources/list_changed": s.ResourceListChangedNotificationSchema,
      "notifications/tools/list_changed": s.ToolListChangedNotificationSchema,
      "notifications/prompts/list_changed": s.PromptListChangedNotificationSchema,
      "notifications/elicitation/complete": s.ElicitationCompleteNotificationSchema
    },
    resultSchemas: {
      ping: s.EmptyResultSchema,
      initialize: s.InitializeResultSchema,
      "completion/complete": s.CompleteResultSchema,
      "logging/setLevel": s.EmptyResultSchema,
      "prompts/get": s.GetPromptResultSchema,
      "prompts/list": s.ListPromptsResultSchema,
      "resources/list": s.ListResourcesResultSchema,
      "resources/templates/list": s.ListResourceTemplatesResultSchema,
      "resources/read": s.ReadResourceResultSchema,
      "resources/subscribe": s.EmptyResultSchema,
      "resources/unsubscribe": s.EmptyResultSchema,
      "tools/call": s.CallToolResultWireSchema,
      "tools/list": s.ListToolsResultSchema,
      "sampling/createMessage": s.CreateMessageResultWithToolsSchema,
      "elicitation/create": s.ElicitResultSchema,
      "roots/list": s.ListRootsResultSchema
    }
  };
  return maps$1;
}
function hasRequestMethod2025(method) {
  return Object.prototype.hasOwnProperty.call(requestMethodKeys$1, method);
}
function hasNotificationMethod2025(method) {
  return Object.prototype.hasOwnProperty.call(notificationMethodKeys$1, method);
}
function hasResultMethod(method) {
  return Object.prototype.hasOwnProperty.call(resultMethodKeys, method);
}
function getResultSchema(method) {
  return hasResultMethod(method) ? registryMaps().resultSchemas[method] : void 0;
}
function getRequestSchema(method) {
  return hasRequestMethod2025(method) ? registryMaps().requestSchemas[method] : void 0;
}
function getNotificationSchema(method) {
  return hasNotificationMethod2025(method) ? registryMaps().notificationSchemas[method] : void 0;
}
var rev2025RequestMethods = Object.keys(requestMethodKeys$1);
var rev2025NotificationMethods = Object.keys(notificationMethodKeys$1);
function isPlainObject$6(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}
function triState$1(schema, raw) {
  if (schema === void 0) return {
    ok: false,
    reason: "not-in-era"
  };
  const parsed = schema.safeParse(raw);
  return parsed.success ? {
    ok: true,
    value: parsed.data
  } : {
    ok: false,
    reason: "invalid",
    message: String(parsed.error)
  };
}
var NOT_IN_ERA$1 = {
  ok: false,
  reason: "not-in-era"
};
function toolNeedsLegacyWrap(t) {
  return isPlainObject$6(t) && isPlainObject$6(t["outputSchema"]) && isNonObjectJsonSchemaRoot(t["outputSchema"]);
}
function toNeutralResult(value) {
  return value;
}
var rev2025Codec = {
  era: "2025-11-25",
  hasRequestMethod: hasRequestMethod2025,
  hasNotificationMethod: hasNotificationMethod2025,
  validateRequest: (method, raw) => triState$1(getRequestSchema(method), raw),
  validateResult: (method, raw) => triState$1(getResultSchema(method), raw),
  validateNotification: (method, raw) => triState$1(getNotificationSchema(method), raw),
  hasInputRequestMethod: () => false,
  validateInputRequest: () => NOT_IN_ERA$1,
  validateInputResponse: () => NOT_IN_ERA$1,
  samplingResultVariant: ((hasTools, raw) => {
    const s = buildSchemas2025();
    return triState$1(hasTools ? s.CreateMessageResultWithToolsSchema : s.CreateMessageResultSchema, raw);
  }),
  outboundEnvelope: (_material) => void 0,
  validateEnvelopeMeta: (_meta) => [],
  projectCallToolResult(result, advertisedOutputSchema) {
    const withText = appendTextFallbackForNonObject(result);
    const sc = withText.structuredContent;
    if (sc === void 0) return withText;
    const valueIsNonObject = typeof sc !== "object" || sc === null || Array.isArray(sc);
    const schemaWrapped = advertisedOutputSchema !== void 0 && isNonObjectJsonSchemaRoot(advertisedOutputSchema);
    if (!valueIsNonObject && !schemaWrapped) return withText;
    return {
      ...withText,
      structuredContent: { result: sc }
    };
  },
  decodeResult(_method, raw) {
    if (isPlainObject$6(raw) && "resultType" in raw) {
      const stripped = { ...raw };
      delete stripped["resultType"];
      return {
        kind: "complete",
        result: toNeutralResult(stripped)
      };
    }
    return {
      kind: "complete",
      result: toNeutralResult(raw)
    };
  },
  encodeResult(method, result) {
    if (method !== "tools/list") return result;
    const tools = result.tools;
    if (!Array.isArray(tools) || !tools.some((t) => toolNeedsLegacyWrap(t))) return result;
    return {
      ...result,
      tools: tools.map((t) => toolNeedsLegacyWrap(t) ? {
        ...t,
        outputSchema: wrapOutputSchemaForLegacy(t.outputSchema)
      } : t)
    };
  },
  encodeErrorCode: (code) => code === -32002 ? -32602 : code,
  checkInboundEnvelope: (_material) => void 0
};
function build() {
  const JSONValueSchema$1 = lazy2(() => union2([
    string5(),
    number5(),
    boolean5(),
    _null6(),
    record2(string5(), JSONValueSchema$1),
    array2(JSONValueSchema$1)
  ]));
  const JSONObjectSchema$1 = record2(string5(), JSONValueSchema$1);
  const ProgressTokenSchema$1 = union2([string5(), number5().int()]);
  const CursorSchema$1 = string5();
  const RequestIdSchema$1 = union2([string5(), number5().int()]);
  const RoleSchema$1 = _enum2(["user", "assistant"]);
  const LoggingLevelSchema$1 = _enum2([
    "debug",
    "info",
    "notice",
    "warning",
    "error",
    "critical",
    "alert",
    "emergency"
  ]);
  const Base64Schema2 = string5().refine((val) => {
    try {
      atob(val);
      return true;
    } catch {
      return false;
    }
  }, { message: "Invalid Base64 string" });
  const TaskMetadataSchema$1 = object2({ ttl: number5().optional() });
  const RelatedTaskMetadataSchema$1 = object2({ taskId: string5() });
  const RequestMetaSchema$1 = looseObject2({
    progressToken: ProgressTokenSchema$1.optional(),
    "io.modelcontextprotocol/related-task": RelatedTaskMetadataSchema$1.optional()
  });
  const BaseRequestParamsSchema$1 = object2({ _meta: RequestMetaSchema$1.optional() });
  const TaskAugmentedRequestParamsSchema$1 = BaseRequestParamsSchema$1.extend({ task: TaskMetadataSchema$1.optional() });
  const NotificationsParamsSchema$1 = object2({ _meta: RequestMetaSchema$1.optional() });
  const NotificationSchema$1 = object2({
    method: string5(),
    params: NotificationsParamsSchema$1.loose().optional()
  });
  const IconSchema$1 = object2({
    src: string5(),
    mimeType: string5().optional(),
    sizes: array2(string5()).optional(),
    theme: _enum2(["light", "dark"]).optional()
  });
  const IconsSchema$1 = object2({ icons: array2(IconSchema$1).optional() });
  const BaseMetadataSchema$1 = object2({
    name: string5(),
    title: string5().optional()
  });
  const ImplementationSchema$1 = BaseMetadataSchema$1.extend({
    ...BaseMetadataSchema$1.shape,
    ...IconsSchema$1.shape,
    version: string5(),
    websiteUrl: string5().optional(),
    description: string5().optional()
  });
  const FormElicitationCapabilitySchema2 = intersection2(object2({ applyDefaults: boolean5().optional() }), JSONObjectSchema$1);
  const ElicitationCapabilitySchema2 = preprocess2((value) => {
    if (value && typeof value === "object" && !Array.isArray(value) && Object.keys(value).length === 0) return { form: {} };
    return value;
  }, intersection2(object2({
    form: FormElicitationCapabilitySchema2.optional(),
    url: JSONObjectSchema$1.optional()
  }), JSONObjectSchema$1.optional()));
  const ClientTasksCapabilitySchema$1 = looseObject2({
    list: JSONObjectSchema$1.optional(),
    cancel: JSONObjectSchema$1.optional(),
    requests: looseObject2({
      sampling: looseObject2({ createMessage: JSONObjectSchema$1.optional() }).optional(),
      elicitation: looseObject2({ create: JSONObjectSchema$1.optional() }).optional()
    }).optional()
  });
  const ServerTasksCapabilitySchema$1 = looseObject2({
    list: JSONObjectSchema$1.optional(),
    cancel: JSONObjectSchema$1.optional(),
    requests: looseObject2({ tools: looseObject2({ call: JSONObjectSchema$1.optional() }).optional() }).optional()
  });
  const ClientCapabilitiesSchema$1 = object2({
    experimental: record2(string5(), JSONObjectSchema$1).optional(),
    sampling: object2({
      context: JSONObjectSchema$1.optional(),
      tools: JSONObjectSchema$1.optional()
    }).optional(),
    elicitation: ElicitationCapabilitySchema2.optional(),
    roots: object2({ listChanged: boolean5().optional() }).optional(),
    tasks: ClientTasksCapabilitySchema$1.optional(),
    extensions: record2(string5(), JSONObjectSchema$1).optional()
  });
  const ServerCapabilitiesSchema$1 = object2({
    experimental: record2(string5(), JSONObjectSchema$1).optional(),
    logging: JSONObjectSchema$1.optional(),
    completions: JSONObjectSchema$1.optional(),
    prompts: object2({ listChanged: boolean5().optional() }).optional(),
    resources: object2({
      subscribe: boolean5().optional(),
      listChanged: boolean5().optional()
    }).optional(),
    tools: object2({ listChanged: boolean5().optional() }).optional(),
    tasks: ServerTasksCapabilitySchema$1.optional(),
    extensions: record2(string5(), JSONObjectSchema$1).optional()
  });
  const ProgressSchema$1 = object2({
    progress: number5(),
    total: optional2(number5()),
    message: optional2(string5())
  });
  const ProgressNotificationParamsSchema$1 = object2({
    ...NotificationsParamsSchema$1.shape,
    ...ProgressSchema$1.shape,
    progressToken: ProgressTokenSchema$1
  });
  const ProgressNotificationSchema$1 = NotificationSchema$1.extend({
    method: literal2("notifications/progress"),
    params: ProgressNotificationParamsSchema$1
  });
  const LoggingMessageNotificationParamsSchema$1 = NotificationsParamsSchema$1.extend({
    level: LoggingLevelSchema$1,
    logger: string5().optional(),
    data: unknown2()
  });
  const LoggingMessageNotificationSchema$1 = NotificationSchema$1.extend({
    method: literal2("notifications/message"),
    params: LoggingMessageNotificationParamsSchema$1
  });
  const ResourceContentsSchema$1 = object2({
    uri: string5(),
    mimeType: optional2(string5()),
    _meta: record2(string5(), unknown2()).optional()
  });
  const TextResourceContentsSchema$1 = ResourceContentsSchema$1.extend({ text: string5() });
  const BlobResourceContentsSchema$1 = ResourceContentsSchema$1.extend({ blob: Base64Schema2 });
  const AnnotationsSchema$1 = object2({
    audience: array2(RoleSchema$1).optional(),
    priority: number5().min(0).max(1).optional(),
    lastModified: iso_exports2.datetime({ offset: true }).optional()
  });
  const ResourceSchema$1 = object2({
    ...BaseMetadataSchema$1.shape,
    ...IconsSchema$1.shape,
    uri: string5(),
    description: optional2(string5()),
    mimeType: optional2(string5()),
    size: optional2(number5()),
    annotations: AnnotationsSchema$1.optional(),
    _meta: optional2(looseObject2({}))
  });
  const ResourceTemplateSchema$1 = object2({
    ...BaseMetadataSchema$1.shape,
    ...IconsSchema$1.shape,
    uriTemplate: string5(),
    description: optional2(string5()),
    mimeType: optional2(string5()),
    annotations: AnnotationsSchema$1.optional(),
    _meta: optional2(looseObject2({}))
  });
  const ResourceListChangedNotificationSchema$1 = NotificationSchema$1.extend({
    method: literal2("notifications/resources/list_changed"),
    params: NotificationsParamsSchema$1.optional()
  });
  const ResourceUpdatedNotificationParamsSchema$1 = NotificationsParamsSchema$1.extend({ uri: string5() });
  const ResourceUpdatedNotificationSchema$1 = NotificationSchema$1.extend({
    method: literal2("notifications/resources/updated"),
    params: ResourceUpdatedNotificationParamsSchema$1
  });
  const PromptArgumentSchema$1 = object2({
    name: string5(),
    description: optional2(string5()),
    required: optional2(boolean5())
  });
  const PromptSchema$1 = object2({
    ...BaseMetadataSchema$1.shape,
    ...IconsSchema$1.shape,
    description: optional2(string5()),
    arguments: optional2(array2(PromptArgumentSchema$1)),
    _meta: optional2(looseObject2({}))
  });
  const PromptListChangedNotificationSchema$1 = NotificationSchema$1.extend({
    method: literal2("notifications/prompts/list_changed"),
    params: NotificationsParamsSchema$1.optional()
  });
  const TextContentSchema$1 = object2({
    type: literal2("text"),
    text: string5(),
    annotations: AnnotationsSchema$1.optional(),
    _meta: record2(string5(), unknown2()).optional()
  });
  const ImageContentSchema$1 = object2({
    type: literal2("image"),
    data: Base64Schema2,
    mimeType: string5(),
    annotations: AnnotationsSchema$1.optional(),
    _meta: record2(string5(), unknown2()).optional()
  });
  const AudioContentSchema$1 = object2({
    type: literal2("audio"),
    data: Base64Schema2,
    mimeType: string5(),
    annotations: AnnotationsSchema$1.optional(),
    _meta: record2(string5(), unknown2()).optional()
  });
  const ToolUseContentSchema$1 = object2({
    type: literal2("tool_use"),
    name: string5(),
    id: string5(),
    input: record2(string5(), unknown2()),
    _meta: record2(string5(), unknown2()).optional()
  });
  const EmbeddedResourceSchema$1 = object2({
    type: literal2("resource"),
    resource: union2([TextResourceContentsSchema$1, BlobResourceContentsSchema$1]),
    annotations: AnnotationsSchema$1.optional(),
    _meta: record2(string5(), unknown2()).optional()
  });
  const ResourceLinkSchema$1 = ResourceSchema$1.extend({ type: literal2("resource_link") });
  const ContentBlockSchema$1 = union2([
    TextContentSchema$1,
    ImageContentSchema$1,
    AudioContentSchema$1,
    ResourceLinkSchema$1,
    EmbeddedResourceSchema$1
  ]);
  const PromptMessageSchema$1 = object2({
    role: RoleSchema$1,
    content: ContentBlockSchema$1
  });
  const ToolAnnotationsSchema$1 = object2({
    title: string5().optional(),
    readOnlyHint: boolean5().optional(),
    destructiveHint: boolean5().optional(),
    idempotentHint: boolean5().optional(),
    openWorldHint: boolean5().optional()
  });
  const ToolListChangedNotificationSchema$1 = NotificationSchema$1.extend({
    method: literal2("notifications/tools/list_changed"),
    params: NotificationsParamsSchema$1.optional()
  });
  const ModelHintSchema$1 = object2({ name: string5().optional() });
  const ModelPreferencesSchema$1 = object2({
    hints: array2(ModelHintSchema$1).optional(),
    costPriority: number5().min(0).max(1).optional(),
    speedPriority: number5().min(0).max(1).optional(),
    intelligencePriority: number5().min(0).max(1).optional()
  });
  const ToolChoiceSchema$1 = object2({ mode: _enum2([
    "auto",
    "required",
    "none"
  ]).optional() });
  const BooleanSchemaSchema$1 = object2({
    type: literal2("boolean"),
    title: string5().optional(),
    description: string5().optional(),
    default: boolean5().optional()
  });
  const StringSchemaSchema$1 = object2({
    type: literal2("string"),
    title: string5().optional(),
    description: string5().optional(),
    minLength: number5().optional(),
    maxLength: number5().optional(),
    format: _enum2([
      "email",
      "uri",
      "date",
      "date-time"
    ]).optional(),
    default: string5().optional()
  });
  const NumberSchemaSchema$1 = object2({
    type: _enum2(["number", "integer"]),
    title: string5().optional(),
    description: string5().optional(),
    minimum: number5().optional(),
    maximum: number5().optional(),
    default: number5().optional()
  });
  const UntitledSingleSelectEnumSchemaSchema$1 = object2({
    type: literal2("string"),
    title: string5().optional(),
    description: string5().optional(),
    enum: array2(string5()),
    default: string5().optional()
  });
  const TitledSingleSelectEnumSchemaSchema$1 = object2({
    type: literal2("string"),
    title: string5().optional(),
    description: string5().optional(),
    oneOf: array2(object2({
      const: string5(),
      title: string5()
    })),
    default: string5().optional()
  });
  const LegacyTitledEnumSchemaSchema$1 = object2({
    type: literal2("string"),
    title: string5().optional(),
    description: string5().optional(),
    enum: array2(string5()),
    enumNames: array2(string5()).optional(),
    default: string5().optional()
  });
  const SingleSelectEnumSchemaSchema$1 = union2([UntitledSingleSelectEnumSchemaSchema$1, TitledSingleSelectEnumSchemaSchema$1]);
  const UntitledMultiSelectEnumSchemaSchema$1 = object2({
    type: literal2("array"),
    title: string5().optional(),
    description: string5().optional(),
    minItems: number5().optional(),
    maxItems: number5().optional(),
    items: object2({
      type: literal2("string"),
      enum: array2(string5())
    }),
    default: array2(string5()).optional()
  });
  const TitledMultiSelectEnumSchemaSchema$1 = object2({
    type: literal2("array"),
    title: string5().optional(),
    description: string5().optional(),
    minItems: number5().optional(),
    maxItems: number5().optional(),
    items: object2({ anyOf: array2(object2({
      const: string5(),
      title: string5()
    })) }),
    default: array2(string5()).optional()
  });
  const MultiSelectEnumSchemaSchema$1 = union2([UntitledMultiSelectEnumSchemaSchema$1, TitledMultiSelectEnumSchemaSchema$1]);
  const EnumSchemaSchema$1 = union2([
    LegacyTitledEnumSchemaSchema$1,
    SingleSelectEnumSchemaSchema$1,
    MultiSelectEnumSchemaSchema$1
  ]);
  const PrimitiveSchemaDefinitionSchema$1 = union2([
    EnumSchemaSchema$1,
    BooleanSchemaSchema$1,
    StringSchemaSchema$1,
    NumberSchemaSchema$1
  ]);
  const ElicitRequestFormParamsSchema$1 = TaskAugmentedRequestParamsSchema$1.extend({
    mode: literal2("form").optional(),
    message: string5(),
    requestedSchema: object2({
      type: literal2("object"),
      properties: record2(string5(), PrimitiveSchemaDefinitionSchema$1),
      required: array2(string5()).optional()
    }).catchall(unknown2())
  });
  const ResourceTemplateReferenceSchema$1 = object2({
    type: literal2("ref/resource"),
    uri: string5()
  });
  const PromptReferenceSchema$1 = object2({
    type: literal2("ref/prompt"),
    name: string5()
  });
  const RootSchema$1 = object2({
    uri: string5().startsWith("file://"),
    name: string5().optional(),
    _meta: record2(string5(), unknown2()).optional()
  });
  const sharedClientCapabilityShape = ClientCapabilitiesSchema$1.shape;
  const ClientCapabilities2026Schema = object2({
    experimental: sharedClientCapabilityShape.experimental,
    sampling: sharedClientCapabilityShape.sampling,
    elicitation: sharedClientCapabilityShape.elicitation,
    roots: sharedClientCapabilityShape.roots,
    extensions: sharedClientCapabilityShape.extensions
  });
  const sharedServerCapabilityShape = ServerCapabilitiesSchema$1.shape;
  const ServerCapabilities2026Schema = object2({
    experimental: sharedServerCapabilityShape.experimental,
    logging: sharedServerCapabilityShape.logging,
    completions: sharedServerCapabilityShape.completions,
    prompts: sharedServerCapabilityShape.prompts,
    resources: sharedServerCapabilityShape.resources,
    tools: sharedServerCapabilityShape.tools,
    extensions: sharedServerCapabilityShape.extensions
  });
  const RequestMetaEnvelopeSchema = looseObject2({
    progressToken: ProgressTokenSchema$1.optional(),
    [PROTOCOL_VERSION_META_KEY]: string5(),
    [CLIENT_INFO_META_KEY]: ImplementationSchema$1.optional(),
    [CLIENT_CAPABILITIES_META_KEY]: ClientCapabilities2026Schema,
    [LOG_LEVEL_META_KEY]: LoggingLevelSchema$1.optional()
  });
  const ToolSchema$1 = object2({
    ...BaseMetadataSchema$1.shape,
    ...IconsSchema$1.shape,
    description: string5().optional(),
    inputSchema: looseObject2({
      $schema: string5().optional(),
      type: literal2("object")
    }),
    outputSchema: looseObject2({ $schema: string5().optional() }).optional(),
    annotations: ToolAnnotationsSchema$1.optional(),
    _meta: record2(string5(), unknown2()).optional()
  });
  const ToolResultContentSchema$1 = object2({
    type: literal2("tool_result"),
    toolUseId: string5(),
    content: array2(ContentBlockSchema$1),
    structuredContent: unknown2().optional(),
    isError: boolean5().optional(),
    _meta: record2(string5(), unknown2()).optional()
  });
  const SamplingMessageContentBlockSchema$1 = union2([
    TextContentSchema$1,
    ImageContentSchema$1,
    AudioContentSchema$1,
    ToolUseContentSchema$1,
    ToolResultContentSchema$1
  ]);
  const SamplingMessageSchema$1 = object2({
    role: RoleSchema$1,
    content: union2([SamplingMessageContentBlockSchema$1, array2(SamplingMessageContentBlockSchema$1)]),
    _meta: record2(string5(), unknown2()).optional()
  });
  const ResultTypeSchema = string5();
  const ResultMetaSchema = looseObject2({ [SERVER_INFO_META_KEY]: ImplementationSchema$1.optional().catch(void 0) });
  const wireMeta = ResultMetaSchema.optional();
  function wireResult(shape) {
    return looseObject2({
      _meta: wireMeta,
      resultType: ResultTypeSchema.default("complete"),
      ...shape
    });
  }
  const ResultSchema$1 = wireResult({});
  const PaginatedResultSchema$1 = wireResult({ nextCursor: CursorSchema$1.optional() });
  const CallToolResultSchema$1 = wireResult({
    content: array2(ContentBlockSchema$1),
    structuredContent: unknown2().optional(),
    isError: boolean5().optional()
  });
  const ListToolsResultSchema$1 = wireResult({
    ttlMs: number5().int().min(0),
    cacheScope: _enum2(["public", "private"]),
    tools: array2(ToolSchema$1),
    nextCursor: CursorSchema$1.optional()
  });
  const ListPromptsResultSchema$1 = wireResult({
    ttlMs: number5().int().min(0),
    cacheScope: _enum2(["public", "private"]),
    prompts: array2(PromptSchema$1),
    nextCursor: CursorSchema$1.optional()
  });
  const GetPromptResultSchema$1 = wireResult({
    description: string5().optional(),
    messages: array2(PromptMessageSchema$1)
  });
  const ListResourcesResultSchema$1 = wireResult({
    ttlMs: number5().int().min(0),
    cacheScope: _enum2(["public", "private"]),
    resources: array2(ResourceSchema$1),
    nextCursor: CursorSchema$1.optional()
  });
  const ListResourceTemplatesResultSchema$1 = wireResult({
    ttlMs: number5().int().min(0),
    cacheScope: _enum2(["public", "private"]),
    resourceTemplates: array2(ResourceTemplateSchema$1),
    nextCursor: CursorSchema$1.optional()
  });
  const ReadResourceResultSchema$1 = wireResult({
    ttlMs: number5().int().min(0),
    cacheScope: _enum2(["public", "private"]),
    contents: array2(union2([TextResourceContentsSchema$1, BlobResourceContentsSchema$1]))
  });
  const CompleteResultSchema$1 = wireResult({ completion: object2({
    values: array2(string5()).max(100),
    total: number5().int().optional(),
    hasMore: boolean5().optional()
  }).loose() });
  const CacheableResultSchema = wireResult({
    ttlMs: number5().int().min(0),
    cacheScope: _enum2(["public", "private"])
  });
  const DiscoverResultSchema$1 = wireResult({
    ttlMs: number5().int().min(0).catch(0),
    cacheScope: _enum2(["public", "private"]).catch("private"),
    supportedVersions: array2(string5()),
    capabilities: ServerCapabilities2026Schema,
    instructions: string5().optional()
  });
  const CreateMessageRequestParamsSchema$1 = object2({
    messages: array2(SamplingMessageSchema$1),
    modelPreferences: ModelPreferencesSchema$1.optional(),
    systemPrompt: string5().optional(),
    includeContext: _enum2([
      "none",
      "thisServer",
      "allServers"
    ]).optional(),
    temperature: number5().optional(),
    maxTokens: number5().int(),
    stopSequences: array2(string5()).optional(),
    metadata: JSONObjectSchema$1.optional(),
    tools: array2(ToolSchema$1).optional(),
    toolChoice: ToolChoiceSchema$1.optional()
  });
  const CreateMessageRequestSchema$1 = object2({
    method: literal2("sampling/createMessage"),
    params: CreateMessageRequestParamsSchema$1
  });
  const ListRootsRequestSchema$1 = object2({
    method: literal2("roots/list"),
    params: object2({ _meta: record2(string5(), unknown2()).optional() }).optional()
  });
  const CreateMessageResultSchema$1 = object2({
    ...SamplingMessageSchema$1.shape,
    model: string5(),
    stopReason: string5().optional()
  });
  const ListRootsResultSchema$1 = object2({ roots: array2(RootSchema$1) });
  const ElicitResultSchema$1 = object2({
    action: _enum2([
      "accept",
      "decline",
      "cancel"
    ]),
    content: record2(string5(), union2([
      string5(),
      number5(),
      boolean5(),
      array2(string5())
    ])).optional()
  });
  const ElicitRequestURLParamsSchema$1 = object2({
    mode: literal2("url"),
    message: string5(),
    url: string5().url()
  });
  const ElicitRequestParamsSchema$1 = union2([ElicitRequestFormParamsSchema$1, ElicitRequestURLParamsSchema$1]);
  const ElicitRequestSchema$1 = object2({
    method: literal2("elicitation/create"),
    params: ElicitRequestParamsSchema$1
  });
  const InputRequestSchema = union2([
    CreateMessageRequestSchema$1,
    ListRootsRequestSchema$1,
    ElicitRequestSchema$1
  ]);
  const InputResponseSchema = union2([
    CreateMessageResultSchema$1,
    ListRootsResultSchema$1,
    ElicitResultSchema$1
  ]);
  const InputRequestsSchema = record2(string5(), InputRequestSchema);
  const InputResponsesSchema = record2(string5(), InputResponseSchema);
  const InputRequiredResultSchema = wireResult({
    inputRequests: InputRequestsSchema.optional(),
    requestState: string5().optional()
  });
  const retryParamsShape = {
    inputResponses: InputResponsesSchema.optional(),
    requestState: string5().optional()
  };
  const InputResponseRequestParamsSchema = object2({
    _meta: RequestMetaEnvelopeSchema,
    ...retryParamsShape
  });
  const DispatchRequestMetaSchema = looseObject2({ progressToken: ProgressTokenSchema$1.optional() });
  function wireRequest(method, paramsShape) {
    return object2({
      method: literal2(method),
      params: object2({
        _meta: RequestMetaEnvelopeSchema,
        ...paramsShape
      })
    });
  }
  function dispatchRequest(method, paramsShape) {
    return object2({
      method: literal2(method),
      params: object2({
        _meta: DispatchRequestMetaSchema.optional(),
        ...paramsShape
      }).optional()
    });
  }
  const callToolParamsShape = {
    name: string5(),
    arguments: record2(string5(), unknown2()).optional(),
    ...retryParamsShape
  };
  const paginatedParamsShape = { cursor: CursorSchema$1.optional() };
  const CallToolRequestSchema$1 = wireRequest("tools/call", callToolParamsShape);
  const ListToolsRequestSchema$1 = wireRequest("tools/list", paginatedParamsShape);
  const ListPromptsRequestSchema$1 = wireRequest("prompts/list", paginatedParamsShape);
  const GetPromptRequestSchema$1 = wireRequest("prompts/get", {
    name: string5(),
    arguments: record2(string5(), string5()).optional(),
    ...retryParamsShape
  });
  const ListResourcesRequestSchema$1 = wireRequest("resources/list", paginatedParamsShape);
  const ListResourceTemplatesRequestSchema$1 = wireRequest("resources/templates/list", paginatedParamsShape);
  const ReadResourceRequestSchema$1 = wireRequest("resources/read", {
    uri: string5(),
    ...retryParamsShape
  });
  const completeParamsShape = {
    ref: union2([PromptReferenceSchema$1, ResourceTemplateReferenceSchema$1]),
    argument: object2({
      name: string5(),
      value: string5()
    }),
    context: object2({ arguments: record2(string5(), string5()).optional() }).optional()
  };
  const CompleteRequestSchema$1 = wireRequest("completion/complete", completeParamsShape);
  const DiscoverRequestSchema$1 = wireRequest("server/discover", {});
  const SubscriptionFilterSchema$1 = object2({
    toolsListChanged: boolean5().optional(),
    promptsListChanged: boolean5().optional(),
    resourcesListChanged: boolean5().optional(),
    resourceSubscriptions: array2(string5()).optional()
  });
  const subscriptionsListenParamsShape = { notifications: SubscriptionFilterSchema$1 };
  const SubscriptionsListenRequestSchema$1 = wireRequest("subscriptions/listen", subscriptionsListenParamsShape);
  const SubscriptionsListenResultMetaSchema$1 = ResultMetaSchema.extend({ "io.modelcontextprotocol/subscriptionId": RequestIdSchema$1 });
  const SubscriptionsListenResultSchema$1 = looseObject2({
    _meta: SubscriptionsListenResultMetaSchema$1,
    resultType: ResultTypeSchema.default("complete")
  });
  const dispatchRequestSchemas = {
    "tools/call": dispatchRequest("tools/call", callToolParamsShape),
    "tools/list": dispatchRequest("tools/list", paginatedParamsShape),
    "prompts/get": dispatchRequest("prompts/get", {
      name: string5(),
      arguments: record2(string5(), string5()).optional()
    }),
    "prompts/list": dispatchRequest("prompts/list", paginatedParamsShape),
    "resources/list": dispatchRequest("resources/list", paginatedParamsShape),
    "resources/templates/list": dispatchRequest("resources/templates/list", paginatedParamsShape),
    "resources/read": dispatchRequest("resources/read", { uri: string5() }),
    "completion/complete": dispatchRequest("completion/complete", completeParamsShape),
    "server/discover": dispatchRequest("server/discover", {}),
    "subscriptions/listen": dispatchRequest("subscriptions/listen", subscriptionsListenParamsShape)
  };
  function liftedResult(shape) {
    return looseObject2({
      _meta: wireMeta,
      ...shape
    });
  }
  const dispatchResultSchemas = {
    "tools/call": liftedResult({
      content: array2(ContentBlockSchema$1),
      structuredContent: unknown2().optional(),
      isError: boolean5().optional()
    }),
    "tools/list": liftedResult({
      ttlMs: number5().int().min(0),
      cacheScope: _enum2(["public", "private"]),
      tools: array2(ToolSchema$1),
      nextCursor: CursorSchema$1.optional()
    }),
    "prompts/get": liftedResult({
      description: string5().optional(),
      messages: array2(PromptMessageSchema$1)
    }),
    "prompts/list": liftedResult({
      ttlMs: number5().int().min(0),
      cacheScope: _enum2(["public", "private"]),
      prompts: array2(PromptSchema$1),
      nextCursor: CursorSchema$1.optional()
    }),
    "resources/list": liftedResult({
      ttlMs: number5().int().min(0),
      cacheScope: _enum2(["public", "private"]),
      resources: array2(ResourceSchema$1),
      nextCursor: CursorSchema$1.optional()
    }),
    "resources/templates/list": liftedResult({
      ttlMs: number5().int().min(0),
      cacheScope: _enum2(["public", "private"]),
      resourceTemplates: array2(ResourceTemplateSchema$1),
      nextCursor: CursorSchema$1.optional()
    }),
    "resources/read": liftedResult({
      ttlMs: number5().int().min(0),
      cacheScope: _enum2(["public", "private"]),
      contents: array2(union2([TextResourceContentsSchema$1, BlobResourceContentsSchema$1]))
    }),
    "completion/complete": liftedResult({ completion: object2({
      values: array2(string5()).max(100),
      total: number5().int().optional(),
      hasMore: boolean5().optional()
    }).loose() }),
    "server/discover": liftedResult({
      ttlMs: number5().int().min(0).catch(0),
      cacheScope: _enum2(["public", "private"]).catch("private"),
      supportedVersions: array2(string5()),
      capabilities: ServerCapabilities2026Schema,
      instructions: string5().optional()
    }),
    "subscriptions/listen": liftedResult({})
  };
  const NotificationMetaSchema = looseObject2({ "io.modelcontextprotocol/subscriptionId": RequestIdSchema$1.optional() });
  const SubscriptionsAcknowledgedNotificationSchema$1 = object2({
    method: literal2("notifications/subscriptions/acknowledged"),
    params: object2({
      _meta: NotificationMetaSchema.optional(),
      notifications: SubscriptionFilterSchema$1
    })
  });
  const CancelledNotificationParamsSchema$1 = object2({
    _meta: NotificationMetaSchema.optional(),
    requestId: RequestIdSchema$1,
    reason: string5().optional()
  });
  const CancelledNotificationSchema$1 = object2({
    method: literal2("notifications/cancelled"),
    params: CancelledNotificationParamsSchema$1
  });
  const notificationSchemas2026 = {
    "notifications/cancelled": CancelledNotificationSchema$1,
    "notifications/progress": ProgressNotificationSchema$1,
    "notifications/message": LoggingMessageNotificationSchema$1,
    "notifications/resources/updated": ResourceUpdatedNotificationSchema$1,
    "notifications/resources/list_changed": ResourceListChangedNotificationSchema$1,
    "notifications/tools/list_changed": ToolListChangedNotificationSchema$1,
    "notifications/prompts/list_changed": PromptListChangedNotificationSchema$1,
    "notifications/subscriptions/acknowledged": SubscriptionsAcknowledgedNotificationSchema$1
  };
  const wireResultResponse = (result) => object2({
    jsonrpc: literal2("2.0"),
    id: union2([string5(), number5().int()]),
    result
  }).strict();
  return {
    JSONValueSchema: JSONValueSchema$1,
    JSONObjectSchema: JSONObjectSchema$1,
    ProgressTokenSchema: ProgressTokenSchema$1,
    CursorSchema: CursorSchema$1,
    RequestIdSchema: RequestIdSchema$1,
    RoleSchema: RoleSchema$1,
    LoggingLevelSchema: LoggingLevelSchema$1,
    TaskMetadataSchema: TaskMetadataSchema$1,
    RelatedTaskMetadataSchema: RelatedTaskMetadataSchema$1,
    RequestMetaSchema: RequestMetaSchema$1,
    BaseRequestParamsSchema: BaseRequestParamsSchema$1,
    TaskAugmentedRequestParamsSchema: TaskAugmentedRequestParamsSchema$1,
    NotificationsParamsSchema: NotificationsParamsSchema$1,
    NotificationSchema: NotificationSchema$1,
    IconSchema: IconSchema$1,
    IconsSchema: IconsSchema$1,
    BaseMetadataSchema: BaseMetadataSchema$1,
    ImplementationSchema: ImplementationSchema$1,
    ClientTasksCapabilitySchema: ClientTasksCapabilitySchema$1,
    ServerTasksCapabilitySchema: ServerTasksCapabilitySchema$1,
    ClientCapabilitiesSchema: ClientCapabilitiesSchema$1,
    ServerCapabilitiesSchema: ServerCapabilitiesSchema$1,
    ProgressSchema: ProgressSchema$1,
    ProgressNotificationParamsSchema: ProgressNotificationParamsSchema$1,
    ProgressNotificationSchema: ProgressNotificationSchema$1,
    LoggingMessageNotificationParamsSchema: LoggingMessageNotificationParamsSchema$1,
    LoggingMessageNotificationSchema: LoggingMessageNotificationSchema$1,
    ResourceContentsSchema: ResourceContentsSchema$1,
    TextResourceContentsSchema: TextResourceContentsSchema$1,
    BlobResourceContentsSchema: BlobResourceContentsSchema$1,
    AnnotationsSchema: AnnotationsSchema$1,
    ResourceSchema: ResourceSchema$1,
    ResourceTemplateSchema: ResourceTemplateSchema$1,
    ResourceListChangedNotificationSchema: ResourceListChangedNotificationSchema$1,
    ResourceUpdatedNotificationParamsSchema: ResourceUpdatedNotificationParamsSchema$1,
    ResourceUpdatedNotificationSchema: ResourceUpdatedNotificationSchema$1,
    PromptArgumentSchema: PromptArgumentSchema$1,
    PromptSchema: PromptSchema$1,
    PromptListChangedNotificationSchema: PromptListChangedNotificationSchema$1,
    TextContentSchema: TextContentSchema$1,
    ImageContentSchema: ImageContentSchema$1,
    AudioContentSchema: AudioContentSchema$1,
    ToolUseContentSchema: ToolUseContentSchema$1,
    EmbeddedResourceSchema: EmbeddedResourceSchema$1,
    ResourceLinkSchema: ResourceLinkSchema$1,
    ContentBlockSchema: ContentBlockSchema$1,
    PromptMessageSchema: PromptMessageSchema$1,
    ToolAnnotationsSchema: ToolAnnotationsSchema$1,
    ToolListChangedNotificationSchema: ToolListChangedNotificationSchema$1,
    ModelHintSchema: ModelHintSchema$1,
    ModelPreferencesSchema: ModelPreferencesSchema$1,
    ToolChoiceSchema: ToolChoiceSchema$1,
    BooleanSchemaSchema: BooleanSchemaSchema$1,
    StringSchemaSchema: StringSchemaSchema$1,
    NumberSchemaSchema: NumberSchemaSchema$1,
    UntitledSingleSelectEnumSchemaSchema: UntitledSingleSelectEnumSchemaSchema$1,
    TitledSingleSelectEnumSchemaSchema: TitledSingleSelectEnumSchemaSchema$1,
    LegacyTitledEnumSchemaSchema: LegacyTitledEnumSchemaSchema$1,
    SingleSelectEnumSchemaSchema: SingleSelectEnumSchemaSchema$1,
    UntitledMultiSelectEnumSchemaSchema: UntitledMultiSelectEnumSchemaSchema$1,
    TitledMultiSelectEnumSchemaSchema: TitledMultiSelectEnumSchemaSchema$1,
    MultiSelectEnumSchemaSchema: MultiSelectEnumSchemaSchema$1,
    EnumSchemaSchema: EnumSchemaSchema$1,
    PrimitiveSchemaDefinitionSchema: PrimitiveSchemaDefinitionSchema$1,
    ElicitRequestFormParamsSchema: ElicitRequestFormParamsSchema$1,
    ResourceTemplateReferenceSchema: ResourceTemplateReferenceSchema$1,
    PromptReferenceSchema: PromptReferenceSchema$1,
    RootSchema: RootSchema$1,
    ClientCapabilities2026Schema,
    ServerCapabilities2026Schema,
    RequestMetaEnvelopeSchema,
    ToolSchema: ToolSchema$1,
    ToolResultContentSchema: ToolResultContentSchema$1,
    SamplingMessageContentBlockSchema: SamplingMessageContentBlockSchema$1,
    SamplingMessageSchema: SamplingMessageSchema$1,
    ResultTypeSchema,
    ResultMetaSchema,
    ResultSchema: ResultSchema$1,
    PaginatedResultSchema: PaginatedResultSchema$1,
    CallToolResultSchema: CallToolResultSchema$1,
    ListToolsResultSchema: ListToolsResultSchema$1,
    ListPromptsResultSchema: ListPromptsResultSchema$1,
    GetPromptResultSchema: GetPromptResultSchema$1,
    ListResourcesResultSchema: ListResourcesResultSchema$1,
    ListResourceTemplatesResultSchema: ListResourceTemplatesResultSchema$1,
    ReadResourceResultSchema: ReadResourceResultSchema$1,
    CompleteResultSchema: CompleteResultSchema$1,
    CacheableResultSchema,
    DiscoverResultSchema: DiscoverResultSchema$1,
    CreateMessageRequestParamsSchema: CreateMessageRequestParamsSchema$1,
    CreateMessageRequestSchema: CreateMessageRequestSchema$1,
    ListRootsRequestSchema: ListRootsRequestSchema$1,
    CreateMessageResultSchema: CreateMessageResultSchema$1,
    ListRootsResultSchema: ListRootsResultSchema$1,
    ElicitResultSchema: ElicitResultSchema$1,
    ElicitRequestURLParamsSchema: ElicitRequestURLParamsSchema$1,
    ElicitRequestParamsSchema: ElicitRequestParamsSchema$1,
    ElicitRequestSchema: ElicitRequestSchema$1,
    InputRequestSchema,
    InputResponseSchema,
    InputRequestsSchema,
    InputResponsesSchema,
    InputRequiredResultSchema,
    InputResponseRequestParamsSchema,
    CallToolRequestSchema: CallToolRequestSchema$1,
    ListToolsRequestSchema: ListToolsRequestSchema$1,
    ListPromptsRequestSchema: ListPromptsRequestSchema$1,
    GetPromptRequestSchema: GetPromptRequestSchema$1,
    ListResourcesRequestSchema: ListResourcesRequestSchema$1,
    ListResourceTemplatesRequestSchema: ListResourceTemplatesRequestSchema$1,
    ReadResourceRequestSchema: ReadResourceRequestSchema$1,
    CompleteRequestSchema: CompleteRequestSchema$1,
    DiscoverRequestSchema: DiscoverRequestSchema$1,
    SubscriptionFilterSchema: SubscriptionFilterSchema$1,
    SubscriptionsListenRequestSchema: SubscriptionsListenRequestSchema$1,
    SubscriptionsListenResultMetaSchema: SubscriptionsListenResultMetaSchema$1,
    SubscriptionsListenResultSchema: SubscriptionsListenResultSchema$1,
    dispatchRequestSchemas,
    dispatchResultSchemas,
    NotificationMetaSchema,
    SubscriptionsAcknowledgedNotificationSchema: SubscriptionsAcknowledgedNotificationSchema$1,
    CancelledNotificationParamsSchema: CancelledNotificationParamsSchema$1,
    CancelledNotificationSchema: CancelledNotificationSchema$1,
    notificationSchemas2026,
    JSONRPCResultResponseSchema: wireResultResponse(ResultSchema$1),
    CallToolResultResponseSchema: wireResultResponse(union2([CallToolResultSchema$1, InputRequiredResultSchema])),
    ListToolsResultResponseSchema: wireResultResponse(ListToolsResultSchema$1),
    ListPromptsResultResponseSchema: wireResultResponse(ListPromptsResultSchema$1),
    GetPromptResultResponseSchema: wireResultResponse(union2([GetPromptResultSchema$1, InputRequiredResultSchema])),
    ListResourcesResultResponseSchema: wireResultResponse(ListResourcesResultSchema$1),
    ListResourceTemplatesResultResponseSchema: wireResultResponse(ListResourceTemplatesResultSchema$1),
    ReadResourceResultResponseSchema: wireResultResponse(union2([ReadResourceResultSchema$1, InputRequiredResultSchema])),
    CompleteResultResponseSchema: wireResultResponse(CompleteResultSchema$1),
    DiscoverResultResponseSchema: wireResultResponse(DiscoverResultSchema$1)
  };
}
var memo3;
function buildSchemas2026() {
  return memo3 ??= build();
}
var CACHEABLE_RESULT_METHODS = [
  "tools/list",
  "prompts/list",
  "resources/list",
  "resources/templates/list",
  "resources/read",
  "server/discover"
];
function isCacheableResultMethod(method) {
  return CACHEABLE_RESULT_METHODS.includes(method);
}
var RESULT_CACHE_HINT_FALLBACK = /* @__PURE__ */ Symbol("modelcontextprotocol.resultCacheHintFallback");
function attachCacheHintFallback(result, hint) {
  if (hint === void 0) return result;
  const attached = result[RESULT_CACHE_HINT_FALLBACK];
  if (attached === void 0) return {
    ...result,
    [RESULT_CACHE_HINT_FALLBACK]: hint
  };
  const merged = {};
  const ttlMs = attached.ttlMs ?? hint.ttlMs;
  if (ttlMs !== void 0) merged.ttlMs = ttlMs;
  const cacheScope = attached.cacheScope ?? hint.cacheScope;
  if (cacheScope !== void 0) merged.cacheScope = cacheScope;
  return {
    ...result,
    [RESULT_CACHE_HINT_FALLBACK]: merged
  };
}
function cacheHintFallbackOf(result) {
  return result[RESULT_CACHE_HINT_FALLBACK];
}
function isValidCacheTtlMs(value) {
  return typeof value === "number" && Number.isSafeInteger(value) && value >= 0;
}
function isValidCacheScope(value) {
  return value === "public" || value === "private";
}
function assertValidCacheHint(hint, context) {
  if (hint.ttlMs !== void 0 && !isValidCacheTtlMs(hint.ttlMs)) throw new RangeError(`Invalid cache hint for ${context}: ttlMs must be a non-negative safe integer (got ${String(hint.ttlMs)})`);
  if (hint.cacheScope !== void 0 && !isValidCacheScope(hint.cacheScope)) throw new RangeError(`Invalid cache hint for ${context}: cacheScope must be 'public' or 'private' (got ${String(hint.cacheScope)})`);
}
var ProtocolErrorCode = /* @__PURE__ */ (function(ProtocolErrorCode$1) {
  ProtocolErrorCode$1[ProtocolErrorCode$1["ParseError"] = -32700] = "ParseError";
  ProtocolErrorCode$1[ProtocolErrorCode$1["InvalidRequest"] = -32600] = "InvalidRequest";
  ProtocolErrorCode$1[ProtocolErrorCode$1["MethodNotFound"] = -32601] = "MethodNotFound";
  ProtocolErrorCode$1[ProtocolErrorCode$1["InvalidParams"] = -32602] = "InvalidParams";
  ProtocolErrorCode$1[ProtocolErrorCode$1["InternalError"] = -32603] = "InternalError";
  ProtocolErrorCode$1[ProtocolErrorCode$1["ResourceNotFound"] = -32002] = "ResourceNotFound";
  ProtocolErrorCode$1[ProtocolErrorCode$1["MissingRequiredClientCapability"] = -32021] = "MissingRequiredClientCapability";
  ProtocolErrorCode$1[ProtocolErrorCode$1["UnsupportedProtocolVersion"] = -32022] = "UnsupportedProtocolVersion";
  ProtocolErrorCode$1[ProtocolErrorCode$1["UrlElicitationRequired"] = -32042] = "UrlElicitationRequired";
  return ProtocolErrorCode$1;
})({});
var ProtocolError = class ProtocolError2 extends Error {
  static {
    Object.defineProperty(this, "mcpBrand", { value: "mcp.ProtocolError" });
  }
  static [Symbol.hasInstance](value) {
    return brandedHasInstance(this, value);
  }
  /**
  * Brand-based type guard: equivalent to `value instanceof this`, as an
  * explicit static predicate (the axios/AWS-SDK `isInstance` style). Reads
  * the caller's own brand via `this`, so every branded subclass gets a
  * correctly-scoped guard by inheritance. Must be invoked on the class —
  * in callback position write `v => SdkError.isInstance(v)`, not
  * `.filter(SdkError.isInstance)` (detached calls throw rather than
  * silently matching nothing).
  */
  static isInstance(value) {
    if (typeof this !== "function") throw new TypeError("isInstance must be called on the class (e.g. `SdkError.isInstance(value)`); for callbacks use `v => SdkError.isInstance(v)`");
    return brandedHasInstance(this, value);
  }
  constructor(code, message, data) {
    super(message);
    this.code = code;
    this.data = data;
    this.name = "ProtocolError";
    stampErrorBrands(this, new.target);
  }
  /**
  * Factory method to create the appropriate error type based on the error code and data
  */
  static fromError(code, message, data) {
    if (code === ProtocolErrorCode.UrlElicitationRequired && data) {
      const errorData = data;
      if (errorData.elicitations) return new UrlElicitationRequiredError(errorData.elicitations, message);
    }
    if (code === ProtocolErrorCode.UnsupportedProtocolVersion && data) {
      const errorData = data;
      if (Array.isArray(errorData.supported) && typeof errorData.requested === "string") return new UnsupportedProtocolVersionError({
        supported: errorData.supported,
        requested: errorData.requested
      }, message);
    }
    if (code === ProtocolErrorCode.InvalidParams || code === ProtocolErrorCode.ResourceNotFound) {
      const errorData = data;
      if (typeof errorData?.uri === "string" && (code === ProtocolErrorCode.ResourceNotFound || Object.keys(errorData).length === 1)) return new ResourceNotFoundError(errorData.uri, message);
    }
    if (code === ProtocolErrorCode.MissingRequiredClientCapability && data) {
      const errorData = data;
      if (errorData.requiredCapabilities !== null && typeof errorData.requiredCapabilities === "object" && !Array.isArray(errorData.requiredCapabilities)) return new MissingRequiredClientCapabilityError({ requiredCapabilities: errorData.requiredCapabilities }, message);
    }
    return new ProtocolError2(code, message, data);
  }
};
var ResourceNotFoundError = class extends ProtocolError {
  static {
    Object.defineProperty(this, "mcpBrand", { value: "mcp.ResourceNotFoundError" });
  }
  constructor(uri2, message = `Resource not found: ${uri2}`) {
    super(ProtocolErrorCode.InvalidParams, message, { uri: uri2 });
  }
  /** The URI that was requested and not found. */
  get uri() {
    return this.data.uri;
  }
};
var UrlElicitationRequiredError = class extends ProtocolError {
  static {
    Object.defineProperty(this, "mcpBrand", { value: "mcp.UrlElicitationRequiredError" });
  }
  constructor(elicitations, message = `URL elicitation${elicitations.length > 1 ? "s" : ""} required`) {
    super(ProtocolErrorCode.UrlElicitationRequired, message, { elicitations });
  }
  get elicitations() {
    return this.data?.elicitations ?? [];
  }
};
var UnsupportedProtocolVersionError = class extends ProtocolError {
  static {
    Object.defineProperty(this, "mcpBrand", { value: "mcp.UnsupportedProtocolVersionError" });
  }
  constructor(data, message = `Unsupported protocol version: ${data.requested}`) {
    super(ProtocolErrorCode.UnsupportedProtocolVersion, message, data);
  }
  /**
  * Protocol versions the receiver supports.
  */
  get supported() {
    return this.data.supported;
  }
  /**
  * The protocol version that was requested.
  */
  get requested() {
    return this.data.requested;
  }
};
var MissingRequiredClientCapabilityError = class extends ProtocolError {
  static {
    Object.defineProperty(this, "mcpBrand", { value: "mcp.MissingRequiredClientCapabilityError" });
  }
  constructor(data, message = `Missing required client capabilities: ${Object.keys(data.requiredCapabilities).join(", ")}`) {
    super(ProtocolErrorCode.MissingRequiredClientCapability, message, data);
  }
  /**
  * The capabilities the server requires from the client to process the
  * request (only the missing capabilities are listed).
  */
  get requiredCapabilities() {
    return this.data.requiredCapabilities;
  }
};
var DEFAULT_CACHE_TTL_MS = 0;
var DEFAULT_CACHE_SCOPE = "private";
var EXTENDED_RESULT_TYPE_METHODS = [
  "tools/call",
  "prompts/get",
  "resources/read"
];
function stampResultType(method, result) {
  const provided = result["resultType"];
  if (provided === void 0) return {
    ...result,
    resultType: "complete"
  };
  if (provided === "complete") return result;
  if (EXTENDED_RESULT_TYPE_METHODS.includes(method)) return result;
  throw new ProtocolError(ProtocolErrorCode.InternalError, `Handler for ${method} returned resultType '${String(provided)}', but results of ${method} only support 'complete' on protocol revision 2026-07-28`);
}
function fillCacheFields(method, result) {
  const fallback = cacheHintFallbackOf(result);
  if (result["resultType"] !== "complete" || !isCacheableResultMethod(method)) return fallback === void 0 ? result : stripCacheHintFallback(result);
  const provided = result;
  const ttlMs = isValidCacheTtlMs(provided["ttlMs"]) ? provided["ttlMs"] : resolveTtlMs(fallback);
  const cacheScope = isValidCacheScope(provided["cacheScope"]) ? provided["cacheScope"] : resolveCacheScope(fallback);
  const filled = {
    ...provided,
    ttlMs,
    cacheScope
  };
  delete filled[RESULT_CACHE_HINT_FALLBACK];
  return filled;
}
function isPlainObject$5(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}
function stampServerInfoMeta(result, serverInfo) {
  if (serverInfo === void 0) return result;
  const meta3 = result["_meta"];
  if (meta3 === void 0) return {
    ...result,
    _meta: { [SERVER_INFO_META_KEY]: serverInfo }
  };
  if (!isPlainObject$5(meta3)) return result;
  if (meta3[SERVER_INFO_META_KEY] !== void 0) return result;
  return {
    ...result,
    _meta: {
      ...meta3,
      [SERVER_INFO_META_KEY]: serverInfo
    }
  };
}
function resolveTtlMs(fallback) {
  return fallback !== void 0 && isValidCacheTtlMs(fallback.ttlMs) ? fallback.ttlMs : DEFAULT_CACHE_TTL_MS;
}
function resolveCacheScope(fallback) {
  return fallback !== void 0 && isValidCacheScope(fallback.cacheScope) ? fallback.cacheScope : DEFAULT_CACHE_SCOPE;
}
function stripCacheHintFallback(result) {
  const copy = { ...result };
  delete copy[RESULT_CACHE_HINT_FALLBACK];
  return copy;
}
var INPUT_REQUEST_METHODS_2026 = [
  "elicitation/create",
  "sampling/createMessage",
  "roots/list"
];
var maps;
function inputSchemaMaps() {
  if (maps) return maps;
  const s = buildSchemas2026();
  maps = {
    request: {
      "elicitation/create": object2({
        method: literal2("elicitation/create"),
        params: s.ElicitRequestParamsSchema
      }),
      "sampling/createMessage": object2({
        method: literal2("sampling/createMessage"),
        params: s.CreateMessageRequestParamsSchema
      }),
      "roots/list": object2({
        method: literal2("roots/list"),
        params: looseObject2({}).optional()
      })
    },
    response: {
      "elicitation/create": s.ElicitResultSchema,
      "sampling/createMessage": s.CreateMessageResultSchema,
      "roots/list": s.ListRootsResultSchema
    }
  };
  return maps;
}
function isInputRequestMethod2026(method) {
  return INPUT_REQUEST_METHODS_2026.includes(method);
}
function getInputRequestSchema2026(method) {
  return isInputRequestMethod2026(method) ? inputSchemaMaps().request[method] : void 0;
}
function getInputResponseSchema2026(method) {
  return isInputRequestMethod2026(method) ? inputSchemaMaps().response[method] : void 0;
}
var requestMethodKeys = {
  "tools/call": null,
  "tools/list": null,
  "prompts/get": null,
  "prompts/list": null,
  "resources/list": null,
  "resources/templates/list": null,
  "resources/read": null,
  "completion/complete": null,
  "server/discover": null,
  "subscriptions/listen": null
};
var notificationMethodKeys = {
  "notifications/cancelled": null,
  "notifications/progress": null,
  "notifications/message": null,
  "notifications/resources/updated": null,
  "notifications/resources/list_changed": null,
  "notifications/tools/list_changed": null,
  "notifications/prompts/list_changed": null,
  "notifications/subscriptions/acknowledged": null
};
function hasRequestMethod2026(method) {
  return Object.prototype.hasOwnProperty.call(requestMethodKeys, method);
}
function hasNotificationMethod2026(method) {
  return Object.prototype.hasOwnProperty.call(notificationMethodKeys, method);
}
function hasResultMethod2026(method) {
  return Object.prototype.hasOwnProperty.call(requestMethodKeys, method);
}
function getRequestSchema2026(method) {
  return hasRequestMethod2026(method) ? buildSchemas2026().dispatchRequestSchemas[method] : void 0;
}
function getResultSchema2026(method) {
  return hasResultMethod2026(method) ? buildSchemas2026().dispatchResultSchemas[method] : void 0;
}
function getNotificationSchema2026(method) {
  return hasNotificationMethod2026(method) ? buildSchemas2026().notificationSchemas2026[method] : void 0;
}
var rev2026RequestMethods = Object.keys(requestMethodKeys);
var rev2026NotificationMethods = Object.keys(notificationMethodKeys);
function isPlainObject$4(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}
function triState(schema, raw) {
  if (schema === void 0) return {
    ok: false,
    reason: "not-in-era"
  };
  const parsed = schema.safeParse(raw);
  return parsed.success ? {
    ok: true,
    value: parsed.data
  } : {
    ok: false,
    reason: "invalid",
    message: String(parsed.error)
  };
}
var NOT_IN_ERA = {
  ok: false,
  reason: "not-in-era"
};
var REQUIRED_ENVELOPE_KEYS = [PROTOCOL_VERSION_META_KEY, CLIENT_CAPABILITIES_META_KEY];
function enforceDeletedFields(method, result) {
  let next = result;
  let copied = false;
  const copy = () => {
    if (!copied) {
      next = { ...next };
      copied = true;
    }
    return next;
  };
  const tools = result.tools;
  if (method === "tools/list" && Array.isArray(tools) && tools.some((tool) => isPlainObject$4(tool) && "execution" in tool)) copy().tools = tools.map((tool) => {
    if (!isPlainObject$4(tool) || !("execution" in tool)) return tool;
    const rest = { ...tool };
    delete rest["execution"];
    return rest;
  });
  const capabilities = result.capabilities;
  if (isPlainObject$4(capabilities) && "tasks" in capabilities) {
    const rest = { ...capabilities };
    delete rest["tasks"];
    copy().capabilities = rest;
  }
  return next;
}
var rev2026Codec = {
  era: "2026-07-28",
  hasRequestMethod: hasRequestMethod2026,
  hasNotificationMethod: hasNotificationMethod2026,
  hasInputRequestMethod: (method) => getInputRequestSchema2026(method) !== void 0,
  validateRequest: (method, raw) => triState(getRequestSchema2026(method), raw),
  validateResult: (method, raw) => triState(getResultSchema2026(method), raw),
  validateNotification: (method, raw) => triState(getNotificationSchema2026(method), raw),
  validateInputRequest: (method, raw) => triState(getInputRequestSchema2026(method), raw),
  validateInputResponse: (method, raw) => triState(getInputResponseSchema2026(method), raw),
  samplingResultVariant: () => NOT_IN_ERA,
  outboundEnvelope(material) {
    return {
      [PROTOCOL_VERSION_META_KEY]: material.protocolVersion,
      [CLIENT_INFO_META_KEY]: material.clientInfo,
      [CLIENT_CAPABILITIES_META_KEY]: material.clientCapabilities,
      ...material.logLevel !== void 0 && { [LOG_LEVEL_META_KEY]: material.logLevel }
    };
  },
  validateEnvelopeMeta(meta3) {
    const issues = [];
    for (const key of REQUIRED_ENVELOPE_KEYS) if (!(key in meta3)) issues.push({
      key,
      problem: "missing"
    });
    const parsed = buildSchemas2026().RequestMetaEnvelopeSchema.safeParse(meta3);
    if (!parsed.success) for (const issue4 of parsed.error.issues) {
      const path = issue4.path.map(String);
      const key = path.length > 0 ? path.join(".") : "_meta";
      if (path.length === 1 && issues.some((existing) => existing.key === key && existing.problem === "missing")) continue;
      issues.push({
        key,
        problem: issue4.message
      });
    }
    return issues;
  },
  projectCallToolResult: (result) => appendTextFallbackForNonObject(result),
  inputRequestSchema: getInputRequestSchema2026,
  decodeResult(method, raw) {
    if (!isPlainObject$4(raw)) return {
      kind: "invalid",
      error: new SdkError(SdkErrorCode.InvalidResult, `Invalid result for ${method}: not an object`, { method })
    };
    const rawResultType = raw["resultType"];
    if (rawResultType === void 0) return {
      kind: "invalid",
      error: new SdkError(SdkErrorCode.InvalidResult, `Invalid result for ${method}: missing required resultType \u2014 servers implementing protocol revision 2026-07-28 MUST include it (the absent-means-complete bridge applies only to earlier-revision servers)`, {
        method,
        violation: "missing-resultType"
      })
    };
    if (typeof rawResultType !== "string") return {
      kind: "invalid",
      error: new SdkError(SdkErrorCode.InvalidResult, `Invalid result for ${method}: non-string resultType`, {
        method,
        resultType: rawResultType
      })
    };
    if (rawResultType === "input_required") {
      const rawInputRequests = raw["inputRequests"];
      const inputRequests = isPlainObject$4(rawInputRequests) ? rawInputRequests : {};
      const requestState = raw["requestState"];
      if (Object.keys(inputRequests).length === 0 && typeof requestState !== "string") return {
        kind: "invalid",
        error: new SdkError(SdkErrorCode.InvalidResult, `Invalid result for ${method}: input_required carries neither inputRequests nor requestState (every input_required result must include at least one of the two)`, {
          method,
          violation: "input-required-missing-both"
        })
      };
      return {
        kind: "input_required",
        inputRequests,
        ...typeof requestState === "string" && { requestState }
      };
    }
    if (rawResultType !== "complete") return {
      kind: "invalid",
      error: new SdkError(SdkErrorCode.UnsupportedResultType, `Unsupported result type '${rawResultType}' for ${method}`, {
        resultType: rawResultType,
        method
      })
    };
    const wireResultSchemas = getWireResultSchemas();
    const wireSchema = Object.hasOwn(wireResultSchemas, method) ? wireResultSchemas[method] : void 0;
    if (wireSchema !== void 0) {
      const parsed = wireSchema.safeParse(raw);
      if (!parsed.success) return {
        kind: "invalid",
        error: new SdkError(SdkErrorCode.InvalidResult, `Invalid result for ${method}: ${parsed.error}`, { method })
      };
    }
    const lifted = { ...raw };
    delete lifted["resultType"];
    return {
      kind: "complete",
      result: lifted
    };
  },
  encodeResult(method, result, serverInfo) {
    return stampServerInfoMeta(fillCacheFields(method, stampResultType(method, enforceDeletedFields(method, result))), serverInfo);
  },
  encodeErrorCode: (code) => code === -32002 ? -32602 : code,
  checkInboundEnvelope(material) {
    if (material.envelope === void 0) return "Request is missing the required _meta envelope for protocol revision 2026-07-28 (io.modelcontextprotocol/protocolVersion, io.modelcontextprotocol/clientCapabilities)";
    const parsed = buildSchemas2026().RequestMetaEnvelopeSchema.safeParse(material.envelope);
    if (!parsed.success) return `Invalid _meta envelope for protocol revision 2026-07-28: ${parsed.error.issues.map((issue4) => issue4.message).join("; ")}`;
  }
};
var wireResultSchemasMemo;
function getWireResultSchemas() {
  if (wireResultSchemasMemo) return wireResultSchemasMemo;
  const s = buildSchemas2026();
  wireResultSchemasMemo = {
    "tools/call": s.CallToolResultSchema,
    "tools/list": s.ListToolsResultSchema,
    "prompts/get": s.GetPromptResultSchema,
    "prompts/list": s.ListPromptsResultSchema,
    "resources/list": s.ListResourcesResultSchema,
    "resources/templates/list": s.ListResourceTemplatesResultSchema,
    "resources/read": s.ReadResourceResultSchema,
    "completion/complete": s.CompleteResultSchema,
    "server/discover": s.DiscoverResultSchema
  };
  return wireResultSchemasMemo;
}
var MODERN_WIRE_REVISION = "2026-07-28";
function codecForVersion(version4) {
  return version4 !== void 0 && isModernProtocolVersion(version4) ? rev2026Codec : rev2025Codec;
}
function classifiedWireEra(classification) {
  if (classification.revision !== void 0) return codecForVersion(classification.revision).era;
  return classification.era === "modern" ? rev2026Codec.era : rev2025Codec.era;
}
function isSpecRequestMethod(method) {
  return ALL_CODECS.some((codec) => codec.hasRequestMethod(method));
}
function isSpecNotificationMethod(method) {
  return ALL_CODECS.some((codec) => codec.hasNotificationMethod(method));
}
var ALL_CODECS = [rev2025Codec, rev2026Codec];
function isPlainObject$3(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}
function requestMetaOf(params) {
  if (!isPlainObject$3(params)) return void 0;
  const meta3 = params["_meta"];
  return isPlainObject$3(meta3) ? meta3 : void 0;
}
function hasEnvelopeClaim(params) {
  const meta3 = requestMetaOf(params);
  return meta3 !== void 0 && PROTOCOL_VERSION_META_KEY in meta3;
}
function envelopeClaimVersion(params) {
  const value = requestMetaOf(params)?.[PROTOCOL_VERSION_META_KEY];
  return typeof value === "string" ? value : void 0;
}
function validateEnvelopeMeta(meta3) {
  return codecForVersion(MODERN_WIRE_REVISION).validateEnvelopeMeta(meta3);
}
var schemas_exports2 = /* @__PURE__ */ __exportAll({
  AnnotationsSchema: () => AnnotationsSchema,
  AudioContentSchema: () => AudioContentSchema,
  BaseMetadataSchema: () => BaseMetadataSchema,
  BaseRequestParamsSchema: () => BaseRequestParamsSchema,
  BlobResourceContentsSchema: () => BlobResourceContentsSchema,
  BooleanSchemaSchema: () => BooleanSchemaSchema,
  CallToolRequestParamsSchema: () => CallToolRequestParamsSchema,
  CallToolRequestSchema: () => CallToolRequestSchema,
  CallToolResultSchema: () => CallToolResultSchema,
  CancelTaskRequestSchema: () => CancelTaskRequestSchema,
  CancelTaskResultSchema: () => CancelTaskResultSchema,
  CancelledNotificationParamsSchema: () => CancelledNotificationParamsSchema,
  CancelledNotificationSchema: () => CancelledNotificationSchema,
  ClientCapabilitiesSchema: () => ClientCapabilitiesSchema,
  ClientNotificationSchema: () => ClientNotificationSchema,
  ClientRequestSchema: () => ClientRequestSchema,
  ClientResultSchema: () => ClientResultSchema,
  ClientTasksCapabilitySchema: () => ClientTasksCapabilitySchema,
  CompatibilityCallToolResultSchema: () => CompatibilityCallToolResultSchema,
  CompleteRequestParamsSchema: () => CompleteRequestParamsSchema,
  CompleteRequestSchema: () => CompleteRequestSchema,
  CompleteResultSchema: () => CompleteResultSchema,
  ContentBlockSchema: () => ContentBlockSchema,
  CreateMessageRequestParamsSchema: () => CreateMessageRequestParamsSchema,
  CreateMessageRequestSchema: () => CreateMessageRequestSchema,
  CreateMessageResultSchema: () => CreateMessageResultSchema,
  CreateMessageResultWithToolsSchema: () => CreateMessageResultWithToolsSchema,
  CreateTaskResultSchema: () => CreateTaskResultSchema,
  CursorSchema: () => CursorSchema,
  DiscoverRequestSchema: () => DiscoverRequestSchema,
  DiscoverResultSchema: () => DiscoverResultSchema,
  ElicitRequestFormParamsSchema: () => ElicitRequestFormParamsSchema,
  ElicitRequestParamsSchema: () => ElicitRequestParamsSchema,
  ElicitRequestSchema: () => ElicitRequestSchema,
  ElicitRequestURLParamsSchema: () => ElicitRequestURLParamsSchema,
  ElicitResultSchema: () => ElicitResultSchema,
  ElicitationCompleteNotificationParamsSchema: () => ElicitationCompleteNotificationParamsSchema,
  ElicitationCompleteNotificationSchema: () => ElicitationCompleteNotificationSchema,
  EmbeddedResourceSchema: () => EmbeddedResourceSchema,
  EmptyResultSchema: () => EmptyResultSchema,
  EnumSchemaSchema: () => EnumSchemaSchema,
  GetPromptRequestParamsSchema: () => GetPromptRequestParamsSchema,
  GetPromptRequestSchema: () => GetPromptRequestSchema,
  GetPromptResultSchema: () => GetPromptResultSchema,
  GetTaskPayloadRequestSchema: () => GetTaskPayloadRequestSchema,
  GetTaskPayloadResultSchema: () => GetTaskPayloadResultSchema,
  GetTaskRequestSchema: () => GetTaskRequestSchema,
  GetTaskResultSchema: () => GetTaskResultSchema,
  IconSchema: () => IconSchema,
  IconsSchema: () => IconsSchema,
  ImageContentSchema: () => ImageContentSchema,
  ImplementationSchema: () => ImplementationSchema,
  InitializeRequestParamsSchema: () => InitializeRequestParamsSchema,
  InitializeRequestSchema: () => InitializeRequestSchema,
  InitializeResultSchema: () => InitializeResultSchema,
  InitializedNotificationSchema: () => InitializedNotificationSchema,
  JSONArraySchema: () => JSONArraySchema,
  JSONObjectSchema: () => JSONObjectSchema,
  JSONRPCErrorResponseSchema: () => JSONRPCErrorResponseSchema,
  JSONRPCMessageSchema: () => JSONRPCMessageSchema,
  JSONRPCNotificationSchema: () => JSONRPCNotificationSchema,
  JSONRPCRequestSchema: () => JSONRPCRequestSchema,
  JSONRPCResponseSchema: () => JSONRPCResponseSchema,
  JSONRPCResultResponseSchema: () => JSONRPCResultResponseSchema,
  JSONValueSchema: () => JSONValueSchema,
  LegacyTitledEnumSchemaSchema: () => LegacyTitledEnumSchemaSchema,
  ListChangedOptionsBaseSchema: () => ListChangedOptionsBaseSchema,
  ListPromptsRequestSchema: () => ListPromptsRequestSchema,
  ListPromptsResultSchema: () => ListPromptsResultSchema,
  ListResourceTemplatesRequestSchema: () => ListResourceTemplatesRequestSchema,
  ListResourceTemplatesResultSchema: () => ListResourceTemplatesResultSchema,
  ListResourcesRequestSchema: () => ListResourcesRequestSchema,
  ListResourcesResultSchema: () => ListResourcesResultSchema,
  ListRootsRequestSchema: () => ListRootsRequestSchema,
  ListRootsResultSchema: () => ListRootsResultSchema,
  ListTasksRequestSchema: () => ListTasksRequestSchema,
  ListTasksResultSchema: () => ListTasksResultSchema,
  ListToolsRequestSchema: () => ListToolsRequestSchema,
  ListToolsResultSchema: () => ListToolsResultSchema,
  LoggingLevelSchema: () => LoggingLevelSchema,
  LoggingMessageNotificationParamsSchema: () => LoggingMessageNotificationParamsSchema,
  LoggingMessageNotificationSchema: () => LoggingMessageNotificationSchema,
  ModelHintSchema: () => ModelHintSchema,
  ModelPreferencesSchema: () => ModelPreferencesSchema,
  MultiSelectEnumSchemaSchema: () => MultiSelectEnumSchemaSchema,
  NotificationSchema: () => NotificationSchema,
  NotificationsParamsSchema: () => NotificationsParamsSchema,
  NumberSchemaSchema: () => NumberSchemaSchema,
  PaginatedRequestParamsSchema: () => PaginatedRequestParamsSchema,
  PaginatedRequestSchema: () => PaginatedRequestSchema,
  PaginatedResultSchema: () => PaginatedResultSchema,
  PingRequestSchema: () => PingRequestSchema,
  PrimitiveSchemaDefinitionSchema: () => PrimitiveSchemaDefinitionSchema,
  ProgressNotificationParamsSchema: () => ProgressNotificationParamsSchema,
  ProgressNotificationSchema: () => ProgressNotificationSchema,
  ProgressSchema: () => ProgressSchema,
  ProgressTokenSchema: () => ProgressTokenSchema,
  PromptArgumentSchema: () => PromptArgumentSchema,
  PromptListChangedNotificationSchema: () => PromptListChangedNotificationSchema,
  PromptMessageSchema: () => PromptMessageSchema,
  PromptReferenceSchema: () => PromptReferenceSchema,
  PromptSchema: () => PromptSchema,
  ReadResourceRequestParamsSchema: () => ReadResourceRequestParamsSchema,
  ReadResourceRequestSchema: () => ReadResourceRequestSchema,
  ReadResourceResultSchema: () => ReadResourceResultSchema,
  RelatedTaskMetadataSchema: () => RelatedTaskMetadataSchema,
  RequestIdSchema: () => RequestIdSchema,
  RequestMetaSchema: () => RequestMetaSchema,
  RequestSchema: () => RequestSchema,
  ResourceContentsSchema: () => ResourceContentsSchema,
  ResourceLinkSchema: () => ResourceLinkSchema,
  ResourceListChangedNotificationSchema: () => ResourceListChangedNotificationSchema,
  ResourceRequestParamsSchema: () => ResourceRequestParamsSchema,
  ResourceSchema: () => ResourceSchema,
  ResourceTemplateReferenceSchema: () => ResourceTemplateReferenceSchema,
  ResourceTemplateSchema: () => ResourceTemplateSchema,
  ResourceUpdatedNotificationParamsSchema: () => ResourceUpdatedNotificationParamsSchema,
  ResourceUpdatedNotificationSchema: () => ResourceUpdatedNotificationSchema,
  ResultMetaObjectSchema: () => ResultMetaObjectSchema,
  ResultSchema: () => ResultSchema,
  RoleSchema: () => RoleSchema,
  RootSchema: () => RootSchema,
  RootsListChangedNotificationSchema: () => RootsListChangedNotificationSchema,
  SamplingContentSchema: () => SamplingContentSchema,
  SamplingMessageContentBlockSchema: () => SamplingMessageContentBlockSchema,
  SamplingMessageSchema: () => SamplingMessageSchema,
  ServerCapabilitiesSchema: () => ServerCapabilitiesSchema,
  ServerNotificationSchema: () => ServerNotificationSchema,
  ServerRequestSchema: () => ServerRequestSchema,
  ServerResultSchema: () => ServerResultSchema,
  ServerTasksCapabilitySchema: () => ServerTasksCapabilitySchema,
  SetLevelRequestParamsSchema: () => SetLevelRequestParamsSchema,
  SetLevelRequestSchema: () => SetLevelRequestSchema,
  SingleSelectEnumSchemaSchema: () => SingleSelectEnumSchemaSchema,
  StringSchemaSchema: () => StringSchemaSchema,
  SubscribeRequestParamsSchema: () => SubscribeRequestParamsSchema,
  SubscribeRequestSchema: () => SubscribeRequestSchema,
  SubscriptionFilterSchema: () => SubscriptionFilterSchema,
  SubscriptionsAcknowledgedNotificationParamsSchema: () => SubscriptionsAcknowledgedNotificationParamsSchema,
  SubscriptionsAcknowledgedNotificationSchema: () => SubscriptionsAcknowledgedNotificationSchema,
  SubscriptionsListenRequestParamsSchema: () => SubscriptionsListenRequestParamsSchema,
  SubscriptionsListenRequestSchema: () => SubscriptionsListenRequestSchema,
  SubscriptionsListenResultMetaSchema: () => SubscriptionsListenResultMetaSchema,
  SubscriptionsListenResultSchema: () => SubscriptionsListenResultSchema,
  TaskAugmentedRequestParamsSchema: () => TaskAugmentedRequestParamsSchema,
  TaskCreationParamsSchema: () => TaskCreationParamsSchema,
  TaskMetadataSchema: () => TaskMetadataSchema,
  TaskSchema: () => TaskSchema,
  TaskStatusNotificationParamsSchema: () => TaskStatusNotificationParamsSchema,
  TaskStatusNotificationSchema: () => TaskStatusNotificationSchema,
  TaskStatusSchema: () => TaskStatusSchema,
  TextContentSchema: () => TextContentSchema,
  TextResourceContentsSchema: () => TextResourceContentsSchema,
  TitledMultiSelectEnumSchemaSchema: () => TitledMultiSelectEnumSchemaSchema,
  TitledSingleSelectEnumSchemaSchema: () => TitledSingleSelectEnumSchemaSchema,
  ToolAnnotationsSchema: () => ToolAnnotationsSchema,
  ToolChoiceSchema: () => ToolChoiceSchema,
  ToolExecutionSchema: () => ToolExecutionSchema,
  ToolListChangedNotificationSchema: () => ToolListChangedNotificationSchema,
  ToolResultContentSchema: () => ToolResultContentSchema,
  ToolSchema: () => ToolSchema,
  ToolUseContentSchema: () => ToolUseContentSchema,
  UnsubscribeRequestParamsSchema: () => UnsubscribeRequestParamsSchema,
  UnsubscribeRequestSchema: () => UnsubscribeRequestSchema,
  UntitledMultiSelectEnumSchemaSchema: () => UntitledMultiSelectEnumSchemaSchema,
  UntitledSingleSelectEnumSchemaSchema: () => UntitledSingleSelectEnumSchemaSchema
});
var isJSONRPCRequest = (value) => JSONRPCRequestSchema.safeParse(value).success;
var isJSONRPCNotification = (value) => JSONRPCNotificationSchema.safeParse(value).success;
var isJSONRPCResultResponse = (value) => JSONRPCResultResponseSchema.safeParse(value).success;
var isJSONRPCErrorResponse = (value) => JSONRPCErrorResponseSchema.safeParse(value).success;
var isInputRequiredResult = (value) => typeof value === "object" && value !== null && !Array.isArray(value) && value.resultType === "input_required";
var isInitializeRequest = (value) => InitializeRequestSchema.safeParse(value).success;
function assertCompleteRequestPrompt(request) {
  if (request.params.ref.type !== "ref/prompt") throw new TypeError(`Expected CompleteRequestPrompt, but got ${request.params.ref.type}`);
}
function assertCompleteRequestResourceTemplate(request) {
  if (request.params.ref.type !== "ref/resource") throw new TypeError(`Expected CompleteRequestResourceTemplate, but got ${request.params.ref.type}`);
}
var MCP_PARAM_HEADER_PREFIX = "Mcp-Param-";
var X_MCP_HEADER_KEY = "x-mcp-header";
var RFC9110_TOKEN = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;
var PERMITTED_X_MCP_HEADER_TYPES = /* @__PURE__ */ new Set([
  "string",
  "integer",
  "boolean",
  "number"
]);
function scanXMcpHeaderDeclarations(inputSchema) {
  const declarations = [];
  const seenLower = /* @__PURE__ */ new Map();
  const visit = (node3, path, reachable) => {
    if (node3 === null || typeof node3 !== "object") return void 0;
    const schema = node3;
    if (X_MCP_HEADER_KEY in schema) {
      if (!reachable || path.length === 0) return `${pathName(path)}: x-mcp-header is only permitted on properties statically reachable via a chain of 'properties' keys (not under items, additionalProperties, oneOf/anyOf/allOf/not, if/then/else, or $ref)`;
      const raw = schema[X_MCP_HEADER_KEY];
      if (typeof raw !== "string" || raw.length === 0) return `${pathName(path)}: x-mcp-header MUST be a non-empty string`;
      if (!RFC9110_TOKEN.test(raw)) return `${pathName(path)}: x-mcp-header '${raw}' is not a valid RFC 9110 token (no spaces, control characters or HTTP delimiters)`;
      const type = typeof schema.type === "string" ? schema.type : void 0;
      if (type === void 0 || !PERMITTED_X_MCP_HEADER_TYPES.has(type)) return `${pathName(path)}: x-mcp-header is only permitted on primitive-typed properties (string, integer, boolean); got ${type ?? "<none>"}`;
      const lower = raw.toLowerCase();
      const prior = seenLower.get(lower);
      if (prior !== void 0) return `x-mcp-header '${raw}' is not case-insensitively unique (also declared as '${prior}')`;
      seenLower.set(lower, raw);
      declarations.push({
        path,
        headerName: raw,
        type
      });
    }
    const properties = schema.properties;
    if (properties !== null && typeof properties === "object") for (const [key, child] of Object.entries(properties)) {
      const fault$1 = visit(child, [...path, key], reachable);
      if (fault$1 !== void 0) return fault$1;
    }
    for (const k of NON_REACHABLE_SUBSCHEMA_KEYWORDS) {
      const sub = schema[k];
      if (sub === void 0) continue;
      const branches = Array.isArray(sub) ? sub : sub !== null && typeof sub === "object" && OBJECT_VALUED_SUBSCHEMA_KEYWORDS.has(k) ? Object.values(sub) : [sub];
      for (const branch of branches) {
        const fault$1 = visit(branch, [...path, `<${k}>`], false);
        if (fault$1 !== void 0) return fault$1;
      }
    }
  };
  const fault = visit(inputSchema, [], true);
  return fault === void 0 ? {
    valid: true,
    declarations
  } : {
    valid: false,
    reason: fault
  };
}
var NON_REACHABLE_SUBSCHEMA_KEYWORDS = [
  "items",
  "prefixItems",
  "contains",
  "additionalProperties",
  "unevaluatedProperties",
  "unevaluatedItems",
  "propertyNames",
  "patternProperties",
  "dependentSchemas",
  "oneOf",
  "anyOf",
  "allOf",
  "not",
  "if",
  "then",
  "else",
  "$defs",
  "definitions"
];
var OBJECT_VALUED_SUBSCHEMA_KEYWORDS = /* @__PURE__ */ new Set([
  "patternProperties",
  "dependentSchemas",
  "$defs",
  "definitions"
]);
function pathName(path) {
  return path.length === 0 ? "<root>" : path.join(".");
}
var BASE64_SENTINEL_PREFIX = "=?base64?";
var BASE64_SENTINEL_SUFFIX = "?=";
var BASE64_CANONICAL = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/;
var CANONICAL_DECIMAL = /^-?\d+(\.\d+)?$/;
function mcpParamPrimitiveToString(value) {
  if (typeof value === "string") return value;
  if (typeof value === "boolean") return value ? "true" : "false";
  if (typeof value === "number") {
    if (!Number.isFinite(value)) return void 0;
    if (Number.isInteger(value) && !Number.isSafeInteger(value)) return void 0;
    return String(value);
  }
}
function base64ToUtf8(b64) {
  const bin = atob(b64);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.codePointAt(i);
  return new TextDecoder("utf-8", { fatal: true }).decode(bytes);
}
function decodeMcpParamValue(value) {
  if (!(value.startsWith(BASE64_SENTINEL_PREFIX) && value.endsWith(BASE64_SENTINEL_SUFFIX))) return value;
  const b64 = value.slice(9, value.length - 2);
  if (!BASE64_CANONICAL.test(b64)) return void 0;
  try {
    return base64ToUtf8(b64);
  } catch {
    return;
  }
}
function valueAtPath(root, path) {
  let node3 = root;
  for (const key of path) {
    if (node3 === null || typeof node3 !== "object") return void 0;
    node3 = node3[key];
  }
  return node3;
}
function validateMcpParamHeaders(declarations, args, headers) {
  for (const decl of declarations) {
    const headerKey = `${MCP_PARAM_HEADER_PREFIX}${decl.headerName}`;
    const headerValue = headers.get(headerKey);
    const bodyRaw = valueAtPath(args, decl.path);
    if (bodyRaw === void 0 || bodyRaw === null) continue;
    const bodyString = mcpParamPrimitiveToString(bodyRaw);
    if (bodyString === void 0) continue;
    if (headerValue === null) return paramHeaderMismatchRejection("param-header-missing", headerKey, `the body carries ${pathName(decl.path)}=${JSON.stringify(bodyRaw)} but the ${headerKey} header is absent`);
    const decoded = decodeMcpParamValue(headerValue);
    if (decoded === void 0) return paramHeaderMismatchRejection("param-header-invalid-encoding", headerKey, `the ${headerKey} header carries an invalid Base64 sentinel value`);
    if (!((decl.type === "integer" || decl.type === "number") && CANONICAL_DECIMAL.test(decoded) && typeof bodyRaw === "number" ? Number(decoded) === bodyRaw : decoded === bodyString)) return paramHeaderMismatchRejection("param-header-mismatch", headerKey, `the ${headerKey} header decodes to ${JSON.stringify(decoded)} but the body carries ${pathName(decl.path)}=${JSON.stringify(bodyRaw)}`);
  }
}
function paramHeaderMismatchRejection(cell, header, body) {
  return {
    kind: "reject",
    rung: "param-header-validation",
    cell,
    httpStatus: 400,
    code: HEADER_MISMATCH_ERROR_CODE,
    message: `Bad Request: the request headers and body disagree: ${body}`,
    data: { mismatch: {
      header,
      body
    } },
    settled: true
  };
}
var HEADER_MISMATCH_ERROR_CODE = -32020;
var INBOUND_VALIDATION_LADDER = [
  {
    rung: "http-method",
    order: 1,
    evaluatedAt: "edge",
    codes: [-32e3],
    conformance: [],
    rationale: "The modern era is POST-only; GET/DELETE are body-less 2025-era session operations and are method-routed to legacy serving (405 when legacy serving is not configured), before any body is read."
  },
  {
    rung: "jsonrpc-shape",
    order: 2,
    evaluatedAt: "edge",
    codes: [ProtocolErrorCode.InvalidRequest],
    conformance: ["server-stateless"],
    rationale: "The body must be a JSON-RPC request or notification: posted responses and batch arrays containing a modern or invalid element are rejected before classification (element-wise batch rule); all-legacy arrays stay legacy traffic."
  },
  {
    rung: "era-classification",
    order: 3,
    evaluatedAt: "edge",
    codes: [HEADER_MISMATCH_ERROR_CODE, ProtocolErrorCode.UnsupportedProtocolVersion],
    conformance: [
      "server-stateless",
      "http-header-validation",
      "http-custom-header-server-validation"
    ],
    rationale: "Body-primary era classification with the protocol-version header as a cross-check; a header/body disagreement is rejected with -32020 (HeaderMismatch), and an envelope-less request on a modern-only endpoint is answered with the unsupported-protocol-version error naming the supported revisions."
  },
  {
    rung: "envelope",
    order: 4,
    evaluatedAt: "edge",
    codes: [ProtocolErrorCode.InvalidParams],
    conformance: ["server-stateless"],
    rationale: "A present envelope claim with a malformed envelope \u2014 and a missing envelope on a request whose protocol-version header names a modern revision \u2014 is an invalid-params rejection naming the offending or missing key(s); never a silent fall back to legacy handling. This is the only place an invalid-params rejection maps to HTTP 400."
  },
  {
    rung: "method-registry",
    order: 5,
    evaluatedAt: "dispatch",
    codes: [ProtocolErrorCode.MethodNotFound],
    conformance: ["server-stateless"],
    rationale: "Method existence outranks parameter validity: a method absent from the negotiated revision\u2019s registry (or with no handler installed) answers method-not-found before params or capabilities are looked at."
  },
  {
    rung: "request-params",
    order: 6,
    evaluatedAt: "dispatch",
    codes: [ProtocolErrorCode.InvalidParams],
    conformance: [],
    rationale: "Per-method params validation; emitted in-band by the dispatch layer (HTTP 200), never via the ladder status table."
  },
  {
    rung: "standard-header-validation",
    order: 7,
    evaluatedAt: "pre-dispatch",
    codes: [HEADER_MISMATCH_ERROR_CODE],
    conformance: ["http-header-validation"],
    rationale: "SEP-2243 standard `Mcp-Method` / `Mcp-Name` headers \u2014 presence, sentinel decoding, and `Mcp-Name` \u2194 body cross-check \u2014 are validated by the HTTP entry on a modern-classified request after the supported-revision gate and before dispatch. The classifier\u2019s own header-mismatch cells (protocol-version, `Mcp-Method` mismatch) stay on the edge `era-classification` rung; this rung carries the entry-layer presence/`Mcp-Name` half. Evaluated before the capability gate, the factory call, and the `Mcp-Param-*` rung so a request that fails several rungs is answered by the standard-header rung first. The documented order (after method-registry 5 and request-params 6) is NOT the observed precedence: serveModern evaluates this rung immediately after the supported-revision gate, so a request that also fails a dispatch rung is answered here before the dispatch rungs (5\u20136) are consulted."
  },
  {
    rung: "client-capabilities",
    order: 8,
    evaluatedAt: "pre-dispatch",
    codes: [ProtocolErrorCode.MissingRequiredClientCapability],
    conformance: ["server-stateless"],
    rationale: "The capability requirement is checked by the HTTP entry, pre-dispatch, against the validated envelope the classifier produced \u2014 pinning the spec-mandated HTTP 400 independently of how dispatch- and handler-produced errors are mapped. The documented order (after method resolution and params validation) is preserved observably only while the requirement table is empty: once a served method gains a requirement entry, a request that is missing the capability and would also fail a dispatch rung is answered by this gate first, so the entry must consult the method registry before the gate if the documented precedence is to stay observable."
  },
  {
    rung: "param-header-validation",
    order: 9,
    evaluatedAt: "pre-dispatch",
    codes: [HEADER_MISMATCH_ERROR_CODE],
    conformance: ["http-custom-header-server-validation"],
    rationale: "SEP-2243 `Mcp-Param-*` headers are validated against the named tool\u2019s `x-mcp-header` declarations and the body `arguments` after the tool registry is known and before dispatch reaches the handler; a missing/disagreeing/malformed header is rejected 400 / -32020 with the same shape as the standard-header cross-checks. The documented order (after method resolution and params validation) is preserved observably only when the body `arguments` would otherwise validate: the check runs pre-dispatch, so a `tools/call` that fails BOTH this rung and a dispatch-time rung (e.g. order-6 `request-params`, -32602) is answered by this gate first with 400 / -32020, not by the earlier-ordered rung."
  }
];
var LADDER_ERROR_HTTP_STATUS = {
  [ProtocolErrorCode.ParseError]: 400,
  [ProtocolErrorCode.InvalidRequest]: 400,
  [ProtocolErrorCode.MethodNotFound]: 404,
  [ProtocolErrorCode.UnsupportedProtocolVersion]: 400,
  [ProtocolErrorCode.MissingRequiredClientCapability]: 400,
  [HEADER_MISMATCH_ERROR_CODE]: 400
};
function httpStatusForErrorCode(code, origin) {
  if (origin === "in-band") return code === ProtocolErrorCode.MissingRequiredClientCapability ? 400 : 200;
  return LADDER_ERROR_HTTP_STATUS[code] ?? 400;
}
function rejection(rung, cell, httpStatus, error3, settled) {
  return {
    kind: "reject",
    rung,
    cell,
    httpStatus,
    code: error3.code,
    message: error3.message,
    ...error3.data !== void 0 && { data: error3.data },
    settled
  };
}
function crossCheckMismatch(cell, header, body, rung = "era-classification") {
  return rejection(rung, cell, 400, new ProtocolError(HEADER_MISMATCH_ERROR_CODE, `Bad Request: the request headers and body disagree: ${body}`, { mismatch: {
    header,
    body
  } }), true);
}
var MCP_NAME_HEADER_SOURCE = {
  "tools/call": "name",
  "prompts/get": "name",
  "resources/read": "uri"
};
function stripHttpOws(value) {
  let start = 0;
  while (start < value.length) {
    const code = value.codePointAt(start);
    if (code !== 9 && code !== 32) break;
    start += 1;
  }
  let end = value.length;
  while (end > start) {
    const code = value.codePointAt(end - 1);
    if (code !== 9 && code !== 32) break;
    end -= 1;
  }
  return start === 0 && end === value.length ? value : value.slice(start, end);
}
function validateStandardRequestHeaders(request, route) {
  if (route.messageKind !== "request") return;
  const method = route.message.method;
  if (request.mcpMethodHeader === void 0) return crossCheckMismatch("method-header-missing", "(missing)", `the body names method ${method} but the required Mcp-Method header is absent`, "standard-header-validation");
  const sourceField = Object.hasOwn(MCP_NAME_HEADER_SOURCE, method) ? MCP_NAME_HEADER_SOURCE[method] : void 0;
  if (sourceField === void 0) return;
  const sourceValue = route.message.params?.[sourceField];
  const bodyValue = typeof sourceValue === "string" ? sourceValue : void 0;
  if (request.mcpNameHeader === void 0) {
    if (bodyValue === void 0) return;
    return crossCheckMismatch("name-header-missing", "(missing)", `the body carries params.${sourceField}="${bodyValue}" but the required Mcp-Name header is absent`, "standard-header-validation");
  }
  const normalizedNameHeader = stripHttpOws(request.mcpNameHeader);
  const decoded = decodeMcpParamValue(normalizedNameHeader);
  if (decoded === void 0) return crossCheckMismatch("name-header-invalid-encoding", normalizedNameHeader, "the Mcp-Name header carries an invalid Base64 sentinel value", "standard-header-validation");
  if (bodyValue !== void 0 && decoded !== bodyValue) return crossCheckMismatch("name-header-mismatch", normalizedNameHeader, `the body carries params.${sourceField}="${bodyValue}" but the Mcp-Name header names "${decoded}"`, "standard-header-validation");
}
function isPlainObject$2(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}
function classificationForClaim(claimedVersion) {
  if (claimedVersion === void 0) return { era: "modern" };
  return {
    era: isModernProtocolVersion(claimedVersion) ? "modern" : "legacy",
    revision: claimedVersion
  };
}
function carriesValidModernEnvelopeClaim(params) {
  if (!hasEnvelopeClaim(params)) return false;
  const claimedVersion = envelopeClaimVersion(params);
  if (claimedVersion === void 0 || !isModernProtocolVersion(claimedVersion)) return false;
  const meta3 = requestMetaOf(params);
  return meta3 !== void 0 && validateEnvelopeMeta(meta3).length === 0;
}
function classifyBatch(body) {
  if (body.length === 0) return rejection("jsonrpc-shape", "empty-batch", 400, new ProtocolError(ProtocolErrorCode.InvalidRequest, "Bad Request: empty JSON-RPC batch"), true);
  for (const element of body) {
    if (hasEnvelopeClaim(isPlainObject$2(element) ? element["params"] : void 0)) return rejection("jsonrpc-shape", "batch-with-modern-element", 400, new ProtocolError(ProtocolErrorCode.InvalidRequest, "Bad Request: JSON-RPC batches may not contain requests for protocol revision 2026-07-28 or later"), true);
    if (!(isJSONRPCRequest(element) || isJSONRPCNotification(element) || isJSONRPCResultResponse(element) || isJSONRPCErrorResponse(element))) return rejection("jsonrpc-shape", "batch-with-invalid-element", 400, new ProtocolError(ProtocolErrorCode.InvalidRequest, "Bad Request: JSON-RPC batch contains an invalid message"), true);
  }
  return {
    kind: "legacy",
    reason: "batch"
  };
}
function classifyRequestBody(request, body) {
  const params = body.params;
  const method = body.method;
  const headerVersion = request.protocolVersionHeader;
  const headerNamesModern = headerVersion !== void 0 && isModernProtocolVersion(headerVersion);
  if (method === "initialize" && !carriesValidModernEnvelopeClaim(params)) {
    if (headerNamesModern) return crossCheckMismatch("initialize-with-modern-header", headerVersion, "an initialize request (legacy handshake) was sent with a modern MCP-Protocol-Version header");
    const requestedVersion = isPlainObject$2(params) && typeof params["protocolVersion"] === "string" ? params["protocolVersion"] : void 0;
    return {
      kind: "legacy",
      reason: "initialize",
      ...requestedVersion !== void 0 && { requestedVersion }
    };
  }
  if (hasEnvelopeClaim(params)) {
    const meta3 = requestMetaOf(params);
    const firstIssue = (meta3 === void 0 ? [] : validateEnvelopeMeta(meta3))[0];
    if (firstIssue !== void 0) return rejection("envelope", "envelope-invalid", 400, new ProtocolError(ProtocolErrorCode.InvalidParams, `Invalid _meta envelope for protocol revision 2026-07-28: ${firstIssue.key}: ${firstIssue.problem}`, { envelope: firstIssue }), true);
    const claimedVersion = envelopeClaimVersion(params);
    if (headerVersion !== void 0 && claimedVersion !== void 0 && headerVersion !== claimedVersion) return crossCheckMismatch("header-body-version-mismatch", headerVersion, `the body envelope names protocol version ${claimedVersion} but the MCP-Protocol-Version header names ${headerVersion}`);
    if (request.mcpMethodHeader !== void 0 && request.mcpMethodHeader !== method) return crossCheckMismatch("method-header-mismatch", request.mcpMethodHeader, `the body names method ${method} but the Mcp-Method header names ${request.mcpMethodHeader}`);
    return {
      kind: "modern",
      messageKind: "request",
      message: body,
      classification: classificationForClaim(claimedVersion)
    };
  }
  if (headerNamesModern) {
    const meta3 = requestMetaOf(params);
    const missingFromEnvelope = validateEnvelopeMeta(meta3 ?? {}).filter((issue4) => issue4.problem === "missing").map((issue4) => issue4.key);
    const missing = meta3 === void 0 ? ["_meta"] : missingFromEnvelope.length > 0 ? missingFromEnvelope : [PROTOCOL_VERSION_META_KEY];
    return rejection("envelope", "modern-header-without-claim", 400, new ProtocolError(ProtocolErrorCode.InvalidParams, `Invalid params: the MCP-Protocol-Version header names protocol revision ${headerVersion}, but the request is missing the required per-request envelope key(s): ${missing.join(", ")}`, { envelope: { missing } }), true);
  }
  return {
    kind: "legacy",
    reason: "no-claim",
    ...headerVersion !== void 0 && { requestedVersion: headerVersion }
  };
}
function classifyNotificationBody(request, body) {
  const params = body.params;
  const method = body.method;
  const headerVersion = request.protocolVersionHeader;
  const headerNamesModern = headerVersion !== void 0 && isModernProtocolVersion(headerVersion);
  if (hasEnvelopeClaim(params)) {
    const claimedVersion = envelopeClaimVersion(params);
    if (claimedVersion === void 0) {
      const meta3 = requestMetaOf(params);
      const claimIssue = (meta3 === void 0 ? [] : validateEnvelopeMeta(meta3)).find((issue4) => issue4.key === PROTOCOL_VERSION_META_KEY) ?? {
        key: PROTOCOL_VERSION_META_KEY,
        problem: "expected a protocol version string"
      };
      return rejection("envelope", "notification-envelope-invalid", 400, new ProtocolError(ProtocolErrorCode.InvalidParams, `Invalid _meta envelope for protocol revision 2026-07-28: ${claimIssue.key}: ${claimIssue.problem}`, { envelope: claimIssue }), true);
    }
    if (headerVersion !== void 0 && headerVersion !== claimedVersion) return crossCheckMismatch("notification-header-body-version-mismatch", headerVersion, `the notification envelope names protocol version ${claimedVersion} but the MCP-Protocol-Version header names ${headerVersion}`);
    const classification = classificationForClaim(claimedVersion);
    if (classification.era === "modern" && request.mcpMethodHeader !== void 0 && request.mcpMethodHeader !== method) return crossCheckMismatch("notification-method-header-mismatch", request.mcpMethodHeader, `the notification body names method ${method} but the Mcp-Method header names ${request.mcpMethodHeader}`);
    return {
      kind: "modern",
      messageKind: "notification",
      message: body,
      classification
    };
  }
  if (headerNamesModern) {
    if (request.mcpMethodHeader !== void 0 && request.mcpMethodHeader !== method) return crossCheckMismatch("notification-method-header-mismatch", request.mcpMethodHeader, `the notification body names method ${method} but the Mcp-Method header names ${request.mcpMethodHeader}`);
    return {
      kind: "modern",
      messageKind: "notification",
      message: body,
      classification: {
        era: "modern",
        revision: headerVersion
      }
    };
  }
  return {
    kind: "legacy",
    reason: "notification",
    ...headerVersion !== void 0 && { requestedVersion: headerVersion }
  };
}
function classifyInboundRequest(request) {
  request = {
    ...request,
    ...request.protocolVersionHeader !== void 0 && { protocolVersionHeader: stripHttpOws(request.protocolVersionHeader) },
    ...request.mcpMethodHeader !== void 0 && { mcpMethodHeader: stripHttpOws(request.mcpMethodHeader) },
    ...request.mcpNameHeader !== void 0 && { mcpNameHeader: stripHttpOws(request.mcpNameHeader) }
  };
  if (request.httpMethod.toUpperCase() !== "POST") return {
    kind: "legacy",
    reason: "http-method"
  };
  const body = request.body;
  if (Array.isArray(body)) return classifyBatch(body);
  if (isJSONRPCResultResponse(body) || isJSONRPCErrorResponse(body)) return {
    kind: "legacy",
    reason: "response"
  };
  if (isPlainObject$2(body) && isJSONRPCRequest(body)) return classifyRequestBody(request, body);
  if (isPlainObject$2(body) && isJSONRPCNotification(body)) return classifyNotificationBody(request, body);
  return rejection("jsonrpc-shape", "invalid-json-rpc-body", 400, new ProtocolError(ProtocolErrorCode.InvalidRequest, "Bad Request: the request body is not a valid JSON-RPC message"), true);
}
function modernOnlyStrictRejection(route, supportedVersions) {
  switch (route.reason) {
    case "http-method":
      return rejection("http-method", "modern-only-method-not-allowed", 405, new ProtocolError(-32e3, "Method not allowed."), true);
    case "batch":
      return rejection("jsonrpc-shape", "modern-only-batch-not-supported", 400, new ProtocolError(ProtocolErrorCode.InvalidRequest, "Bad Request: JSON-RPC batches are not supported by this endpoint"), true);
    case "response":
      return rejection("jsonrpc-shape", "modern-only-response-post", 400, new ProtocolError(ProtocolErrorCode.InvalidRequest, "Bad Request: JSON-RPC responses cannot be posted to this endpoint"), true);
    case "notification":
      return;
    case "initialize":
    case "no-claim": {
      const requested = route.requestedVersion;
      return rejection("era-classification", "modern-only-missing-envelope", 400, requested === void 0 ? new ProtocolError(ProtocolErrorCode.UnsupportedProtocolVersion, "Unsupported protocol version: the request did not name a protocol version", { supported: [...supportedVersions] }) : new UnsupportedProtocolVersionError({
        supported: [...supportedVersions],
        requested
      }), true);
    }
  }
}
function parseSchema(schema, data) {
  return safeParse4(schema, data);
}
function shapeKeys(schemas) {
  return new Set(schemas.flatMap((schema) => Object.keys(schema.shape)));
}
function isStandardSchema(schema) {
  if (schema == null) return false;
  const schemaType = typeof schema;
  if (schemaType !== "object" && schemaType !== "function") return false;
  if (!("~standard" in schema)) return false;
  return typeof schema["~standard"]?.validate === "function";
}
var warnedZodFallback = false;
var JSON_SCHEMA_CONVERSION_TARGET = "draft-2020-12";
function standardSchemaToJsonSchema(schema, io = "input") {
  const std = schema["~standard"];
  let result;
  if (std.jsonSchema) result = std.jsonSchema[io]({ target: JSON_SCHEMA_CONVERSION_TARGET });
  else if (std.vendor === "zod") {
    if (!("_zod" in schema)) throw new Error("Schema appears to be from zod 3, which the SDK cannot convert to JSON Schema. Upgrade to zod >=4.2.0, or wrap your JSON Schema with fromJsonSchema().");
    if (!warnedZodFallback) {
      warnedZodFallback = true;
      console.warn("[mcp-sdk] Your zod version does not implement `~standard.jsonSchema` (added in zod 4.2.0). Falling back to z.toJSONSchema(). Upgrade to zod >=4.2.0 to silence this warning.");
    }
    result = toJSONSchema(schema, {
      target: JSON_SCHEMA_CONVERSION_TARGET,
      io
    });
  } else throw new Error(`Schema library "${std.vendor}" does not implement StandardJSONSchemaV1 (\`~standard.jsonSchema\`). Upgrade to a version that does, or wrap your JSON Schema with fromJsonSchema().`);
  if (io === "output") {
    if (result.type !== void 0) return result;
    return isProvablyObjectShapedRoot(result) ? {
      type: "object",
      ...result
    } : result;
  }
  if (result.type !== void 0 && result.type !== "object") throw new Error(`MCP tool and prompt schemas must describe objects (got type: ${JSON.stringify(result.type)}). Wrap your schema in z.object({...}) or equivalent.`);
  return {
    type: "object",
    ...result
  };
}
function isProvablyObjectShapedRoot(schema) {
  if ("properties" in schema || "patternProperties" in schema || "additionalProperties" in schema || "required" in schema) return true;
  for (const key of [
    "oneOf",
    "anyOf",
    "allOf"
  ]) {
    const members3 = schema[key];
    if (Array.isArray(members3) && members3.length > 0) return members3.every((m) => m !== null && typeof m === "object" && (m.type === "object" || isProvablyObjectShapedRoot(m)));
  }
  return false;
}
function formatIssue(issue4) {
  if (!issue4.path?.length) return issue4.message;
  return `${issue4.path.map((p) => String(typeof p === "object" ? p.key : p)).join(".")}: ${issue4.message}`;
}
async function validateStandardSchema(schema, data) {
  const result = await schema["~standard"].validate(data);
  if (result.issues && result.issues.length > 0) return {
    success: false,
    error: result.issues.map((i) => formatIssue(i)).join(", ")
  };
  return {
    success: true,
    data: result.value
  };
}
function zodEmittedPattern(schema) {
  const jsonSchema = toJSONSchema(schema, {
    target: JSON_SCHEMA_CONVERSION_TARGET,
    io: "input"
  });
  return typeof jsonSchema.pattern === "string" ? jsonSchema.pattern : void 0;
}
var DATETIME_FRACTION_DIGITS = /\\\.\\d\{(\d+)\}/;
function datetimeReferenceSchemas(pattern) {
  const fractionDigits = DATETIME_FRACTION_DIGITS.exec(pattern);
  const precisions = [
    void 0,
    -1,
    0
  ];
  if (fractionDigits) precisions.push(Number(fractionDigits[1]));
  return [false, true].flatMap((local) => [false, true].flatMap((offset) => precisions.map((precision) => iso_exports2.datetime({
    local,
    offset,
    precision
  }))));
}
function referencePatternsForFormat(format2, pattern) {
  let referenceSchemas;
  switch (format2) {
    case "email":
      referenceSchemas = [email3()];
      break;
    case "uri":
      referenceSchemas = [url2()];
      break;
    case "date":
      referenceSchemas = [iso_exports2.date()];
      break;
    case "date-time":
      referenceSchemas = datetimeReferenceSchemas(pattern);
      break;
  }
  return new Set(referenceSchemas.map((schema) => zodEmittedPattern(schema)).filter((emitted) => emitted !== void 0));
}
function isLibraryFormatPattern(format2, pattern, vendor) {
  if (vendor !== "zod") return true;
  return referencePatternsForFormat(format2, pattern).has(pattern);
}
function promptArgumentsFromStandardSchema(schema) {
  const jsonSchema = standardSchemaToJsonSchema(schema, "input");
  const properties = jsonSchema.properties || {};
  const required4 = jsonSchema.required || [];
  return Object.entries(properties).map(([name, prop]) => ({
    name,
    description: prop?.description,
    required: required4.includes(name)
  }));
}
function isJsonObject(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
function convertStandardElicitationSchema(schema) {
  try {
    return standardSchemaToJsonSchema(schema, "input");
  } catch (error3) {
    const detail = error3 instanceof Error ? error3.message : String(error3);
    throw new ProtocolError(ProtocolErrorCode.InvalidParams, `Elicitation requestedSchema must describe an object with flat primitive properties: ${detail}`);
  }
}
var ANNOTATION_ONLY_JSON_SCHEMA_KEYWORDS = /* @__PURE__ */ new Set([
  "$comment",
  "deprecated",
  "description",
  "examples",
  "readOnly",
  "title",
  "writeOnly"
]);
function isAnnotationOnlyJsonSchemaKeyword(key) {
  return ANNOTATION_ONLY_JSON_SCHEMA_KEYWORDS.has(key) || key.startsWith("x-");
}
var ROOT_KEYS = /* @__PURE__ */ new Set(["$schema", ...Object.keys(ElicitRequestFormParamsSchema.shape.requestedSchema.shape)]);
var PROPERTY_KEYS_BY_TYPE = {
  string: shapeKeys([
    StringSchemaSchema,
    UntitledSingleSelectEnumSchemaSchema,
    TitledSingleSelectEnumSchemaSchema,
    LegacyTitledEnumSchemaSchema
  ]),
  number: shapeKeys([NumberSchemaSchema]),
  integer: shapeKeys([NumberSchemaSchema]),
  boolean: shapeKeys([BooleanSchemaSchema]),
  array: shapeKeys([UntitledMultiSelectEnumSchemaSchema, TitledMultiSelectEnumSchemaSchema])
};
var SUPPORTED_STRING_FORMATS = new Set(StringSchemaSchema.shape.format.unwrap().options);
function walkProperty(node3, path, vendor, unsupported) {
  if (!isJsonObject(node3)) return node3;
  const allowedKeys = typeof node3.type === "string" && Object.hasOwn(PROPERTY_KEYS_BY_TYPE, node3.type) ? PROPERTY_KEYS_BY_TYPE[node3.type] : void 0;
  if (allowedKeys === void 0) return node3;
  const pruned = {};
  for (const [key, value] of Object.entries(node3)) if (allowedKeys.has(key) || isAnnotationOnlyJsonSchemaKeyword(key)) pruned[key] = value;
  else if (key === "pattern" && node3.type === "string" && typeof node3.format === "string") {
    if (!SUPPORTED_STRING_FORMATS.has(node3.format)) pruned[key] = value;
    else if (typeof value !== "string" || !isLibraryFormatPattern(node3.format, value, vendor)) unsupported.push(`${path}.${key}`);
  } else unsupported.push(`${path}.${key}`);
  return pruned;
}
function walkRequestedSchema(converted, vendor) {
  const pruned = {};
  const unsupported = [];
  for (const [key, value] of Object.entries(converted)) if (key === "properties" && isJsonObject(value)) pruned[key] = Object.fromEntries(Object.entries(value).map(([name, node3]) => [name, walkProperty(node3, `properties.${name}`, vendor, unsupported)]));
  else if (ROOT_KEYS.has(key)) pruned[key] = value;
  else if (!isAnnotationOnlyJsonSchemaKeyword(key)) unsupported.push(key);
  if (unsupported.length > 0) throw new ProtocolError(ProtocolErrorCode.InvalidParams, `Elicitation requestedSchema contains unsupported JSON Schema constraint(s) after Standard Schema conversion: ${unsupported.join(", ")}`);
  return pruned;
}
function describeUnsupportedProperties(pruned, fallback) {
  if (!isJsonObject(pruned.properties)) return fallback;
  const offenders = Object.entries(pruned.properties).filter(([, node3]) => !parseSchema(PrimitiveSchemaDefinitionSchema, node3).success).map(([name]) => `properties.${name}`);
  return offenders.length > 0 ? offenders.join(", ") : fallback;
}
function findDroppedConstraintPaths(original, parsed, path = "") {
  if (Array.isArray(original) && Array.isArray(parsed)) return original.flatMap((item, index) => findDroppedConstraintPaths(item, parsed[index], `${path}[${index}]`));
  if (!isJsonObject(original) || !isJsonObject(parsed)) return [];
  return Object.entries(original).flatMap(([key, value]) => {
    const childPath = path ? `${path}.${key}` : key;
    if (!Object.prototype.hasOwnProperty.call(parsed, key)) return isAnnotationOnlyJsonSchemaKeyword(key) ? [] : [childPath];
    return findDroppedConstraintPaths(value, parsed[key], childPath);
  });
}
function normalizeElicitInputParams(input) {
  if (!isStandardSchema(input.requestedSchema)) return {
    ...input,
    mode: "form",
    requestedSchema: input.requestedSchema
  };
  const vendor = input.requestedSchema["~standard"].vendor;
  const pruned = walkRequestedSchema(convertStandardElicitationSchema(input.requestedSchema), vendor);
  const parsed = parseSchema(ElicitRequestFormParamsSchema.shape.requestedSchema, pruned);
  if (!parsed.success) throw new ProtocolError(ProtocolErrorCode.InvalidParams, `Elicitation requestedSchema only supports flat primitive properties (string, number, integer, boolean, and string enums): ${describeUnsupportedProperties(pruned, parsed.error.message)}`);
  const droppedConstraints = findDroppedConstraintPaths(pruned, parsed.data);
  if (droppedConstraints.length > 0) throw new ProtocolError(ProtocolErrorCode.InvalidParams, `Elicitation requestedSchema contains unsupported JSON Schema constraint(s) after Standard Schema conversion: ${droppedConstraints.join(", ")}`);
  const danglingRequired = (parsed.data.required ?? []).filter((key) => !Object.prototype.hasOwnProperty.call(parsed.data.properties, key));
  if (danglingRequired.length > 0) throw new ProtocolError(ProtocolErrorCode.InvalidParams, `Elicitation requestedSchema lists required properties that are not defined in properties: ${danglingRequired.join(", ")}`);
  return {
    ...input,
    mode: "form",
    requestedSchema: parsed.data
  };
}
function buildInputRequired(spec) {
  const hasInputRequests = spec.inputRequests !== void 0 && Object.keys(spec.inputRequests).length > 0;
  const hasRequestState = typeof spec.requestState === "string";
  if (!hasInputRequests && !hasRequestState) throw new TypeError("inputRequired() requires at least one of inputRequests (with at least one entry) or requestState (spec: every InputRequiredResult MUST include at least one of the two)");
  return {
    resultType: "input_required",
    ...spec.inputRequests !== void 0 && { inputRequests: spec.inputRequests },
    ...spec.requestState !== void 0 && { requestState: spec.requestState }
  };
}
var inputRequired = Object.assign(buildInputRequired, {
  elicit(params) {
    try {
      return {
        method: "elicitation/create",
        params: normalizeElicitInputParams(params)
      };
    } catch (error3) {
      throw error3 instanceof ProtocolError ? new TypeError(error3.message, { cause: error3 }) : error3;
    }
  },
  elicitUrl(params) {
    return {
      method: "elicitation/create",
      params: {
        ...params,
        mode: "url"
      }
    };
  },
  createMessage(params) {
    return {
      method: "sampling/createMessage",
      params
    };
  },
  listRoots() {
    return { method: "roots/list" };
  }
});
var REQUEST_STATE_ONLY_LEG_PACING_MS = 250;
function inputRequiredRoundsExceededMessage(method, maxRounds) {
  return `Multi-round-trip request '${method}' still required input after ${maxRounds} rounds (inputRequired.maxRounds)`;
}
function sleep(ms, signal) {
  return new Promise((resolve, reject) => {
    if (signal?.aborted) {
      reject(signal.reason instanceof SdkError ? signal.reason : new SdkError(SdkErrorCode.RequestTimeout, String(signal.reason)));
      return;
    }
    const timer = setTimeout(() => {
      signal?.removeEventListener("abort", onAbort);
      resolve();
    }, ms);
    const onAbort = () => {
      clearTimeout(timer);
      reject(signal?.reason instanceof SdkError ? signal.reason : new SdkError(SdkErrorCode.RequestTimeout, String(signal?.reason)));
    };
    signal?.addEventListener("abort", onAbort, { once: true });
  });
}
function linkedRoundAbort(outer) {
  const controller = new AbortController();
  const onOuterAbort = () => controller.abort(outer?.reason);
  outer?.addEventListener("abort", onOuterAbort, { once: true });
  if (outer?.aborted) controller.abort(outer.reason);
  return {
    signal: controller.signal,
    abort: (reason) => controller.abort(reason),
    dispose: () => outer?.removeEventListener("abort", onOuterAbort)
  };
}
var SPEC_SCHEMA_KEYS = [
  "AnnotationsSchema",
  "AudioContentSchema",
  "BaseMetadataSchema",
  "BlobResourceContentsSchema",
  "BooleanSchemaSchema",
  "CallToolRequestSchema",
  "CallToolRequestParamsSchema",
  "CallToolResultSchema",
  "CancelledNotificationSchema",
  "CancelledNotificationParamsSchema",
  "CancelTaskRequestSchema",
  "CancelTaskResultSchema",
  "ClientCapabilitiesSchema",
  "ClientNotificationSchema",
  "ClientRequestSchema",
  "ClientResultSchema",
  "CompatibilityCallToolResultSchema",
  "CompleteRequestSchema",
  "CompleteRequestParamsSchema",
  "CompleteResultSchema",
  "ContentBlockSchema",
  "CreateMessageRequestSchema",
  "CreateMessageRequestParamsSchema",
  "CreateMessageResultSchema",
  "CreateMessageResultWithToolsSchema",
  "CreateTaskResultSchema",
  "CursorSchema",
  "DiscoverRequestSchema",
  "DiscoverResultSchema",
  "ElicitationCompleteNotificationSchema",
  "ElicitationCompleteNotificationParamsSchema",
  "ElicitRequestSchema",
  "ElicitRequestFormParamsSchema",
  "ElicitRequestParamsSchema",
  "ElicitRequestURLParamsSchema",
  "ElicitResultSchema",
  "EmbeddedResourceSchema",
  "EmptyResultSchema",
  "EnumSchemaSchema",
  "GetPromptRequestSchema",
  "GetPromptRequestParamsSchema",
  "GetPromptResultSchema",
  "GetTaskPayloadRequestSchema",
  "GetTaskPayloadResultSchema",
  "GetTaskRequestSchema",
  "GetTaskResultSchema",
  "IconSchema",
  "IconsSchema",
  "ImageContentSchema",
  "ImplementationSchema",
  "InitializedNotificationSchema",
  "InitializeRequestSchema",
  "InitializeRequestParamsSchema",
  "InitializeResultSchema",
  "JSONArraySchema",
  "JSONObjectSchema",
  "JSONRPCErrorResponseSchema",
  "JSONRPCMessageSchema",
  "JSONRPCNotificationSchema",
  "JSONRPCRequestSchema",
  "JSONRPCResponseSchema",
  "JSONRPCResultResponseSchema",
  "JSONValueSchema",
  "LegacyTitledEnumSchemaSchema",
  "ListPromptsRequestSchema",
  "ListPromptsResultSchema",
  "ListResourcesRequestSchema",
  "ListResourcesResultSchema",
  "ListResourceTemplatesRequestSchema",
  "ListResourceTemplatesResultSchema",
  "ListRootsRequestSchema",
  "ListRootsResultSchema",
  "ListTasksRequestSchema",
  "ListTasksResultSchema",
  "ListToolsRequestSchema",
  "ListToolsResultSchema",
  "LoggingLevelSchema",
  "LoggingMessageNotificationSchema",
  "LoggingMessageNotificationParamsSchema",
  "ModelHintSchema",
  "ModelPreferencesSchema",
  "MultiSelectEnumSchemaSchema",
  "NotificationSchema",
  "NumberSchemaSchema",
  "PaginatedRequestSchema",
  "PaginatedRequestParamsSchema",
  "PaginatedResultSchema",
  "PingRequestSchema",
  "PrimitiveSchemaDefinitionSchema",
  "ProgressSchema",
  "ProgressNotificationSchema",
  "ProgressNotificationParamsSchema",
  "ProgressTokenSchema",
  "PromptSchema",
  "PromptArgumentSchema",
  "PromptListChangedNotificationSchema",
  "PromptMessageSchema",
  "PromptReferenceSchema",
  "ReadResourceRequestSchema",
  "ReadResourceRequestParamsSchema",
  "ReadResourceResultSchema",
  "RelatedTaskMetadataSchema",
  "RequestSchema",
  "RequestIdSchema",
  "RequestMetaSchema",
  "ResourceSchema",
  "ResourceContentsSchema",
  "ResourceLinkSchema",
  "ResourceListChangedNotificationSchema",
  "ResourceRequestParamsSchema",
  "ResourceTemplateSchema",
  "ResourceTemplateReferenceSchema",
  "ResourceUpdatedNotificationSchema",
  "ResourceUpdatedNotificationParamsSchema",
  "ResultMetaObjectSchema",
  "ResultSchema",
  "RoleSchema",
  "RootSchema",
  "RootsListChangedNotificationSchema",
  "SamplingContentSchema",
  "SamplingMessageSchema",
  "SamplingMessageContentBlockSchema",
  "ServerCapabilitiesSchema",
  "ServerNotificationSchema",
  "ServerRequestSchema",
  "ServerResultSchema",
  "SetLevelRequestSchema",
  "SetLevelRequestParamsSchema",
  "SingleSelectEnumSchemaSchema",
  "StringSchemaSchema",
  "SubscribeRequestSchema",
  "SubscribeRequestParamsSchema",
  "SubscriptionFilterSchema",
  "SubscriptionsAcknowledgedNotificationSchema",
  "SubscriptionsAcknowledgedNotificationParamsSchema",
  "SubscriptionsListenRequestSchema",
  "SubscriptionsListenRequestParamsSchema",
  "SubscriptionsListenResultSchema",
  "SubscriptionsListenResultMetaSchema",
  "TaskAugmentedRequestParamsSchema",
  "TaskCreationParamsSchema",
  "TaskMetadataSchema",
  "TaskSchema",
  "TaskStatusSchema",
  "TaskStatusNotificationSchema",
  "TaskStatusNotificationParamsSchema",
  "TextContentSchema",
  "TextResourceContentsSchema",
  "TitledMultiSelectEnumSchemaSchema",
  "TitledSingleSelectEnumSchemaSchema",
  "ToolSchema",
  "ToolAnnotationsSchema",
  "ToolChoiceSchema",
  "ToolExecutionSchema",
  "ToolListChangedNotificationSchema",
  "ToolResultContentSchema",
  "ToolUseContentSchema",
  "UnsubscribeRequestSchema",
  "UnsubscribeRequestParamsSchema",
  "UntitledMultiSelectEnumSchemaSchema",
  "UntitledSingleSelectEnumSchemaSchema"
];
var authSchemas = {
  IdJagTokenExchangeResponseSchema,
  OAuthClientInformationFullSchema,
  OAuthClientInformationSchema,
  OAuthClientMetadataSchema,
  OAuthClientRegistrationErrorSchema,
  OAuthErrorResponseSchema,
  OAuthMetadataSchema,
  OAuthProtectedResourceMetadataSchema,
  OAuthTokenRevocationRequestSchema,
  OAuthTokensSchema,
  OpenIdProviderDiscoveryMetadataSchema,
  OpenIdProviderMetadataSchema
};
var _specTypeSchemas = {};
var _isSpecType = {};
function register(key, schema) {
  const name = key.slice(0, -6);
  _specTypeSchemas[name] = schema;
  _isSpecType[name] = (v) => schema.safeParse(v).success;
}
for (const key of SPEC_SCHEMA_KEYS) register(key, schemas_exports2[key]);
for (const [key, schema] of Object.entries(authSchemas)) register(key, schema);
var specTypeSchemas = Object.freeze(_specTypeSchemas);
var isSpecType = Object.freeze(_isSpecType);
function bootstrapOutboundCodec(method) {
  switch (method) {
    case "initialize":
    case "notifications/initialized":
      return codecForVersion(void 0);
    case "server/discover":
      return codecForVersion(MODERN_WIRE_REVISION);
    default:
      return;
  }
}
var DEFAULT_REQUEST_TIMEOUT_MSEC = 6e4;
var RESERVED_ENVELOPE_META_KEYS = [
  PROTOCOL_VERSION_META_KEY,
  CLIENT_INFO_META_KEY,
  CLIENT_CAPABILITIES_META_KEY,
  LOG_LEVEL_META_KEY
];
var RETRY_PARAMS_KEYS = ["inputResponses", "requestState"];
function liftWireOnlyMaterial(message, kind) {
  const params = message.params;
  if (!isPlainObject$1(params)) return {
    message,
    lifted: {}
  };
  const meta3 = params._meta;
  const envelopeKeys = isPlainObject$1(meta3) ? RESERVED_ENVELOPE_META_KEYS.filter((key) => key in meta3) : [];
  const retryKeys = kind === "request" ? RETRY_PARAMS_KEYS.filter((key) => key in params) : [];
  if (envelopeKeys.length === 0 && retryKeys.length === 0) return {
    message,
    lifted: {}
  };
  const lifted = {};
  const nextParams = { ...params };
  if (envelopeKeys.length > 0 && isPlainObject$1(meta3)) {
    const envelope = {};
    const nextMeta = { ...meta3 };
    for (const key of envelopeKeys) {
      envelope[key] = meta3[key];
      delete nextMeta[key];
    }
    lifted.envelope = envelope;
    if (Object.keys(nextMeta).length > 0) nextParams._meta = nextMeta;
    else delete nextParams._meta;
  }
  for (const key of retryKeys) {
    if (key === "inputResponses") lifted.inputResponses = nextParams[key];
    if (key === "requestState") lifted.requestState = nextParams[key];
    delete nextParams[key];
  }
  return {
    message: {
      ...message,
      params: nextParams
    },
    lifted
  };
}
function codecResultValidator(codec, method) {
  const probe = codec.validateResult(method, void 0);
  if (!probe.ok && probe.reason === "not-in-era") return void 0;
  return { "~standard": {
    version: 1,
    vendor: "mcp-wire-codec",
    validate(value) {
      const outcome = codec.validateResult(method, value);
      if (outcome.ok) return { value: outcome.value };
      return { issues: [{ message: outcome.reason === "invalid" ? outcome.message : `not-in-era: ${method}` }] };
    }
  } };
}
function requestStateAccessor(value) {
  return () => value;
}
var NO_REQUEST_STATE = requestStateAccessor(void 0);
function withRequestStateValue(ctx, value) {
  return {
    ...ctx,
    mcpReq: {
      ...ctx.mcpReq,
      requestState: requestStateAccessor(value)
    }
  };
}
var writeNegotiatedProtocolVersion;
function setNegotiatedProtocolVersion(instance, version4) {
  writeNegotiatedProtocolVersion(instance, version4);
}
var Protocol = class {
  _transport;
  _requestMessageId = 0;
  _requestHandlers = /* @__PURE__ */ new Map();
  _requestHandlerAbortControllers = /* @__PURE__ */ new Map();
  _notificationHandlers = /* @__PURE__ */ new Map();
  _responseHandlers = /* @__PURE__ */ new Map();
  _progressHandlers = /* @__PURE__ */ new Map();
  _timeoutInfo = /* @__PURE__ */ new Map();
  _pendingDebouncedNotifications = /* @__PURE__ */ new Set();
  /**
  * The protocol version negotiated for the current connection (`undefined`
  * before negotiation completes), which determines the wire era this
  * instance speaks. Set by the SDK's negotiation and initialize paths
  * (`Client.connect`, `Server._oninitialize`).
  */
  _negotiatedProtocolVersion;
  static {
    writeNegotiatedProtocolVersion = (instance, version4) => {
      instance._negotiatedProtocolVersion = version4;
    };
  }
  _supportedProtocolVersions;
  /**
  * Callback for when the connection is closed for any reason.
  *
  * This is invoked when {@linkcode Protocol.close | close()} is called as well.
  */
  onclose;
  /**
  * Callback for when an error occurs.
  *
  * Note that errors are not necessarily fatal; they are used for reporting any kind of exceptional condition out of band.
  */
  onerror;
  /**
  * A handler to invoke for any request types that do not have their own handler installed.
  */
  fallbackRequestHandler;
  /**
  * A handler to invoke for any notification types that do not have their own handler installed.
  */
  fallbackNotificationHandler;
  constructor(_options) {
    this._options = _options;
    this._supportedProtocolVersions = _options?.supportedProtocolVersions ?? SUPPORTED_PROTOCOL_VERSIONS;
    this.setNotificationHandler("notifications/cancelled", (notification) => {
      this._oncancel(notification);
    });
    this.setNotificationHandler("notifications/progress", (notification) => {
      this._onprogress(notification);
    });
    this.setRequestHandler("ping", (_request) => ({}));
  }
  /**
  * Drop consult for inbound messages whose transport did not classify them
  * at the edge — long-lived channels such as stdio, where a role class may
  * need to decline traffic the negotiated era has no answer for (the
  * client-side inbound-request drop on modern-era connections: the
  * 2026-07-28 era has no server→client request channel, and on stdio the
  * client must never write JSON-RPC responses).
  *
  * Consulted ONLY when the transport supplied no
  * {@linkcode MessageExtraInfo.classification}: edge-classified traffic
  * never reaches the hook. Returning `'drop'` discards the message without
  * writing any response (requests are surfaced via `onerror`). The base
  * implementation returns `undefined`: unclassified traffic keeps today's
  * dispatch path unchanged. Era selection never happens here — era is
  * instance state, owned by the serving entry that constructed and
  * connected the instance.
  */
  _shouldDropInbound(_message) {
  }
  /**
  * The per-request `_meta` envelope this instance attaches to every outgoing
  * request and notification, when one applies. The base implementation
  * returns `undefined` (no envelope — the 2025-era posture, so legacy-era
  * outbound traffic is byte-identical to a build without this seam).
  * `Client` overrides it on a connection that negotiated a modern (2026-07-28+)
  * era to return the reserved protocol-version / client-info /
  * client-capabilities keys. User-supplied `_meta` keys take precedence over
  * the auto-attached ones.
  */
  _outboundMetaEnvelope() {
  }
  /**
  * Attach this instance's outbound `_meta` envelope (when one is configured)
  * to a request or notification. A no-op when the seam returns `undefined`
  * — the message returns by reference, so the legacy-era wire stays
  * byte-identical. User-supplied `_meta` keys are spread last so they win
  * over the auto-attached envelope keys.
  */
  _envelopeOutbound(message) {
    const envelope = this._outboundMetaEnvelope();
    if (envelope === void 0) return message;
    const params = message.params ?? {};
    return {
      ...message,
      params: {
        ...params,
        _meta: {
          ...envelope,
          ...params._meta
        }
      }
    };
  }
  /**
  * Extension point for non-`complete` decoded results in the response
  * funnel: a result the wire codec discriminated into a kind other than
  * `'complete'` or `'invalid'` is handed here for the role class to
  * resolve. The base default surfaces it as a typed
  * {@linkcode SdkErrorCode.UnsupportedResultType} error (no retry).
  *
  * Intended consumers (named so the seam stays accountable):
  * - the `Client`'s multi-round-trip auto-fulfilment engine, which fulfils
  *   `'input_required'` results through the registered
  *   elicitation/sampling/roots handlers and retries via `flow.retry`;
  * - a future client-side terminal-result handler for
  *   `subscriptions/listen`, when the spec defines one.
  *
  * `Server` instances never receive `input_required` responses on their
  * outbound legs and leave the base behavior in place.
  */
  _resolveNonCompleteResult(decoded, flow) {
    return Promise.reject(new SdkError(SdkErrorCode.UnsupportedResultType, `Unsupported result type '${decoded.kind}' for ${flow.request.method}`, {
      resultType: decoded.kind,
      method: flow.request.method
    }));
  }
  /**
  * Protected accessor for a registered request handler. Used by role
  * classes that dispatch synthesized requests through the same stored
  * handler chain (e.g. the `Client` fulfilling an embedded multi-round-trip
  * input request).
  */
  _getRequestHandler(method) {
    return this._requestHandlers.get(method);
  }
  async _oncancel(notification) {
    if (!notification.params.requestId) return;
    this._requestHandlerAbortControllers.get(notification.params.requestId)?.abort(notification.params.reason);
  }
  _setupTimeout(messageId, timeout, maxTotalTimeout, onTimeout, resetTimeoutOnProgress = false) {
    this._timeoutInfo.set(messageId, {
      timeoutId: setTimeout(onTimeout, timeout),
      startTime: Date.now(),
      timeout,
      maxTotalTimeout,
      resetTimeoutOnProgress,
      onTimeout
    });
  }
  _resetTimeout(messageId) {
    const info = this._timeoutInfo.get(messageId);
    if (!info) return false;
    const totalElapsed = Date.now() - info.startTime;
    if (info.maxTotalTimeout && totalElapsed >= info.maxTotalTimeout) {
      this._timeoutInfo.delete(messageId);
      throw new SdkError(SdkErrorCode.RequestTimeout, "Maximum total timeout exceeded", {
        maxTotalTimeout: info.maxTotalTimeout,
        totalElapsed
      });
    }
    clearTimeout(info.timeoutId);
    info.timeoutId = setTimeout(info.onTimeout, info.timeout);
    return true;
  }
  _cleanupTimeout(messageId) {
    const info = this._timeoutInfo.get(messageId);
    if (info) {
      clearTimeout(info.timeoutId);
      this._timeoutInfo.delete(messageId);
    }
  }
  /**
  * Attaches to the given transport, starts it, and starts listening for messages.
  *
  * The caller assumes ownership of the {@linkcode Transport}, replacing any callbacks that have already been set, and expects that it is the only user of the {@linkcode Transport} instance going forward.
  */
  async connect(transport) {
    this._transport = transport;
    const _onclose = this.transport?.onclose;
    this._transport.onclose = () => {
      try {
        _onclose?.();
      } finally {
        this._onclose();
      }
    };
    const _onerror = this.transport?.onerror;
    this._transport.onerror = (error3) => {
      _onerror?.(error3);
      this._onerror(error3);
    };
    const _onmessage = this._transport?.onmessage;
    this._transport.onmessage = (message, extra) => {
      _onmessage?.(message, extra);
      if (isJSONRPCResultResponse(message) || isJSONRPCErrorResponse(message)) this._onresponse(message);
      else if (isJSONRPCRequest(message)) this._onrequest(message, extra);
      else if (isJSONRPCNotification(message)) this._onnotification(message, extra);
      else this._onerror(/* @__PURE__ */ new Error(`Unknown message type: ${JSON.stringify(message)}`));
    };
    transport.setSupportedProtocolVersions?.(this._supportedProtocolVersions);
    await this._transport.start();
  }
  /**
  * Transport-close hook. Subclass overrides MUST call `super._onclose()`
  * after their own cleanup — base teardown (response-handler settlement,
  * timeout clearing, in-flight request abort) does not run otherwise.
  */
  _onclose() {
    const responseHandlers = this._responseHandlers;
    this._responseHandlers = /* @__PURE__ */ new Map();
    this._progressHandlers.clear();
    this._pendingDebouncedNotifications.clear();
    for (const info of this._timeoutInfo.values()) clearTimeout(info.timeoutId);
    this._timeoutInfo.clear();
    const requestHandlerAbortControllers = this._requestHandlerAbortControllers;
    this._requestHandlerAbortControllers = /* @__PURE__ */ new Map();
    const error3 = new SdkError(SdkErrorCode.ConnectionClosed, "Connection closed");
    this._transport = void 0;
    try {
      this.onclose?.();
    } finally {
      for (const handler of responseHandlers.values()) handler(error3);
      for (const controller of requestHandlerAbortControllers.values()) controller.abort(error3);
    }
  }
  _onerror(error3) {
    this.onerror?.(error3);
  }
  /**
  * Inbound-notification dispatch. Subclass overrides MUST delegate
  * unmatched traffic to `super._onnotification(rawNotification, extra)` —
  * an override that consumes only what it owns and falls through to base
  * dispatch for everything else.
  */
  _onnotification(rawNotification, extra) {
    const { message: notification } = liftWireOnlyMaterial(rawNotification, "notification");
    const codec = this._negotiatedWireCodec();
    if (extra?.classification === void 0 && this._shouldDropInbound(rawNotification) === "drop") return;
    if (extra?.classification !== void 0) {
      const classified = classifiedWireEra(extra.classification);
      if (classified !== codec.era) {
        this._onerror(/* @__PURE__ */ new Error(`Era mismatch on inbound notification '${notification.method}': classified as ${classified} but this instance serves ${codec.era}`));
        return;
      }
    }
    if (isSpecNotificationMethod(notification.method) && !codec.hasNotificationMethod(notification.method)) return;
    const handler = this._notificationHandlers.get(notification.method);
    const fallback = this.fallbackNotificationHandler;
    if (handler === void 0 && fallback === void 0) return;
    Promise.resolve().then(() => handler === void 0 ? fallback(notification) : handler(notification, codec)).catch((error3) => this._onerror(/* @__PURE__ */ new Error(`Uncaught error in notification handler: ${error3}`)));
  }
  _onrequest(rawRequest, extra) {
    const { message: request, lifted } = liftWireOnlyMaterial(rawRequest, "request");
    const codec = this._negotiatedWireCodec();
    if (extra?.classification === void 0 && this._shouldDropInbound(rawRequest) === "drop") {
      this._onerror(/* @__PURE__ */ new Error(`Dropped inbound request '${rawRequest.method}': not servable on this connection's protocol era`));
      return;
    }
    const capturedTransport = this._transport;
    const sendErrorResponse = (code, message, data) => {
      const errorResponse = {
        jsonrpc: "2.0",
        id: request.id,
        error: {
          code,
          message,
          ...data !== void 0 && { data }
        }
      };
      capturedTransport?.send(errorResponse).catch((error3) => this._onerror(/* @__PURE__ */ new Error(`Failed to send an error response: ${error3}`)));
    };
    if (extra?.classification !== void 0) {
      const classified = classifiedWireEra(extra.classification);
      if (classified !== codec.era) {
        this._onerror(/* @__PURE__ */ new Error(`Era mismatch on inbound request '${request.method}': classified as ${classified} but this instance serves ${codec.era}`));
        const requested = extra.classification.revision ?? classified;
        sendErrorResponse(ProtocolErrorCode.UnsupportedProtocolVersion, `Unsupported protocol version: ${requested}`, {
          supported: this._supportedProtocolVersions,
          requested
        });
        return;
      }
    }
    if (isSpecRequestMethod(request.method) && !codec.hasRequestMethod(request.method)) {
      sendErrorResponse(ProtocolErrorCode.MethodNotFound, "Method not found");
      return;
    }
    const handler = this._requestHandlers.get(request.method) ?? this.fallbackRequestHandler;
    if (handler === void 0) {
      sendErrorResponse(ProtocolErrorCode.MethodNotFound, "Method not found");
      return;
    }
    const envelopeError = codec.checkInboundEnvelope(lifted);
    if (envelopeError !== void 0) {
      sendErrorResponse(ProtocolErrorCode.InvalidParams, envelopeError);
      return;
    }
    const sendNotification = (notification, options) => this._notificationViaCodec(this._resolveOutboundCodec(notification.method), notification, {
      ...options,
      relatedRequestId: request.id
    });
    const sendRequest = (r, resultSchema, options) => this._requestWithSchemaViaCodec(this._resolveOutboundCodec(r.method), r, resultSchema, {
      ...options,
      relatedRequestId: request.id
    });
    const abortController = new AbortController();
    this._requestHandlerAbortControllers.set(request.id, abortController);
    const partitionedInputResponses = lifted.inputResponses === void 0 ? void 0 : partitionInputResponses(lifted.inputResponses);
    const baseCtx = {
      sessionId: capturedTransport?.sessionId,
      mcpReq: {
        id: request.id,
        method: request.method,
        _meta: request.params?._meta,
        ...lifted.envelope !== void 0 && { envelope: lifted.envelope },
        ...partitionedInputResponses !== void 0 && { inputResponses: partitionedInputResponses.accepted },
        ...partitionedInputResponses !== void 0 && partitionedInputResponses.droppedKeys.length > 0 && { droppedInputResponseKeys: partitionedInputResponses.droppedKeys },
        requestState: lifted.requestState === void 0 ? NO_REQUEST_STATE : requestStateAccessor(lifted.requestState),
        signal: abortController.signal,
        send: ((r, schemaOrOptions, maybeOptions) => {
          const sendCodec = this._resolveOutboundCodec(r.method);
          this._assertOutboundRequestInEra(sendCodec, r.method);
          if (isStandardSchema(schemaOrOptions)) return sendRequest(r, schemaOrOptions, maybeOptions);
          const validate2 = codecResultValidator(sendCodec, r.method);
          if (validate2 === void 0) throw new TypeError(`'${r.method}' is not a spec method; pass a result schema as the second argument to ctx.mcpReq.send().`);
          return sendRequest(r, validate2, schemaOrOptions);
        }),
        notify: sendNotification
      },
      http: extra?.authInfo ? { authInfo: extra.authInfo } : void 0
    };
    const ctx = this.buildContext(baseCtx, extra);
    Promise.resolve().then(() => handler(request, ctx)).then(async (result) => {
      if (abortController.signal.aborted) return;
      let encoded;
      try {
        encoded = codec.encodeResult(request.method, result, this._outboundServerInfo());
      } catch (error3) {
        this._onerror(/* @__PURE__ */ new Error(`Failed to encode result for ${request.method}: ${error3}`));
        sendErrorResponse(ProtocolErrorCode.InternalError, "Internal error");
        return;
      }
      const response = {
        result: encoded,
        jsonrpc: "2.0",
        id: request.id
      };
      await capturedTransport?.send(response);
    }, async (error3) => {
      if (abortController.signal.aborted) return;
      const thrownCode = Number.isSafeInteger(error3["code"]) ? error3["code"] : ProtocolErrorCode.InternalError;
      const errorResponse = {
        jsonrpc: "2.0",
        id: request.id,
        error: {
          code: codec.encodeErrorCode(thrownCode),
          message: error3.message ?? "Internal error",
          ...error3["data"] !== void 0 && { data: error3["data"] }
        }
      };
      await capturedTransport?.send(errorResponse);
    }).catch((error3) => this._onerror(/* @__PURE__ */ new Error(`Failed to send response: ${error3}`))).finally(() => {
      if (this._requestHandlerAbortControllers.get(request.id) === abortController) this._requestHandlerAbortControllers.delete(request.id);
    });
  }
  _onprogress(notification) {
    const { progressToken, ...params } = notification.params;
    const messageId = Number(progressToken);
    const handler = this._progressHandlers.get(messageId);
    if (!handler) {
      this._onerror(/* @__PURE__ */ new Error(`Received a progress notification for an unknown token: ${JSON.stringify(notification)}`));
      return;
    }
    const responseHandler = this._responseHandlers.get(messageId);
    const timeoutInfo = this._timeoutInfo.get(messageId);
    if (timeoutInfo && responseHandler && timeoutInfo.resetTimeoutOnProgress) try {
      this._resetTimeout(messageId);
    } catch (error3) {
      this._responseHandlers.delete(messageId);
      this._progressHandlers.delete(messageId);
      this._cleanupTimeout(messageId);
      responseHandler(error3);
      return;
    }
    handler(params);
  }
  /**
  * Inbound-response dispatch. Subclass overrides MUST delegate unmatched
  * traffic to `super._onresponse(response)` — an override that consumes
  * only what it owns and falls through to base dispatch for everything
  * else.
  */
  _onresponse(response) {
    const messageId = Number(response.id);
    const handler = this._responseHandlers.get(messageId);
    if (handler === void 0) {
      this._onerror(/* @__PURE__ */ new Error(`Received a response for an unknown message ID: ${JSON.stringify(response)}`));
      return;
    }
    this._responseHandlers.delete(messageId);
    this._cleanupTimeout(messageId);
    this._progressHandlers.delete(messageId);
    if (isJSONRPCResultResponse(response)) handler(response);
    else handler(ProtocolError.fromError(response.error.code, response.error.message, response.error.data));
  }
  get transport() {
    return this._transport;
  }
  /**
  * Closes the connection.
  */
  async close() {
    await this._transport?.close();
  }
  request(request, schemaOrOptions, maybeOptions) {
    const codec = this._resolveOutboundCodec(request.method);
    this._assertOutboundRequestInEra(codec, request.method);
    if (isStandardSchema(schemaOrOptions)) return this._requestWithSchemaViaCodec(codec, request, schemaOrOptions, maybeOptions);
    const validate2 = codecResultValidator(codec, request.method);
    if (validate2 === void 0) throw new TypeError(`'${request.method}' is not a spec method; pass a result schema as the second argument to request().`);
    return this._requestWithSchemaViaCodec(codec, request, validate2, schemaOrOptions);
  }
  /**
  * The wire codec for this instance's negotiated era — the phase-2 truth:
  * everything an established connection sends and receives resolves
  * through it. Legacy until a version has been negotiated.
  */
  _negotiatedWireCodec() {
    return codecForVersion(this._negotiatedProtocolVersion);
  }
  /**
  * Protected accessor for the instance's negotiated wire codec, for role
  * classes (Client/Server/McpServer) routing era-dependent behavior
  * through the codec's function-only surface — `samplingResultVariant`,
  * `outboundEnvelope`, `projectCallToolResult` — instead of branching on
  * the protocol version themselves.
  */
  _wireCodec() {
    return this._negotiatedWireCodec();
  }
  /**
  * Outbound codec resolution: while the negotiated version is still unset
  * (the negotiation window), lifecycle messages are bootstrap-pinned BY
  * METHOD — they self-identify their era (`initialize` IS the legacy
  * handshake, `server/discover` IS the modern probe). Once a version has
  * been negotiated, the instance era is authoritative for everything — a
  * negotiated session never re-routes a method onto the other era.
  */
  _resolveOutboundCodec(method) {
    if (this._negotiatedProtocolVersion === void 0) {
      const pinned = bootstrapOutboundCodec(method);
      if (pinned) return pinned;
    }
    return this._negotiatedWireCodec();
  }
  /**
  * Era gate for outbound requests — deletions are physical in BOTH
  * directions: sending a spec method that the resolved era does not define
  * dies locally with a typed error before anything reaches the transport.
  * Methods outside the spec universe are consumer-owned extension methods
  * and stay era-blind.
  */
  _assertOutboundRequestInEra(codec, method) {
    if (isSpecRequestMethod(method) && !codec.hasRequestMethod(method)) throw new SdkError(SdkErrorCode.MethodNotSupportedByProtocolVersion, `Method '${method}' is not supported by the negotiated protocol version (wire era ${codec.era})`, {
      method,
      era: codec.era
    });
  }
  /**
  * Sends a request and waits for a response, using the provided schema for
  * validation instead of the era registry's method-keyed entry.
  *
  * This is the internal implementation used by SDK methods whose result
  * schema cannot be expressed as a method-keyed registry entry — the one
  * surviving case is `server.createMessage`, whose result schema depends
  * on the REQUEST params (tools vs no tools) — and by callers passing
  * explicit compatibility schemas. Spec methods are still era-gated here:
  * an explicit schema never smuggles a deleted method onto the wire.
  */
  _requestWithSchema(request, resultSchema, options) {
    const codec = this._resolveOutboundCodec(request.method);
    this._assertOutboundRequestInEra(codec, request.method);
    return this._requestWithSchemaViaCodec(codec, request, resultSchema, options);
  }
  /**
  * The request funnel proper, keyed by the resolved era codec: the codec
  * owns result decoding (raw-first `resultType` discrimination — V-1 —
  * and the era's lift posture) before the schema validation step.
  */
  _requestWithSchemaViaCodec(codec, request, resultSchema, options) {
    const { relatedRequestId, resumptionToken, onresumptiontoken, headers } = options ?? {};
    const flowStartedAt = Date.now();
    let onAbort;
    let cleanupMessageId;
    return new Promise((resolve, reject) => {
      const earlyReject = (error3) => {
        reject(error3);
      };
      if (!this._transport) {
        earlyReject(/* @__PURE__ */ new Error("Not connected"));
        return;
      }
      if (this._options?.enforceStrictCapabilities === true) try {
        this.assertCapabilityForMethod(request.method);
      } catch (error3) {
        earlyReject(error3);
        return;
      }
      if (options?.signal?.aborted) {
        const reason = options.signal.reason;
        throw reason instanceof SdkError ? reason : new SdkError(SdkErrorCode.RequestTimeout, String(reason));
      }
      const requestAbort = codec.era === MODERN_WIRE_REVISION && this._transport.hasPerRequestStream === true ? new AbortController() : void 0;
      const messageId = this._requestMessageId++;
      cleanupMessageId = messageId;
      const jsonrpcRequest = {
        ...request,
        jsonrpc: "2.0",
        id: messageId
      };
      if (options?.onprogress) {
        this._progressHandlers.set(messageId, options.onprogress);
        jsonrpcRequest.params = {
          ...request.params,
          _meta: {
            ...request.params?._meta,
            progressToken: messageId
          }
        };
      }
      const outbound = this._envelopeOutbound(jsonrpcRequest);
      let responseReceived = false;
      const cancel = (reason) => {
        if (responseReceived) return;
        this._progressHandlers.delete(messageId);
        if (requestAbort === void 0) this._transport?.send(this._envelopeOutbound({
          jsonrpc: "2.0",
          method: "notifications/cancelled",
          params: {
            requestId: messageId,
            reason: String(reason)
          }
        }), {
          relatedRequestId,
          resumptionToken,
          onresumptiontoken
        }).catch((error3) => this._onerror(/* @__PURE__ */ new Error(`Failed to send cancellation: ${error3}`)));
        else requestAbort.abort();
        reject(reason instanceof SdkError ? reason : new SdkError(SdkErrorCode.RequestTimeout, String(reason)));
      };
      this._responseHandlers.set(messageId, (response) => {
        if (options?.signal?.aborted) return;
        responseReceived = true;
        if (response instanceof Error) return reject(response);
        let decoded;
        try {
          decoded = codec.decodeResult(request.method, response.result);
        } catch (error3) {
          return reject(error3 instanceof Error ? error3 : new Error(String(error3)));
        }
        if (decoded.kind === "invalid") return reject(decoded.error);
        if (decoded.kind === "input_required") {
          if (options?.allowInputRequired === true) return resolve(manualInputRequiredValue(decoded));
          const flow = {
            codec,
            request,
            resultSchema,
            options,
            flowStartedAt,
            retry: (params, legOptions) => this._requestWithSchemaViaCodec(codec, params === void 0 ? { method: request.method } : {
              method: request.method,
              params
            }, resultSchema, legOptions)
          };
          return resolve(this._resolveNonCompleteResult(decoded, flow));
        }
        const result = decoded.result;
        validateStandardSchema(resultSchema, result).then((parseResult) => {
          if (parseResult.success) resolve(parseResult.data);
          else reject(new SdkError(SdkErrorCode.InvalidResult, `Invalid result for ${request.method}: ${parseResult.error}`));
        }, reject);
      });
      onAbort = () => cancel(options?.signal?.reason);
      options?.signal?.addEventListener("abort", onAbort, { once: true });
      const timeout = options?.timeout ?? DEFAULT_REQUEST_TIMEOUT_MSEC;
      const timeoutHandler = () => cancel(new SdkError(SdkErrorCode.RequestTimeout, "Request timed out", { timeout }));
      this._setupTimeout(messageId, timeout, options?.maxTotalTimeout, timeoutHandler, options?.resetTimeoutOnProgress ?? false);
      this._transport.send(outbound, {
        relatedRequestId,
        resumptionToken,
        onresumptiontoken,
        headers,
        requestSignal: requestAbort?.signal
      }).catch((error3) => {
        this._progressHandlers.delete(messageId);
        reject(error3);
      });
    }).finally(() => {
      if (onAbort) options?.signal?.removeEventListener("abort", onAbort);
      if (cleanupMessageId !== void 0) {
        this._responseHandlers.delete(cleanupMessageId);
        this._cleanupTimeout(cleanupMessageId);
      }
    });
  }
  /**
  * Emits a notification, which is a one-way message that does not expect a response.
  */
  async notification(notification, options) {
    return this._notificationViaCodec(this._resolveOutboundCodec(notification.method), notification, options);
  }
  /**
  * The notification funnel proper, keyed by the resolved era codec —
  * direct sends and related notifications (`ctx.mcpReq.notify`) alike
  * resolve through the instance's negotiated era at send time.
  */
  async _notificationViaCodec(codec, notification, options) {
    if (!this._transport) throw new SdkError(SdkErrorCode.NotConnected, "Not connected");
    if (isSpecNotificationMethod(notification.method) && !codec.hasNotificationMethod(notification.method)) throw new SdkError(SdkErrorCode.MethodNotSupportedByProtocolVersion, `Notification '${notification.method}' is not supported by the negotiated protocol version (wire era ${codec.era})`, {
      method: notification.method,
      era: codec.era
    });
    this.assertNotificationCapability(notification.method);
    const jsonrpcNotification = this._envelopeOutbound({
      jsonrpc: "2.0",
      ...notification
    });
    if ((this._options?.debouncedNotificationMethods ?? []).includes(notification.method) && !notification.params && !options?.relatedRequestId) {
      if (this._pendingDebouncedNotifications.has(notification.method)) return;
      this._pendingDebouncedNotifications.add(notification.method);
      Promise.resolve().then(() => {
        this._pendingDebouncedNotifications.delete(notification.method);
        if (!this._transport) return;
        this._transport?.send(jsonrpcNotification, options).catch((error3) => this._onerror(error3));
      });
      return;
    }
    await this._transport.send(jsonrpcNotification, options);
  }
  setRequestHandler(method, schemasOrHandler, maybeHandler) {
    this.assertRequestHandlerCapability(method);
    let stored;
    if (typeof schemasOrHandler === "function") {
      if (!isSpecRequestMethod(method)) throw new TypeError(`'${method}' is not a spec request method; pass schemas as the second argument to setRequestHandler().`);
      stored = (request, ctx) => {
        const dispatchCodec = this._negotiatedWireCodec();
        let outcome = dispatchCodec.validateRequest(method, request);
        if (!outcome.ok && outcome.reason === "not-in-era") outcome = dispatchCodec.validateInputRequest(method, request);
        if (!outcome.ok) {
          if (outcome.reason === "not-in-era") throw new ProtocolError(ProtocolErrorCode.InternalError, `No wire schema for ${method} in the resolved era`);
          throw new Error(outcome.message);
        }
        return Promise.resolve(schemasOrHandler(outcome.value, ctx));
      };
    } else if (maybeHandler) stored = async (request, ctx) => {
      const parsed = await validateStandardSchema(schemasOrHandler.params, { ...request.params });
      if (!parsed.success) throw new ProtocolError(ProtocolErrorCode.InvalidParams, `Invalid params for ${method}: ${parsed.error}`);
      return maybeHandler(parsed.data, ctx);
    };
    else throw new TypeError("setRequestHandler: handler is required");
    this._requestHandlers.set(method, this._wrapHandler(method, stored));
  }
  /**
  * Hook for subclasses to wrap a registered request handler with role-specific
  * validation or behavior (e.g. `Server` validates `tools/call` results, `Client`
  * validates `elicitation/create` mode and result). Runs for both the 2-arg and
  * 3-arg registration paths. The default implementation is identity.
  *
  * Subclasses overriding this hook avoid redeclaring `setRequestHandler`'s overload set.
  */
  _wrapHandler(_method, handler) {
    return handler;
  }
  /**
  * Hook for subclasses to supply the implementation identity the 2026-era
  * encode seam stamps into outbound result `_meta` under
  * `io.modelcontextprotocol/serverInfo` (spec PR #3002: servers SHOULD
  * identify themselves on every response). The default is `undefined` — no
  * stamp. Only `Server` overrides this: the key identifies the software
  * producing a response, and the 2025-era codec never stamps anything
  * regardless (the never-stamp guarantee).
  */
  _outboundServerInfo() {
  }
  /**
  * Removes the request handler for the given method.
  */
  removeRequestHandler(method) {
    this._requestHandlers.delete(method);
  }
  /**
  * Asserts that a request handler has not already been set for the given method, in preparation for a new one being automatically installed.
  */
  assertCanSetRequestHandler(method) {
    if (this._requestHandlers.has(method)) throw new Error(`A request handler for ${method} already exists, which would be overridden`);
  }
  setNotificationHandler(method, schemasOrHandler, maybeHandler) {
    if (typeof schemasOrHandler === "function") {
      if (!isSpecNotificationMethod(method)) throw new TypeError(`'${method}' is not a spec notification method; pass schemas as the second argument to setNotificationHandler().`);
      this._notificationHandlers.set(method, (notification, codec) => {
        const outcome = codec.validateNotification(method, notification);
        if (!outcome.ok) {
          if (outcome.reason === "not-in-era") throw new ProtocolError(ProtocolErrorCode.InternalError, `No wire schema for ${method} in the resolved era`);
          throw new Error(outcome.message);
        }
        return Promise.resolve(schemasOrHandler(outcome.value));
      });
      return;
    }
    if (!maybeHandler) throw new TypeError("setNotificationHandler: handler is required");
    this._notificationHandlers.set(method, async (notification) => {
      const parsed = await validateStandardSchema(schemasOrHandler.params, { ...notification.params });
      if (!parsed.success) throw new ProtocolError(ProtocolErrorCode.InvalidParams, `Invalid params for notification ${method}: ${parsed.error}`);
      await maybeHandler(parsed.data, notification);
    });
  }
  /**
  * Removes the notification handler for the given method.
  */
  removeNotificationHandler(method) {
    this._notificationHandlers.delete(method);
  }
};
function isPlainObject$1(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}
function mergeCapabilities(base, additional) {
  const result = { ...base };
  for (const key in additional) {
    const k = key;
    const addValue = additional[k];
    if (addValue === void 0) continue;
    const baseValue = result[k];
    result[k] = isPlainObject$1(baseValue) && isPlainObject$1(addValue) ? {
      ...baseValue,
      ...addValue
    } : addValue;
  }
  return result;
}
function isPlainObject3(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
function partitionInputResponses(inputResponses) {
  const accepted = {};
  const droppedKeys = [];
  if (!isPlainObject3(inputResponses)) return {
    accepted,
    droppedKeys
  };
  for (const [key, entry] of Object.entries(inputResponses)) {
    if (!isPlainObject3(entry) || "method" in entry || "result" in entry) {
      droppedKeys.push(key);
      continue;
    }
    accepted[key] = entry;
  }
  return {
    accepted,
    droppedKeys
  };
}
function manualInputRequiredValue(decoded) {
  return {
    resultType: "input_required",
    inputRequests: decoded.inputRequests,
    ...decoded.requestState !== void 0 && { requestState: decoded.requestState }
  };
}
var require_content_type = /* @__PURE__ */ __commonJSMin(((exports) => {
  var PARAM_REGEXP = /; *([!#$%&'*+.^_`|~0-9A-Za-z-]+) *= *("(?:[\u000b\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u000b\u0020-\u00ff])*"|[!#$%&'*+.^_`|~0-9A-Za-z-]+) */g;
  var QESC_REGEXP = /\\([\u000b\u0020-\u00ff])/g;
  var TYPE_REGEXP = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+\/[!#$%&'*+.^_`|~0-9A-Za-z-]+$/;
  exports.parse = parse6;
  function parse6(string8) {
    if (!string8) throw new TypeError("argument string is required");
    var header = typeof string8 === "object" ? getcontenttype(string8) : string8;
    if (typeof header !== "string") throw new TypeError("argument string is required to be a string");
    var index = header.indexOf(";");
    var type = index !== -1 ? header.slice(0, index).trim() : header.trim();
    if (!TYPE_REGEXP.test(type)) throw new TypeError("invalid media type");
    var obj = new ContentType(type.toLowerCase());
    if (index !== -1) {
      var key;
      var match;
      var value;
      PARAM_REGEXP.lastIndex = index;
      while (match = PARAM_REGEXP.exec(header)) {
        if (match.index !== index) throw new TypeError("invalid parameter format");
        index += match[0].length;
        key = match[1].toLowerCase();
        value = match[2];
        if (value.charCodeAt(0) === 34) {
          value = value.slice(1, -1);
          if (value.indexOf("\\") !== -1) value = value.replace(QESC_REGEXP, "$1");
        }
        obj.parameters[key] = value;
      }
      if (index !== header.length) throw new TypeError("invalid parameter format");
    }
    return obj;
  }
  function getcontenttype(obj) {
    var header;
    if (typeof obj.getHeader === "function") header = obj.getHeader("content-type");
    else if (typeof obj.headers === "object") header = obj.headers && obj.headers["content-type"];
    if (typeof header !== "string") throw new TypeError("content-type header is missing from object");
    return header;
  }
  function ContentType(type) {
    this.parameters = /* @__PURE__ */ Object.create(null);
    this.type = type;
  }
}));
var import_content_type = /* @__PURE__ */ __toESM(require_content_type(), 1);
function mediaTypeEssence(header) {
  if (!header) return;
  try {
    return import_content_type.parse(header).type;
  } catch {
    const essence = (header.split(";", 1)[0] ?? "").trim().toLowerCase();
    if (essence === "" || header.slice(essence.length).includes(",")) return;
    return essence;
  }
}
function isJsonContentType(header) {
  if (header === "application/json") return true;
  return mediaTypeEssence(header) === "application/json";
}
var STDIO_DEFAULT_MAX_BUFFER_SIZE = 10 * 1024 * 1024;
var TOOL_NAME_REGEX = /^[A-Za-z0-9._-]{1,128}$/;
function validateToolName(name) {
  const warnings = [];
  if (name.length === 0) return {
    isValid: false,
    warnings: ["Tool name cannot be empty"]
  };
  if (name.length > 128) return {
    isValid: false,
    warnings: [`Tool name exceeds maximum length of 128 characters (current: ${name.length})`]
  };
  if (name.includes(" ")) warnings.push("Tool name contains spaces, which may cause parsing issues");
  if (name.includes(",")) warnings.push("Tool name contains commas, which may cause parsing issues");
  if (name.startsWith("-") || name.endsWith("-")) warnings.push("Tool name starts or ends with a dash, which may cause parsing issues in some contexts");
  if (name.startsWith(".") || name.endsWith(".")) warnings.push("Tool name starts or ends with a dot, which may cause parsing issues in some contexts");
  if (!TOOL_NAME_REGEX.test(name)) {
    const invalidChars = [...name].filter((char) => !/[A-Za-z0-9._-]/.test(char)).filter((char, index, arr) => arr.indexOf(char) === index);
    warnings.push(`Tool name contains invalid characters: ${invalidChars.map((c) => `"${c}"`).join(", ")}`, "Allowed characters are: A-Z, a-z, 0-9, underscore (_), dash (-), and dot (.)");
    return {
      isValid: false,
      warnings
    };
  }
  return {
    isValid: true,
    warnings
  };
}
function issueToolNameWarning(name, warnings) {
  if (warnings.length > 0) {
    console.warn(`Tool name validation warning for "${name}":`);
    for (const warning of warnings) console.warn(`  - ${warning}`);
    console.warn("Tool registration will proceed, but this may cause compatibility issues.");
    console.warn("Consider updating the tool name to conform to the MCP tool naming standard.");
    console.warn("See SEP: Specify Format for Tool Names (https://github.com/modelcontextprotocol/modelcontextprotocol/issues/986) for more details.");
  }
}
function validateAndWarnToolName(name) {
  const result = validateToolName(name);
  issueToolNameWarning(name, result.warnings);
  return result.isValid;
}
function isZodV4Schema(v) {
  return typeof v === "object" && v !== null && "_zod" in v;
}
function looksLikeZodV3(v) {
  return typeof v === "object" && v !== null && !("_zod" in v) && "_def" in v && typeof v._def?.typeName === "string";
}
function isZodRawShape(obj) {
  if (typeof obj !== "object" || obj === null) return false;
  if (isStandardSchema(obj)) return false;
  const proto = Object.getPrototypeOf(obj);
  if (proto !== Object.prototype && proto !== null) return false;
  return Object.values(obj).every((v) => isZodV4Schema(v));
}
function normalizeRawShapeSchema(schema) {
  if (schema === void 0) return void 0;
  if (isZodRawShape(schema)) return object2(schema);
  if (typeof schema === "object" && schema !== null && !isStandardSchema(schema) && Object.values(schema).some((v) => looksLikeZodV3(v))) throw new TypeError("Raw-shape inputSchema/outputSchema/argsSchema fields must be Zod v4 schemas. Got a Zod v3 field schema. Import from `zod/v4` (or upgrade your zod import), or wrap with `z.object({...})` yourself.");
  if (!isStandardSchema(schema)) throw new TypeError("inputSchema/outputSchema/argsSchema must be a Standard Schema (e.g. z.object({...})) or a raw Zod shape ({ field: z.string() }).");
  return schema;
}

// node_modules/@modelcontextprotocol/server/dist/cfWorkerProvider-p3WaZPqB.mjs
function deepCompareStrict(a, b) {
  const typeofa = typeof a;
  if (typeofa !== typeof b) return false;
  if (Array.isArray(a)) {
    if (!Array.isArray(b)) return false;
    const length = a.length;
    if (length !== b.length) return false;
    for (let i = 0; i < length; i++) if (!deepCompareStrict(a[i], b[i])) return false;
    return true;
  }
  if (typeofa === "object") {
    if (!a || !b) return a === b;
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);
    if (aKeys.length !== bKeys.length) return false;
    for (const k of aKeys) if (!deepCompareStrict(a[k], b[k])) return false;
    return true;
  }
  return a === b;
}
function encodePointer(p) {
  return encodeURI(escapePointer(p));
}
function escapePointer(p) {
  return p.replace(/~/g, "~0").replace(/\//g, "~1");
}
var schemaArrayKeyword = {
  prefixItems: true,
  items: true,
  allOf: true,
  anyOf: true,
  oneOf: true
};
var schemaMapKeyword = {
  $defs: true,
  definitions: true,
  properties: true,
  patternProperties: true,
  dependentSchemas: true
};
var ignoredKeyword = {
  id: true,
  $id: true,
  $ref: true,
  $schema: true,
  $anchor: true,
  $vocabulary: true,
  $comment: true,
  default: true,
  enum: true,
  const: true,
  required: true,
  type: true,
  maximum: true,
  minimum: true,
  exclusiveMaximum: true,
  exclusiveMinimum: true,
  multipleOf: true,
  maxLength: true,
  minLength: true,
  pattern: true,
  format: true,
  maxItems: true,
  minItems: true,
  uniqueItems: true,
  maxProperties: true,
  minProperties: true
};
var initialBaseURI = typeof self !== "undefined" && self.location && self.location.origin !== "null" ? new URL(self.location.origin + self.location.pathname + location.search) : new URL("https://github.com/cfworker");
function dereference(schema, lookup = /* @__PURE__ */ Object.create(null), baseURI = initialBaseURI, basePointer = "") {
  if (schema && typeof schema === "object" && !Array.isArray(schema)) {
    const id = schema.$id || schema.id;
    if (id) {
      const url3 = new URL(id, baseURI.href);
      if (url3.hash.length > 1) lookup[url3.href] = schema;
      else {
        url3.hash = "";
        if (basePointer === "") baseURI = url3;
        else dereference(schema, lookup, baseURI);
      }
    }
  } else if (schema !== true && schema !== false) return lookup;
  const schemaURI = baseURI.href + (basePointer ? "#" + basePointer : "");
  if (lookup[schemaURI] !== void 0) throw new Error(`Duplicate schema URI "${schemaURI}".`);
  lookup[schemaURI] = schema;
  if (schema === true || schema === false) return lookup;
  if (schema.__absolute_uri__ === void 0) Object.defineProperty(schema, "__absolute_uri__", {
    enumerable: false,
    value: schemaURI
  });
  if (schema.$ref && schema.__absolute_ref__ === void 0) {
    const url3 = new URL(schema.$ref, baseURI.href);
    url3.hash = url3.hash;
    Object.defineProperty(schema, "__absolute_ref__", {
      enumerable: false,
      value: url3.href
    });
  }
  if (schema.$recursiveRef && schema.__absolute_recursive_ref__ === void 0) {
    const url3 = new URL(schema.$recursiveRef, baseURI.href);
    url3.hash = url3.hash;
    Object.defineProperty(schema, "__absolute_recursive_ref__", {
      enumerable: false,
      value: url3.href
    });
  }
  if (schema.$anchor) {
    const url3 = new URL("#" + schema.$anchor, baseURI.href);
    lookup[url3.href] = schema;
  }
  for (let key in schema) {
    if (ignoredKeyword[key]) continue;
    const keyBase = `${basePointer}/${encodePointer(key)}`;
    const subSchema = schema[key];
    if (Array.isArray(subSchema)) {
      if (schemaArrayKeyword[key]) {
        const length = subSchema.length;
        for (let i = 0; i < length; i++) dereference(subSchema[i], lookup, baseURI, `${keyBase}/${i}`);
      }
    } else if (schemaMapKeyword[key]) for (let subKey in subSchema) dereference(subSchema[subKey], lookup, baseURI, `${keyBase}/${encodePointer(subKey)}`);
    else dereference(subSchema, lookup, baseURI, keyBase);
  }
  return lookup;
}
var DATE = /^(\d\d\d\d)-(\d\d)-(\d\d)$/;
var DAYS = [
  0,
  31,
  28,
  31,
  30,
  31,
  30,
  31,
  31,
  30,
  31,
  30,
  31
];
var TIME = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d(?::?\d\d)?)?$/i;
var HOSTNAME = /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i;
var URIREF = /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
var URITEMPLATE = /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i;
var URL_ = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u{00a1}-\u{ffff}0-9]+-?)*[a-z\u{00a1}-\u{ffff}0-9]+)(?:\.(?:[a-z\u{00a1}-\u{ffff}0-9]+-?)*[a-z\u{00a1}-\u{ffff}0-9]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu;
var UUID = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i;
var JSON_POINTER = /^(?:\/(?:[^~/]|~0|~1)*)*$/;
var JSON_POINTER_URI_FRAGMENT = /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i;
var RELATIVE_JSON_POINTER = /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/;
var EMAIL = (input) => {
  if (input[0] === '"') return false;
  const [name, host, ...rest] = input.split("@");
  if (!name || !host || rest.length !== 0 || name.length > 64 || host.length > 253) return false;
  if (name[0] === "." || name.endsWith(".") || name.includes("..")) return false;
  if (!/^[a-z0-9.-]+$/i.test(host) || !/^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+$/i.test(name)) return false;
  return host.split(".").every((part) => /^[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?$/i.test(part));
};
var IPV4 = /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/;
var IPV6 = /^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i;
var DURATION = (input) => input.length > 1 && input.length < 80 && (/^P\d+([.,]\d+)?W$/.test(input) || /^P[\dYMDTHS]*(\d[.,]\d+)?[YMDHS]$/.test(input) && /^P([.,\d]+Y)?([.,\d]+M)?([.,\d]+D)?(T([.,\d]+H)?([.,\d]+M)?([.,\d]+S)?)?$/.test(input));
function bind(r) {
  return r.test.bind(r);
}
var format = {
  date: date6,
  time: time5.bind(void 0, false),
  "date-time": date_time,
  duration: DURATION,
  uri,
  "uri-reference": bind(URIREF),
  "uri-template": bind(URITEMPLATE),
  url: bind(URL_),
  email: EMAIL,
  hostname: bind(HOSTNAME),
  ipv4: bind(IPV4),
  ipv6: bind(IPV6),
  regex,
  uuid: bind(UUID),
  "json-pointer": bind(JSON_POINTER),
  "json-pointer-uri-fragment": bind(JSON_POINTER_URI_FRAGMENT),
  "relative-json-pointer": bind(RELATIVE_JSON_POINTER)
};
function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
function date6(str) {
  const matches = str.match(DATE);
  if (!matches) return false;
  const year = +matches[1];
  const month = +matches[2];
  const day = +matches[3];
  return month >= 1 && month <= 12 && day >= 1 && day <= (month == 2 && isLeapYear(year) ? 29 : DAYS[month]);
}
function time5(full, str) {
  const matches = str.match(TIME);
  if (!matches) return false;
  const hour = +matches[1];
  const minute = +matches[2];
  const second = +matches[3];
  const timeZone = !!matches[5];
  return (hour <= 23 && minute <= 59 && second <= 59 || hour == 23 && minute == 59 && second == 60) && (!full || timeZone);
}
var DATE_TIME_SEPARATOR = /t|\s/i;
function date_time(str) {
  const dateTime = str.split(DATE_TIME_SEPARATOR);
  return dateTime.length == 2 && date6(dateTime[0]) && time5(true, dateTime[1]);
}
var NOT_URI_FRAGMENT = /\/|:/;
var URI_PATTERN = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
function uri(str) {
  return NOT_URI_FRAGMENT.test(str) && URI_PATTERN.test(str);
}
var Z_ANCHOR = /[^\\]\\Z/;
function regex(str) {
  if (Z_ANCHOR.test(str)) return false;
  try {
    new RegExp(str, "u");
    return true;
  } catch (e) {
    return false;
  }
}
function ucs2length(s) {
  let result = 0;
  let length = s.length;
  let index = 0;
  let charCode;
  while (index < length) {
    result++;
    charCode = s.charCodeAt(index++);
    if (charCode >= 55296 && charCode <= 56319 && index < length) {
      charCode = s.charCodeAt(index);
      if ((charCode & 64512) == 56320) index++;
    }
  }
  return result;
}
function validate(instance, schema, draft = "2019-09", lookup = dereference(schema), shortCircuit = true, recursiveAnchor = null, instanceLocation = "#", schemaLocation = "#", evaluated = /* @__PURE__ */ Object.create(null)) {
  if (schema === true) return {
    valid: true,
    errors: []
  };
  if (schema === false) return {
    valid: false,
    errors: [{
      instanceLocation,
      keyword: "false",
      keywordLocation: instanceLocation,
      error: "False boolean schema."
    }]
  };
  const rawInstanceType = typeof instance;
  let instanceType;
  switch (rawInstanceType) {
    case "boolean":
    case "number":
    case "string":
      instanceType = rawInstanceType;
      break;
    case "object":
      if (instance === null) instanceType = "null";
      else if (Array.isArray(instance)) instanceType = "array";
      else instanceType = "object";
      break;
    default:
      throw new Error(`Instances of "${rawInstanceType}" type are not supported.`);
  }
  const { $ref, $recursiveRef, $recursiveAnchor, type: $type, const: $const, enum: $enum, required: $required, not: $not, anyOf: $anyOf, allOf: $allOf, oneOf: $oneOf, if: $if, then: $then, else: $else, format: $format, properties: $properties, patternProperties: $patternProperties, additionalProperties: $additionalProperties, unevaluatedProperties: $unevaluatedProperties, minProperties: $minProperties, maxProperties: $maxProperties, propertyNames: $propertyNames, dependentRequired: $dependentRequired, dependentSchemas: $dependentSchemas, dependencies: $dependencies, prefixItems: $prefixItems, items: $items, additionalItems: $additionalItems, unevaluatedItems: $unevaluatedItems, contains: $contains, minContains: $minContains, maxContains: $maxContains, minItems: $minItems, maxItems: $maxItems, uniqueItems: $uniqueItems, minimum: $minimum, maximum: $maximum, exclusiveMinimum: $exclusiveMinimum, exclusiveMaximum: $exclusiveMaximum, multipleOf: $multipleOf, minLength: $minLength, maxLength: $maxLength, pattern: $pattern, __absolute_ref__, __absolute_recursive_ref__ } = schema;
  const errors = [];
  if ($recursiveAnchor === true && recursiveAnchor === null) recursiveAnchor = schema;
  if ($recursiveRef === "#") {
    const refSchema = recursiveAnchor === null ? lookup[__absolute_recursive_ref__] : recursiveAnchor;
    const keywordLocation = `${schemaLocation}/$recursiveRef`;
    const result = validate(instance, recursiveAnchor === null ? schema : recursiveAnchor, draft, lookup, shortCircuit, refSchema, instanceLocation, keywordLocation, evaluated);
    if (!result.valid) errors.push({
      instanceLocation,
      keyword: "$recursiveRef",
      keywordLocation,
      error: "A subschema had errors."
    }, ...result.errors);
  }
  if ($ref !== void 0) {
    const refSchema = lookup[__absolute_ref__ || $ref];
    if (refSchema === void 0) {
      let message = `Unresolved $ref "${$ref}".`;
      if (__absolute_ref__ && __absolute_ref__ !== $ref) message += `  Absolute URI "${__absolute_ref__}".`;
      message += `
Known schemas:
- ${Object.keys(lookup).join("\n- ")}`;
      throw new Error(message);
    }
    const keywordLocation = `${schemaLocation}/$ref`;
    const result = validate(instance, refSchema, draft, lookup, shortCircuit, recursiveAnchor, instanceLocation, keywordLocation, evaluated);
    if (!result.valid) errors.push({
      instanceLocation,
      keyword: "$ref",
      keywordLocation,
      error: "A subschema had errors."
    }, ...result.errors);
    if (draft === "4" || draft === "7") return {
      valid: errors.length === 0,
      errors
    };
  }
  if (Array.isArray($type)) {
    let length = $type.length;
    let valid = false;
    for (let i = 0; i < length; i++) if (instanceType === $type[i] || $type[i] === "integer" && instanceType === "number" && instance % 1 === 0 && instance === instance) {
      valid = true;
      break;
    }
    if (!valid) errors.push({
      instanceLocation,
      keyword: "type",
      keywordLocation: `${schemaLocation}/type`,
      error: `Instance type "${instanceType}" is invalid. Expected "${$type.join('", "')}".`
    });
  } else if ($type === "integer") {
    if (instanceType !== "number" || instance % 1 || instance !== instance) errors.push({
      instanceLocation,
      keyword: "type",
      keywordLocation: `${schemaLocation}/type`,
      error: `Instance type "${instanceType}" is invalid. Expected "${$type}".`
    });
  } else if ($type !== void 0 && instanceType !== $type) errors.push({
    instanceLocation,
    keyword: "type",
    keywordLocation: `${schemaLocation}/type`,
    error: `Instance type "${instanceType}" is invalid. Expected "${$type}".`
  });
  if ($const !== void 0) {
    if (instanceType === "object" || instanceType === "array") {
      if (!deepCompareStrict(instance, $const)) errors.push({
        instanceLocation,
        keyword: "const",
        keywordLocation: `${schemaLocation}/const`,
        error: `Instance does not match ${JSON.stringify($const)}.`
      });
    } else if (instance !== $const) errors.push({
      instanceLocation,
      keyword: "const",
      keywordLocation: `${schemaLocation}/const`,
      error: `Instance does not match ${JSON.stringify($const)}.`
    });
  }
  if ($enum !== void 0) {
    if (instanceType === "object" || instanceType === "array") {
      if (!$enum.some((value) => deepCompareStrict(instance, value))) errors.push({
        instanceLocation,
        keyword: "enum",
        keywordLocation: `${schemaLocation}/enum`,
        error: `Instance does not match any of ${JSON.stringify($enum)}.`
      });
    } else if (!$enum.some((value) => instance === value)) errors.push({
      instanceLocation,
      keyword: "enum",
      keywordLocation: `${schemaLocation}/enum`,
      error: `Instance does not match any of ${JSON.stringify($enum)}.`
    });
  }
  if ($not !== void 0) {
    const keywordLocation = `${schemaLocation}/not`;
    if (validate(instance, $not, draft, lookup, shortCircuit, recursiveAnchor, instanceLocation, keywordLocation).valid) errors.push({
      instanceLocation,
      keyword: "not",
      keywordLocation,
      error: 'Instance matched "not" schema.'
    });
  }
  let subEvaluateds = [];
  if ($anyOf !== void 0) {
    const keywordLocation = `${schemaLocation}/anyOf`;
    const errorsLength = errors.length;
    let anyValid = false;
    for (let i = 0; i < $anyOf.length; i++) {
      const subSchema = $anyOf[i];
      const subEvaluated = Object.create(evaluated);
      const result = validate(instance, subSchema, draft, lookup, shortCircuit, $recursiveAnchor === true ? recursiveAnchor : null, instanceLocation, `${keywordLocation}/${i}`, subEvaluated);
      errors.push(...result.errors);
      anyValid = anyValid || result.valid;
      if (result.valid) subEvaluateds.push(subEvaluated);
    }
    if (anyValid) errors.length = errorsLength;
    else errors.splice(errorsLength, 0, {
      instanceLocation,
      keyword: "anyOf",
      keywordLocation,
      error: "Instance does not match any subschemas."
    });
  }
  if ($allOf !== void 0) {
    const keywordLocation = `${schemaLocation}/allOf`;
    const errorsLength = errors.length;
    let allValid = true;
    for (let i = 0; i < $allOf.length; i++) {
      const subSchema = $allOf[i];
      const subEvaluated = Object.create(evaluated);
      const result = validate(instance, subSchema, draft, lookup, shortCircuit, $recursiveAnchor === true ? recursiveAnchor : null, instanceLocation, `${keywordLocation}/${i}`, subEvaluated);
      errors.push(...result.errors);
      allValid = allValid && result.valid;
      if (result.valid) subEvaluateds.push(subEvaluated);
    }
    if (allValid) errors.length = errorsLength;
    else errors.splice(errorsLength, 0, {
      instanceLocation,
      keyword: "allOf",
      keywordLocation,
      error: `Instance does not match every subschema.`
    });
  }
  if ($oneOf !== void 0) {
    const keywordLocation = `${schemaLocation}/oneOf`;
    const errorsLength = errors.length;
    const matches = $oneOf.filter((subSchema, i) => {
      const subEvaluated = Object.create(evaluated);
      const result = validate(instance, subSchema, draft, lookup, shortCircuit, $recursiveAnchor === true ? recursiveAnchor : null, instanceLocation, `${keywordLocation}/${i}`, subEvaluated);
      errors.push(...result.errors);
      if (result.valid) subEvaluateds.push(subEvaluated);
      return result.valid;
    }).length;
    if (matches === 1) errors.length = errorsLength;
    else errors.splice(errorsLength, 0, {
      instanceLocation,
      keyword: "oneOf",
      keywordLocation,
      error: `Instance does not match exactly one subschema (${matches} matches).`
    });
  }
  if (instanceType === "object" || instanceType === "array") Object.assign(evaluated, ...subEvaluateds);
  if ($if !== void 0) {
    const keywordLocation = `${schemaLocation}/if`;
    if (validate(instance, $if, draft, lookup, shortCircuit, recursiveAnchor, instanceLocation, keywordLocation, evaluated).valid) {
      if ($then !== void 0) {
        const thenResult = validate(instance, $then, draft, lookup, shortCircuit, recursiveAnchor, instanceLocation, `${schemaLocation}/then`, evaluated);
        if (!thenResult.valid) errors.push({
          instanceLocation,
          keyword: "if",
          keywordLocation,
          error: `Instance does not match "then" schema.`
        }, ...thenResult.errors);
      }
    } else if ($else !== void 0) {
      const elseResult = validate(instance, $else, draft, lookup, shortCircuit, recursiveAnchor, instanceLocation, `${schemaLocation}/else`, evaluated);
      if (!elseResult.valid) errors.push({
        instanceLocation,
        keyword: "if",
        keywordLocation,
        error: `Instance does not match "else" schema.`
      }, ...elseResult.errors);
    }
  }
  if (instanceType === "object") {
    if ($required !== void 0) {
      for (const key of $required) if (!(key in instance)) errors.push({
        instanceLocation,
        keyword: "required",
        keywordLocation: `${schemaLocation}/required`,
        error: `Instance does not have required property "${key}".`
      });
    }
    const keys = Object.keys(instance);
    if ($minProperties !== void 0 && keys.length < $minProperties) errors.push({
      instanceLocation,
      keyword: "minProperties",
      keywordLocation: `${schemaLocation}/minProperties`,
      error: `Instance does not have at least ${$minProperties} properties.`
    });
    if ($maxProperties !== void 0 && keys.length > $maxProperties) errors.push({
      instanceLocation,
      keyword: "maxProperties",
      keywordLocation: `${schemaLocation}/maxProperties`,
      error: `Instance does not have at least ${$maxProperties} properties.`
    });
    if ($propertyNames !== void 0) {
      const keywordLocation = `${schemaLocation}/propertyNames`;
      for (const key in instance) {
        const subInstancePointer = `${instanceLocation}/${encodePointer(key)}`;
        const result = validate(key, $propertyNames, draft, lookup, shortCircuit, recursiveAnchor, subInstancePointer, keywordLocation);
        if (!result.valid) errors.push({
          instanceLocation,
          keyword: "propertyNames",
          keywordLocation,
          error: `Property name "${key}" does not match schema.`
        }, ...result.errors);
      }
    }
    if ($dependentRequired !== void 0) {
      const keywordLocation = `${schemaLocation}/dependantRequired`;
      for (const key in $dependentRequired) if (key in instance) {
        const required4 = $dependentRequired[key];
        for (const dependantKey of required4) if (!(dependantKey in instance)) errors.push({
          instanceLocation,
          keyword: "dependentRequired",
          keywordLocation,
          error: `Instance has "${key}" but does not have "${dependantKey}".`
        });
      }
    }
    if ($dependentSchemas !== void 0) for (const key in $dependentSchemas) {
      const keywordLocation = `${schemaLocation}/dependentSchemas`;
      if (key in instance) {
        const result = validate(instance, $dependentSchemas[key], draft, lookup, shortCircuit, recursiveAnchor, instanceLocation, `${keywordLocation}/${encodePointer(key)}`, evaluated);
        if (!result.valid) errors.push({
          instanceLocation,
          keyword: "dependentSchemas",
          keywordLocation,
          error: `Instance has "${key}" but does not match dependant schema.`
        }, ...result.errors);
      }
    }
    if ($dependencies !== void 0) {
      const keywordLocation = `${schemaLocation}/dependencies`;
      for (const key in $dependencies) if (key in instance) {
        const propsOrSchema = $dependencies[key];
        if (Array.isArray(propsOrSchema)) {
          for (const dependantKey of propsOrSchema) if (!(dependantKey in instance)) errors.push({
            instanceLocation,
            keyword: "dependencies",
            keywordLocation,
            error: `Instance has "${key}" but does not have "${dependantKey}".`
          });
        } else {
          const result = validate(instance, propsOrSchema, draft, lookup, shortCircuit, recursiveAnchor, instanceLocation, `${keywordLocation}/${encodePointer(key)}`);
          if (!result.valid) errors.push({
            instanceLocation,
            keyword: "dependencies",
            keywordLocation,
            error: `Instance has "${key}" but does not match dependant schema.`
          }, ...result.errors);
        }
      }
    }
    const thisEvaluated = /* @__PURE__ */ Object.create(null);
    let stop = false;
    if ($properties !== void 0) {
      const keywordLocation = `${schemaLocation}/properties`;
      for (const key in $properties) {
        if (!(key in instance)) continue;
        const subInstancePointer = `${instanceLocation}/${encodePointer(key)}`;
        const result = validate(instance[key], $properties[key], draft, lookup, shortCircuit, recursiveAnchor, subInstancePointer, `${keywordLocation}/${encodePointer(key)}`);
        if (result.valid) evaluated[key] = thisEvaluated[key] = true;
        else {
          stop = shortCircuit;
          errors.push({
            instanceLocation,
            keyword: "properties",
            keywordLocation,
            error: `Property "${key}" does not match schema.`
          }, ...result.errors);
          if (stop) break;
        }
      }
    }
    if (!stop && $patternProperties !== void 0) {
      const keywordLocation = `${schemaLocation}/patternProperties`;
      for (const pattern in $patternProperties) {
        const regex$1 = new RegExp(pattern, "u");
        const subSchema = $patternProperties[pattern];
        for (const key in instance) {
          if (!regex$1.test(key)) continue;
          const subInstancePointer = `${instanceLocation}/${encodePointer(key)}`;
          const result = validate(instance[key], subSchema, draft, lookup, shortCircuit, recursiveAnchor, subInstancePointer, `${keywordLocation}/${encodePointer(pattern)}`);
          if (result.valid) evaluated[key] = thisEvaluated[key] = true;
          else {
            stop = shortCircuit;
            errors.push({
              instanceLocation,
              keyword: "patternProperties",
              keywordLocation,
              error: `Property "${key}" matches pattern "${pattern}" but does not match associated schema.`
            }, ...result.errors);
          }
        }
      }
    }
    if (!stop && $additionalProperties !== void 0) {
      const keywordLocation = `${schemaLocation}/additionalProperties`;
      for (const key in instance) {
        if (thisEvaluated[key]) continue;
        const subInstancePointer = `${instanceLocation}/${encodePointer(key)}`;
        const result = validate(instance[key], $additionalProperties, draft, lookup, shortCircuit, recursiveAnchor, subInstancePointer, keywordLocation);
        if (result.valid) evaluated[key] = true;
        else {
          stop = shortCircuit;
          errors.push({
            instanceLocation,
            keyword: "additionalProperties",
            keywordLocation,
            error: `Property "${key}" does not match additional properties schema.`
          }, ...result.errors);
        }
      }
    } else if (!stop && $unevaluatedProperties !== void 0) {
      const keywordLocation = `${schemaLocation}/unevaluatedProperties`;
      for (const key in instance) if (!evaluated[key]) {
        const subInstancePointer = `${instanceLocation}/${encodePointer(key)}`;
        const result = validate(instance[key], $unevaluatedProperties, draft, lookup, shortCircuit, recursiveAnchor, subInstancePointer, keywordLocation);
        if (result.valid) evaluated[key] = true;
        else errors.push({
          instanceLocation,
          keyword: "unevaluatedProperties",
          keywordLocation,
          error: `Property "${key}" does not match unevaluated properties schema.`
        }, ...result.errors);
      }
    }
  } else if (instanceType === "array") {
    if ($maxItems !== void 0 && instance.length > $maxItems) errors.push({
      instanceLocation,
      keyword: "maxItems",
      keywordLocation: `${schemaLocation}/maxItems`,
      error: `Array has too many items (${instance.length} > ${$maxItems}).`
    });
    if ($minItems !== void 0 && instance.length < $minItems) errors.push({
      instanceLocation,
      keyword: "minItems",
      keywordLocation: `${schemaLocation}/minItems`,
      error: `Array has too few items (${instance.length} < ${$minItems}).`
    });
    const length = instance.length;
    let i = 0;
    let stop = false;
    if ($prefixItems !== void 0) {
      const keywordLocation = `${schemaLocation}/prefixItems`;
      const length2 = Math.min($prefixItems.length, length);
      for (; i < length2; i++) {
        const result = validate(instance[i], $prefixItems[i], draft, lookup, shortCircuit, recursiveAnchor, `${instanceLocation}/${i}`, `${keywordLocation}/${i}`);
        evaluated[i] = true;
        if (!result.valid) {
          stop = shortCircuit;
          errors.push({
            instanceLocation,
            keyword: "prefixItems",
            keywordLocation,
            error: `Items did not match schema.`
          }, ...result.errors);
          if (stop) break;
        }
      }
    }
    if ($items !== void 0) {
      const keywordLocation = `${schemaLocation}/items`;
      if (Array.isArray($items)) {
        const length2 = Math.min($items.length, length);
        for (; i < length2; i++) {
          const result = validate(instance[i], $items[i], draft, lookup, shortCircuit, recursiveAnchor, `${instanceLocation}/${i}`, `${keywordLocation}/${i}`);
          evaluated[i] = true;
          if (!result.valid) {
            stop = shortCircuit;
            errors.push({
              instanceLocation,
              keyword: "items",
              keywordLocation,
              error: `Items did not match schema.`
            }, ...result.errors);
            if (stop) break;
          }
        }
      } else for (; i < length; i++) {
        const result = validate(instance[i], $items, draft, lookup, shortCircuit, recursiveAnchor, `${instanceLocation}/${i}`, keywordLocation);
        evaluated[i] = true;
        if (!result.valid) {
          stop = shortCircuit;
          errors.push({
            instanceLocation,
            keyword: "items",
            keywordLocation,
            error: `Items did not match schema.`
          }, ...result.errors);
          if (stop) break;
        }
      }
      if (!stop && $additionalItems !== void 0) {
        const keywordLocation$1 = `${schemaLocation}/additionalItems`;
        for (; i < length; i++) {
          const result = validate(instance[i], $additionalItems, draft, lookup, shortCircuit, recursiveAnchor, `${instanceLocation}/${i}`, keywordLocation$1);
          evaluated[i] = true;
          if (!result.valid) {
            stop = shortCircuit;
            errors.push({
              instanceLocation,
              keyword: "additionalItems",
              keywordLocation: keywordLocation$1,
              error: `Items did not match additional items schema.`
            }, ...result.errors);
          }
        }
      }
    }
    if ($contains !== void 0) if (length === 0 && $minContains === void 0) errors.push({
      instanceLocation,
      keyword: "contains",
      keywordLocation: `${schemaLocation}/contains`,
      error: `Array is empty. It must contain at least one item matching the schema.`
    });
    else if ($minContains !== void 0 && length < $minContains) errors.push({
      instanceLocation,
      keyword: "minContains",
      keywordLocation: `${schemaLocation}/minContains`,
      error: `Array has less items (${length}) than minContains (${$minContains}).`
    });
    else {
      const keywordLocation = `${schemaLocation}/contains`;
      const errorsLength = errors.length;
      let contained = 0;
      for (let j = 0; j < length; j++) {
        const result = validate(instance[j], $contains, draft, lookup, shortCircuit, recursiveAnchor, `${instanceLocation}/${j}`, keywordLocation);
        if (result.valid) {
          evaluated[j] = true;
          contained++;
        } else errors.push(...result.errors);
      }
      if (contained >= ($minContains || 0)) errors.length = errorsLength;
      if ($minContains === void 0 && $maxContains === void 0 && contained === 0) errors.splice(errorsLength, 0, {
        instanceLocation,
        keyword: "contains",
        keywordLocation,
        error: `Array does not contain item matching schema.`
      });
      else if ($minContains !== void 0 && contained < $minContains) errors.push({
        instanceLocation,
        keyword: "minContains",
        keywordLocation: `${schemaLocation}/minContains`,
        error: `Array must contain at least ${$minContains} items matching schema. Only ${contained} items were found.`
      });
      else if ($maxContains !== void 0 && contained > $maxContains) errors.push({
        instanceLocation,
        keyword: "maxContains",
        keywordLocation: `${schemaLocation}/maxContains`,
        error: `Array may contain at most ${$maxContains} items matching schema. ${contained} items were found.`
      });
    }
    if (!stop && $unevaluatedItems !== void 0) {
      const keywordLocation = `${schemaLocation}/unevaluatedItems`;
      for (; i < length; i++) {
        if (evaluated[i]) continue;
        const result = validate(instance[i], $unevaluatedItems, draft, lookup, shortCircuit, recursiveAnchor, `${instanceLocation}/${i}`, keywordLocation);
        evaluated[i] = true;
        if (!result.valid) errors.push({
          instanceLocation,
          keyword: "unevaluatedItems",
          keywordLocation,
          error: `Items did not match unevaluated items schema.`
        }, ...result.errors);
      }
    }
    if ($uniqueItems) for (let j = 0; j < length; j++) {
      const a = instance[j];
      const ao = typeof a === "object" && a !== null;
      for (let k = 0; k < length; k++) {
        if (j === k) continue;
        const b = instance[k];
        if (a === b || ao && typeof b === "object" && b !== null && deepCompareStrict(a, b)) {
          errors.push({
            instanceLocation,
            keyword: "uniqueItems",
            keywordLocation: `${schemaLocation}/uniqueItems`,
            error: `Duplicate items at indexes ${j} and ${k}.`
          });
          j = Number.MAX_SAFE_INTEGER;
          k = Number.MAX_SAFE_INTEGER;
        }
      }
    }
  } else if (instanceType === "number") {
    if (draft === "4") {
      if ($minimum !== void 0 && ($exclusiveMinimum === true && instance <= $minimum || instance < $minimum)) errors.push({
        instanceLocation,
        keyword: "minimum",
        keywordLocation: `${schemaLocation}/minimum`,
        error: `${instance} is less than ${$exclusiveMinimum ? "or equal to " : ""} ${$minimum}.`
      });
      if ($maximum !== void 0 && ($exclusiveMaximum === true && instance >= $maximum || instance > $maximum)) errors.push({
        instanceLocation,
        keyword: "maximum",
        keywordLocation: `${schemaLocation}/maximum`,
        error: `${instance} is greater than ${$exclusiveMaximum ? "or equal to " : ""} ${$maximum}.`
      });
    } else {
      if ($minimum !== void 0 && instance < $minimum) errors.push({
        instanceLocation,
        keyword: "minimum",
        keywordLocation: `${schemaLocation}/minimum`,
        error: `${instance} is less than ${$minimum}.`
      });
      if ($maximum !== void 0 && instance > $maximum) errors.push({
        instanceLocation,
        keyword: "maximum",
        keywordLocation: `${schemaLocation}/maximum`,
        error: `${instance} is greater than ${$maximum}.`
      });
      if ($exclusiveMinimum !== void 0 && instance <= $exclusiveMinimum) errors.push({
        instanceLocation,
        keyword: "exclusiveMinimum",
        keywordLocation: `${schemaLocation}/exclusiveMinimum`,
        error: `${instance} is less than ${$exclusiveMinimum}.`
      });
      if ($exclusiveMaximum !== void 0 && instance >= $exclusiveMaximum) errors.push({
        instanceLocation,
        keyword: "exclusiveMaximum",
        keywordLocation: `${schemaLocation}/exclusiveMaximum`,
        error: `${instance} is greater than or equal to ${$exclusiveMaximum}.`
      });
    }
    if ($multipleOf !== void 0) {
      const remainder = instance % $multipleOf;
      if (Math.abs(0 - remainder) >= 11920929e-14 && Math.abs($multipleOf - remainder) >= 11920929e-14) errors.push({
        instanceLocation,
        keyword: "multipleOf",
        keywordLocation: `${schemaLocation}/multipleOf`,
        error: `${instance} is not a multiple of ${$multipleOf}.`
      });
    }
  } else if (instanceType === "string") {
    const length = $minLength === void 0 && $maxLength === void 0 ? 0 : ucs2length(instance);
    if ($minLength !== void 0 && length < $minLength) errors.push({
      instanceLocation,
      keyword: "minLength",
      keywordLocation: `${schemaLocation}/minLength`,
      error: `String is too short (${length} < ${$minLength}).`
    });
    if ($maxLength !== void 0 && length > $maxLength) errors.push({
      instanceLocation,
      keyword: "maxLength",
      keywordLocation: `${schemaLocation}/maxLength`,
      error: `String is too long (${length} > ${$maxLength}).`
    });
    if ($pattern !== void 0 && !new RegExp($pattern, "u").test(instance)) errors.push({
      instanceLocation,
      keyword: "pattern",
      keywordLocation: `${schemaLocation}/pattern`,
      error: `String does not match pattern.`
    });
    if ($format !== void 0 && format[$format] && !format[$format](instance)) errors.push({
      instanceLocation,
      keyword: "format",
      keywordLocation: `${schemaLocation}/format`,
      error: `String does not match format "${$format}".`
    });
  }
  return {
    valid: errors.length === 0,
    errors
  };
}
var Validator = class {
  schema;
  draft;
  shortCircuit;
  lookup;
  constructor(schema, draft = "2019-09", shortCircuit = true) {
    this.schema = schema;
    this.draft = draft;
    this.shortCircuit = shortCircuit;
    this.lookup = dereference(schema);
  }
  validate(instance) {
    return validate(instance, this.schema, this.draft, this.lookup, this.shortCircuit);
  }
  addSchema(schema, id) {
    if (id) schema = {
      ...schema,
      $id: id
    };
    dereference(schema, this.lookup);
  }
};
var CfWorkerJsonSchemaValidator = class {
  shortcircuit;
  /** Caller-supplied draft; when set, the `$schema` check is skipped (caller owns dialect). */
  draft;
  /**
  * Create a validator
  *
  * @param options - Configuration options
  * @param options.shortcircuit - If `true`, stop validation after first error (default: `true`)
  * @param options.draft - JSON Schema draft version to force for every schema. When set, the
  * `$schema` dispatch is skipped. When omitted, the provider dispatches on each schema's
  * declared `$schema` (2020-12, 2019-09, draft-07, draft-06; absent means 2020-12) and rejects others.
  */
  constructor(options) {
    this.shortcircuit = options?.shortcircuit ?? true;
    this.draft = options?.draft;
  }
  /**
  * Pick the engine draft for a schema's declared dialect (a caller-forced `{draft}` bypasses
  * this — do not second-guess by `$schema`). No `$schema` or 2020-12 → `'2020-12'`; 2019-09 →
  * `'2019-09'`; draft-07 or draft-06 → `'7'`; anything else → `Error`.
  */
  _draftFor(schema) {
    const dialect = declaredDialect(schema, "pass an explicit { draft } to CfWorkerJsonSchemaValidator to validate other dialects.");
    return dialect === "draft-7" ? "7" : dialect;
  }
  /**
  * Create a validator for the given JSON Schema
  *
  * Unlike AJV, this validator is not cached internally
  *
  * @param schema - Standard JSON Schema object
  * @returns A validator function that validates input data
  */
  getValidator(schema) {
    const validator = new Validator(schema, this.draft ?? this._draftFor(schema), this.shortcircuit);
    return (input) => {
      const result = validator.validate(input);
      return result.valid ? {
        valid: true,
        data: input,
        errorMessage: void 0
      } : {
        valid: false,
        data: void 0,
        errorMessage: result.errors.map((err) => `${err.instanceLocation}: ${err.error}`).join("; ")
      };
    };
  }
};

// node_modules/@modelcontextprotocol/server/dist/mcp-DXXb3Vv3.mjs
var COMPLETABLE_SYMBOL = /* @__PURE__ */ Symbol.for("mcp.completable");
function isCompletable(schema) {
  return !!schema && typeof schema === "object" && COMPLETABLE_SYMBOL in schema;
}
function getCompleter(schema) {
  return schema[COMPLETABLE_SYMBOL]?.complete;
}
var DEFAULT_SSE_KEEP_ALIVE_MS = 15e3;
var MAX_TIMER_DELAY_MS = 2 ** 31 - 1;
function armSseKeepAlive(intervalMs, onTick) {
  if (!Number.isFinite(intervalMs) || intervalMs < 1) return;
  const timer = setInterval(onTick, Math.min(intervalMs, MAX_TIMER_DELAY_MS));
  timer.unref?.();
  return timer;
}
var InMemoryServerEventBus = class {
  _listeners = /* @__PURE__ */ new Set();
  /**
  * @param onerror - Optional callback for errors thrown by listeners
  *   during dispatch.
  */
  constructor(onerror) {
    this.onerror = onerror;
  }
  publish(event) {
    for (const listener of this._listeners) try {
      listener(event);
    } catch (error3) {
      this.onerror?.(error3 instanceof Error ? error3 : new Error(String(error3)));
    }
  }
  subscribe(listener) {
    this._listeners.add(listener);
    let live = true;
    return () => {
      if (!live) return;
      live = false;
      this._listeners.delete(listener);
    };
  }
  /** The number of currently registered listeners (test/introspection only — the routers track capacity via their own open-subscription set). */
  get listenerCount() {
    return this._listeners.size;
  }
};
function createServerNotifier(bus) {
  return {
    toolsChanged: () => bus.publish({ kind: "tools_list_changed" }),
    promptsChanged: () => bus.publish({ kind: "prompts_list_changed" }),
    resourcesChanged: () => bus.publish({ kind: "resources_list_changed" }),
    resourceUpdated: (uri2) => bus.publish({
      kind: "resource_updated",
      uri: uri2
    })
  };
}
function listenFilterAccepts(filter, event) {
  switch (event.kind) {
    case "tools_list_changed":
      return filter.toolsListChanged === true;
    case "prompts_list_changed":
      return filter.promptsListChanged === true;
    case "resources_list_changed":
      return filter.resourcesListChanged === true;
    case "resource_updated":
      return filter.resourceSubscriptions !== void 0 && filter.resourceSubscriptions.includes(event.uri);
  }
}
function honoredSubset(requested, capabilities) {
  const honored = {};
  const allow = (bit) => capabilities === void 0 || bit === true;
  if (requested.toolsListChanged === true && allow(capabilities?.tools?.listChanged)) honored.toolsListChanged = true;
  if (requested.promptsListChanged === true && allow(capabilities?.prompts?.listChanged)) honored.promptsListChanged = true;
  if (requested.resourcesListChanged === true && allow(capabilities?.resources?.listChanged)) honored.resourcesListChanged = true;
  if (requested.resourceSubscriptions !== void 0 && requested.resourceSubscriptions.length > 0 && allow(capabilities?.resources?.subscribe)) honored.resourceSubscriptions = [...requested.resourceSubscriptions];
  return honored;
}
function serverEventToNotification(event) {
  switch (event.kind) {
    case "tools_list_changed":
      return { method: "notifications/tools/list_changed" };
    case "prompts_list_changed":
      return { method: "notifications/prompts/list_changed" };
    case "resources_list_changed":
      return { method: "notifications/resources/list_changed" };
    case "resource_updated":
      return {
        method: "notifications/resources/updated",
        params: { uri: event.uri }
      };
  }
}
var DEFAULT_MAX_SUBSCRIPTIONS = 1024;
function jsonRpcError(id, code, message) {
  return Response.json({
    jsonrpc: "2.0",
    error: {
      code,
      message
    },
    id
  }, { status: 200 });
}
function stampSubscriptionId(notification, subscriptionId) {
  return {
    method: notification.method,
    params: {
      ...notification.params,
      _meta: {
        ...notification.params?._meta,
        [SUBSCRIPTION_ID_META_KEY]: subscriptionId
      }
    }
  };
}
function parseListenFilter(message) {
  const outcome = codecForVersion(MODERN_WIRE_REVISION).validateRequest("subscriptions/listen", message);
  return outcome.ok ? outcome.value.params?.notifications : void 0;
}
function createListenRouter(options) {
  const { bus, onerror } = options;
  const maxSubscriptions = options.maxSubscriptions ?? DEFAULT_MAX_SUBSCRIPTIONS;
  const keepAliveMs = options.keepAliveMs ?? DEFAULT_SSE_KEEP_ALIVE_MS;
  const open3 = /* @__PURE__ */ new Set();
  function serve(message, signal, capabilities, serverInfo) {
    if (open3.size >= maxSubscriptions) {
      onerror?.(/* @__PURE__ */ new Error(`subscriptions/listen refused: subscription limit reached (${maxSubscriptions})`));
      return jsonRpcError(message.id, -32603, "Subscription limit reached");
    }
    const filter = parseListenFilter(message);
    if (filter === void 0) return jsonRpcError(message.id, -32602, "Invalid params: 'notifications' is required and must be a valid SubscriptionFilter");
    const honored = honoredSubset(filter, capabilities);
    const subscriptionId = message.id;
    const encoder = new TextEncoder();
    let controller;
    let closed = false;
    let unsubscribe;
    let keepAliveTimer;
    let abortCleanup;
    const writeFrame = (frame) => {
      if (closed) return;
      try {
        controller.enqueue(encoder.encode(frame));
      } catch (error3) {
        onerror?.(error3 instanceof Error ? error3 : new Error(String(error3)));
      }
    };
    const writeNotification = (method, params) => {
      writeFrame(`event: message
data: ${JSON.stringify({
        jsonrpc: "2.0",
        method,
        params
      })}

`);
    };
    const teardown = (graceful) => {
      if (closed) return;
      if (graceful) writeFrame(`event: message
data: ${JSON.stringify({
        jsonrpc: "2.0",
        id: subscriptionId,
        result: {
          resultType: "complete",
          _meta: {
            [SUBSCRIPTION_ID_META_KEY]: subscriptionId,
            [SERVER_INFO_META_KEY]: serverInfo
          }
        }
      })}

`);
      closed = true;
      try {
        unsubscribe?.();
      } catch (error3) {
        onerror?.(error3 instanceof Error ? error3 : new Error(String(error3)));
      }
      if (keepAliveTimer !== void 0) clearInterval(keepAliveTimer);
      abortCleanup?.();
      open3.delete(teardown);
      try {
        controller.close();
      } catch {
      }
    };
    const readable = new ReadableStream({
      start(streamController) {
        controller = streamController;
        const ack = stampSubscriptionId({
          method: "notifications/subscriptions/acknowledged",
          params: { notifications: honored }
        }, subscriptionId);
        writeNotification(ack.method, ack.params);
        unsubscribe = bus.subscribe((event) => {
          if (closed || !listenFilterAccepts(honored, event)) return;
          const note = stampSubscriptionId(serverEventToNotification(event), subscriptionId);
          writeNotification(note.method, note.params);
        });
        keepAliveTimer = armSseKeepAlive(keepAliveMs, () => writeFrame(": keepalive\n\n"));
        open3.add(teardown);
      },
      cancel() {
        teardown(false);
      }
    });
    if (signal !== void 0) if (signal.aborted) teardown(false);
    else {
      const onAbort = () => teardown(false);
      signal.addEventListener("abort", onAbort, { once: true });
      abortCleanup = () => signal.removeEventListener("abort", onAbort);
    }
    return new Response(readable, {
      status: 200,
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache, no-transform",
        Connection: "keep-alive",
        "X-Accel-Buffering": "no"
      }
    });
  }
  return {
    serve,
    closeAll() {
      for (const teardown of open3) teardown(true);
    },
    get openCount() {
      return open3.size;
    }
  };
}
var DEFAULT_LEGACY_SHIM_MAX_ROUNDS = 8;
var DEFAULT_LEGACY_SHIM_ROUND_TIMEOUT_MS = 6e5;
function resolveLegacyShimOptions(options) {
  if (options?.maxRounds !== void 0 && (!Number.isInteger(options.maxRounds) || options.maxRounds < 1)) throw new RangeError(`inputRequired.maxRounds must be a positive integer (got ${options.maxRounds})`);
  if (options?.roundTimeoutMs !== void 0 && (!Number.isFinite(options.roundTimeoutMs) || options.roundTimeoutMs <= 0)) throw new RangeError(`inputRequired.roundTimeoutMs must be a positive number (got ${options.roundTimeoutMs})`);
  return {
    maxRounds: options?.maxRounds ?? DEFAULT_LEGACY_SHIM_MAX_ROUNDS,
    roundTimeoutMs: options?.roundTimeoutMs ?? DEFAULT_LEGACY_SHIM_ROUND_TIMEOUT_MS,
    legacyShim: options?.legacyShim ?? true
  };
}
function coerceEmbeddedInputRequest(method, key, entry) {
  if (entry === null || typeof entry !== "object" || typeof entry.method !== "string") throw new ProtocolError(ProtocolErrorCode.InternalError, `Handler for ${method} returned an invalid input request '${key}': each inputRequests entry must be an embedded elicitation/create, sampling/createMessage, or roots/list request`);
  const embedded = entry;
  const required4 = requiredClientCapabilitiesForInputRequest(embedded);
  if (required4 === void 0) throw new ProtocolError(ProtocolErrorCode.InternalError, `Handler for ${method} returned an input request '${key}' of kind '${embedded.method}', which is not an embedded request the 2026-07-28 revision defines`);
  return {
    embedded,
    required: required4
  };
}
function syntheticElicitationId() {
  const webCrypto = globalThis.crypto;
  if (webCrypto?.randomUUID !== void 0) return webCrypto.randomUUID();
  const bytes = new Uint8Array(16);
  webCrypto.getRandomValues(bytes);
  bytes[6] = bytes[6] & 15 | 64;
  bytes[8] = bytes[8] & 63 | 128;
  const hex = [...bytes].map((byte) => byte.toString(16).padStart(2, "0")).join("");
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
}
function legacyShimFailure(method, message) {
  if (method === "tools/call") return {
    content: [{
      type: "text",
      text: message
    }],
    isError: true
  };
  throw new ProtocolError(ProtocolErrorCode.InternalError, message);
}
var LegacyInputRequiredShim = class {
  constructor(_host) {
    this._host = _host;
  }
  async fulfill(method, handler, request, ctx, firstResult) {
    const { maxRounds, roundTimeoutMs } = this._host;
    const outerSignal = ctx.mcpReq.signal;
    let current = firstResult;
    let round = 0;
    while (true) {
      round += 1;
      if (round > maxRounds) return legacyShimFailure(method, inputRequiredRoundsExceededMessage(method, maxRounds));
      const inputRequests = current.inputRequests;
      const hasInputRequests = inputRequests != null && Object.keys(inputRequests).length > 0;
      const requestState = typeof current.requestState === "string" ? current.requestState : void 0;
      if (!hasInputRequests && requestState === void 0) throw new ProtocolError(ProtocolErrorCode.InternalError, `Handler for ${method} returned an input-required result with neither inputRequests nor requestState (every InputRequiredResult must include at least one of the two)`);
      let responses;
      if (hasInputRequests) {
        const declared = this._host.resolvedClientCapabilities(ctx);
        const coerced = [];
        for (const [key, entry] of Object.entries(inputRequests)) {
          const { embedded, required: required4 } = coerceEmbeddedInputRequest(method, key, entry);
          if (embedded.method !== "roots/list" && embedded.params === void 0) throw new ProtocolError(ProtocolErrorCode.InternalError, `Handler for ${method} returned an input request '${key}' of kind '${embedded.method}' without params`);
          if (missingClientCapabilities(required4, declared) !== void 0) return legacyShimFailure(method, `Cannot request input '${key}' (${embedded.method}): the client on this 2025-era connection did not declare the required capability${declared === void 0 ? " (no client capabilities are available on this connection \u2014 per-request legacy serving cannot receive server-to-client requests)" : ""}`);
          coerced.push([key, embedded]);
        }
        const roundAbort = linkedRoundAbort(outerSignal);
        try {
          const legOptions = {
            relatedRequestId: ctx.mcpReq.id,
            timeout: roundTimeoutMs,
            resetTimeoutOnProgress: true,
            onprogress: () => {
            },
            signal: roundAbort.signal
          };
          const fulfilled = await Promise.all(coerced.map(async ([key, embedded]) => {
            try {
              return [key, await this._dispatchLeg(embedded, legOptions)];
            } catch (error3) {
              roundAbort.abort(error3);
              throw error3;
            }
          }));
          responses = Object.fromEntries(fulfilled);
        } catch (error3) {
          if (outerSignal.aborted) throw error3;
          return legacyShimFailure(method, `Fulfilling input required by '${method}' failed: ${error3 instanceof Error ? error3.message : String(error3)}`);
        } finally {
          roundAbort.dispose();
        }
      } else await sleep(REQUEST_STATE_ONLY_LEG_PACING_MS, outerSignal);
      let ctxNext = {
        ...ctx,
        mcpReq: {
          ...ctx.mcpReq,
          inputResponses: responses,
          droppedInputResponseKeys: void 0,
          requestState: requestStateAccessor(requestState)
        }
      };
      if (requestState !== void 0) {
        const decoded = await this._host.verifyRequestState(requestState, ctxNext, method);
        if (decoded !== void 0) ctxNext = withRequestStateValue(ctxNext, decoded);
      }
      const next = await handler(request, ctxNext);
      if (!isInputRequiredResult(next)) return next;
      current = next;
    }
  }
  /** Routes one embedded request through the host's existing 2025-era senders (gate already ran). */
  async _dispatchLeg(embedded, options) {
    switch (embedded.method) {
      case "elicitation/create": {
        let params = embedded.params;
        if (params.mode === "url" && params.elicitationId === void 0) params = {
          ...params,
          elicitationId: syntheticElicitationId()
        };
        return await this._host.sendElicitation(params, options);
      }
      case "sampling/createMessage":
        return await this._host.sendSampling(embedded.params, options);
      case "roots/list":
        return await this._host.listRoots(embedded.params, options);
    }
  }
};
var INPUT_REQUIRED_CAPABLE_METHODS = /* @__PURE__ */ new Set([
  "tools/call",
  "prompts/get",
  "resources/read"
]);
var writeClientIdentity;
var installDiscoverHandler;
var readServerIdentity;
function seedClientIdentityFromEnvelope(server, identity) {
  writeClientIdentity(server, identity);
}
function installModernOnlyHandlers(server, servedModernVersions) {
  installDiscoverHandler(server, servedModernVersions);
}
function serverIdentityOf(server) {
  return readServerIdentity(server);
}
var Server = class extends Protocol {
  _clientCapabilities;
  _clientVersion;
  static {
    writeClientIdentity = (server, identity) => {
      if (identity.clientCapabilities !== void 0) server._clientCapabilities = identity.clientCapabilities;
      if (identity.clientInfo !== void 0) server._clientVersion = identity.clientInfo;
    };
    installDiscoverHandler = (server, servedModernVersions) => {
      const missing = servedModernVersions.filter((version4) => !server._supportedProtocolVersions.includes(version4));
      if (missing.length > 0) server._supportedProtocolVersions = [...server._supportedProtocolVersions, ...missing];
      server.setRequestHandler("server/discover", () => server._ondiscover());
    };
    readServerIdentity = (server) => server._serverInfo;
  }
  _capabilities;
  _instructions;
  _jsonSchemaValidator;
  _cacheHints;
  _requestStateVerify;
  _inputRequiredServing;
  _legacyShim;
  /** Lazily-built legacy shim; the loop lives in legacyInputRequiredShim.ts behind a narrow host contract. */
  _legacyInputRequiredShim() {
    return this._legacyShim ??= new LegacyInputRequiredShim({
      maxRounds: this._inputRequiredServing.maxRounds,
      roundTimeoutMs: this._inputRequiredServing.roundTimeoutMs,
      resolvedClientCapabilities: (ctx) => this._inputRequestCapabilityView(ctx),
      verifyRequestState: (state, ctx, method) => this._verifyRequestState(state, ctx, method),
      sendElicitation: (params, options) => this._sendElicitationLeg(params, options, { validateAcceptedContent: false }),
      sendSampling: (params, options) => this.createMessage(params, options),
      listRoots: (params, options) => this.listRoots(params, options)
    });
  }
  /**
  * Callback for when initialization has fully completed (i.e., the client has sent an `notifications/initialized` notification).
  */
  oninitialized;
  /**
  * Initializes this server with the given name and version information.
  */
  constructor(_serverInfo, options) {
    super(options);
    this._serverInfo = _serverInfo;
    this._capabilities = options?.capabilities ? { ...options.capabilities } : {};
    this._instructions = options?.instructions;
    this._jsonSchemaValidator = options?.jsonSchemaValidator ?? new CfWorkerJsonSchemaValidator();
    this._requestStateVerify = options?.requestState?.verify;
    this._inputRequiredServing = resolveLegacyShimOptions(options?.inputRequired);
    if (options?.cacheHints !== void 0) {
      for (const [operation, hint] of Object.entries(options.cacheHints)) if (hint !== void 0) assertValidCacheHint(hint, `cacheHints['${operation}']`);
      this._cacheHints = options.cacheHints;
    }
    this.setRequestHandler("initialize", (request) => this._oninitialize(request));
    this.setNotificationHandler("notifications/initialized", () => this.oninitialized?.());
    if (modernProtocolVersions(this._supportedProtocolVersions).length > 0) this.setRequestHandler("server/discover", () => this._ondiscover());
    if (this._capabilities.logging) this._registerLoggingHandler();
  }
  /**
  * Registers the built-in `logging/setLevel` request handler.
  *
  * @deprecated Deprecated as of protocol version 2026-07-28 (SEP-2577).
  * Remains functional during the deprecation window (at least twelve months).
  * Migrate to stderr logging (STDIO servers) or OpenTelemetry.
  */
  _registerLoggingHandler() {
    this.setRequestHandler("logging/setLevel", async (request, ctx) => {
      const transportSessionId = ctx.sessionId || ctx.http?.req?.headers.get("mcp-session-id") || void 0;
      const { level } = request.params;
      const parseResult = parseSchema(LoggingLevelSchema, level);
      if (parseResult.success) this._loggingLevels.set(transportSessionId, parseResult.data);
      return {};
    });
  }
  buildContext(ctx, transportInfo) {
    const hasHttpInfo = ctx.http || transportInfo?.request || transportInfo?.closeSSEStream || transportInfo?.closeStandaloneSSEStream;
    return {
      ...ctx,
      mcpReq: {
        ...ctx.mcpReq,
        log: (level, data, logger) => {
          if (!this._capabilities.logging) return Promise.resolve();
          let threshold;
          if (this._servedModernEra()) {
            threshold = ctx.mcpReq.envelope?.[LOG_LEVEL_META_KEY];
            if (threshold === void 0) return Promise.resolve();
          } else threshold = this._loggingLevels.get(ctx.sessionId) ?? this._loggingLevels.get(void 0);
          if (threshold !== void 0 && this.LOG_LEVEL_SEVERITY.get(level) < this.LOG_LEVEL_SEVERITY.get(threshold)) return Promise.resolve();
          return ctx.mcpReq.notify({
            method: "notifications/message",
            params: {
              level,
              data,
              logger
            }
          });
        },
        elicitInput: (params, options) => this.elicitInput(params, options),
        requestSampling: (params, options) => this.createMessage(params, options)
      },
      http: hasHttpInfo ? {
        ...ctx.http,
        req: transportInfo?.request,
        closeSSE: transportInfo?.closeSSEStream,
        closeStandaloneSSE: transportInfo?.closeStandaloneSSEStream
      } : void 0
    };
  }
  _loggingLevels = /* @__PURE__ */ new Map();
  LOG_LEVEL_SEVERITY = new Map(LoggingLevelSchema.options.map((level, index) => [level, index]));
  isMessageIgnored = (level, sessionId) => {
    const currentLevel = this._loggingLevels.get(sessionId);
    return currentLevel ? this.LOG_LEVEL_SEVERITY.get(level) < this.LOG_LEVEL_SEVERITY.get(currentLevel) : false;
  };
  /**
  * Registers new capabilities. This can only be called before connecting to a transport.
  *
  * The new capabilities will be merged with any existing capabilities previously given (e.g., at initialization).
  */
  registerCapabilities(capabilities) {
    if (this.transport) throw new SdkError(SdkErrorCode.AlreadyConnected, "Cannot register capabilities after connecting to transport");
    const hadLogging = !!this._capabilities.logging;
    this._capabilities = mergeCapabilities(this._capabilities, capabilities);
    if (!hadLogging && this._capabilities.logging) this._registerLoggingHandler();
  }
  /**
  * Enforces server-side validation for `tools/call` results regardless of how the
  * handler was registered, attaches the configured per-operation cache hint
  * (when one exists) so the 2026-07-28 encode seam can fill `ttlMs`/`cacheScope`
  * for results that do not provide their own, and owns the multi-round-trip
  * seam: on the methods whose 2026-07-28 result vocabulary includes
  * `input_required` (`tools/call`, `prompts/get`, `resources/read`) an
  * input-required return skips result-schema validation and is checked
  * against the served era, the at-least-one rule, and the request's own
  * declared client capabilities; on every other method an input-required
  * return is a server bug and fails loudly. The hint rides a symbol-keyed
  * property that is never serialized, so 2025-era responses are unaffected.
  */
  _wrapHandler(method, handler) {
    if (method !== "tools/call") {
      const cacheHint = this._cacheHints?.[method];
      const isInputRequiredCapable = INPUT_REQUIRED_CAPABLE_METHODS.has(method);
      if (cacheHint === void 0 && !isInputRequiredCapable) return async (request, ctx) => {
        const result = await handler(request, ctx);
        if (isInputRequiredResult(result)) throw new ProtocolError(ProtocolErrorCode.InternalError, `Handler for ${method} returned an input-required result, but only tools/call, prompts/get and resources/read support input_required (protocol revision 2026-07-28)`);
        return result;
      };
      return async (request, ctx) => {
        const result = isInputRequiredCapable ? await this._invokeInputRequiredCapableHandler(method, handler, request, ctx) : await handler(request, ctx);
        if (isInputRequiredResult(result)) {
          if (!isInputRequiredCapable) throw new ProtocolError(ProtocolErrorCode.InternalError, `Handler for ${method} returned an input-required result, but only tools/call, prompts/get and resources/read support input_required (protocol revision 2026-07-28)`);
          return result;
        }
        return cacheHint === void 0 ? result : attachCacheHintFallback(result, cacheHint);
      };
    }
    return async (request, ctx) => {
      const codec = codecForVersion(this._negotiatedProtocolVersion);
      const validatedRequest = codec.validateRequest("tools/call", request);
      if (!validatedRequest.ok) throw new ProtocolError(validatedRequest.reason === "not-in-era" ? ProtocolErrorCode.InternalError : ProtocolErrorCode.InvalidParams, validatedRequest.reason === "not-in-era" ? "No wire schema for tools/call in the resolved era" : `Invalid tools/call request: ${validatedRequest.message}`);
      const result = await this._invokeInputRequiredCapableHandler("tools/call", handler, request, ctx);
      if (isInputRequiredResult(result)) return result;
      const normalizedResult = normalizeContentlessToolResult(result);
      const validationResult = codec.validateResult("tools/call", normalizedResult);
      if (!validationResult.ok) throw new ProtocolError(validationResult.reason === "not-in-era" ? ProtocolErrorCode.InternalError : ProtocolErrorCode.InvalidParams, validationResult.reason === "not-in-era" ? "No wire schema for tools/call in the resolved era" : `Invalid tools/call result: ${validationResult.message}`);
      return validationResult.value;
    };
  }
  /**
  * Whether this instance is bound to a 2026-07-28-or-later protocol
  * revision. Era is instance state — a serving entry (`createMcpHandler`,
  * `serveStdio`) marks the instance modern at construction; a 2025-era
  * `initialize` handshake binds it legacy. The multi-round-trip seam reads
  * this directly: there is no per-request era consult.
  */
  _servedModernEra() {
    return this._negotiatedProtocolVersion !== void 0 && isModernProtocolVersion(this._negotiatedProtocolVersion);
  }
  /**
  * Invokes a handler for one of the multi-round-trip methods and applies
  * the input-required seam:
  *
  * - a `UrlElicitationRequiredError` (or any 2025-style server→client
  *   request idiom) escaping the handler on a request served on the
  *   2026-07-28 era fails LOUDLY with a clear steer to
  *   `inputRequired.elicitUrl(...)` — the `-32042` error never reaches the
  *   2026-07-28 wire and the throw is not silently converted. Requests
  *   served on the 2025 era keep today's `-32042` behavior byte-exact (the
  *   error is rethrown unchanged).
  * - an input-required RETURN toward a 2026-07-28 request must satisfy
  *   the at-least-one rule, and every embedded request must be covered by
  *   the capabilities declared on the request's envelope (violations
  *   answer the typed `-32021` error). Toward a 2025-era request the
  *   return is fulfilled by the default-on legacy shim, whose own gate
  *   consults the initialize-declared capabilities and surfaces
  *   violations per family; `inputRequired.legacyShim: false` restores
  *   the pre-shim loud failure.
  */
  async _invokeInputRequiredCapableHandler(method, handler, request, ctx) {
    const servedModern = this._servedModernEra();
    const rawRequestState = ctx.mcpReq.requestState();
    if (rawRequestState !== void 0 && typeof rawRequestState !== "string") throw new ProtocolError(ProtocolErrorCode.InvalidParams, "Invalid or expired requestState", { reason: "invalid_request_state" });
    let ctxForHandler = ctx;
    if (typeof rawRequestState === "string") {
      const decoded = await this._verifyRequestState(rawRequestState, ctx, method);
      if (decoded !== void 0) ctxForHandler = withRequestStateValue(ctx, decoded);
    }
    let result;
    try {
      result = await handler(request, ctxForHandler);
    } catch (error3) {
      if (error3 instanceof ProtocolError && error3.code === ProtocolErrorCode.UrlElicitationRequired) {
        if (!servedModern) throw error3;
        throw new ProtocolError(ProtocolErrorCode.InternalError, `URL elicitation cannot be signalled by throwing UrlElicitationRequiredError on protocol revision ${this._negotiatedProtocolVersion}: return inputRequired({ inputRequests: { \u2026: inputRequired.elicitUrl(...) } }) from the handler instead. The urlElicitationRequired error (-32042) of earlier revisions is not available on this revision.`);
      }
      throw error3;
    }
    if (!isInputRequiredResult(result)) return result;
    if (!servedModern) {
      if (!this._inputRequiredServing.legacyShim) throw new ProtocolError(ProtocolErrorCode.InternalError, `Handler for ${method} returned an input-required result, but this request is served on protocol revision ${this._negotiatedProtocolVersion ?? LATEST_PROTOCOL_VERSION}, which has no input_required vocabulary`);
      return await this._legacyInputRequiredShim().fulfill(method, handler, request, ctxForHandler, result);
    }
    const inputRequests = result.inputRequests;
    const hasInputRequests = inputRequests != null && Object.keys(inputRequests).length > 0;
    const hasRequestState = typeof result.requestState === "string";
    if (!hasInputRequests && !hasRequestState) throw new ProtocolError(ProtocolErrorCode.InternalError, `Handler for ${method} returned an input-required result with neither inputRequests nor requestState (every InputRequiredResult must include at least one of the two)`);
    if (hasInputRequests) {
      const declared = this._inputRequestCapabilityView(ctx);
      for (const [key, entry] of Object.entries(inputRequests)) {
        const { embedded, required: required4 } = coerceEmbeddedInputRequest(method, key, entry);
        const missing = missingClientCapabilities(required4, declared);
        if (missing !== void 0) throw new MissingRequiredClientCapabilityError({ requiredCapabilities: missing }, `Cannot request input '${key}' (${embedded.method}): the request's client capabilities do not declare the required capability`);
      }
    }
    return result;
  }
  /**
  * Runs the configured `requestState.verify` hook and returns its
  * resolved value (`undefined` when unconfigured or the hook returns
  * nothing). Deny-on-error: any hook failure answers the frozen `-32602`;
  * the reason goes to `onerror` only.
  */
  async _verifyRequestState(state, ctx, method) {
    if (this._requestStateVerify === void 0) return;
    try {
      return await this._requestStateVerify(state, ctx);
    } catch (error3) {
      this.onerror?.(/* @__PURE__ */ new Error(`requestState verification rejected ${method}: ${error3 instanceof Error ? error3.message : String(error3)}`));
      throw new ProtocolError(ProtocolErrorCode.InvalidParams, "Invalid or expired requestState", { reason: "invalid_request_state" });
    }
  }
  /**
  * The per-request resolved client-capabilities view: the request's own
  * `_meta` envelope on the 2026 era; the `initialize`-declared state on a
  * 2025-era connection. Per-request instances that never saw an
  * initialize (stateless legacy) hold nothing, so gates refuse there.
  */
  _inputRequestCapabilityView(ctx) {
    return this._servedModernEra() ? ctx.mcpReq.envelope?.[CLIENT_CAPABILITIES_META_KEY] : this._clientCapabilities;
  }
  /**
  * Guard for the push-style server→client request APIs ({@linkcode createMessage},
  * {@linkcode elicitInput}, {@linkcode listRoots}, {@linkcode ping}) on a
  * modern-era instance: the 2026-07-28 revision has no server→client request
  * channel, so the call fails before any wire traffic with a typed error
  * whose message steers to `inputRequired(...)`. The base era gate would
  * also reject it; this guard runs first to carry the steer.
  */
  _assertPushApiInServedEra(method) {
    if (this._servedModernEra()) throw new SdkError(SdkErrorCode.MethodNotSupportedByProtocolVersion, `Server-to-client requests are not available on protocol revision ${this._negotiatedProtocolVersion}: '${method}' cannot be sent while serving a request on that revision. Return inputRequired({ ... }) from the handler instead \u2014 the client fulfils the embedded requests and retries the original request (multi round-trip requests).`, {
      method,
      era: "2026-07-28"
    });
  }
  assertCapabilityForMethod(method) {
    switch (method) {
      case "sampling/createMessage":
        if (!this._clientCapabilities?.sampling) throw new SdkError(SdkErrorCode.CapabilityNotSupported, `Client does not support sampling (required for ${method})`);
        break;
      case "elicitation/create":
        if (!this._clientCapabilities?.elicitation) throw new SdkError(SdkErrorCode.CapabilityNotSupported, `Client does not support elicitation (required for ${method})`);
        break;
      case "roots/list":
        if (!this._clientCapabilities?.roots) throw new SdkError(SdkErrorCode.CapabilityNotSupported, `Client does not support listing roots (required for ${method})`);
        break;
      case "ping":
        break;
    }
  }
  assertNotificationCapability(method) {
    switch (method) {
      case "notifications/message":
        if (!this._capabilities.logging) throw new SdkError(SdkErrorCode.CapabilityNotSupported, `Server does not support logging (required for ${method})`);
        break;
      case "notifications/resources/updated":
      case "notifications/resources/list_changed":
        if (!this._capabilities.resources) throw new SdkError(SdkErrorCode.CapabilityNotSupported, `Server does not support notifying about resources (required for ${method})`);
        break;
      case "notifications/tools/list_changed":
        if (!this._capabilities.tools) throw new SdkError(SdkErrorCode.CapabilityNotSupported, `Server does not support notifying of tool list changes (required for ${method})`);
        break;
      case "notifications/prompts/list_changed":
        if (!this._capabilities.prompts) throw new SdkError(SdkErrorCode.CapabilityNotSupported, `Server does not support notifying of prompt list changes (required for ${method})`);
        break;
      case "notifications/elicitation/complete":
        if (!this._clientCapabilities?.elicitation?.url) throw new SdkError(SdkErrorCode.CapabilityNotSupported, `Client does not support URL elicitation (required for ${method})`);
        break;
      case "notifications/cancelled":
        break;
      case "notifications/progress":
        break;
    }
  }
  assertRequestHandlerCapability(method) {
    switch (method) {
      case "completion/complete":
        if (!this._capabilities.completions) throw new SdkError(SdkErrorCode.CapabilityNotSupported, `Server does not support completions (required for ${method})`);
        break;
      case "logging/setLevel":
        if (!this._capabilities.logging) throw new SdkError(SdkErrorCode.CapabilityNotSupported, `Server does not support logging (required for ${method})`);
        break;
      case "prompts/get":
      case "prompts/list":
        if (!this._capabilities.prompts) throw new SdkError(SdkErrorCode.CapabilityNotSupported, `Server does not support prompts (required for ${method})`);
        break;
      case "resources/list":
      case "resources/templates/list":
      case "resources/read":
        if (!this._capabilities.resources) throw new SdkError(SdkErrorCode.CapabilityNotSupported, `Server does not support resources (required for ${method})`);
        break;
      case "tools/call":
      case "tools/list":
        if (!this._capabilities.tools) throw new SdkError(SdkErrorCode.CapabilityNotSupported, `Server does not support tools (required for ${method})`);
        break;
      case "ping":
      case "initialize":
        break;
    }
  }
  async _oninitialize(request) {
    const requestedVersion = request.params.protocolVersion;
    this._clientCapabilities = request.params.capabilities;
    this._clientVersion = request.params.clientInfo;
    const legacyVersions = legacyProtocolVersions(this._supportedProtocolVersions);
    const protocolVersion = legacyVersions.includes(requestedVersion) ? requestedVersion : legacyVersions[0] ?? LATEST_PROTOCOL_VERSION;
    this._negotiatedProtocolVersion = protocolVersion;
    this.transport?.setProtocolVersion?.(protocolVersion);
    return {
      protocolVersion,
      capabilities: this.getCapabilities(),
      serverInfo: this._serverInfo,
      ...this._instructions && { instructions: this._instructions }
    };
  }
  /**
  * Answers `server/discover` (protocol revision 2026-07-28). `supportedVersions`
  * lists only modern revisions (2025-era versions are negotiated via `initialize`);
  * the capabilities are advertised as-is, listChanged/subscribe bits included
  * (see {@linkcode discoverAdvertisedCapabilities}).
  */
  _ondiscover() {
    return {
      supportedVersions: modernProtocolVersions(this._supportedProtocolVersions),
      capabilities: discoverAdvertisedCapabilities(this.getCapabilities()),
      ...this._instructions && { instructions: this._instructions }
    };
  }
  /**
  * The identity the 2026-era encode seam stamps into every outbound
  * result's `_meta` under `io.modelcontextprotocol/serverInfo` (spec PR
  * #3002: servers SHOULD identify themselves on every response).
  */
  _outboundServerInfo() {
    return this._serverInfo;
  }
  /**
  * After initialization has completed, this will be populated with the client's reported capabilities.
  *
  * @deprecated Read client identity from the per-request handler context instead: on
  * 2026-07-28 (per-request envelope) requests `ctx.mcpReq.envelope` carries the client's
  * declared capabilities, while on 2025-era connections this accessor keeps returning the
  * `initialize`-scoped value. The accessor remains functional — instances serving the
  * 2026-07-28 era are backfilled per request from the validated envelope.
  */
  getClientCapabilities() {
    return this._clientCapabilities;
  }
  /**
  * After initialization has completed, this will be populated with information about the client's name and version.
  *
  * @deprecated Read client identity from the per-request handler context instead: on
  * 2026-07-28 (per-request envelope) requests `ctx.mcpReq.envelope` carries the client's
  * name and version, while on 2025-era connections this accessor keeps returning the
  * `initialize`-scoped value. The accessor remains functional — instances serving the
  * 2026-07-28 era are backfilled per request from the validated envelope.
  */
  getClientVersion() {
    return this._clientVersion;
  }
  /**
  * After initialization has completed, this will be populated with the protocol version negotiated
  * with the client (the version the server responded with during the initialize handshake), or
  * `undefined` before initialization.
  *
  * @deprecated Read the protocol revision from the per-request handler context instead: on
  * 2026-07-28 (per-request envelope) requests `ctx.mcpReq.envelope` names the revision the
  * request was sent for, while on 2025-era connections this accessor keeps returning the
  * `initialize`-negotiated version. The accessor remains functional — instances serving the
  * 2026-07-28 era report that revision.
  */
  getNegotiatedProtocolVersion() {
    return this._negotiatedProtocolVersion;
  }
  /**
  * Project a `tools/call` result through this instance's negotiated wire
  * codec — the era-agnostic SEP-2106 §4.3 TextContent auto-append, plus on
  * the 2025 era the `{result:…}` wrap when `structuredContent` is a
  * non-object value or the advertised `outputSchema` had a non-object root.
  * Identity for object-shaped `structuredContent` on the 2026 era.
  *
  * `McpServer`'s built-in `tools/call` handler routes through this method.
  * Low-level `setRequestHandler('tools/call', …)` authors call it
  * themselves so the projection lives in one place (the codec) and the
  * server-side handler stays era-blind.
  *
  * This is the only codec function exposed on `Server` — the full
  * `WireCodec` is intentionally not part of the public surface.
  */
  projectCallToolResult(result, advertisedOutputSchema) {
    return this._wireCodec().projectCallToolResult(result, advertisedOutputSchema);
  }
  /**
  * Returns the current server capabilities.
  */
  getCapabilities() {
    return this._capabilities;
  }
  /**
  * Sends a `ping` request to the connected client.
  *
  * @deprecated The 2026-07-28 protocol removed ping; it throws on a 2026-07-28-era instance.
  * If your factory serves both eras, this only works on the legacy path.
  */
  async ping() {
    this._assertPushApiInServedEra("ping");
    return this.request({ method: "ping" });
  }
  async createMessage(params, options) {
    this._assertPushApiInServedEra("sampling/createMessage");
    if ((params.tools || params.toolChoice) && !this._clientCapabilities?.sampling?.tools) throw new SdkError(SdkErrorCode.CapabilityNotSupported, "Client does not support sampling tools capability.");
    if (params.messages.length > 0) {
      const lastMessage = params.messages.at(-1);
      const lastContent = Array.isArray(lastMessage.content) ? lastMessage.content : [lastMessage.content];
      const hasToolResults = lastContent.some((c) => c.type === "tool_result");
      const previousMessage = params.messages.length > 1 ? params.messages.at(-2) : void 0;
      const previousContent = previousMessage ? Array.isArray(previousMessage.content) ? previousMessage.content : [previousMessage.content] : [];
      const hasPreviousToolUse = previousContent.some((c) => c.type === "tool_use");
      if (hasToolResults) {
        if (lastContent.some((c) => c.type !== "tool_result")) throw new ProtocolError(ProtocolErrorCode.InvalidParams, "The last message must contain only tool_result content if any is present");
        if (!hasPreviousToolUse) throw new ProtocolError(ProtocolErrorCode.InvalidParams, "tool_result blocks are not matching any tool_use from the previous message");
      }
      if (hasPreviousToolUse) {
        const toolUseIds = new Set(previousContent.filter((c) => c.type === "tool_use").map((c) => c.id));
        const toolResultIds = new Set(lastContent.filter((c) => c.type === "tool_result").map((c) => c.toolUseId));
        if (toolUseIds.size !== toolResultIds.size || ![...toolUseIds].every((id) => toolResultIds.has(id))) throw new ProtocolError(ProtocolErrorCode.InvalidParams, "ids of tool_result blocks and tool_use blocks from previous message do not match");
      }
    }
    const hasTools = Boolean(params.tools || params.toolChoice);
    const wide = await this.request({
      method: "sampling/createMessage",
      params
    }, options);
    const outcome = this._wireCodec().samplingResultVariant(hasTools, wide);
    if (!outcome.ok) throw new SdkError(SdkErrorCode.InvalidResult, `Invalid sampling/createMessage result: ${outcome.reason === "invalid" ? outcome.message : outcome.reason}`);
    return outcome.value;
  }
  /**
  * Creates an elicitation request for the given parameters.
  * For backwards compatibility, `mode` may be omitted for form requests and will default to `"form"`.
  * @param params The parameters for the elicitation request.
  * @param options Optional request options.
  * @returns The result of the elicitation request.
  *
  * @deprecated Throws on a 2026-07-28-era request — use {@link index.inputRequired | inputRequired} (multi-round-trip)
  * instead. The 2025 push-style server-to-client request model is replaced by input_required
  * results in the 2026-07-28 protocol. If your factory serves both eras, this only works on the
  * legacy path.
  */
  async elicitInput(params, options) {
    this._assertPushApiInServedEra("elicitation/create");
    switch (params.mode ?? "form") {
      case "url":
        if (!this._clientCapabilities?.elicitation?.url) throw new SdkError(SdkErrorCode.CapabilityNotSupported, "Client does not support url elicitation.");
        break;
      case "form":
        if (!this._clientCapabilities?.elicitation?.form) throw new SdkError(SdkErrorCode.CapabilityNotSupported, "Client does not support form elicitation.");
        break;
    }
    return this._sendElicitationLeg(params, options);
  }
  /**
  * The capability-check-free core of {@linkcode elicitInput}. The shim
  * uses it because its gate differs from the public checks: a bare
  * `elicitation: {}` counts as form support (the pre-mode rule), and
  * accepted content passes through unvalidated for parity with the
  * modern client driver (handlers validate via the schema-aware
  * `acceptedContent` overload and can re-ask).
  */
  async _sendElicitationLeg(params, options, behavior) {
    const mode = params.mode ?? "form";
    const validateAcceptedContent = behavior?.validateAcceptedContent ?? true;
    switch (mode) {
      case "url": {
        const urlParams = params;
        return this.request({
          method: "elicitation/create",
          params: urlParams
        }, options);
      }
      case "form": {
        const formParams = params.mode === "form" ? params : {
          ...params,
          mode: "form"
        };
        const result = await this.request({
          method: "elicitation/create",
          params: formParams
        }, options);
        if (validateAcceptedContent && result.action === "accept" && result.content && formParams.requestedSchema) try {
          const validationResult = this._jsonSchemaValidator.getValidator(formParams.requestedSchema)(result.content);
          if (!validationResult.valid) throw new ProtocolError(ProtocolErrorCode.InvalidParams, `Elicitation response content does not match requested schema: ${validationResult.errorMessage}`);
        } catch (error3) {
          if (error3 instanceof ProtocolError) throw error3;
          throw new ProtocolError(ProtocolErrorCode.InternalError, `Error validating elicitation response: ${error3 instanceof Error ? error3.message : String(error3)}`);
        }
        return result;
      }
    }
  }
  /**
  * Creates a reusable callback that, when invoked, will send a `notifications/elicitation/complete`
  * notification for the specified elicitation ID.
  *
  * The notification (and the `elicitationId` it references) exists only on protocol revision
  * 2025-11-25 — the 2026-07-28 revision removed both. On a connection negotiated at 2026-07-28 the
  * returned callback rejects with a typed local error before anything reaches the transport
  * (the method is not part of that revision's wire registry).
  *
  * @param elicitationId The ID of the elicitation to mark as complete.
  * @param options Optional notification options. Useful when the completion notification should be related to a prior request.
  * @returns A function that emits the completion notification when awaited.
  */
  createElicitationCompletionNotifier(elicitationId, options) {
    if (!this._clientCapabilities?.elicitation?.url) throw new SdkError(SdkErrorCode.CapabilityNotSupported, "Client does not support URL elicitation (required for notifications/elicitation/complete)");
    return () => this.notification({
      method: "notifications/elicitation/complete",
      params: { elicitationId }
    }, options);
  }
  /**
  * Requests the list of roots from the client.
  *
  * @deprecated Deprecated as of protocol version 2026-07-28 (SEP-2577).
  * Throws on a 2026-07-28-era request — use {@link index.inputRequired | inputRequired} (multi-round-trip) instead,
  * or migrate to passing paths via tool parameters, resource URIs, or configuration. The 2025
  * push-style server-to-client request model is replaced by input_required results in the
  * 2026-07-28 protocol. If your factory serves both eras, this only works on the legacy path.
  */
  async listRoots(params, options) {
    this._assertPushApiInServedEra("roots/list");
    return this.request({
      method: "roots/list",
      params
    }, options);
  }
  /**
  * Sends a logging message to the client, if connected.
  * Note: You only need to send the parameters object, not the entire JSON-RPC message.
  * @see {@linkcode LoggingMessageNotification}
  * @param params
  * @param sessionId Optional for stateless transports and backward compatibility.
  *
  * @deprecated Deprecated as of protocol version 2026-07-28 (SEP-2577).
  * Remains functional during the deprecation window (at least twelve months).
  * Migrate to stderr logging (STDIO servers) or OpenTelemetry.
  */
  async sendLoggingMessage(params, sessionId) {
    if (this._capabilities.logging && !this.isMessageIgnored(params.level, sessionId)) return this.notification({
      method: "notifications/message",
      params
    });
  }
  async sendResourceUpdated(params) {
    return this.notification({
      method: "notifications/resources/updated",
      params
    });
  }
  async sendResourceListChanged() {
    return this.notification({ method: "notifications/resources/list_changed" });
  }
  async sendToolListChanged() {
    return this.notification({ method: "notifications/tools/list_changed" });
  }
  async sendPromptListChanged() {
    return this.notification({ method: "notifications/prompts/list_changed" });
  }
};
function discoverAdvertisedCapabilities(capabilities) {
  return { ...capabilities };
}
var McpServer = class {
  /**
  * The underlying {@linkcode Server} instance, useful for advanced operations like sending notifications.
  */
  server;
  _registeredResources = {};
  _registeredResourceTemplates = {};
  _registeredTools = {};
  _registeredPrompts = {};
  /**
  * Per-tool JSON-converted `inputSchema`, memoized so the SEP-2243
  * registration-time scan and the pre-dispatch validation step share one
  * conversion instead of paying it twice per request under the
  * per-request-factory `createMcpHandler` model.
  */
  _toolInputSchemaJson = {};
  /**
  * The JSON-serialized `inputSchema` of a registered tool, or `undefined`
  * when no such tool is registered. Used by the HTTP entry's pre-dispatch
  * SEP-2243 `Mcp-Param-*` validation step (which needs the same JSON Schema
  * `tools/list` would emit, before dispatch reaches the handler).
  *
  * @internal
  */
  toolInputSchemaJson(name) {
    const tool = this._registeredTools[name];
    if (tool === void 0 || !tool.enabled) return void 0;
    if (Object.hasOwn(this._toolInputSchemaJson, name)) return this._toolInputSchemaJson[name];
    if (tool.inputSchema === void 0) return EMPTY_OBJECT_JSON_SCHEMA;
    try {
      const json = standardSchemaToJsonSchema(tool.inputSchema, "input");
      this._toolInputSchemaJson[name] = json;
      return json;
    } catch {
      return;
    }
  }
  constructor(serverInfo, options) {
    this.server = new Server(serverInfo, options);
    if (options?.capabilities?.tools) this.setToolRequestHandlers();
    if (options?.capabilities?.resources) this.setResourceRequestHandlers();
    if (options?.capabilities?.prompts) this.setPromptRequestHandlers();
  }
  /**
  * Attaches to the given transport, starts it, and starts listening for messages.
  *
  * The `server` object assumes ownership of the {@linkcode Transport}, replacing any callbacks that have already been set, and expects that it is the only user of the {@linkcode Transport} instance going forward.
  *
  * @example
  * ```ts source="./mcp.examples.ts#McpServer_connect_stdio"
  * const server = new McpServer({ name: 'my-server', version: '1.0.0' });
  * const transport = new StdioServerTransport();
  * await server.connect(transport);
  * ```
  */
  async connect(transport) {
    return await this.server.connect(transport);
  }
  /**
  * Closes the connection.
  */
  async close() {
    await this.server.close();
  }
  _toolHandlersInitialized = false;
  setToolRequestHandlers() {
    if (this._toolHandlersInitialized) return;
    this.server.assertCanSetRequestHandler("tools/list");
    this.server.assertCanSetRequestHandler("tools/call");
    this.server.registerCapabilities({ tools: { listChanged: this.server.getCapabilities().tools?.listChanged ?? true } });
    this.server.setRequestHandler("tools/list", () => ({ tools: Object.entries(this._registeredTools).filter(([, tool]) => tool.enabled).map(([name, tool]) => {
      const toolDefinition = {
        name,
        title: tool.title,
        description: tool.description,
        inputSchema: tool.inputSchema ? standardSchemaToJsonSchema(tool.inputSchema, "input") : EMPTY_OBJECT_JSON_SCHEMA,
        annotations: tool.annotations,
        icons: tool.icons,
        execution: tool.execution,
        _meta: tool._meta
      };
      if (tool.outputSchema) toolDefinition.outputSchema = standardSchemaToJsonSchema(tool.outputSchema, "output");
      return toolDefinition;
    }) }));
    this.server.setRequestHandler("tools/call", async (request, ctx) => {
      const tool = this._registeredTools[request.params.name];
      if (!tool) throw new ProtocolError(ProtocolErrorCode.InvalidParams, `Tool ${request.params.name} not found`);
      if (!tool.enabled) throw new ProtocolError(ProtocolErrorCode.InvalidParams, `Tool ${request.params.name} disabled`);
      try {
        const args = await this.validateToolInput(tool, request.params.arguments, request.params.name);
        const result = await this.executeToolHandler(tool, args, ctx);
        await this.validateToolOutput(tool, result, request.params.name);
        if (isInputRequiredResult(result)) return result;
        return this.server.projectCallToolResult(result, tool.outputSchemaJson);
      } catch (error3) {
        if (error3 instanceof ProtocolError && error3.code === ProtocolErrorCode.UrlElicitationRequired) throw error3;
        return this.createToolError(error3 instanceof Error ? error3.message : String(error3));
      }
    });
    this._toolHandlersInitialized = true;
  }
  /**
  * Creates a tool error result.
  *
  * @param errorMessage - The error message.
  * @returns The tool error result.
  */
  createToolError(errorMessage) {
    return {
      content: [{
        type: "text",
        text: errorMessage
      }],
      isError: true
    };
  }
  /**
  * Validates tool input arguments against the tool's input schema.
  */
  async validateToolInput(tool, args, toolName) {
    if (!tool.inputSchema) return;
    const parseResult = await validateStandardSchema(tool.inputSchema, args ?? {});
    if (!parseResult.success) throw new ProtocolError(ProtocolErrorCode.InvalidParams, `Input validation error: Invalid arguments for tool ${toolName}: ${parseResult.error}`);
    return parseResult.data;
  }
  /**
  * Validates tool output against the tool's output schema.
  */
  async validateToolOutput(tool, result, toolName) {
    if (!tool.outputSchema) return;
    if (isInputRequiredResult(result)) return;
    if (result.isError) return;
    if (result.structuredContent === void 0) throw new ProtocolError(ProtocolErrorCode.InvalidParams, `Output validation error: Tool ${toolName} has an output schema but no structured content was provided`);
    const parseResult = await validateStandardSchema(tool.outputSchema, result.structuredContent);
    if (!parseResult.success) throw new ProtocolError(ProtocolErrorCode.InvalidParams, `Output validation error: Invalid structured content for tool ${toolName}: ${parseResult.error}`);
  }
  /**
  * Executes a tool handler.
  */
  async executeToolHandler(tool, args, ctx) {
    return tool.executor(args, ctx);
  }
  _completionHandlerInitialized = false;
  setCompletionRequestHandler() {
    if (this._completionHandlerInitialized) return;
    this.server.assertCanSetRequestHandler("completion/complete");
    this.server.registerCapabilities({ completions: {} });
    this.server.setRequestHandler("completion/complete", async (request) => {
      switch (request.params.ref.type) {
        case "ref/prompt":
          assertCompleteRequestPrompt(request);
          return this.handlePromptCompletion(request, request.params.ref);
        case "ref/resource":
          assertCompleteRequestResourceTemplate(request);
          return this.handleResourceCompletion(request, request.params.ref);
        default:
          throw new ProtocolError(ProtocolErrorCode.InvalidParams, `Invalid completion reference: ${request.params.ref}`);
      }
    });
    this._completionHandlerInitialized = true;
  }
  async handlePromptCompletion(request, ref) {
    const prompt = this._registeredPrompts[ref.name];
    if (!prompt) throw new ProtocolError(ProtocolErrorCode.InvalidParams, `Prompt ${ref.name} not found`);
    if (!prompt.enabled) throw new ProtocolError(ProtocolErrorCode.InvalidParams, `Prompt ${ref.name} disabled`);
    if (!prompt.argsSchema) return EMPTY_COMPLETION_RESULT;
    const field = unwrapOptionalSchema(getSchemaShape(prompt.argsSchema)?.[request.params.argument.name]);
    if (!isCompletable(field)) return EMPTY_COMPLETION_RESULT;
    const completer = getCompleter(field);
    if (!completer) return EMPTY_COMPLETION_RESULT;
    return createCompletionResult(await completer(request.params.argument.value, request.params.context));
  }
  async handleResourceCompletion(request, ref) {
    const template = Object.values(this._registeredResourceTemplates).find((t) => t.resourceTemplate.uriTemplate.toString() === ref.uri);
    if (!template) {
      if (this._registeredResources[ref.uri]) return EMPTY_COMPLETION_RESULT;
      throw new ProtocolError(ProtocolErrorCode.InvalidParams, `Resource template ${request.params.ref.uri} not found`);
    }
    const completer = template.resourceTemplate.completeCallback(request.params.argument.name);
    if (!completer) return EMPTY_COMPLETION_RESULT;
    return createCompletionResult(await completer(request.params.argument.value, request.params.context));
  }
  _resourceHandlersInitialized = false;
  setResourceRequestHandlers() {
    if (this._resourceHandlersInitialized) return;
    this.server.assertCanSetRequestHandler("resources/list");
    this.server.assertCanSetRequestHandler("resources/templates/list");
    this.server.assertCanSetRequestHandler("resources/read");
    this.server.registerCapabilities({ resources: { listChanged: this.server.getCapabilities().resources?.listChanged ?? true } });
    this.server.setRequestHandler("resources/list", async (_request, ctx) => {
      const resources = Object.entries(this._registeredResources).filter(([_, resource]) => resource.enabled).map(([uri2, resource]) => ({
        uri: uri2,
        name: resource.name,
        ...resource.metadata
      }));
      const templateResources = [];
      for (const template of Object.values(this._registeredResourceTemplates)) {
        if (!template.resourceTemplate.listCallback) continue;
        const result = await template.resourceTemplate.listCallback(ctx);
        for (const resource of result.resources) templateResources.push({
          ...template.metadata,
          ...resource
        });
      }
      return { resources: [...resources, ...templateResources] };
    });
    this.server.setRequestHandler("resources/templates/list", async () => {
      return { resourceTemplates: Object.entries(this._registeredResourceTemplates).map(([name, template]) => ({
        name,
        uriTemplate: template.resourceTemplate.uriTemplate.toString(),
        ...template.metadata
      })) };
    });
    this.server.setRequestHandler("resources/read", async (request, ctx) => {
      let uri2;
      try {
        uri2 = new URL(request.params.uri);
      } catch {
        throw new ProtocolError(ProtocolErrorCode.InvalidParams, `Resource URI ${request.params.uri} is invalid`, {
          uri: request.params.uri,
          reason: "invalid_uri"
        });
      }
      const resource = this._registeredResources[uri2.toString()];
      if (resource) {
        if (!resource.enabled) throw new ProtocolError(ProtocolErrorCode.InvalidParams, `Resource ${uri2} disabled`);
        return attachCacheHintFallback(await resource.readCallback(uri2, ctx), resource.cacheHint);
      }
      for (const template of Object.values(this._registeredResourceTemplates)) {
        const variables = template.resourceTemplate.uriTemplate.match(uri2.toString());
        if (variables) return attachCacheHintFallback(await template.readCallback(uri2, variables, ctx), template.cacheHint);
      }
      throw new ResourceNotFoundError(request.params.uri);
    });
    this._resourceHandlersInitialized = true;
  }
  _promptHandlersInitialized = false;
  setPromptRequestHandlers() {
    if (this._promptHandlersInitialized) return;
    this.server.assertCanSetRequestHandler("prompts/list");
    this.server.assertCanSetRequestHandler("prompts/get");
    this.server.registerCapabilities({ prompts: { listChanged: this.server.getCapabilities().prompts?.listChanged ?? true } });
    this.server.setRequestHandler("prompts/list", () => ({ prompts: Object.entries(this._registeredPrompts).filter(([, prompt]) => prompt.enabled).map(([name, prompt]) => {
      return {
        name,
        title: prompt.title,
        description: prompt.description,
        arguments: prompt.argsSchema ? promptArgumentsFromStandardSchema(prompt.argsSchema) : void 0,
        icons: prompt.icons,
        _meta: prompt._meta
      };
    }) }));
    this.server.setRequestHandler("prompts/get", async (request, ctx) => {
      const prompt = this._registeredPrompts[request.params.name];
      if (!prompt) throw new ProtocolError(ProtocolErrorCode.InvalidParams, `Prompt ${request.params.name} not found`);
      if (!prompt.enabled) throw new ProtocolError(ProtocolErrorCode.InvalidParams, `Prompt ${request.params.name} disabled`);
      return prompt.handler(request.params.arguments, ctx);
    });
    this._promptHandlersInitialized = true;
  }
  registerResource(name, uriOrTemplate, config4, readCallback) {
    const cacheHint = config4.cacheHint;
    let metadata = config4;
    if (cacheHint !== void 0) {
      assertValidCacheHint(cacheHint, `resource ${name}`);
      const rest = { ...config4 };
      delete rest.cacheHint;
      metadata = rest;
    }
    if (typeof uriOrTemplate === "string") {
      if (this._registeredResources[uriOrTemplate]) throw new Error(`Resource ${uriOrTemplate} is already registered`);
      const registeredResource = this._createRegisteredResource(name, config4.title, uriOrTemplate, metadata, readCallback);
      if (cacheHint !== void 0) registeredResource.cacheHint = cacheHint;
      this.setResourceRequestHandlers();
      this.sendResourceListChanged();
      return registeredResource;
    } else {
      if (this._registeredResourceTemplates[name]) throw new Error(`Resource template ${name} is already registered`);
      const registeredResourceTemplate = this._createRegisteredResourceTemplate(name, config4.title, uriOrTemplate, metadata, readCallback);
      if (cacheHint !== void 0) registeredResourceTemplate.cacheHint = cacheHint;
      this.setResourceRequestHandlers();
      this.sendResourceListChanged();
      return registeredResourceTemplate;
    }
  }
  _createRegisteredResource(name, title, uri2, metadata, readCallback) {
    const registeredResource = {
      name,
      title,
      metadata,
      readCallback,
      enabled: true,
      disable: () => registeredResource.update({ enabled: false }),
      enable: () => registeredResource.update({ enabled: true }),
      remove: () => registeredResource.update({ uri: null }),
      update: (updates) => {
        if (updates.uri !== void 0 && updates.uri !== uri2) {
          delete this._registeredResources[uri2];
          if (updates.uri) this._registeredResources[updates.uri] = registeredResource;
        }
        if (updates.name !== void 0) registeredResource.name = updates.name;
        if (updates.title !== void 0) registeredResource.title = updates.title;
        if (updates.metadata !== void 0) registeredResource.metadata = updates.metadata;
        if (updates.callback !== void 0) registeredResource.readCallback = updates.callback;
        if (updates.enabled !== void 0) registeredResource.enabled = updates.enabled;
        this.sendResourceListChanged();
      }
    };
    this._registeredResources[uri2] = registeredResource;
    return registeredResource;
  }
  _createRegisteredResourceTemplate(name, title, template, metadata, readCallback) {
    const registeredResourceTemplate = {
      resourceTemplate: template,
      title,
      metadata,
      readCallback,
      enabled: true,
      disable: () => registeredResourceTemplate.update({ enabled: false }),
      enable: () => registeredResourceTemplate.update({ enabled: true }),
      remove: () => registeredResourceTemplate.update({ name: null }),
      update: (updates) => {
        if (updates.name !== void 0 && updates.name !== name) {
          delete this._registeredResourceTemplates[name];
          if (updates.name) this._registeredResourceTemplates[updates.name] = registeredResourceTemplate;
        }
        if (updates.title !== void 0) registeredResourceTemplate.title = updates.title;
        if (updates.template !== void 0) registeredResourceTemplate.resourceTemplate = updates.template;
        if (updates.metadata !== void 0) registeredResourceTemplate.metadata = updates.metadata;
        if (updates.callback !== void 0) registeredResourceTemplate.readCallback = updates.callback;
        if (updates.enabled !== void 0) registeredResourceTemplate.enabled = updates.enabled;
        this.sendResourceListChanged();
      }
    };
    this._registeredResourceTemplates[name] = registeredResourceTemplate;
    const variableNames = template.uriTemplate.variableNames;
    if (Array.isArray(variableNames) && variableNames.some((v) => !!template.completeCallback(v))) this.setCompletionRequestHandler();
    return registeredResourceTemplate;
  }
  _createRegisteredPrompt(name, title, description, argsSchema, callback, icons, _meta) {
    let currentArgsSchema = argsSchema;
    let currentCallback = callback;
    const registeredPrompt = {
      title,
      description,
      argsSchema,
      icons,
      _meta,
      handler: createPromptHandler(name, argsSchema, callback),
      enabled: true,
      disable: () => registeredPrompt.update({ enabled: false }),
      enable: () => registeredPrompt.update({ enabled: true }),
      remove: () => registeredPrompt.update({ name: null }),
      update: (updates) => {
        if (updates.name !== void 0 && updates.name !== name) {
          delete this._registeredPrompts[name];
          if (updates.name) this._registeredPrompts[updates.name] = registeredPrompt;
        }
        if (updates.title !== void 0) registeredPrompt.title = updates.title;
        if (updates.description !== void 0) registeredPrompt.description = updates.description;
        if (updates.icons !== void 0) registeredPrompt.icons = updates.icons;
        if (updates._meta !== void 0) registeredPrompt._meta = updates._meta;
        let needsHandlerRegen = false;
        if (updates.argsSchema !== void 0) {
          registeredPrompt.argsSchema = updates.argsSchema;
          currentArgsSchema = updates.argsSchema;
          needsHandlerRegen = true;
        }
        if (updates.callback !== void 0) {
          currentCallback = updates.callback;
          needsHandlerRegen = true;
        }
        if (needsHandlerRegen) registeredPrompt.handler = createPromptHandler(name, currentArgsSchema, currentCallback);
        if (updates.enabled !== void 0) registeredPrompt.enabled = updates.enabled;
        this.sendPromptListChanged();
      }
    };
    this._registeredPrompts[name] = registeredPrompt;
    if (argsSchema) {
      const shape = getSchemaShape(argsSchema);
      if (shape) {
        if (Object.values(shape).some((field) => {
          return isCompletable(unwrapOptionalSchema(field));
        })) this.setCompletionRequestHandler();
      }
    }
    return registeredPrompt;
  }
  _createRegisteredTool(name, title, description, inputSchema, outputSchema, annotations, icons, execution, _meta, handler) {
    validateAndWarnToolName(name);
    if (inputSchema !== void 0) try {
      const json = standardSchemaToJsonSchema(inputSchema, "input");
      this._toolInputSchemaJson[name] = json;
      const scan = scanXMcpHeaderDeclarations(json);
      if (!scan.valid) console.warn(`[mcp-sdk] tool '${name}' carries an invalid x-mcp-header declaration and will be excluded by conforming Streamable HTTP clients: ${scan.reason}`);
    } catch {
    }
    let currentHandler = handler;
    const registeredTool = {
      title,
      description,
      inputSchema,
      outputSchema,
      outputSchemaJson: convertOutputSchemaJson(outputSchema),
      annotations,
      icons,
      execution,
      _meta,
      handler,
      executor: createToolExecutor(inputSchema, handler),
      enabled: true,
      disable: () => registeredTool.update({ enabled: false }),
      enable: () => registeredTool.update({ enabled: true }),
      remove: () => registeredTool.update({ name: null }),
      update: (updates) => {
        if (updates.name !== void 0 && updates.name !== name) {
          if (typeof updates.name === "string") validateAndWarnToolName(updates.name);
          delete this._registeredTools[name];
          delete this._toolInputSchemaJson[name];
          if (updates.name) {
            delete this._toolInputSchemaJson[updates.name];
            this._registeredTools[updates.name] = registeredTool;
            name = updates.name;
          }
        }
        if (updates.title !== void 0) registeredTool.title = updates.title;
        if (updates.description !== void 0) registeredTool.description = updates.description;
        let needsExecutorRegen = false;
        if (updates.paramsSchema !== void 0) {
          registeredTool.inputSchema = updates.paramsSchema;
          delete this._toolInputSchemaJson[name];
          needsExecutorRegen = true;
        }
        if (updates.callback !== void 0) {
          registeredTool.handler = updates.callback;
          currentHandler = updates.callback;
          needsExecutorRegen = true;
        }
        if (needsExecutorRegen) registeredTool.executor = createToolExecutor(registeredTool.inputSchema, currentHandler);
        if (updates.outputSchema !== void 0) {
          registeredTool.outputSchema = updates.outputSchema;
          registeredTool.outputSchemaJson = convertOutputSchemaJson(updates.outputSchema);
        }
        if (updates.annotations !== void 0) registeredTool.annotations = updates.annotations;
        if (updates.icons !== void 0) registeredTool.icons = updates.icons;
        if (updates._meta !== void 0) registeredTool._meta = updates._meta;
        if (updates.enabled !== void 0) registeredTool.enabled = updates.enabled;
        this.sendToolListChanged();
      }
    };
    this._registeredTools[name] = registeredTool;
    this.setToolRequestHandlers();
    this.sendToolListChanged();
    return registeredTool;
  }
  registerTool(name, config4, cb) {
    if (this._registeredTools[name]) throw new Error(`Tool ${name} is already registered`);
    const { title, description, inputSchema, outputSchema, annotations, icons, _meta } = config4;
    return this._createRegisteredTool(name, title, description, normalizeRawShapeSchema(inputSchema), normalizeRawShapeSchema(outputSchema), annotations, icons, void 0, _meta, cb);
  }
  registerPrompt(name, config4, cb) {
    if (this._registeredPrompts[name]) throw new Error(`Prompt ${name} is already registered`);
    const { title, description, argsSchema, icons, _meta } = config4;
    const registeredPrompt = this._createRegisteredPrompt(name, title, description, normalizeRawShapeSchema(argsSchema), cb, icons, _meta);
    this.setPromptRequestHandlers();
    this.sendPromptListChanged();
    return registeredPrompt;
  }
  /**
  * Checks if the server is connected to a transport.
  * @returns `true` if the server is connected
  */
  isConnected() {
    return this.server.transport !== void 0;
  }
  /**
  * Sends a logging message to the client, if connected.
  * Note: You only need to send the parameters object, not the entire JSON-RPC message.
  * @see {@linkcode LoggingMessageNotification}
  * @param params
  * @param sessionId Optional for stateless transports and backward compatibility.
  *
  * @example
  * ```ts source="./mcp.examples.ts#McpServer_sendLoggingMessage_basic"
  * await server.sendLoggingMessage({
  *     level: 'info',
  *     data: 'Processing complete'
  * });
  * ```
  *
  * @deprecated Deprecated as of protocol version 2026-07-28 (SEP-2577).
  * Remains functional during the deprecation window (at least twelve months).
  * Migrate to stderr logging (STDIO servers) or OpenTelemetry.
  */
  async sendLoggingMessage(params, sessionId) {
    return this.server.sendLoggingMessage(params, sessionId);
  }
  /**
  * Sends a resource list changed event to the client, if connected.
  */
  sendResourceListChanged() {
    if (this.isConnected()) this.server.sendResourceListChanged();
  }
  /**
  * Sends a tool list changed event to the client, if connected.
  */
  sendToolListChanged() {
    if (this.isConnected()) this.server.sendToolListChanged();
  }
  /**
  * Sends a prompt list changed event to the client, if connected.
  */
  sendPromptListChanged() {
    if (this.isConnected()) this.server.sendPromptListChanged();
  }
};
function createToolExecutor(inputSchema, handler) {
  if (inputSchema) {
    const callback$1 = handler;
    return async (args, ctx) => callback$1(args, ctx);
  }
  const callback = handler;
  return async (_args, ctx) => callback(ctx);
}
var EMPTY_OBJECT_JSON_SCHEMA = {
  type: "object",
  properties: {}
};
function convertOutputSchemaJson(outputSchema) {
  if (outputSchema === void 0) return void 0;
  try {
    return standardSchemaToJsonSchema(outputSchema, "output");
  } catch {
    return;
  }
}
function createPromptHandler(name, argsSchema, callback) {
  if (argsSchema) {
    const typedCallback = callback;
    return async (args, ctx) => {
      const parseResult = await validateStandardSchema(argsSchema, args);
      if (!parseResult.success) throw new ProtocolError(ProtocolErrorCode.InvalidParams, `Invalid arguments for prompt ${name}: ${parseResult.error}`);
      return typedCallback(parseResult.data, ctx);
    };
  } else {
    const typedCallback = callback;
    return async (_args, ctx) => {
      return typedCallback(ctx);
    };
  }
}
function createCompletionResult(suggestions) {
  return { completion: {
    values: suggestions.map(String).slice(0, 100),
    total: suggestions.length,
    hasMore: suggestions.length > 100
  } };
}
var EMPTY_COMPLETION_RESULT = { completion: {
  values: [],
  hasMore: false
} };
function getSchemaShape(schema) {
  const candidate = schema;
  if (candidate.shape && typeof candidate.shape === "object") return candidate.shape;
}
function isOptionalSchema(schema) {
  return schema?.type === "optional";
}
function unwrapOptionalSchema(schema) {
  if (!isOptionalSchema(schema)) return schema;
  return schema.def?.innerType ?? schema;
}

// node_modules/@modelcontextprotocol/server/dist/index.mjs
var PerRequestHTTPServerTransport = class {
  onclose;
  onerror;
  onmessage;
  _classification;
  _responseMode;
  _started = false;
  _used = false;
  _closed = false;
  _terminalDelivered = false;
  /**
  * `true` only while the inbound message is being delivered synchronously
  * to the connected protocol layer. The pre-handler gates (the era
  * registry gate, the edge→instance handoff check, the missing-handler
  * rejection) answer inside this window; request handlers always run
  * after it (the protocol layer defers them to a microtask). An error
  * sent inside the window is therefore ladder-originated, and an error
  * sent after it is handler-produced.
  */
  _dispatchWindowOpen = false;
  _requestId;
  _deferredResponse;
  _sse;
  _abortCleanup;
  _keepAliveMs;
  constructor(options) {
    this._classification = options.classification;
    this._responseMode = options.responseMode ?? "auto";
    this._keepAliveMs = options.keepAliveMs ?? DEFAULT_SSE_KEEP_ALIVE_MS;
  }
  async start() {
    if (this._started) throw new Error("PerRequestHTTPServerTransport is already started");
    this._started = true;
  }
  /**
  * Serves the single exchange: delivers the classified message to the
  * connected server instance and resolves with the HTTP response.
  *
  * Throws when called a second time (the transport is strictly
  * single-use), or before a server has been connected to the transport.
  * The returned promise rejects with a connection-closed error when the
  * transport is closed before a response was produced (for example because
  * the client disconnected).
  */
  async handleMessage(message, extra) {
    if (this._used) throw new Error("PerRequestHTTPServerTransport serves exactly one exchange; construct a new transport per request");
    if (!this._started || this.onmessage === void 0) throw new Error("PerRequestHTTPServerTransport is not connected: connect a server to this transport before handling a message");
    if (this._closed) throw new Error("PerRequestHTTPServerTransport is closed");
    this._used = true;
    const signal = extra?.request?.signal;
    if (signal?.aborted) {
      await this.close();
      throw new SdkError(SdkErrorCode.ConnectionClosed, "The request was aborted before it could be handled");
    }
    const messageExtra = {
      classification: this._classification,
      ...extra?.request !== void 0 && { request: extra.request },
      ...extra?.authInfo !== void 0 && { authInfo: extra.authInfo }
    };
    if (isJSONRPCRequest(message)) {
      this._requestId = message.id;
      let resolve;
      let reject;
      const promise = new Promise((promiseResolve, promiseReject) => {
        resolve = promiseResolve;
        reject = promiseReject;
      });
      this._deferredResponse = {
        promise,
        resolve,
        reject,
        settled: false
      };
      if (signal !== void 0) {
        const onAbort = () => void this.close();
        signal.addEventListener("abort", onAbort, { once: true });
        this._abortCleanup = () => signal.removeEventListener("abort", onAbort);
      }
      this._dispatchWindowOpen = true;
      try {
        this.onmessage(message, messageExtra);
      } finally {
        this._dispatchWindowOpen = false;
      }
      if (this._responseMode === "sse" && !this._closed && !this._deferredResponse.settled) this.upgradeToSse();
      return promise;
    }
    this.onmessage(message, messageExtra);
    return new Response(null, { status: 202 });
  }
  async send(message, options) {
    if (this._closed) return;
    const isResponse = isJSONRPCResultResponse(message) || isJSONRPCErrorResponse(message);
    const relatedId = isResponse ? message.id : options?.relatedRequestId;
    if (this._requestId === void 0 || relatedId === void 0 || relatedId !== this._requestId) {
      if (isResponse) this.onerror?.(/* @__PURE__ */ new Error(`Received a response for an unknown request id: ${String(message.id)}`));
      return;
    }
    if (isResponse) {
      if (this._terminalDelivered) return;
      this._terminalDelivered = true;
      const errorCode = isJSONRPCErrorResponse(message) ? message.error.code : void 0;
      const ladderStatus = errorCode !== void 0 && (this._dispatchWindowOpen || errorCode === ProtocolErrorCode.MissingRequiredClientCapability) ? LADDER_ERROR_HTTP_STATUS[errorCode] : void 0;
      if (ladderStatus !== void 0 && this._sse === void 0) {
        this.settleResponse(Response.json(message, {
          status: ladderStatus,
          headers: { "Content-Type": "application/json" }
        }));
        queueMicrotask(() => void this.close());
        return;
      }
      if (this._sse !== void 0 || this._responseMode === "sse") {
        if (this._sse === void 0) this.upgradeToSse();
        this.writeMessageFrame(message);
        this.finalizeStream();
        return;
      }
      this.settleResponse(Response.json(message, {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }));
      queueMicrotask(() => void this.close());
      return;
    }
    if (this._responseMode === "json") return;
    if (this._sse === void 0) this.upgradeToSse();
    this.writeMessageFrame(message);
  }
  /**
  * Writes an SSE comment frame (a keep-alive heartbeat). Dropped when the
  * exchange is not currently streaming.
  */
  writeCommentFrame(comment) {
    if (this._closed || this._sse === void 0 || this._sse.closed) return;
    const frame = comment.split("\n").map((line) => `: ${line}`).join("\n");
    this.writeFrame(`${frame}

`);
  }
  async close() {
    if (this._closed) return;
    this._closed = true;
    this._abortCleanup?.();
    this._abortCleanup = void 0;
    if (this._sse?.keepAliveTimer !== void 0) clearInterval(this._sse.keepAliveTimer);
    if (this._sse !== void 0 && !this._sse.closed) {
      this._sse.closed = true;
      try {
        this._sse.controller.close();
      } catch {
      }
    }
    if (this._deferredResponse !== void 0 && !this._deferredResponse.settled) {
      this._deferredResponse.settled = true;
      this._deferredResponse.reject(new SdkError(SdkErrorCode.ConnectionClosed, "Connection closed before a response was produced"));
    }
    this.onclose?.();
  }
  settleResponse(response) {
    if (this._deferredResponse === void 0 || this._deferredResponse.settled) return;
    this._deferredResponse.settled = true;
    this._deferredResponse.resolve(response);
  }
  upgradeToSse() {
    let controller;
    const readable = new ReadableStream({
      start: (streamController) => {
        controller = streamController;
      },
      cancel: () => {
        this.close();
      }
    });
    this._sse = {
      controller,
      encoder: new TextEncoder(),
      closed: false
    };
    this._sse.keepAliveTimer = armSseKeepAlive(this._keepAliveMs, () => this.writeCommentFrame("keepalive"));
    this.settleResponse(new Response(readable, {
      status: 200,
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache, no-transform",
        Connection: "keep-alive",
        "X-Accel-Buffering": "no"
      }
    }));
  }
  finalizeStream() {
    if (this._sse?.keepAliveTimer !== void 0) clearInterval(this._sse.keepAliveTimer);
    if (this._sse !== void 0 && !this._sse.closed) {
      this._sse.closed = true;
      try {
        this._sse.controller.close();
      } catch {
      }
    }
    queueMicrotask(() => void this.close());
  }
  writeMessageFrame(message) {
    this.writeFrame(`event: message
data: ${JSON.stringify(message)}

`);
  }
  writeFrame(frame) {
    if (this._sse === void 0 || this._sse.closed) return;
    try {
      this._sse.controller.enqueue(this._sse.encoder.encode(frame));
    } catch (error3) {
      this.onerror?.(/* @__PURE__ */ new Error(`Failed to write to the response stream: ${error3}`));
    }
  }
};
async function invoke(server, message, ctx) {
  const transport = new PerRequestHTTPServerTransport({
    classification: ctx.classification,
    ...ctx.responseMode !== void 0 && { responseMode: ctx.responseMode },
    ...ctx.keepAliveMs !== void 0 && { keepAliveMs: ctx.keepAliveMs }
  });
  await server.connect(transport);
  return transport.handleMessage(message, {
    ...ctx.request !== void 0 && { request: ctx.request },
    ...ctx.authInfo !== void 0 && { authInfo: ctx.authInfo }
  });
}
var WebStandardStreamableHTTPServerTransport = class {
  sessionIdGenerator;
  _started = false;
  _closed = false;
  _streamMapping = /* @__PURE__ */ new Map();
  _requestToStreamMapping = /* @__PURE__ */ new Map();
  _requestResponseMap = /* @__PURE__ */ new Map();
  _initialized = false;
  _enableJsonResponse = false;
  _standaloneSseStreamId = "_GET_stream";
  _eventStore;
  _onsessioninitialized;
  _onsessionclosed;
  _allowedHosts;
  _allowedOrigins;
  _enableDnsRebindingProtection;
  _retryInterval;
  _supportedProtocolVersions;
  _keepAliveMs;
  sessionId;
  onclose;
  onerror;
  onmessage;
  constructor(options = {}) {
    this.sessionIdGenerator = options.sessionIdGenerator;
    this._enableJsonResponse = options.enableJsonResponse ?? false;
    this._eventStore = options.eventStore;
    this._onsessioninitialized = options.onsessioninitialized;
    this._onsessionclosed = options.onsessionclosed;
    this._allowedHosts = options.allowedHosts;
    this._allowedOrigins = options.allowedOrigins;
    this._enableDnsRebindingProtection = options.enableDnsRebindingProtection ?? false;
    this._retryInterval = options.retryInterval;
    this._supportedProtocolVersions = options.supportedProtocolVersions ?? SUPPORTED_PROTOCOL_VERSIONS;
    this._keepAliveMs = options.keepAliveMs ?? DEFAULT_SSE_KEEP_ALIVE_MS;
  }
  startKeepAlive(controller, encoder) {
    if (this._closed) return void 0;
    const timer = armSseKeepAlive(this._keepAliveMs, () => {
      try {
        controller.enqueue(encoder.encode(": keepalive\n\n"));
      } catch {
        if (timer !== void 0) clearInterval(timer);
      }
    });
    return timer;
  }
  /**
  * Starts the transport. This is required by the {@linkcode Transport} interface but is a no-op
  * for the Streamable HTTP transport as connections are managed per-request.
  */
  async start() {
    if (this._started) throw new Error("Transport already started");
    this._started = true;
  }
  /**
  * Sets the supported protocol versions for header validation.
  * Called by the server during {@linkcode server/server.Server.connect | connect()} to pass its supported versions.
  */
  setSupportedProtocolVersions(versions) {
    this._supportedProtocolVersions = versions;
  }
  /**
  * Helper to create a JSON error response
  */
  createJsonErrorResponse(status, code, message, options) {
    const error3 = {
      code,
      message
    };
    if (options?.data !== void 0) error3.data = options.data;
    return Response.json({
      jsonrpc: "2.0",
      error: error3,
      id: null
    }, {
      status,
      headers: {
        "Content-Type": "application/json",
        ...options?.headers
      }
    });
  }
  /**
  * Validates request headers for DNS rebinding protection.
  * @returns Error response if validation fails, `undefined` if validation passes.
  */
  validateRequestHeaders(req) {
    if (!this._enableDnsRebindingProtection) return;
    if (this._allowedHosts && this._allowedHosts.length > 0) {
      const hostHeader = req.headers.get("host");
      if (!hostHeader || !this._allowedHosts.includes(hostHeader)) {
        const error3 = `Invalid Host header: ${hostHeader}`;
        this.onerror?.(new Error(error3));
        return this.createJsonErrorResponse(403, -32e3, error3);
      }
    }
    if (this._allowedOrigins && this._allowedOrigins.length > 0) {
      const originHeader = req.headers.get("origin");
      if (originHeader && !this._allowedOrigins.includes(originHeader)) {
        const error3 = `Invalid Origin header: ${originHeader}`;
        this.onerror?.(new Error(error3));
        return this.createJsonErrorResponse(403, -32e3, error3);
      }
    }
  }
  /**
  * Handles an incoming HTTP request, whether `GET`, `POST`, or `DELETE`
  * Returns a `Response` object (Web Standard)
  */
  async handleRequest(req, options) {
    if (this._closed) return this.createJsonErrorResponse(404, -32001, "Session not found");
    const validationError = this.validateRequestHeaders(req);
    if (validationError) return validationError;
    switch (req.method) {
      case "POST":
        return this.handlePostRequest(req, options);
      case "GET":
        return this.handleGetRequest(req);
      case "DELETE":
        return this.handleDeleteRequest(req);
      default:
        return this.handleUnsupportedRequest();
    }
  }
  /**
  * Returns true if the client's protocol version supports empty SSE data in
  * priming events (the fix shipped with protocol version `2025-11-25`).
  *
  * The version is checked for membership in this transport instance's
  * supported protocol versions rather than with an open-ended
  * `>= '2025-11-25'` comparison: the value may come from an `initialize`
  * request body, which (unlike the `MCP-Protocol-Version` header) is not
  * validated against `supportedProtocolVersions` before reaching this
  * check. An unknown future version string must not silently enable
  * behavior reserved for versions this transport actually supports.
  */
  supportsEmptySSEData(protocolVersion) {
    return this._supportedProtocolVersions.includes(protocolVersion) && protocolVersion >= "2025-11-25";
  }
  /**
  * Writes a priming event to establish resumption capability.
  * Only sends if `eventStore` is configured (opt-in for resumability) and
  * the client's protocol version supports empty SSE data (a supported
  * version that is >= `2025-11-25`).
  */
  async writePrimingEvent(controller, encoder, streamId, protocolVersion) {
    if (!this._eventStore) return;
    if (!this.supportsEmptySSEData(protocolVersion)) return;
    const primingEventId = await this._eventStore.storeEvent(streamId, {});
    let primingEvent = `id: ${primingEventId}
data: 

`;
    if (this._retryInterval !== void 0) primingEvent = `id: ${primingEventId}
retry: ${this._retryInterval}
data: 

`;
    controller.enqueue(encoder.encode(primingEvent));
  }
  /**
  * Handles `GET` requests for SSE stream
  */
  async handleGetRequest(req) {
    if (!req.headers.get("accept")?.includes("text/event-stream")) {
      this.onerror?.(/* @__PURE__ */ new Error("Not Acceptable: Client must accept text/event-stream"));
      return this.createJsonErrorResponse(406, -32e3, "Not Acceptable: Client must accept text/event-stream");
    }
    const sessionError = this.validateSession(req);
    if (sessionError) return sessionError;
    const protocolError = this.validateProtocolVersion(req);
    if (protocolError) return protocolError;
    if (this._eventStore) {
      const lastEventId = req.headers.get("last-event-id");
      if (lastEventId) return this.replayEvents(lastEventId);
    }
    if (this._streamMapping.get(this._standaloneSseStreamId) !== void 0) {
      this.onerror?.(/* @__PURE__ */ new Error("Conflict: Only one SSE stream is allowed per session"));
      return this.createJsonErrorResponse(409, -32e3, "Conflict: Only one SSE stream is allowed per session");
    }
    const encoder = new TextEncoder();
    let streamController;
    let keepAliveTimer;
    const readable = new ReadableStream({
      start: (controller) => {
        streamController = controller;
      },
      cancel: () => {
        if (keepAliveTimer !== void 0) clearInterval(keepAliveTimer);
        if (this._streamMapping.get(this._standaloneSseStreamId)?.controller === streamController) this._streamMapping.delete(this._standaloneSseStreamId);
      }
    });
    const headers = {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
      "X-Accel-Buffering": "no"
    };
    if (this.sessionId !== void 0) headers["mcp-session-id"] = this.sessionId;
    this._streamMapping.set(this._standaloneSseStreamId, {
      controller: streamController,
      encoder,
      cleanup: () => {
        if (keepAliveTimer !== void 0) clearInterval(keepAliveTimer);
        this._streamMapping.delete(this._standaloneSseStreamId);
        try {
          streamController.close();
        } catch {
        }
      }
    });
    keepAliveTimer = this.startKeepAlive(streamController, encoder);
    return new Response(readable, { headers });
  }
  /**
  * Replays events that would have been sent after the specified event ID
  * Only used when resumability is enabled
  */
  async replayEvents(lastEventId) {
    if (!this._eventStore) {
      this.onerror?.(/* @__PURE__ */ new Error("Event store not configured"));
      return this.createJsonErrorResponse(400, -32e3, "Event store not configured");
    }
    try {
      let streamId;
      if (this._eventStore.getStreamIdForEventId) {
        streamId = await this._eventStore.getStreamIdForEventId(lastEventId);
        if (!streamId) {
          this.onerror?.(/* @__PURE__ */ new Error("Invalid event ID format"));
          return this.createJsonErrorResponse(400, -32e3, "Invalid event ID format");
        }
        if (this._streamMapping.get(streamId) !== void 0) {
          this.onerror?.(/* @__PURE__ */ new Error("Conflict: Stream already has an active connection"));
          return this.createJsonErrorResponse(409, -32e3, "Conflict: Stream already has an active connection");
        }
      }
      const headers = {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache, no-transform",
        Connection: "keep-alive",
        "X-Accel-Buffering": "no"
      };
      if (this.sessionId !== void 0) headers["mcp-session-id"] = this.sessionId;
      const encoder = new TextEncoder();
      let streamController;
      let keepAliveTimer;
      let cancelled = false;
      let replayedStreamId;
      const readable = new ReadableStream({
        start: (controller) => {
          streamController = controller;
        },
        cancel: () => {
          cancelled = true;
          if (keepAliveTimer !== void 0) clearInterval(keepAliveTimer);
          if (replayedStreamId !== void 0 && this._streamMapping.get(replayedStreamId)?.controller === streamController) this._streamMapping.delete(replayedStreamId);
        }
      });
      const replayedEventIds = /* @__PURE__ */ new Set();
      replayedStreamId = await this._eventStore.replayEventsAfter(lastEventId, { send: async (eventId, message) => {
        replayedEventIds.add(eventId);
        if (!this.writeSSEEvent(streamController, encoder, message, eventId)) try {
          streamController.close();
        } catch {
        }
      } });
      if (this._closed || cancelled) {
        try {
          streamController.close();
        } catch {
        }
        return this.createJsonErrorResponse(404, -32001, "Session not found");
      }
      this._streamMapping.get(replayedStreamId)?.cleanup();
      this._streamMapping.set(replayedStreamId, {
        controller: streamController,
        encoder,
        replayedEventIds,
        cleanup: () => {
          if (keepAliveTimer !== void 0) clearInterval(keepAliveTimer);
          this._streamMapping.delete(replayedStreamId);
          try {
            streamController.close();
          } catch {
          }
        }
      });
      if (replayedStreamId !== this._standaloneSseStreamId) {
        if (![...this._requestToStreamMapping.values()].includes(replayedStreamId)) {
          this._streamMapping.delete(replayedStreamId);
          try {
            streamController.close();
          } catch {
          }
        }
      }
      if (this._streamMapping.get(replayedStreamId)?.controller === streamController) keepAliveTimer = this.startKeepAlive(streamController, encoder);
      return new Response(readable, { headers });
    } catch (error3) {
      this.onerror?.(error3);
      return this.createJsonErrorResponse(500, -32e3, "Error replaying events");
    }
  }
  /**
  * Writes an event to an SSE stream via controller with proper formatting
  */
  writeSSEEvent(controller, encoder, message, eventId) {
    try {
      let eventData = `event: message
`;
      if (eventId) eventData += `id: ${eventId}
`;
      eventData += `data: ${JSON.stringify(message)}

`;
      controller.enqueue(encoder.encode(eventData));
      return true;
    } catch (error3) {
      this.onerror?.(error3);
      return false;
    }
  }
  /**
  * Handles unsupported requests (`PUT`, `PATCH`, etc.)
  */
  handleUnsupportedRequest() {
    this.onerror?.(/* @__PURE__ */ new Error("Method not allowed."));
    return Response.json({
      jsonrpc: "2.0",
      error: {
        code: -32e3,
        message: "Method not allowed."
      },
      id: null
    }, {
      status: 405,
      headers: {
        Allow: "GET, POST, DELETE",
        "Content-Type": "application/json"
      }
    });
  }
  /**
  * Handles `POST` requests containing JSON-RPC messages
  */
  async handlePostRequest(req, options) {
    try {
      const acceptHeader = req.headers.get("accept");
      if (!acceptHeader?.includes("application/json") || !acceptHeader.includes("text/event-stream")) {
        this.onerror?.(/* @__PURE__ */ new Error("Not Acceptable: Client must accept both application/json and text/event-stream"));
        return this.createJsonErrorResponse(406, -32e3, "Not Acceptable: Client must accept both application/json and text/event-stream");
      }
      if (!isJsonContentType(req.headers.get("content-type"))) {
        this.onerror?.(/* @__PURE__ */ new Error("Unsupported Media Type: Content-Type must be application/json"));
        return this.createJsonErrorResponse(415, -32e3, "Unsupported Media Type: Content-Type must be application/json");
      }
      const request = req;
      let rawMessage;
      if (options?.parsedBody === void 0) try {
        rawMessage = await req.json();
      } catch (error3) {
        this.onerror?.(error3);
        return this.createJsonErrorResponse(400, -32700, "Parse error: Invalid JSON");
      }
      else rawMessage = options.parsedBody;
      let messages;
      try {
        messages = Array.isArray(rawMessage) ? rawMessage.map((msg) => JSONRPCMessageSchema.parse(msg)) : [JSONRPCMessageSchema.parse(rawMessage)];
      } catch (error3) {
        this.onerror?.(error3);
        return this.createJsonErrorResponse(400, -32700, "Parse error: Invalid JSON-RPC message");
      }
      if (this._closed) return this.createJsonErrorResponse(404, -32001, "Session not found");
      const isInitializationRequest = messages.some((element) => isInitializeRequest(element));
      if (isInitializationRequest) {
        if (this._initialized && this.sessionId !== void 0) {
          this.onerror?.(/* @__PURE__ */ new Error("Invalid Request: Server already initialized"));
          return this.createJsonErrorResponse(400, -32600, "Invalid Request: Server already initialized");
        }
        if (messages.length > 1) {
          this.onerror?.(/* @__PURE__ */ new Error("Invalid Request: Only one initialization request is allowed"));
          return this.createJsonErrorResponse(400, -32600, "Invalid Request: Only one initialization request is allowed");
        }
        this.sessionId = this.sessionIdGenerator?.();
        this._initialized = true;
        if (this.sessionId && this._onsessioninitialized) await Promise.resolve(this._onsessioninitialized(this.sessionId));
      }
      if (!isInitializationRequest) {
        const sessionError = this.validateSession(req);
        if (sessionError) return sessionError;
        const protocolError = this.validateProtocolVersion(req);
        if (protocolError) return protocolError;
      }
      if (this._closed) return this.createJsonErrorResponse(404, -32001, "Session not found");
      if (!messages.some((element) => isJSONRPCRequest(element))) {
        for (const message of messages) this.onmessage?.(message, {
          authInfo: options?.authInfo,
          request
        });
        return new Response(null, { status: 202 });
      }
      const streamId = crypto.randomUUID();
      const initRequest = messages.find((m) => isInitializeRequest(m));
      const clientProtocolVersion = initRequest ? initRequest.params.protocolVersion : req.headers.get("mcp-protocol-version") ?? DEFAULT_NEGOTIATED_PROTOCOL_VERSION;
      if (this._enableJsonResponse) return new Promise((resolve) => {
        this._streamMapping.set(streamId, {
          resolveJson: resolve,
          cleanup: () => {
            this._streamMapping.delete(streamId);
          }
        });
        for (const message of messages) if (isJSONRPCRequest(message)) this._requestToStreamMapping.set(message.id, streamId);
        for (const message of messages) this.onmessage?.(message, {
          authInfo: options?.authInfo,
          request
        });
      });
      const encoder = new TextEncoder();
      let streamController;
      let keepAliveTimer;
      const readable = new ReadableStream({
        start: (controller) => {
          streamController = controller;
        },
        cancel: () => {
          if (keepAliveTimer !== void 0) clearInterval(keepAliveTimer);
          if (this._streamMapping.get(streamId)?.controller === streamController) this._streamMapping.delete(streamId);
        }
      });
      const headers = {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache, no-transform",
        Connection: "keep-alive",
        "X-Accel-Buffering": "no"
      };
      if (this.sessionId !== void 0) headers["mcp-session-id"] = this.sessionId;
      for (const message of messages) if (isJSONRPCRequest(message)) {
        this._streamMapping.set(streamId, {
          controller: streamController,
          encoder,
          cleanup: () => {
            if (keepAliveTimer !== void 0) clearInterval(keepAliveTimer);
            this._streamMapping.delete(streamId);
            try {
              streamController.close();
            } catch {
            }
          }
        });
        this._requestToStreamMapping.set(message.id, streamId);
      }
      await this.writePrimingEvent(streamController, encoder, streamId, clientProtocolVersion);
      for (const message of messages) {
        let closeSSEStream;
        let closeStandaloneSSEStream;
        if (isJSONRPCRequest(message) && this._eventStore && this.supportsEmptySSEData(clientProtocolVersion)) {
          closeSSEStream = () => {
            this.closeSSEStream(message.id);
          };
          closeStandaloneSSEStream = () => {
            this.closeStandaloneSSEStream();
          };
        }
        this.onmessage?.(message, {
          authInfo: options?.authInfo,
          request,
          closeSSEStream,
          closeStandaloneSSEStream
        });
      }
      if (this._streamMapping.get(streamId)?.controller === streamController) keepAliveTimer = this.startKeepAlive(streamController, encoder);
      return new Response(readable, {
        status: 200,
        headers
      });
    } catch (error3) {
      this.onerror?.(error3);
      return this.createJsonErrorResponse(400, -32700, "Parse error", { data: String(error3) });
    }
  }
  /**
  * Handles `DELETE` requests to terminate sessions
  */
  async handleDeleteRequest(req) {
    const sessionError = this.validateSession(req);
    if (sessionError) return sessionError;
    const protocolError = this.validateProtocolVersion(req);
    if (protocolError) return protocolError;
    try {
      await Promise.resolve(this._onsessionclosed?.(this.sessionId));
      return new Response(null, { status: 200 });
    } finally {
      await this.close();
    }
  }
  /**
  * Validates session ID for non-initialization requests.
  * Returns `Response` error if invalid, `undefined` otherwise
  */
  validateSession(req) {
    if (this.sessionIdGenerator === void 0) return;
    if (!this._initialized) {
      this.onerror?.(/* @__PURE__ */ new Error("Bad Request: Server not initialized"));
      return this.createJsonErrorResponse(400, -32e3, "Bad Request: Server not initialized");
    }
    const sessionId = req.headers.get("mcp-session-id");
    if (!sessionId) {
      this.onerror?.(/* @__PURE__ */ new Error("Bad Request: Mcp-Session-Id header is required"));
      return this.createJsonErrorResponse(400, -32e3, "Bad Request: Mcp-Session-Id header is required");
    }
    if (sessionId !== this.sessionId) {
      this.onerror?.(/* @__PURE__ */ new Error("Session not found"));
      return this.createJsonErrorResponse(404, -32001, "Session not found");
    }
  }
  /**
  * Validates the `MCP-Protocol-Version` header on incoming requests.
  *
  * For initialization: Version negotiation handles unknown versions gracefully
  * (server responds with its supported version).
  *
  * For subsequent requests with `MCP-Protocol-Version` header:
  * - Accept if in supported list
  * - 400 if unsupported
  *
  * For HTTP requests without the `MCP-Protocol-Version` header:
  * - Accept and default to the version negotiated at initialization
  */
  validateProtocolVersion(req) {
    const protocolVersion = req.headers.get("mcp-protocol-version");
    if (protocolVersion !== null && !this._supportedProtocolVersions.includes(protocolVersion)) {
      const error3 = `Bad Request: Unsupported protocol version: ${protocolVersion} (supported versions: ${this._supportedProtocolVersions.join(", ")})`;
      this.onerror?.(new Error(error3));
      return this.createJsonErrorResponse(400, -32e3, error3);
    }
  }
  async close() {
    if (this._closed) return;
    this._closed = true;
    for (const { cleanup } of this._streamMapping.values()) cleanup();
    this._streamMapping.clear();
    this._requestResponseMap.clear();
    this.onclose?.();
  }
  /**
  * Close an SSE stream for a specific request, triggering client reconnection.
  * Use this to implement polling behavior during long-running operations -
  * client will reconnect after the retry interval specified in the priming event.
  */
  closeSSEStream(requestId) {
    const streamId = this._requestToStreamMapping.get(requestId);
    if (!streamId) return;
    const stream = this._streamMapping.get(streamId);
    if (stream) stream.cleanup();
  }
  /**
  * Close the standalone `GET` SSE stream, triggering client reconnection.
  * Use this to implement polling behavior for server-initiated notifications.
  */
  closeStandaloneSSEStream() {
    const stream = this._streamMapping.get(this._standaloneSseStreamId);
    if (stream) stream.cleanup();
  }
  async send(message, options) {
    let requestId = options?.relatedRequestId;
    if (isJSONRPCResultResponse(message) || isJSONRPCErrorResponse(message)) requestId = message.id;
    if (requestId === void 0) {
      if (isJSONRPCResultResponse(message) || isJSONRPCErrorResponse(message)) throw new Error("Cannot send a response on a standalone SSE stream unless resuming a previous client request");
      let eventId;
      if (this._eventStore) eventId = await this._eventStore.storeEvent(this._standaloneSseStreamId, message);
      const standaloneSse = this._streamMapping.get(this._standaloneSseStreamId);
      if (standaloneSse === void 0) return;
      if (standaloneSse.controller && standaloneSse.encoder && (eventId === void 0 || !standaloneSse.replayedEventIds?.has(eventId))) this.writeSSEEvent(standaloneSse.controller, standaloneSse.encoder, message, eventId);
      return;
    }
    const streamId = this._requestToStreamMapping.get(requestId);
    if (!streamId) throw new Error(`No connection established for request ID: ${String(requestId)}`);
    let stream = this._streamMapping.get(streamId);
    if (!this._enableJsonResponse) {
      let eventId;
      if (this._eventStore) {
        eventId = await this._eventStore.storeEvent(streamId, message);
        stream = this._streamMapping.get(streamId);
      }
      if (stream?.controller && stream?.encoder && (eventId === void 0 || !stream.replayedEventIds?.has(eventId))) this.writeSSEEvent(stream.controller, stream.encoder, message, eventId);
    }
    if (isJSONRPCResultResponse(message) || isJSONRPCErrorResponse(message)) {
      this._requestResponseMap.set(requestId, message);
      const relatedIds = [...this._requestToStreamMapping.entries()].filter(([_, sid]) => sid === streamId).map(([id]) => id);
      if (relatedIds.every((id) => this._requestResponseMap.has(id))) {
        if (!stream) {
          if (this._enableJsonResponse) throw new Error(`No connection established for request ID: ${String(requestId)}`);
          if (!this._eventStore) {
            this.onerror?.(/* @__PURE__ */ new Error(`Response for request ID ${String(requestId)} is undeliverable: per-request stream is disconnected and no eventStore is configured`));
            for (const id of relatedIds) {
              this._requestResponseMap.delete(id);
              this._requestToStreamMapping.delete(id);
            }
            return;
          }
          for (const id of relatedIds) {
            this._requestResponseMap.delete(id);
            this._requestToStreamMapping.delete(id);
          }
          return;
        }
        if (this._enableJsonResponse && stream.resolveJson) {
          const headers = { "Content-Type": "application/json" };
          if (this.sessionId !== void 0) headers["mcp-session-id"] = this.sessionId;
          const responses = relatedIds.map((id) => this._requestResponseMap.get(id));
          if (responses.length === 1) stream.resolveJson(Response.json(responses[0], {
            status: 200,
            headers
          }));
          else stream.resolveJson(Response.json(responses, {
            status: 200,
            headers
          }));
          stream.cleanup();
        } else stream.cleanup();
        for (const id of relatedIds) {
          this._requestResponseMap.delete(id);
          this._requestToStreamMapping.delete(id);
        }
      }
    }
  }
};
function echoableRequestId(body) {
  if (body === null || typeof body !== "object" || Array.isArray(body)) return null;
  const { method, id } = body;
  if (typeof method !== "string") return null;
  return typeof id === "string" || typeof id === "number" ? id : null;
}
function jsonRpcErrorResponse(httpStatus, code, message, data, id = null) {
  return Response.json({
    jsonrpc: "2.0",
    error: {
      code,
      message,
      ...data !== void 0 && { data }
    },
    id
  }, { status: httpStatus });
}
function rejectionResponse(rejection2, id = null) {
  return jsonRpcErrorResponse(rejection2.httpStatus, rejection2.code, rejection2.message, rejection2.data, id);
}
function toError(value) {
  return value instanceof Error ? value : new Error(String(value));
}
function internalServerErrorResponse(id = null) {
  return jsonRpcErrorResponse(500, -32603, "Internal server error", void 0, id);
}
function createLegacyStatelessFallback(factory, onerror, keepAliveMs) {
  return async (request, options) => {
    if (request.method.toUpperCase() !== "POST") return jsonRpcErrorResponse(405, -32e3, "Method not allowed.");
    try {
      const product = await factory({
        era: "legacy",
        ...options?.authInfo !== void 0 && { authInfo: options.authInfo },
        requestInfo: request
      });
      const transport = new WebStandardStreamableHTTPServerTransport({
        sessionIdGenerator: void 0,
        ...keepAliveMs !== void 0 && { keepAliveMs }
      });
      await product.connect(transport);
      const teardown = () => {
        transport.close().catch(() => {
        });
        product.close().catch(() => {
        });
      };
      request.signal?.addEventListener("abort", teardown, { once: true });
      const response = await transport.handleRequest(request, {
        ...options?.authInfo !== void 0 && { authInfo: options.authInfo },
        ...options?.parsedBody !== void 0 && { parsedBody: options.parsedBody }
      });
      if (response.body === null || mediaTypeEssence(response.headers.get("content-type")) !== "text/event-stream") {
        teardown();
        return response;
      }
      const reader = response.body.getReader();
      let toreDown = false;
      const completeExchange = () => {
        if (!toreDown) {
          toreDown = true;
          teardown();
        }
      };
      const monitoredBody = new ReadableStream({
        pull: async (controller) => {
          try {
            const { done, value } = await reader.read();
            if (done) {
              completeExchange();
              controller.close();
              return;
            }
            if (value !== void 0) controller.enqueue(value);
          } catch (error3) {
            completeExchange();
            controller.error(error3);
          }
        },
        cancel: (reason) => {
          completeExchange();
          return reader.cancel(reason).catch(() => {
          });
        }
      });
      return new Response(monitoredBody, {
        status: response.status,
        statusText: response.statusText,
        headers: response.headers
      });
    } catch (error3) {
      try {
        onerror?.(toError(error3));
      } catch {
      }
      return internalServerErrorResponse(echoableRequestId(options?.parsedBody));
    }
  };
}
async function classifyEntryRequest(request, providedParsedBody, needsForward = true) {
  const httpMethod = request.method.toUpperCase();
  let body;
  let parsedBody = providedParsedBody;
  let forwardRequest = request;
  let unparseable = false;
  if (httpMethod === "POST") {
    if (parsedBody === void 0) {
      if (needsForward) forwardRequest = request.clone();
      let bodyText;
      try {
        bodyText = await request.text();
      } catch {
        return { step: "unreadable-body" };
      }
      try {
        body = bodyText.length === 0 ? void 0 : JSON.parse(bodyText);
      } catch {
        unparseable = true;
      }
      if (!unparseable && body !== void 0) parsedBody = body;
    } else body = parsedBody;
    if (unparseable || body === void 0) return {
      step: "no-json-body",
      forwardRequest
    };
  }
  return {
    step: "classified",
    outcome: classifyInboundRequest({
      httpMethod,
      protocolVersionHeader: request.headers.get("mcp-protocol-version") ?? void 0,
      mcpMethodHeader: request.headers.get("mcp-method") ?? void 0,
      mcpNameHeader: request.headers.get("mcp-name") ?? void 0,
      ...body !== void 0 && { body }
    }),
    body,
    parsedBody,
    forwardRequest
  };
}
function createMcpHandler(factory, options = {}) {
  const { legacy, onerror, responseMode } = options;
  if (typeof legacy === "function") throw new TypeError("The 'legacy' option only accepts 'stateless' or 'reject', not a handler function. To serve 2025-era traffic with your own handler, route in user land with the exported isLegacyRequest(request) predicate in front of a strict (legacy: 'reject') handler.");
  const inflight = /* @__PURE__ */ new Set();
  let closed = false;
  const reportError = (error3) => {
    try {
      onerror?.(error3);
    } catch {
    }
  };
  const bus = options.bus ?? new InMemoryServerEventBus(reportError);
  const notify = createServerNotifier(bus);
  const listenRouter = createListenRouter({
    bus,
    maxSubscriptions: options.maxSubscriptions ?? DEFAULT_MAX_SUBSCRIPTIONS,
    keepAliveMs: options.keepAliveMs ?? DEFAULT_SSE_KEEP_ALIVE_MS,
    onerror: reportError
  });
  if (responseMode === "json") console.warn("responseMode: 'json' drops mid-call notifications. subscriptions/listen streams are always served over SSE regardless; other notifications emitted before a result are dropped.");
  const legacyHandler = legacy === "reject" ? void 0 : createLegacyStatelessFallback(factory, reportError, options.keepAliveMs);
  async function serveModern(route, request, authInfo) {
    const claimedRevision = route.classification.revision;
    if (claimedRevision === void 0 || !SUPPORTED_MODERN_PROTOCOL_VERSIONS.includes(claimedRevision)) {
      const error3 = new UnsupportedProtocolVersionError({
        supported: [...SUPPORTED_MODERN_PROTOCOL_VERSIONS],
        requested: claimedRevision ?? "unknown"
      });
      reportError(error3);
      return jsonRpcErrorResponse(400, error3.code, error3.message, error3.data, echoableRequestId(route.message));
    }
    const stdHeaderRejection = validateStandardRequestHeaders({
      httpMethod: request.method,
      mcpMethodHeader: request.headers.get("mcp-method") ?? void 0,
      mcpNameHeader: request.headers.get("mcp-name") ?? void 0
    }, route);
    if (stdHeaderRejection !== void 0) {
      reportError(/* @__PURE__ */ new Error(`Rejected inbound request (${stdHeaderRejection.cell}): ${stdHeaderRejection.message}`));
      return rejectionResponse(stdHeaderRejection, echoableRequestId(route.message));
    }
    const meta3 = route.messageKind === "request" ? requestMetaOf(route.message.params) : void 0;
    const declaredClientCapabilities = meta3?.[CLIENT_CAPABILITIES_META_KEY];
    if (route.messageKind === "request") {
      const required4 = requiredClientCapabilitiesForRequest(route.message.method);
      if (required4 !== void 0) {
        const missing = missingClientCapabilities(required4, declaredClientCapabilities);
        if (missing !== void 0) {
          const error3 = new MissingRequiredClientCapabilityError({ requiredCapabilities: missing });
          reportError(error3);
          return jsonRpcErrorResponse(httpStatusForErrorCode(error3.code, "ladder"), error3.code, error3.message, error3.data, route.message.id);
        }
      }
    }
    const product = await factory({
      era: "modern",
      ...authInfo !== void 0 && { authInfo },
      requestInfo: request
    });
    const server = product instanceof McpServer ? product.server : product;
    if (route.messageKind === "request" && route.message.method === "subscriptions/listen") {
      const capabilities = server.getCapabilities();
      const serverInfo = serverIdentityOf(server);
      product.close().catch(reportError);
      return listenRouter.serve(route.message, request.signal, capabilities, serverInfo);
    }
    if (route.messageKind === "request" && route.message.method === "tools/call" && product instanceof McpServer) {
      const callParams = route.message.params;
      const toolName = typeof callParams?.name === "string" ? callParams.name : void 0;
      const inputSchema = toolName === void 0 ? void 0 : product.toolInputSchemaJson(toolName);
      if (inputSchema !== void 0) {
        const scan = scanXMcpHeaderDeclarations(inputSchema);
        if (scan.valid && scan.declarations.length > 0) {
          const rejection2 = validateMcpParamHeaders(scan.declarations, callParams?.arguments, request.headers);
          if (rejection2 !== void 0) {
            product.close().catch(reportError);
            reportError(/* @__PURE__ */ new Error(`Rejected inbound request (${rejection2.cell}): ${rejection2.message}`));
            return rejectionResponse(rejection2, route.message.id);
          }
        }
      }
    }
    setNegotiatedProtocolVersion(server, claimedRevision);
    installModernOnlyHandlers(server, SUPPORTED_MODERN_PROTOCOL_VERSIONS);
    if (meta3 !== void 0) seedClientIdentityFromEnvelope(server, {
      clientInfo: meta3[CLIENT_INFO_META_KEY],
      clientCapabilities: declaredClientCapabilities
    });
    const previousOnClose = server.onclose;
    inflight.add(server);
    server.onclose = () => {
      inflight.delete(server);
      previousOnClose?.();
    };
    try {
      const response = await invoke(product, route.message, {
        classification: route.classification,
        request,
        ...authInfo !== void 0 && { authInfo },
        ...responseMode !== void 0 && { responseMode },
        ...options.keepAliveMs !== void 0 && { keepAliveMs: options.keepAliveMs }
      });
      if (route.messageKind === "notification") queueMicrotask(() => void server.close().catch(() => {
      }));
      return response;
    } catch (error3) {
      if (error3 instanceof SdkError && error3.code === SdkErrorCode.ConnectionClosed) return new Response(null, { status: 499 });
      await server.close().catch(() => {
      });
      inflight.delete(server);
      reportError(toError(error3));
      return internalServerErrorResponse(echoableRequestId(route.message));
    }
  }
  async function serveLegacyRoute(route, forwardRequest, authInfo, parsedBody) {
    if (legacyHandler !== void 0) return legacyHandler(forwardRequest, {
      ...authInfo !== void 0 && { authInfo },
      ...parsedBody !== void 0 && { parsedBody }
    });
    const strict = modernOnlyStrictRejection(route, SUPPORTED_MODERN_PROTOCOL_VERSIONS);
    if (strict === void 0) return new Response(null, { status: 202 });
    reportError(/* @__PURE__ */ new Error(`Rejected 2025-era request on a modern-only endpoint (${strict.cell}): ${strict.message}`));
    return rejectionResponse(strict, echoableRequestId(parsedBody));
  }
  async function handle(request, requestOptions) {
    const authInfo = requestOptions?.authInfo;
    if (request.method.toUpperCase() === "POST" && !isJsonContentType(request.headers.get("content-type"))) {
      reportError(/* @__PURE__ */ new Error("Unsupported Media Type: Content-Type must be application/json"));
      return jsonRpcErrorResponse(415, -32e3, "Unsupported Media Type: Content-Type must be application/json");
    }
    const classified = await classifyEntryRequest(request, requestOptions?.parsedBody);
    if (classified.step === "unreadable-body") return jsonRpcErrorResponse(400, -32700, "Parse error: the request body could not be read");
    if (classified.step === "no-json-body") {
      if (legacyHandler !== void 0) return legacyHandler(classified.forwardRequest, { ...authInfo !== void 0 && { authInfo } });
      return jsonRpcErrorResponse(400, -32700, "Parse error: the request body is not valid JSON");
    }
    const { outcome, body, parsedBody, forwardRequest } = classified;
    try {
      switch (outcome.kind) {
        case "reject":
          reportError(/* @__PURE__ */ new Error(`Rejected inbound request (${outcome.cell}): ${outcome.message}`));
          return rejectionResponse(outcome, echoableRequestId(body));
        case "modern":
          return await serveModern(outcome, request, authInfo);
        case "legacy":
          return await serveLegacyRoute(outcome, forwardRequest, authInfo, parsedBody);
      }
    } catch (error3) {
      reportError(toError(error3));
      return internalServerErrorResponse(echoableRequestId(body));
    }
  }
  const fetchFace = async (request, requestOptions) => {
    if (closed) throw new Error("This MCP handler has been closed");
    try {
      return await handle(request, requestOptions);
    } catch (error3) {
      reportError(toError(error3));
      return internalServerErrorResponse(echoableRequestId(requestOptions?.parsedBody));
    }
  };
  return {
    fetch: fetchFace,
    notify,
    bus,
    close: async () => {
      closed = true;
      listenRouter.closeAll();
      const closing = [...inflight].map((server) => server.close().catch(() => {
      }));
      inflight.clear();
      await Promise.all(closing);
    }
  };
}

// node_modules/zod/v4/core/core.js
var NEVER2 = Object.freeze({
  status: "aborted"
});
// @__NO_SIDE_EFFECTS__
function $constructor3(name, initializer7, params) {
  function init(inst, def) {
    var _a5;
    Object.defineProperty(inst, "_zod", {
      value: inst._zod ?? {},
      enumerable: false
    });
    (_a5 = inst._zod).traits ?? (_a5.traits = /* @__PURE__ */ new Set());
    inst._zod.traits.add(name);
    initializer7(inst, def);
    for (const k in _.prototype) {
      if (!(k in inst))
        Object.defineProperty(inst, k, { value: _.prototype[k].bind(inst) });
    }
    inst._zod.constr = _;
    inst._zod.def = def;
  }
  const Parent = params?.Parent ?? Object;
  class Definition extends Parent {
  }
  Object.defineProperty(Definition, "name", { value: name });
  function _(def) {
    var _a5;
    const inst = params?.Parent ? new Definition() : this;
    init(inst, def);
    (_a5 = inst._zod).deferred ?? (_a5.deferred = []);
    for (const fn of inst._zod.deferred) {
      fn();
    }
    return inst;
  }
  Object.defineProperty(_, "init", { value: init });
  Object.defineProperty(_, Symbol.hasInstance, {
    value: (inst) => {
      if (params?.Parent && inst instanceof params.Parent)
        return true;
      return inst?._zod?.traits?.has(name);
    }
  });
  Object.defineProperty(_, "name", { value: name });
  return _;
}
var $ZodAsyncError3 = class extends Error {
  constructor() {
    super(`Encountered Promise during synchronous parse. Use .parseAsync() instead.`);
  }
};
var globalConfig3 = {};
function config3(newConfig) {
  if (newConfig)
    Object.assign(globalConfig3, newConfig);
  return globalConfig3;
}

// node_modules/zod/v4/core/util.js
var util_exports3 = {};
__export(util_exports3, {
  BIGINT_FORMAT_RANGES: () => BIGINT_FORMAT_RANGES3,
  Class: () => Class3,
  NUMBER_FORMAT_RANGES: () => NUMBER_FORMAT_RANGES3,
  aborted: () => aborted3,
  allowsEval: () => allowsEval3,
  assert: () => assert3,
  assertEqual: () => assertEqual3,
  assertIs: () => assertIs3,
  assertNever: () => assertNever3,
  assertNotEqual: () => assertNotEqual3,
  assignProp: () => assignProp3,
  cached: () => cached3,
  captureStackTrace: () => captureStackTrace3,
  cleanEnum: () => cleanEnum3,
  cleanRegex: () => cleanRegex3,
  clone: () => clone3,
  createTransparentProxy: () => createTransparentProxy3,
  defineLazy: () => defineLazy3,
  esc: () => esc3,
  escapeRegex: () => escapeRegex3,
  extend: () => extend3,
  finalizeIssue: () => finalizeIssue3,
  floatSafeRemainder: () => floatSafeRemainder3,
  getElementAtPath: () => getElementAtPath3,
  getEnumValues: () => getEnumValues3,
  getLengthableOrigin: () => getLengthableOrigin3,
  getParsedType: () => getParsedType3,
  getSizableOrigin: () => getSizableOrigin3,
  isObject: () => isObject3,
  isPlainObject: () => isPlainObject4,
  issue: () => issue3,
  joinValues: () => joinValues3,
  jsonStringifyReplacer: () => jsonStringifyReplacer3,
  merge: () => merge3,
  normalizeParams: () => normalizeParams3,
  nullish: () => nullish3,
  numKeys: () => numKeys3,
  omit: () => omit3,
  optionalKeys: () => optionalKeys3,
  partial: () => partial3,
  pick: () => pick3,
  prefixIssues: () => prefixIssues3,
  primitiveTypes: () => primitiveTypes3,
  promiseAllObject: () => promiseAllObject3,
  propertyKeyTypes: () => propertyKeyTypes3,
  randomString: () => randomString3,
  required: () => required3,
  stringifyPrimitive: () => stringifyPrimitive3,
  unwrapMessage: () => unwrapMessage3
});
function assertEqual3(val) {
  return val;
}
function assertNotEqual3(val) {
  return val;
}
function assertIs3(_arg) {
}
function assertNever3(_x) {
  throw new Error();
}
function assert3(_) {
}
function getEnumValues3(entries) {
  const numericValues = Object.values(entries).filter((v) => typeof v === "number");
  const values = Object.entries(entries).filter(([k, _]) => numericValues.indexOf(+k) === -1).map(([_, v]) => v);
  return values;
}
function joinValues3(array4, separator = "|") {
  return array4.map((val) => stringifyPrimitive3(val)).join(separator);
}
function jsonStringifyReplacer3(_, value) {
  if (typeof value === "bigint")
    return value.toString();
  return value;
}
function cached3(getter) {
  const set = false;
  return {
    get value() {
      if (!set) {
        const value = getter();
        Object.defineProperty(this, "value", { value });
        return value;
      }
      throw new Error("cached value already set");
    }
  };
}
function nullish3(input) {
  return input === null || input === void 0;
}
function cleanRegex3(source) {
  const start = source.startsWith("^") ? 1 : 0;
  const end = source.endsWith("$") ? source.length - 1 : source.length;
  return source.slice(start, end);
}
function floatSafeRemainder3(val, step) {
  const valDecCount = (val.toString().split(".")[1] || "").length;
  const stepDecCount = (step.toString().split(".")[1] || "").length;
  const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  const valInt = Number.parseInt(val.toFixed(decCount).replace(".", ""));
  const stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / 10 ** decCount;
}
function defineLazy3(object4, key, getter) {
  const set = false;
  Object.defineProperty(object4, key, {
    get() {
      if (!set) {
        const value = getter();
        object4[key] = value;
        return value;
      }
      throw new Error("cached value already set");
    },
    set(v) {
      Object.defineProperty(object4, key, {
        value: v
        // configurable: true,
      });
    },
    configurable: true
  });
}
function assignProp3(target, prop, value) {
  Object.defineProperty(target, prop, {
    value,
    writable: true,
    enumerable: true,
    configurable: true
  });
}
function getElementAtPath3(obj, path) {
  if (!path)
    return obj;
  return path.reduce((acc, key) => acc?.[key], obj);
}
function promiseAllObject3(promisesObj) {
  const keys = Object.keys(promisesObj);
  const promises = keys.map((key) => promisesObj[key]);
  return Promise.all(promises).then((results) => {
    const resolvedObj = {};
    for (let i = 0; i < keys.length; i++) {
      resolvedObj[keys[i]] = results[i];
    }
    return resolvedObj;
  });
}
function randomString3(length = 10) {
  const chars = "abcdefghijklmnopqrstuvwxyz";
  let str = "";
  for (let i = 0; i < length; i++) {
    str += chars[Math.floor(Math.random() * chars.length)];
  }
  return str;
}
function esc3(str) {
  return JSON.stringify(str);
}
var captureStackTrace3 = Error.captureStackTrace ? Error.captureStackTrace : (..._args) => {
};
function isObject3(data) {
  return typeof data === "object" && data !== null && !Array.isArray(data);
}
var allowsEval3 = cached3(() => {
  if (typeof navigator !== "undefined" && navigator?.userAgent?.includes("Cloudflare")) {
    return false;
  }
  try {
    const F = Function;
    new F("");
    return true;
  } catch (_) {
    return false;
  }
});
function isPlainObject4(o) {
  if (isObject3(o) === false)
    return false;
  const ctor = o.constructor;
  if (ctor === void 0)
    return true;
  const prot = ctor.prototype;
  if (isObject3(prot) === false)
    return false;
  if (Object.prototype.hasOwnProperty.call(prot, "isPrototypeOf") === false) {
    return false;
  }
  return true;
}
function numKeys3(data) {
  let keyCount = 0;
  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      keyCount++;
    }
  }
  return keyCount;
}
var getParsedType3 = (data) => {
  const t = typeof data;
  switch (t) {
    case "undefined":
      return "undefined";
    case "string":
      return "string";
    case "number":
      return Number.isNaN(data) ? "nan" : "number";
    case "boolean":
      return "boolean";
    case "function":
      return "function";
    case "bigint":
      return "bigint";
    case "symbol":
      return "symbol";
    case "object":
      if (Array.isArray(data)) {
        return "array";
      }
      if (data === null) {
        return "null";
      }
      if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
        return "promise";
      }
      if (typeof Map !== "undefined" && data instanceof Map) {
        return "map";
      }
      if (typeof Set !== "undefined" && data instanceof Set) {
        return "set";
      }
      if (typeof Date !== "undefined" && data instanceof Date) {
        return "date";
      }
      if (typeof File !== "undefined" && data instanceof File) {
        return "file";
      }
      return "object";
    default:
      throw new Error(`Unknown data type: ${t}`);
  }
};
var propertyKeyTypes3 = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
var primitiveTypes3 = /* @__PURE__ */ new Set(["string", "number", "bigint", "boolean", "symbol", "undefined"]);
function escapeRegex3(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function clone3(inst, def, params) {
  const cl = new inst._zod.constr(def ?? inst._zod.def);
  if (!def || params?.parent)
    cl._zod.parent = inst;
  return cl;
}
function normalizeParams3(_params) {
  const params = _params;
  if (!params)
    return {};
  if (typeof params === "string")
    return { error: () => params };
  if (params?.message !== void 0) {
    if (params?.error !== void 0)
      throw new Error("Cannot specify both `message` and `error` params");
    params.error = params.message;
  }
  delete params.message;
  if (typeof params.error === "string")
    return { ...params, error: () => params.error };
  return params;
}
function createTransparentProxy3(getter) {
  let target;
  return new Proxy({}, {
    get(_, prop, receiver) {
      target ?? (target = getter());
      return Reflect.get(target, prop, receiver);
    },
    set(_, prop, value, receiver) {
      target ?? (target = getter());
      return Reflect.set(target, prop, value, receiver);
    },
    has(_, prop) {
      target ?? (target = getter());
      return Reflect.has(target, prop);
    },
    deleteProperty(_, prop) {
      target ?? (target = getter());
      return Reflect.deleteProperty(target, prop);
    },
    ownKeys(_) {
      target ?? (target = getter());
      return Reflect.ownKeys(target);
    },
    getOwnPropertyDescriptor(_, prop) {
      target ?? (target = getter());
      return Reflect.getOwnPropertyDescriptor(target, prop);
    },
    defineProperty(_, prop, descriptor) {
      target ?? (target = getter());
      return Reflect.defineProperty(target, prop, descriptor);
    }
  });
}
function stringifyPrimitive3(value) {
  if (typeof value === "bigint")
    return value.toString() + "n";
  if (typeof value === "string")
    return `"${value}"`;
  return `${value}`;
}
function optionalKeys3(shape) {
  return Object.keys(shape).filter((k) => {
    return shape[k]._zod.optin === "optional" && shape[k]._zod.optout === "optional";
  });
}
var NUMBER_FORMAT_RANGES3 = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
var BIGINT_FORMAT_RANGES3 = {
  int64: [/* @__PURE__ */ BigInt("-9223372036854775808"), /* @__PURE__ */ BigInt("9223372036854775807")],
  uint64: [/* @__PURE__ */ BigInt(0), /* @__PURE__ */ BigInt("18446744073709551615")]
};
function pick3(schema, mask) {
  const newShape = {};
  const currDef = schema._zod.def;
  for (const key in mask) {
    if (!(key in currDef.shape)) {
      throw new Error(`Unrecognized key: "${key}"`);
    }
    if (!mask[key])
      continue;
    newShape[key] = currDef.shape[key];
  }
  return clone3(schema, {
    ...schema._zod.def,
    shape: newShape,
    checks: []
  });
}
function omit3(schema, mask) {
  const newShape = { ...schema._zod.def.shape };
  const currDef = schema._zod.def;
  for (const key in mask) {
    if (!(key in currDef.shape)) {
      throw new Error(`Unrecognized key: "${key}"`);
    }
    if (!mask[key])
      continue;
    delete newShape[key];
  }
  return clone3(schema, {
    ...schema._zod.def,
    shape: newShape,
    checks: []
  });
}
function extend3(schema, shape) {
  if (!isPlainObject4(shape)) {
    throw new Error("Invalid input to extend: expected a plain object");
  }
  const def = {
    ...schema._zod.def,
    get shape() {
      const _shape = { ...schema._zod.def.shape, ...shape };
      assignProp3(this, "shape", _shape);
      return _shape;
    },
    checks: []
    // delete existing checks
  };
  return clone3(schema, def);
}
function merge3(a, b) {
  return clone3(a, {
    ...a._zod.def,
    get shape() {
      const _shape = { ...a._zod.def.shape, ...b._zod.def.shape };
      assignProp3(this, "shape", _shape);
      return _shape;
    },
    catchall: b._zod.def.catchall,
    checks: []
    // delete existing checks
  });
}
function partial3(Class4, schema, mask) {
  const oldShape = schema._zod.def.shape;
  const shape = { ...oldShape };
  if (mask) {
    for (const key in mask) {
      if (!(key in oldShape)) {
        throw new Error(`Unrecognized key: "${key}"`);
      }
      if (!mask[key])
        continue;
      shape[key] = Class4 ? new Class4({
        type: "optional",
        innerType: oldShape[key]
      }) : oldShape[key];
    }
  } else {
    for (const key in oldShape) {
      shape[key] = Class4 ? new Class4({
        type: "optional",
        innerType: oldShape[key]
      }) : oldShape[key];
    }
  }
  return clone3(schema, {
    ...schema._zod.def,
    shape,
    checks: []
  });
}
function required3(Class4, schema, mask) {
  const oldShape = schema._zod.def.shape;
  const shape = { ...oldShape };
  if (mask) {
    for (const key in mask) {
      if (!(key in shape)) {
        throw new Error(`Unrecognized key: "${key}"`);
      }
      if (!mask[key])
        continue;
      shape[key] = new Class4({
        type: "nonoptional",
        innerType: oldShape[key]
      });
    }
  } else {
    for (const key in oldShape) {
      shape[key] = new Class4({
        type: "nonoptional",
        innerType: oldShape[key]
      });
    }
  }
  return clone3(schema, {
    ...schema._zod.def,
    shape,
    // optional: [],
    checks: []
  });
}
function aborted3(x, startIndex = 0) {
  for (let i = startIndex; i < x.issues.length; i++) {
    if (x.issues[i]?.continue !== true)
      return true;
  }
  return false;
}
function prefixIssues3(path, issues) {
  return issues.map((iss) => {
    var _a5;
    (_a5 = iss).path ?? (_a5.path = []);
    iss.path.unshift(path);
    return iss;
  });
}
function unwrapMessage3(message) {
  return typeof message === "string" ? message : message?.message;
}
function finalizeIssue3(iss, ctx, config4) {
  const full = { ...iss, path: iss.path ?? [] };
  if (!iss.message) {
    const message = unwrapMessage3(iss.inst?._zod.def?.error?.(iss)) ?? unwrapMessage3(ctx?.error?.(iss)) ?? unwrapMessage3(config4.customError?.(iss)) ?? unwrapMessage3(config4.localeError?.(iss)) ?? "Invalid input";
    full.message = message;
  }
  delete full.inst;
  delete full.continue;
  if (!ctx?.reportInput) {
    delete full.input;
  }
  return full;
}
function getSizableOrigin3(input) {
  if (input instanceof Set)
    return "set";
  if (input instanceof Map)
    return "map";
  if (input instanceof File)
    return "file";
  return "unknown";
}
function getLengthableOrigin3(input) {
  if (Array.isArray(input))
    return "array";
  if (typeof input === "string")
    return "string";
  return "unknown";
}
function issue3(...args) {
  const [iss, input, inst] = args;
  if (typeof iss === "string") {
    return {
      message: iss,
      code: "custom",
      input,
      inst
    };
  }
  return { ...iss };
}
function cleanEnum3(obj) {
  return Object.entries(obj).filter(([k, _]) => {
    return Number.isNaN(Number.parseInt(k, 10));
  }).map((el) => el[1]);
}
var Class3 = class {
  constructor(..._args) {
  }
};

// node_modules/zod/v4/core/errors.js
var initializer5 = (inst, def) => {
  inst.name = "$ZodError";
  Object.defineProperty(inst, "_zod", {
    value: inst._zod,
    enumerable: false
  });
  Object.defineProperty(inst, "issues", {
    value: def,
    enumerable: false
  });
  Object.defineProperty(inst, "message", {
    get() {
      return JSON.stringify(def, jsonStringifyReplacer3, 2);
    },
    enumerable: true
    // configurable: false,
  });
  Object.defineProperty(inst, "toString", {
    value: () => inst.message,
    enumerable: false
  });
};
var $ZodError3 = $constructor3("$ZodError", initializer5);
var $ZodRealError3 = $constructor3("$ZodError", initializer5, { Parent: Error });
function flattenError3(error3, mapper = (issue4) => issue4.message) {
  const fieldErrors = {};
  const formErrors = [];
  for (const sub of error3.issues) {
    if (sub.path.length > 0) {
      fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
      fieldErrors[sub.path[0]].push(mapper(sub));
    } else {
      formErrors.push(mapper(sub));
    }
  }
  return { formErrors, fieldErrors };
}
function formatError3(error3, _mapper) {
  const mapper = _mapper || function(issue4) {
    return issue4.message;
  };
  const fieldErrors = { _errors: [] };
  const processError = (error4) => {
    for (const issue4 of error4.issues) {
      if (issue4.code === "invalid_union" && issue4.errors.length) {
        issue4.errors.map((issues) => processError({ issues }));
      } else if (issue4.code === "invalid_key") {
        processError({ issues: issue4.issues });
      } else if (issue4.code === "invalid_element") {
        processError({ issues: issue4.issues });
      } else if (issue4.path.length === 0) {
        fieldErrors._errors.push(mapper(issue4));
      } else {
        let curr = fieldErrors;
        let i = 0;
        while (i < issue4.path.length) {
          const el = issue4.path[i];
          const terminal = i === issue4.path.length - 1;
          if (!terminal) {
            curr[el] = curr[el] || { _errors: [] };
          } else {
            curr[el] = curr[el] || { _errors: [] };
            curr[el]._errors.push(mapper(issue4));
          }
          curr = curr[el];
          i++;
        }
      }
    }
  };
  processError(error3);
  return fieldErrors;
}

// node_modules/zod/v4/core/parse.js
var _parse5 = (_Err) => (schema, value, _ctx, _params) => {
  const ctx = _ctx ? Object.assign(_ctx, { async: false }) : { async: false };
  const result = schema._zod.run({ value, issues: [] }, ctx);
  if (result instanceof Promise) {
    throw new $ZodAsyncError3();
  }
  if (result.issues.length) {
    const e = new (_params?.Err ?? _Err)(result.issues.map((iss) => finalizeIssue3(iss, ctx, config3())));
    captureStackTrace3(e, _params?.callee);
    throw e;
  }
  return result.value;
};
var _parseAsync5 = (_Err) => async (schema, value, _ctx, params) => {
  const ctx = _ctx ? Object.assign(_ctx, { async: true }) : { async: true };
  let result = schema._zod.run({ value, issues: [] }, ctx);
  if (result instanceof Promise)
    result = await result;
  if (result.issues.length) {
    const e = new (params?.Err ?? _Err)(result.issues.map((iss) => finalizeIssue3(iss, ctx, config3())));
    captureStackTrace3(e, params?.callee);
    throw e;
  }
  return result.value;
};
var _safeParse3 = (_Err) => (schema, value, _ctx) => {
  const ctx = _ctx ? { ..._ctx, async: false } : { async: false };
  const result = schema._zod.run({ value, issues: [] }, ctx);
  if (result instanceof Promise) {
    throw new $ZodAsyncError3();
  }
  return result.issues.length ? {
    success: false,
    error: new (_Err ?? $ZodError3)(result.issues.map((iss) => finalizeIssue3(iss, ctx, config3())))
  } : { success: true, data: result.value };
};
var safeParse5 = /* @__PURE__ */ _safeParse3($ZodRealError3);
var _safeParseAsync3 = (_Err) => async (schema, value, _ctx) => {
  const ctx = _ctx ? Object.assign(_ctx, { async: true }) : { async: true };
  let result = schema._zod.run({ value, issues: [] }, ctx);
  if (result instanceof Promise)
    result = await result;
  return result.issues.length ? {
    success: false,
    error: new _Err(result.issues.map((iss) => finalizeIssue3(iss, ctx, config3())))
  } : { success: true, data: result.value };
};
var safeParseAsync5 = /* @__PURE__ */ _safeParseAsync3($ZodRealError3);

// node_modules/zod/v4/core/regexes.js
var cuid4 = /^[cC][^\s-]{8,}$/;
var cuid23 = /^[0-9a-z]+$/;
var ulid3 = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/;
var xid3 = /^[0-9a-vA-V]{20}$/;
var ksuid3 = /^[A-Za-z0-9]{27}$/;
var nanoid3 = /^[a-zA-Z0-9_-]{21}$/;
var duration5 = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;
var guid3 = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/;
var uuid3 = (version4) => {
  if (!version4)
    return /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$/;
  return new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${version4}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`);
};
var email4 = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;
var _emoji5 = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
function emoji3() {
  return new RegExp(_emoji5, "u");
}
var ipv43 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var ipv63 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})$/;
var cidrv43 = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/;
var cidrv63 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
var base643 = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/;
var base64url3 = /^[A-Za-z0-9_-]*$/;
var hostname = /^([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+$/;
var e1643 = /^\+(?:[0-9]){6,14}[0-9]$/;
var dateSource3 = `(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))`;
var date7 = /* @__PURE__ */ new RegExp(`^${dateSource3}$`);
function timeSource3(args) {
  const hhmm = `(?:[01]\\d|2[0-3]):[0-5]\\d`;
  const regex2 = typeof args.precision === "number" ? args.precision === -1 ? `${hhmm}` : args.precision === 0 ? `${hhmm}:[0-5]\\d` : `${hhmm}:[0-5]\\d\\.\\d{${args.precision}}` : `${hhmm}(?::[0-5]\\d(?:\\.\\d+)?)?`;
  return regex2;
}
function time6(args) {
  return new RegExp(`^${timeSource3(args)}$`);
}
function datetime5(args) {
  const time8 = timeSource3({ precision: args.precision });
  const opts = ["Z"];
  if (args.local)
    opts.push("");
  if (args.offset)
    opts.push(`([+-]\\d{2}:\\d{2})`);
  const timeRegex = `${time8}(?:${opts.join("|")})`;
  return new RegExp(`^${dateSource3}T(?:${timeRegex})$`);
}
var string6 = (params) => {
  const regex2 = params ? `[\\s\\S]{${params?.minimum ?? 0},${params?.maximum ?? ""}}` : `[\\s\\S]*`;
  return new RegExp(`^${regex2}$`);
};
var integer3 = /^\d+$/;
var number6 = /^-?\d+(?:\.\d+)?/i;
var boolean6 = /true|false/i;
var lowercase3 = /^[^A-Z]*$/;
var uppercase3 = /^[^a-z]*$/;

// node_modules/zod/v4/core/checks.js
var $ZodCheck3 = /* @__PURE__ */ $constructor3("$ZodCheck", (inst, def) => {
  var _a5;
  inst._zod ?? (inst._zod = {});
  inst._zod.def = def;
  (_a5 = inst._zod).onattach ?? (_a5.onattach = []);
});
var numericOriginMap3 = {
  number: "number",
  bigint: "bigint",
  object: "date"
};
var $ZodCheckLessThan3 = /* @__PURE__ */ $constructor3("$ZodCheckLessThan", (inst, def) => {
  $ZodCheck3.init(inst, def);
  const origin = numericOriginMap3[typeof def.value];
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    const curr = (def.inclusive ? bag.maximum : bag.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
    if (def.value < curr) {
      if (def.inclusive)
        bag.maximum = def.value;
      else
        bag.exclusiveMaximum = def.value;
    }
  });
  inst._zod.check = (payload) => {
    if (def.inclusive ? payload.value <= def.value : payload.value < def.value) {
      return;
    }
    payload.issues.push({
      origin,
      code: "too_big",
      maximum: def.value,
      input: payload.value,
      inclusive: def.inclusive,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckGreaterThan3 = /* @__PURE__ */ $constructor3("$ZodCheckGreaterThan", (inst, def) => {
  $ZodCheck3.init(inst, def);
  const origin = numericOriginMap3[typeof def.value];
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    const curr = (def.inclusive ? bag.minimum : bag.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
    if (def.value > curr) {
      if (def.inclusive)
        bag.minimum = def.value;
      else
        bag.exclusiveMinimum = def.value;
    }
  });
  inst._zod.check = (payload) => {
    if (def.inclusive ? payload.value >= def.value : payload.value > def.value) {
      return;
    }
    payload.issues.push({
      origin,
      code: "too_small",
      minimum: def.value,
      input: payload.value,
      inclusive: def.inclusive,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckMultipleOf3 = /* @__PURE__ */ $constructor3("$ZodCheckMultipleOf", (inst, def) => {
  $ZodCheck3.init(inst, def);
  inst._zod.onattach.push((inst2) => {
    var _a5;
    (_a5 = inst2._zod.bag).multipleOf ?? (_a5.multipleOf = def.value);
  });
  inst._zod.check = (payload) => {
    if (typeof payload.value !== typeof def.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    const isMultiple = typeof payload.value === "bigint" ? payload.value % def.value === BigInt(0) : floatSafeRemainder3(payload.value, def.value) === 0;
    if (isMultiple)
      return;
    payload.issues.push({
      origin: typeof payload.value,
      code: "not_multiple_of",
      divisor: def.value,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckNumberFormat3 = /* @__PURE__ */ $constructor3("$ZodCheckNumberFormat", (inst, def) => {
  $ZodCheck3.init(inst, def);
  def.format = def.format || "float64";
  const isInt = def.format?.includes("int");
  const origin = isInt ? "int" : "number";
  const [minimum, maximum] = NUMBER_FORMAT_RANGES3[def.format];
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    bag.format = def.format;
    bag.minimum = minimum;
    bag.maximum = maximum;
    if (isInt)
      bag.pattern = integer3;
  });
  inst._zod.check = (payload) => {
    const input = payload.value;
    if (isInt) {
      if (!Number.isInteger(input)) {
        payload.issues.push({
          expected: origin,
          format: def.format,
          code: "invalid_type",
          input,
          inst
        });
        return;
      }
      if (!Number.isSafeInteger(input)) {
        if (input > 0) {
          payload.issues.push({
            input,
            code: "too_big",
            maximum: Number.MAX_SAFE_INTEGER,
            note: "Integers must be within the safe integer range.",
            inst,
            origin,
            continue: !def.abort
          });
        } else {
          payload.issues.push({
            input,
            code: "too_small",
            minimum: Number.MIN_SAFE_INTEGER,
            note: "Integers must be within the safe integer range.",
            inst,
            origin,
            continue: !def.abort
          });
        }
        return;
      }
    }
    if (input < minimum) {
      payload.issues.push({
        origin: "number",
        input,
        code: "too_small",
        minimum,
        inclusive: true,
        inst,
        continue: !def.abort
      });
    }
    if (input > maximum) {
      payload.issues.push({
        origin: "number",
        input,
        code: "too_big",
        maximum,
        inst
      });
    }
  };
});
var $ZodCheckMaxLength3 = /* @__PURE__ */ $constructor3("$ZodCheckMaxLength", (inst, def) => {
  var _a5;
  $ZodCheck3.init(inst, def);
  (_a5 = inst._zod.def).when ?? (_a5.when = (payload) => {
    const val = payload.value;
    return !nullish3(val) && val.length !== void 0;
  });
  inst._zod.onattach.push((inst2) => {
    const curr = inst2._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    if (def.maximum < curr)
      inst2._zod.bag.maximum = def.maximum;
  });
  inst._zod.check = (payload) => {
    const input = payload.value;
    const length = input.length;
    if (length <= def.maximum)
      return;
    const origin = getLengthableOrigin3(input);
    payload.issues.push({
      origin,
      code: "too_big",
      maximum: def.maximum,
      inclusive: true,
      input,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckMinLength3 = /* @__PURE__ */ $constructor3("$ZodCheckMinLength", (inst, def) => {
  var _a5;
  $ZodCheck3.init(inst, def);
  (_a5 = inst._zod.def).when ?? (_a5.when = (payload) => {
    const val = payload.value;
    return !nullish3(val) && val.length !== void 0;
  });
  inst._zod.onattach.push((inst2) => {
    const curr = inst2._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    if (def.minimum > curr)
      inst2._zod.bag.minimum = def.minimum;
  });
  inst._zod.check = (payload) => {
    const input = payload.value;
    const length = input.length;
    if (length >= def.minimum)
      return;
    const origin = getLengthableOrigin3(input);
    payload.issues.push({
      origin,
      code: "too_small",
      minimum: def.minimum,
      inclusive: true,
      input,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckLengthEquals3 = /* @__PURE__ */ $constructor3("$ZodCheckLengthEquals", (inst, def) => {
  var _a5;
  $ZodCheck3.init(inst, def);
  (_a5 = inst._zod.def).when ?? (_a5.when = (payload) => {
    const val = payload.value;
    return !nullish3(val) && val.length !== void 0;
  });
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    bag.minimum = def.length;
    bag.maximum = def.length;
    bag.length = def.length;
  });
  inst._zod.check = (payload) => {
    const input = payload.value;
    const length = input.length;
    if (length === def.length)
      return;
    const origin = getLengthableOrigin3(input);
    const tooBig = length > def.length;
    payload.issues.push({
      origin,
      ...tooBig ? { code: "too_big", maximum: def.length } : { code: "too_small", minimum: def.length },
      inclusive: true,
      exact: true,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckStringFormat3 = /* @__PURE__ */ $constructor3("$ZodCheckStringFormat", (inst, def) => {
  var _a5, _b;
  $ZodCheck3.init(inst, def);
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    bag.format = def.format;
    if (def.pattern) {
      bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
      bag.patterns.add(def.pattern);
    }
  });
  if (def.pattern)
    (_a5 = inst._zod).check ?? (_a5.check = (payload) => {
      def.pattern.lastIndex = 0;
      if (def.pattern.test(payload.value))
        return;
      payload.issues.push({
        origin: "string",
        code: "invalid_format",
        format: def.format,
        input: payload.value,
        ...def.pattern ? { pattern: def.pattern.toString() } : {},
        inst,
        continue: !def.abort
      });
    });
  else
    (_b = inst._zod).check ?? (_b.check = () => {
    });
});
var $ZodCheckRegex3 = /* @__PURE__ */ $constructor3("$ZodCheckRegex", (inst, def) => {
  $ZodCheckStringFormat3.init(inst, def);
  inst._zod.check = (payload) => {
    def.pattern.lastIndex = 0;
    if (def.pattern.test(payload.value))
      return;
    payload.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: payload.value,
      pattern: def.pattern.toString(),
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckLowerCase3 = /* @__PURE__ */ $constructor3("$ZodCheckLowerCase", (inst, def) => {
  def.pattern ?? (def.pattern = lowercase3);
  $ZodCheckStringFormat3.init(inst, def);
});
var $ZodCheckUpperCase3 = /* @__PURE__ */ $constructor3("$ZodCheckUpperCase", (inst, def) => {
  def.pattern ?? (def.pattern = uppercase3);
  $ZodCheckStringFormat3.init(inst, def);
});
var $ZodCheckIncludes3 = /* @__PURE__ */ $constructor3("$ZodCheckIncludes", (inst, def) => {
  $ZodCheck3.init(inst, def);
  const escapedRegex = escapeRegex3(def.includes);
  const pattern = new RegExp(typeof def.position === "number" ? `^.{${def.position}}${escapedRegex}` : escapedRegex);
  def.pattern = pattern;
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
    bag.patterns.add(pattern);
  });
  inst._zod.check = (payload) => {
    if (payload.value.includes(def.includes, def.position))
      return;
    payload.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: def.includes,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckStartsWith3 = /* @__PURE__ */ $constructor3("$ZodCheckStartsWith", (inst, def) => {
  $ZodCheck3.init(inst, def);
  const pattern = new RegExp(`^${escapeRegex3(def.prefix)}.*`);
  def.pattern ?? (def.pattern = pattern);
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
    bag.patterns.add(pattern);
  });
  inst._zod.check = (payload) => {
    if (payload.value.startsWith(def.prefix))
      return;
    payload.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: def.prefix,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckEndsWith3 = /* @__PURE__ */ $constructor3("$ZodCheckEndsWith", (inst, def) => {
  $ZodCheck3.init(inst, def);
  const pattern = new RegExp(`.*${escapeRegex3(def.suffix)}$`);
  def.pattern ?? (def.pattern = pattern);
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
    bag.patterns.add(pattern);
  });
  inst._zod.check = (payload) => {
    if (payload.value.endsWith(def.suffix))
      return;
    payload.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: def.suffix,
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodCheckOverwrite3 = /* @__PURE__ */ $constructor3("$ZodCheckOverwrite", (inst, def) => {
  $ZodCheck3.init(inst, def);
  inst._zod.check = (payload) => {
    payload.value = def.tx(payload.value);
  };
});

// node_modules/zod/v4/core/doc.js
var Doc3 = class {
  constructor(args = []) {
    this.content = [];
    this.indent = 0;
    if (this)
      this.args = args;
  }
  indented(fn) {
    this.indent += 1;
    fn(this);
    this.indent -= 1;
  }
  write(arg) {
    if (typeof arg === "function") {
      arg(this, { execution: "sync" });
      arg(this, { execution: "async" });
      return;
    }
    const content = arg;
    const lines = content.split("\n").filter((x) => x);
    const minIndent = Math.min(...lines.map((x) => x.length - x.trimStart().length));
    const dedented = lines.map((x) => x.slice(minIndent)).map((x) => " ".repeat(this.indent * 2) + x);
    for (const line of dedented) {
      this.content.push(line);
    }
  }
  compile() {
    const F = Function;
    const args = this?.args;
    const content = this?.content ?? [``];
    const lines = [...content.map((x) => `  ${x}`)];
    return new F(...args, lines.join("\n"));
  }
};

// node_modules/zod/v4/core/versions.js
var version3 = {
  major: 4,
  minor: 0,
  patch: 0
};

// node_modules/zod/v4/core/schemas.js
var $ZodType3 = /* @__PURE__ */ $constructor3("$ZodType", (inst, def) => {
  var _a5;
  inst ?? (inst = {});
  inst._zod.def = def;
  inst._zod.bag = inst._zod.bag || {};
  inst._zod.version = version3;
  const checks = [...inst._zod.def.checks ?? []];
  if (inst._zod.traits.has("$ZodCheck")) {
    checks.unshift(inst);
  }
  for (const ch of checks) {
    for (const fn of ch._zod.onattach) {
      fn(inst);
    }
  }
  if (checks.length === 0) {
    (_a5 = inst._zod).deferred ?? (_a5.deferred = []);
    inst._zod.deferred?.push(() => {
      inst._zod.run = inst._zod.parse;
    });
  } else {
    const runChecks = (payload, checks2, ctx) => {
      let isAborted = aborted3(payload);
      let asyncResult;
      for (const ch of checks2) {
        if (ch._zod.def.when) {
          const shouldRun = ch._zod.def.when(payload);
          if (!shouldRun)
            continue;
        } else if (isAborted) {
          continue;
        }
        const currLen = payload.issues.length;
        const _ = ch._zod.check(payload);
        if (_ instanceof Promise && ctx?.async === false) {
          throw new $ZodAsyncError3();
        }
        if (asyncResult || _ instanceof Promise) {
          asyncResult = (asyncResult ?? Promise.resolve()).then(async () => {
            await _;
            const nextLen = payload.issues.length;
            if (nextLen === currLen)
              return;
            if (!isAborted)
              isAborted = aborted3(payload, currLen);
          });
        } else {
          const nextLen = payload.issues.length;
          if (nextLen === currLen)
            continue;
          if (!isAborted)
            isAborted = aborted3(payload, currLen);
        }
      }
      if (asyncResult) {
        return asyncResult.then(() => {
          return payload;
        });
      }
      return payload;
    };
    inst._zod.run = (payload, ctx) => {
      const result = inst._zod.parse(payload, ctx);
      if (result instanceof Promise) {
        if (ctx.async === false)
          throw new $ZodAsyncError3();
        return result.then((result2) => runChecks(result2, checks, ctx));
      }
      return runChecks(result, checks, ctx);
    };
  }
  inst["~standard"] = {
    validate: (value) => {
      try {
        const r = safeParse5(inst, value);
        return r.success ? { value: r.data } : { issues: r.error?.issues };
      } catch (_) {
        return safeParseAsync5(inst, value).then((r) => r.success ? { value: r.data } : { issues: r.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  };
});
var $ZodString3 = /* @__PURE__ */ $constructor3("$ZodString", (inst, def) => {
  $ZodType3.init(inst, def);
  inst._zod.pattern = [...inst?._zod.bag?.patterns ?? []].pop() ?? string6(inst._zod.bag);
  inst._zod.parse = (payload, _) => {
    if (def.coerce)
      try {
        payload.value = String(payload.value);
      } catch (_2) {
      }
    if (typeof payload.value === "string")
      return payload;
    payload.issues.push({
      expected: "string",
      code: "invalid_type",
      input: payload.value,
      inst
    });
    return payload;
  };
});
var $ZodStringFormat3 = /* @__PURE__ */ $constructor3("$ZodStringFormat", (inst, def) => {
  $ZodCheckStringFormat3.init(inst, def);
  $ZodString3.init(inst, def);
});
var $ZodGUID3 = /* @__PURE__ */ $constructor3("$ZodGUID", (inst, def) => {
  def.pattern ?? (def.pattern = guid3);
  $ZodStringFormat3.init(inst, def);
});
var $ZodUUID3 = /* @__PURE__ */ $constructor3("$ZodUUID", (inst, def) => {
  if (def.version) {
    const versionMap = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    };
    const v = versionMap[def.version];
    if (v === void 0)
      throw new Error(`Invalid UUID version: "${def.version}"`);
    def.pattern ?? (def.pattern = uuid3(v));
  } else
    def.pattern ?? (def.pattern = uuid3());
  $ZodStringFormat3.init(inst, def);
});
var $ZodEmail3 = /* @__PURE__ */ $constructor3("$ZodEmail", (inst, def) => {
  def.pattern ?? (def.pattern = email4);
  $ZodStringFormat3.init(inst, def);
});
var $ZodURL3 = /* @__PURE__ */ $constructor3("$ZodURL", (inst, def) => {
  $ZodStringFormat3.init(inst, def);
  inst._zod.check = (payload) => {
    try {
      const orig = payload.value;
      const url3 = new URL(orig);
      const href = url3.href;
      if (def.hostname) {
        def.hostname.lastIndex = 0;
        if (!def.hostname.test(url3.hostname)) {
          payload.issues.push({
            code: "invalid_format",
            format: "url",
            note: "Invalid hostname",
            pattern: hostname.source,
            input: payload.value,
            inst,
            continue: !def.abort
          });
        }
      }
      if (def.protocol) {
        def.protocol.lastIndex = 0;
        if (!def.protocol.test(url3.protocol.endsWith(":") ? url3.protocol.slice(0, -1) : url3.protocol)) {
          payload.issues.push({
            code: "invalid_format",
            format: "url",
            note: "Invalid protocol",
            pattern: def.protocol.source,
            input: payload.value,
            inst,
            continue: !def.abort
          });
        }
      }
      if (!orig.endsWith("/") && href.endsWith("/")) {
        payload.value = href.slice(0, -1);
      } else {
        payload.value = href;
      }
      return;
    } catch (_) {
      payload.issues.push({
        code: "invalid_format",
        format: "url",
        input: payload.value,
        inst,
        continue: !def.abort
      });
    }
  };
});
var $ZodEmoji3 = /* @__PURE__ */ $constructor3("$ZodEmoji", (inst, def) => {
  def.pattern ?? (def.pattern = emoji3());
  $ZodStringFormat3.init(inst, def);
});
var $ZodNanoID3 = /* @__PURE__ */ $constructor3("$ZodNanoID", (inst, def) => {
  def.pattern ?? (def.pattern = nanoid3);
  $ZodStringFormat3.init(inst, def);
});
var $ZodCUID4 = /* @__PURE__ */ $constructor3("$ZodCUID", (inst, def) => {
  def.pattern ?? (def.pattern = cuid4);
  $ZodStringFormat3.init(inst, def);
});
var $ZodCUID23 = /* @__PURE__ */ $constructor3("$ZodCUID2", (inst, def) => {
  def.pattern ?? (def.pattern = cuid23);
  $ZodStringFormat3.init(inst, def);
});
var $ZodULID3 = /* @__PURE__ */ $constructor3("$ZodULID", (inst, def) => {
  def.pattern ?? (def.pattern = ulid3);
  $ZodStringFormat3.init(inst, def);
});
var $ZodXID3 = /* @__PURE__ */ $constructor3("$ZodXID", (inst, def) => {
  def.pattern ?? (def.pattern = xid3);
  $ZodStringFormat3.init(inst, def);
});
var $ZodKSUID3 = /* @__PURE__ */ $constructor3("$ZodKSUID", (inst, def) => {
  def.pattern ?? (def.pattern = ksuid3);
  $ZodStringFormat3.init(inst, def);
});
var $ZodISODateTime3 = /* @__PURE__ */ $constructor3("$ZodISODateTime", (inst, def) => {
  def.pattern ?? (def.pattern = datetime5(def));
  $ZodStringFormat3.init(inst, def);
});
var $ZodISODate3 = /* @__PURE__ */ $constructor3("$ZodISODate", (inst, def) => {
  def.pattern ?? (def.pattern = date7);
  $ZodStringFormat3.init(inst, def);
});
var $ZodISOTime3 = /* @__PURE__ */ $constructor3("$ZodISOTime", (inst, def) => {
  def.pattern ?? (def.pattern = time6(def));
  $ZodStringFormat3.init(inst, def);
});
var $ZodISODuration3 = /* @__PURE__ */ $constructor3("$ZodISODuration", (inst, def) => {
  def.pattern ?? (def.pattern = duration5);
  $ZodStringFormat3.init(inst, def);
});
var $ZodIPv43 = /* @__PURE__ */ $constructor3("$ZodIPv4", (inst, def) => {
  def.pattern ?? (def.pattern = ipv43);
  $ZodStringFormat3.init(inst, def);
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    bag.format = `ipv4`;
  });
});
var $ZodIPv63 = /* @__PURE__ */ $constructor3("$ZodIPv6", (inst, def) => {
  def.pattern ?? (def.pattern = ipv63);
  $ZodStringFormat3.init(inst, def);
  inst._zod.onattach.push((inst2) => {
    const bag = inst2._zod.bag;
    bag.format = `ipv6`;
  });
  inst._zod.check = (payload) => {
    try {
      new URL(`http://[${payload.value}]`);
    } catch {
      payload.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: payload.value,
        inst,
        continue: !def.abort
      });
    }
  };
});
var $ZodCIDRv43 = /* @__PURE__ */ $constructor3("$ZodCIDRv4", (inst, def) => {
  def.pattern ?? (def.pattern = cidrv43);
  $ZodStringFormat3.init(inst, def);
});
var $ZodCIDRv63 = /* @__PURE__ */ $constructor3("$ZodCIDRv6", (inst, def) => {
  def.pattern ?? (def.pattern = cidrv63);
  $ZodStringFormat3.init(inst, def);
  inst._zod.check = (payload) => {
    const [address, prefix] = payload.value.split("/");
    try {
      if (!prefix)
        throw new Error();
      const prefixNum = Number(prefix);
      if (`${prefixNum}` !== prefix)
        throw new Error();
      if (prefixNum < 0 || prefixNum > 128)
        throw new Error();
      new URL(`http://[${address}]`);
    } catch {
      payload.issues.push({
        code: "invalid_format",
        format: "cidrv6",
        input: payload.value,
        inst,
        continue: !def.abort
      });
    }
  };
});
function isValidBase643(data) {
  if (data === "")
    return true;
  if (data.length % 4 !== 0)
    return false;
  try {
    atob(data);
    return true;
  } catch {
    return false;
  }
}
var $ZodBase643 = /* @__PURE__ */ $constructor3("$ZodBase64", (inst, def) => {
  def.pattern ?? (def.pattern = base643);
  $ZodStringFormat3.init(inst, def);
  inst._zod.onattach.push((inst2) => {
    inst2._zod.bag.contentEncoding = "base64";
  });
  inst._zod.check = (payload) => {
    if (isValidBase643(payload.value))
      return;
    payload.issues.push({
      code: "invalid_format",
      format: "base64",
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
function isValidBase64URL3(data) {
  if (!base64url3.test(data))
    return false;
  const base644 = data.replace(/[-_]/g, (c) => c === "-" ? "+" : "/");
  const padded = base644.padEnd(Math.ceil(base644.length / 4) * 4, "=");
  return isValidBase643(padded);
}
var $ZodBase64URL3 = /* @__PURE__ */ $constructor3("$ZodBase64URL", (inst, def) => {
  def.pattern ?? (def.pattern = base64url3);
  $ZodStringFormat3.init(inst, def);
  inst._zod.onattach.push((inst2) => {
    inst2._zod.bag.contentEncoding = "base64url";
  });
  inst._zod.check = (payload) => {
    if (isValidBase64URL3(payload.value))
      return;
    payload.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodE1643 = /* @__PURE__ */ $constructor3("$ZodE164", (inst, def) => {
  def.pattern ?? (def.pattern = e1643);
  $ZodStringFormat3.init(inst, def);
});
function isValidJWT3(token, algorithm = null) {
  try {
    const tokensParts = token.split(".");
    if (tokensParts.length !== 3)
      return false;
    const [header] = tokensParts;
    if (!header)
      return false;
    const parsedHeader = JSON.parse(atob(header));
    if ("typ" in parsedHeader && parsedHeader?.typ !== "JWT")
      return false;
    if (!parsedHeader.alg)
      return false;
    if (algorithm && (!("alg" in parsedHeader) || parsedHeader.alg !== algorithm))
      return false;
    return true;
  } catch {
    return false;
  }
}
var $ZodJWT3 = /* @__PURE__ */ $constructor3("$ZodJWT", (inst, def) => {
  $ZodStringFormat3.init(inst, def);
  inst._zod.check = (payload) => {
    if (isValidJWT3(payload.value, def.alg))
      return;
    payload.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: payload.value,
      inst,
      continue: !def.abort
    });
  };
});
var $ZodNumber3 = /* @__PURE__ */ $constructor3("$ZodNumber", (inst, def) => {
  $ZodType3.init(inst, def);
  inst._zod.pattern = inst._zod.bag.pattern ?? number6;
  inst._zod.parse = (payload, _ctx) => {
    if (def.coerce)
      try {
        payload.value = Number(payload.value);
      } catch (_) {
      }
    const input = payload.value;
    if (typeof input === "number" && !Number.isNaN(input) && Number.isFinite(input)) {
      return payload;
    }
    const received = typeof input === "number" ? Number.isNaN(input) ? "NaN" : !Number.isFinite(input) ? "Infinity" : void 0 : void 0;
    payload.issues.push({
      expected: "number",
      code: "invalid_type",
      input,
      inst,
      ...received ? { received } : {}
    });
    return payload;
  };
});
var $ZodNumberFormat3 = /* @__PURE__ */ $constructor3("$ZodNumber", (inst, def) => {
  $ZodCheckNumberFormat3.init(inst, def);
  $ZodNumber3.init(inst, def);
});
var $ZodBoolean3 = /* @__PURE__ */ $constructor3("$ZodBoolean", (inst, def) => {
  $ZodType3.init(inst, def);
  inst._zod.pattern = boolean6;
  inst._zod.parse = (payload, _ctx) => {
    if (def.coerce)
      try {
        payload.value = Boolean(payload.value);
      } catch (_) {
      }
    const input = payload.value;
    if (typeof input === "boolean")
      return payload;
    payload.issues.push({
      expected: "boolean",
      code: "invalid_type",
      input,
      inst
    });
    return payload;
  };
});
var $ZodUnknown3 = /* @__PURE__ */ $constructor3("$ZodUnknown", (inst, def) => {
  $ZodType3.init(inst, def);
  inst._zod.parse = (payload) => payload;
});
var $ZodNever3 = /* @__PURE__ */ $constructor3("$ZodNever", (inst, def) => {
  $ZodType3.init(inst, def);
  inst._zod.parse = (payload, _ctx) => {
    payload.issues.push({
      expected: "never",
      code: "invalid_type",
      input: payload.value,
      inst
    });
    return payload;
  };
});
function handleArrayResult3(result, final, index) {
  if (result.issues.length) {
    final.issues.push(...prefixIssues3(index, result.issues));
  }
  final.value[index] = result.value;
}
var $ZodArray3 = /* @__PURE__ */ $constructor3("$ZodArray", (inst, def) => {
  $ZodType3.init(inst, def);
  inst._zod.parse = (payload, ctx) => {
    const input = payload.value;
    if (!Array.isArray(input)) {
      payload.issues.push({
        expected: "array",
        code: "invalid_type",
        input,
        inst
      });
      return payload;
    }
    payload.value = Array(input.length);
    const proms = [];
    for (let i = 0; i < input.length; i++) {
      const item = input[i];
      const result = def.element._zod.run({
        value: item,
        issues: []
      }, ctx);
      if (result instanceof Promise) {
        proms.push(result.then((result2) => handleArrayResult3(result2, payload, i)));
      } else {
        handleArrayResult3(result, payload, i);
      }
    }
    if (proms.length) {
      return Promise.all(proms).then(() => payload);
    }
    return payload;
  };
});
function handleObjectResult(result, final, key) {
  if (result.issues.length) {
    final.issues.push(...prefixIssues3(key, result.issues));
  }
  final.value[key] = result.value;
}
function handleOptionalObjectResult(result, final, key, input) {
  if (result.issues.length) {
    if (input[key] === void 0) {
      if (key in input) {
        final.value[key] = void 0;
      } else {
        final.value[key] = result.value;
      }
    } else {
      final.issues.push(...prefixIssues3(key, result.issues));
    }
  } else if (result.value === void 0) {
    if (key in input)
      final.value[key] = void 0;
  } else {
    final.value[key] = result.value;
  }
}
var $ZodObject3 = /* @__PURE__ */ $constructor3("$ZodObject", (inst, def) => {
  $ZodType3.init(inst, def);
  const _normalized = cached3(() => {
    const keys = Object.keys(def.shape);
    for (const k of keys) {
      if (!(def.shape[k] instanceof $ZodType3)) {
        throw new Error(`Invalid element at key "${k}": expected a Zod schema`);
      }
    }
    const okeys = optionalKeys3(def.shape);
    return {
      shape: def.shape,
      keys,
      keySet: new Set(keys),
      numKeys: keys.length,
      optionalKeys: new Set(okeys)
    };
  });
  defineLazy3(inst._zod, "propValues", () => {
    const shape = def.shape;
    const propValues = {};
    for (const key in shape) {
      const field = shape[key]._zod;
      if (field.values) {
        propValues[key] ?? (propValues[key] = /* @__PURE__ */ new Set());
        for (const v of field.values)
          propValues[key].add(v);
      }
    }
    return propValues;
  });
  const generateFastpass = (shape) => {
    const doc = new Doc3(["shape", "payload", "ctx"]);
    const normalized = _normalized.value;
    const parseStr = (key) => {
      const k = esc3(key);
      return `shape[${k}]._zod.run({ value: input[${k}], issues: [] }, ctx)`;
    };
    doc.write(`const input = payload.value;`);
    const ids = /* @__PURE__ */ Object.create(null);
    let counter = 0;
    for (const key of normalized.keys) {
      ids[key] = `key_${counter++}`;
    }
    doc.write(`const newResult = {}`);
    for (const key of normalized.keys) {
      if (normalized.optionalKeys.has(key)) {
        const id = ids[key];
        doc.write(`const ${id} = ${parseStr(key)};`);
        const k = esc3(key);
        doc.write(`
        if (${id}.issues.length) {
          if (input[${k}] === undefined) {
            if (${k} in input) {
              newResult[${k}] = undefined;
            }
          } else {
            payload.issues = payload.issues.concat(
              ${id}.issues.map((iss) => ({
                ...iss,
                path: iss.path ? [${k}, ...iss.path] : [${k}],
              }))
            );
          }
        } else if (${id}.value === undefined) {
          if (${k} in input) newResult[${k}] = undefined;
        } else {
          newResult[${k}] = ${id}.value;
        }
        `);
      } else {
        const id = ids[key];
        doc.write(`const ${id} = ${parseStr(key)};`);
        doc.write(`
          if (${id}.issues.length) payload.issues = payload.issues.concat(${id}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${esc3(key)}, ...iss.path] : [${esc3(key)}]
          })));`);
        doc.write(`newResult[${esc3(key)}] = ${id}.value`);
      }
    }
    doc.write(`payload.value = newResult;`);
    doc.write(`return payload;`);
    const fn = doc.compile();
    return (payload, ctx) => fn(shape, payload, ctx);
  };
  let fastpass;
  const isObject4 = isObject3;
  const jit = !globalConfig3.jitless;
  const allowsEval4 = allowsEval3;
  const fastEnabled = jit && allowsEval4.value;
  const catchall = def.catchall;
  let value;
  inst._zod.parse = (payload, ctx) => {
    value ?? (value = _normalized.value);
    const input = payload.value;
    if (!isObject4(input)) {
      payload.issues.push({
        expected: "object",
        code: "invalid_type",
        input,
        inst
      });
      return payload;
    }
    const proms = [];
    if (jit && fastEnabled && ctx?.async === false && ctx.jitless !== true) {
      if (!fastpass)
        fastpass = generateFastpass(def.shape);
      payload = fastpass(payload, ctx);
    } else {
      payload.value = {};
      const shape = value.shape;
      for (const key of value.keys) {
        const el = shape[key];
        const r = el._zod.run({ value: input[key], issues: [] }, ctx);
        const isOptional = el._zod.optin === "optional" && el._zod.optout === "optional";
        if (r instanceof Promise) {
          proms.push(r.then((r2) => isOptional ? handleOptionalObjectResult(r2, payload, key, input) : handleObjectResult(r2, payload, key)));
        } else if (isOptional) {
          handleOptionalObjectResult(r, payload, key, input);
        } else {
          handleObjectResult(r, payload, key);
        }
      }
    }
    if (!catchall) {
      return proms.length ? Promise.all(proms).then(() => payload) : payload;
    }
    const unrecognized = [];
    const keySet = value.keySet;
    const _catchall = catchall._zod;
    const t = _catchall.def.type;
    for (const key of Object.keys(input)) {
      if (keySet.has(key))
        continue;
      if (t === "never") {
        unrecognized.push(key);
        continue;
      }
      const r = _catchall.run({ value: input[key], issues: [] }, ctx);
      if (r instanceof Promise) {
        proms.push(r.then((r2) => handleObjectResult(r2, payload, key)));
      } else {
        handleObjectResult(r, payload, key);
      }
    }
    if (unrecognized.length) {
      payload.issues.push({
        code: "unrecognized_keys",
        keys: unrecognized,
        input,
        inst
      });
    }
    if (!proms.length)
      return payload;
    return Promise.all(proms).then(() => {
      return payload;
    });
  };
});
function handleUnionResults3(results, final, inst, ctx) {
  for (const result of results) {
    if (result.issues.length === 0) {
      final.value = result.value;
      return final;
    }
  }
  final.issues.push({
    code: "invalid_union",
    input: final.value,
    inst,
    errors: results.map((result) => result.issues.map((iss) => finalizeIssue3(iss, ctx, config3())))
  });
  return final;
}
var $ZodUnion3 = /* @__PURE__ */ $constructor3("$ZodUnion", (inst, def) => {
  $ZodType3.init(inst, def);
  defineLazy3(inst._zod, "optin", () => def.options.some((o) => o._zod.optin === "optional") ? "optional" : void 0);
  defineLazy3(inst._zod, "optout", () => def.options.some((o) => o._zod.optout === "optional") ? "optional" : void 0);
  defineLazy3(inst._zod, "values", () => {
    if (def.options.every((o) => o._zod.values)) {
      return new Set(def.options.flatMap((option) => Array.from(option._zod.values)));
    }
    return void 0;
  });
  defineLazy3(inst._zod, "pattern", () => {
    if (def.options.every((o) => o._zod.pattern)) {
      const patterns = def.options.map((o) => o._zod.pattern);
      return new RegExp(`^(${patterns.map((p) => cleanRegex3(p.source)).join("|")})$`);
    }
    return void 0;
  });
  inst._zod.parse = (payload, ctx) => {
    let async = false;
    const results = [];
    for (const option of def.options) {
      const result = option._zod.run({
        value: payload.value,
        issues: []
      }, ctx);
      if (result instanceof Promise) {
        results.push(result);
        async = true;
      } else {
        if (result.issues.length === 0)
          return result;
        results.push(result);
      }
    }
    if (!async)
      return handleUnionResults3(results, payload, inst, ctx);
    return Promise.all(results).then((results2) => {
      return handleUnionResults3(results2, payload, inst, ctx);
    });
  };
});
var $ZodIntersection3 = /* @__PURE__ */ $constructor3("$ZodIntersection", (inst, def) => {
  $ZodType3.init(inst, def);
  inst._zod.parse = (payload, ctx) => {
    const input = payload.value;
    const left = def.left._zod.run({ value: input, issues: [] }, ctx);
    const right = def.right._zod.run({ value: input, issues: [] }, ctx);
    const async = left instanceof Promise || right instanceof Promise;
    if (async) {
      return Promise.all([left, right]).then(([left2, right2]) => {
        return handleIntersectionResults3(payload, left2, right2);
      });
    }
    return handleIntersectionResults3(payload, left, right);
  };
});
function mergeValues3(a, b) {
  if (a === b) {
    return { valid: true, data: a };
  }
  if (a instanceof Date && b instanceof Date && +a === +b) {
    return { valid: true, data: a };
  }
  if (isPlainObject4(a) && isPlainObject4(b)) {
    const bKeys = Object.keys(b);
    const sharedKeys = Object.keys(a).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = { ...a, ...b };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues3(a[key], b[key]);
      if (!sharedValue.valid) {
        return {
          valid: false,
          mergeErrorPath: [key, ...sharedValue.mergeErrorPath]
        };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  }
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) {
      return { valid: false, mergeErrorPath: [] };
    }
    const newArray = [];
    for (let index = 0; index < a.length; index++) {
      const itemA = a[index];
      const itemB = b[index];
      const sharedValue = mergeValues3(itemA, itemB);
      if (!sharedValue.valid) {
        return {
          valid: false,
          mergeErrorPath: [index, ...sharedValue.mergeErrorPath]
        };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  }
  return { valid: false, mergeErrorPath: [] };
}
function handleIntersectionResults3(result, left, right) {
  if (left.issues.length) {
    result.issues.push(...left.issues);
  }
  if (right.issues.length) {
    result.issues.push(...right.issues);
  }
  if (aborted3(result))
    return result;
  const merged = mergeValues3(left.value, right.value);
  if (!merged.valid) {
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(merged.mergeErrorPath)}`);
  }
  result.value = merged.data;
  return result;
}
var $ZodEnum3 = /* @__PURE__ */ $constructor3("$ZodEnum", (inst, def) => {
  $ZodType3.init(inst, def);
  const values = getEnumValues3(def.entries);
  inst._zod.values = new Set(values);
  inst._zod.pattern = new RegExp(`^(${values.filter((k) => propertyKeyTypes3.has(typeof k)).map((o) => typeof o === "string" ? escapeRegex3(o) : o.toString()).join("|")})$`);
  inst._zod.parse = (payload, _ctx) => {
    const input = payload.value;
    if (inst._zod.values.has(input)) {
      return payload;
    }
    payload.issues.push({
      code: "invalid_value",
      values,
      input,
      inst
    });
    return payload;
  };
});
var $ZodTransform3 = /* @__PURE__ */ $constructor3("$ZodTransform", (inst, def) => {
  $ZodType3.init(inst, def);
  inst._zod.parse = (payload, _ctx) => {
    const _out = def.transform(payload.value, payload);
    if (_ctx.async) {
      const output = _out instanceof Promise ? _out : Promise.resolve(_out);
      return output.then((output2) => {
        payload.value = output2;
        return payload;
      });
    }
    if (_out instanceof Promise) {
      throw new $ZodAsyncError3();
    }
    payload.value = _out;
    return payload;
  };
});
var $ZodOptional3 = /* @__PURE__ */ $constructor3("$ZodOptional", (inst, def) => {
  $ZodType3.init(inst, def);
  inst._zod.optin = "optional";
  inst._zod.optout = "optional";
  defineLazy3(inst._zod, "values", () => {
    return def.innerType._zod.values ? /* @__PURE__ */ new Set([...def.innerType._zod.values, void 0]) : void 0;
  });
  defineLazy3(inst._zod, "pattern", () => {
    const pattern = def.innerType._zod.pattern;
    return pattern ? new RegExp(`^(${cleanRegex3(pattern.source)})?$`) : void 0;
  });
  inst._zod.parse = (payload, ctx) => {
    if (def.innerType._zod.optin === "optional") {
      return def.innerType._zod.run(payload, ctx);
    }
    if (payload.value === void 0) {
      return payload;
    }
    return def.innerType._zod.run(payload, ctx);
  };
});
var $ZodNullable3 = /* @__PURE__ */ $constructor3("$ZodNullable", (inst, def) => {
  $ZodType3.init(inst, def);
  defineLazy3(inst._zod, "optin", () => def.innerType._zod.optin);
  defineLazy3(inst._zod, "optout", () => def.innerType._zod.optout);
  defineLazy3(inst._zod, "pattern", () => {
    const pattern = def.innerType._zod.pattern;
    return pattern ? new RegExp(`^(${cleanRegex3(pattern.source)}|null)$`) : void 0;
  });
  defineLazy3(inst._zod, "values", () => {
    return def.innerType._zod.values ? /* @__PURE__ */ new Set([...def.innerType._zod.values, null]) : void 0;
  });
  inst._zod.parse = (payload, ctx) => {
    if (payload.value === null)
      return payload;
    return def.innerType._zod.run(payload, ctx);
  };
});
var $ZodDefault3 = /* @__PURE__ */ $constructor3("$ZodDefault", (inst, def) => {
  $ZodType3.init(inst, def);
  inst._zod.optin = "optional";
  defineLazy3(inst._zod, "values", () => def.innerType._zod.values);
  inst._zod.parse = (payload, ctx) => {
    if (payload.value === void 0) {
      payload.value = def.defaultValue;
      return payload;
    }
    const result = def.innerType._zod.run(payload, ctx);
    if (result instanceof Promise) {
      return result.then((result2) => handleDefaultResult3(result2, def));
    }
    return handleDefaultResult3(result, def);
  };
});
function handleDefaultResult3(payload, def) {
  if (payload.value === void 0) {
    payload.value = def.defaultValue;
  }
  return payload;
}
var $ZodPrefault3 = /* @__PURE__ */ $constructor3("$ZodPrefault", (inst, def) => {
  $ZodType3.init(inst, def);
  inst._zod.optin = "optional";
  defineLazy3(inst._zod, "values", () => def.innerType._zod.values);
  inst._zod.parse = (payload, ctx) => {
    if (payload.value === void 0) {
      payload.value = def.defaultValue;
    }
    return def.innerType._zod.run(payload, ctx);
  };
});
var $ZodNonOptional3 = /* @__PURE__ */ $constructor3("$ZodNonOptional", (inst, def) => {
  $ZodType3.init(inst, def);
  defineLazy3(inst._zod, "values", () => {
    const v = def.innerType._zod.values;
    return v ? new Set([...v].filter((x) => x !== void 0)) : void 0;
  });
  inst._zod.parse = (payload, ctx) => {
    const result = def.innerType._zod.run(payload, ctx);
    if (result instanceof Promise) {
      return result.then((result2) => handleNonOptionalResult3(result2, inst));
    }
    return handleNonOptionalResult3(result, inst);
  };
});
function handleNonOptionalResult3(payload, inst) {
  if (!payload.issues.length && payload.value === void 0) {
    payload.issues.push({
      code: "invalid_type",
      expected: "nonoptional",
      input: payload.value,
      inst
    });
  }
  return payload;
}
var $ZodCatch3 = /* @__PURE__ */ $constructor3("$ZodCatch", (inst, def) => {
  $ZodType3.init(inst, def);
  inst._zod.optin = "optional";
  defineLazy3(inst._zod, "optout", () => def.innerType._zod.optout);
  defineLazy3(inst._zod, "values", () => def.innerType._zod.values);
  inst._zod.parse = (payload, ctx) => {
    const result = def.innerType._zod.run(payload, ctx);
    if (result instanceof Promise) {
      return result.then((result2) => {
        payload.value = result2.value;
        if (result2.issues.length) {
          payload.value = def.catchValue({
            ...payload,
            error: {
              issues: result2.issues.map((iss) => finalizeIssue3(iss, ctx, config3()))
            },
            input: payload.value
          });
          payload.issues = [];
        }
        return payload;
      });
    }
    payload.value = result.value;
    if (result.issues.length) {
      payload.value = def.catchValue({
        ...payload,
        error: {
          issues: result.issues.map((iss) => finalizeIssue3(iss, ctx, config3()))
        },
        input: payload.value
      });
      payload.issues = [];
    }
    return payload;
  };
});
var $ZodPipe3 = /* @__PURE__ */ $constructor3("$ZodPipe", (inst, def) => {
  $ZodType3.init(inst, def);
  defineLazy3(inst._zod, "values", () => def.in._zod.values);
  defineLazy3(inst._zod, "optin", () => def.in._zod.optin);
  defineLazy3(inst._zod, "optout", () => def.out._zod.optout);
  inst._zod.parse = (payload, ctx) => {
    const left = def.in._zod.run(payload, ctx);
    if (left instanceof Promise) {
      return left.then((left2) => handlePipeResult3(left2, def, ctx));
    }
    return handlePipeResult3(left, def, ctx);
  };
});
function handlePipeResult3(left, def, ctx) {
  if (aborted3(left)) {
    return left;
  }
  return def.out._zod.run({ value: left.value, issues: left.issues }, ctx);
}
var $ZodReadonly3 = /* @__PURE__ */ $constructor3("$ZodReadonly", (inst, def) => {
  $ZodType3.init(inst, def);
  defineLazy3(inst._zod, "propValues", () => def.innerType._zod.propValues);
  defineLazy3(inst._zod, "values", () => def.innerType._zod.values);
  defineLazy3(inst._zod, "optin", () => def.innerType._zod.optin);
  defineLazy3(inst._zod, "optout", () => def.innerType._zod.optout);
  inst._zod.parse = (payload, ctx) => {
    const result = def.innerType._zod.run(payload, ctx);
    if (result instanceof Promise) {
      return result.then(handleReadonlyResult3);
    }
    return handleReadonlyResult3(result);
  };
});
function handleReadonlyResult3(payload) {
  payload.value = Object.freeze(payload.value);
  return payload;
}
var $ZodCustom3 = /* @__PURE__ */ $constructor3("$ZodCustom", (inst, def) => {
  $ZodCheck3.init(inst, def);
  $ZodType3.init(inst, def);
  inst._zod.parse = (payload, _) => {
    return payload;
  };
  inst._zod.check = (payload) => {
    const input = payload.value;
    const r = def.fn(input);
    if (r instanceof Promise) {
      return r.then((r2) => handleRefineResult3(r2, payload, input, inst));
    }
    handleRefineResult3(r, payload, input, inst);
    return;
  };
});
function handleRefineResult3(result, payload, input, inst) {
  if (!result) {
    const _iss = {
      code: "custom",
      input,
      inst,
      // incorporates params.error into issue reporting
      path: [...inst._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !inst._zod.def.abort
      // params: inst._zod.def.params,
    };
    if (inst._zod.def.params)
      _iss.params = inst._zod.def.params;
    payload.issues.push(issue3(_iss));
  }
}

// node_modules/zod/v4/core/registries.js
var $ZodRegistry3 = class {
  constructor() {
    this._map = /* @__PURE__ */ new Map();
    this._idmap = /* @__PURE__ */ new Map();
  }
  add(schema, ..._meta) {
    const meta3 = _meta[0];
    this._map.set(schema, meta3);
    if (meta3 && typeof meta3 === "object" && "id" in meta3) {
      if (this._idmap.has(meta3.id)) {
        throw new Error(`ID ${meta3.id} already exists in the registry`);
      }
      this._idmap.set(meta3.id, schema);
    }
    return this;
  }
  clear() {
    this._map = /* @__PURE__ */ new Map();
    this._idmap = /* @__PURE__ */ new Map();
    return this;
  }
  remove(schema) {
    const meta3 = this._map.get(schema);
    if (meta3 && typeof meta3 === "object" && "id" in meta3) {
      this._idmap.delete(meta3.id);
    }
    this._map.delete(schema);
    return this;
  }
  get(schema) {
    const p = schema._zod.parent;
    if (p) {
      const pm = { ...this.get(p) ?? {} };
      delete pm.id;
      return { ...pm, ...this._map.get(schema) };
    }
    return this._map.get(schema);
  }
  has(schema) {
    return this._map.has(schema);
  }
};
function registry3() {
  return new $ZodRegistry3();
}
var globalRegistry3 = /* @__PURE__ */ registry3();

// node_modules/zod/v4/core/api.js
function _string3(Class4, params) {
  return new Class4({
    type: "string",
    ...normalizeParams3(params)
  });
}
function _email3(Class4, params) {
  return new Class4({
    type: "string",
    format: "email",
    check: "string_format",
    abort: false,
    ...normalizeParams3(params)
  });
}
function _guid3(Class4, params) {
  return new Class4({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: false,
    ...normalizeParams3(params)
  });
}
function _uuid3(Class4, params) {
  return new Class4({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: false,
    ...normalizeParams3(params)
  });
}
function _uuidv43(Class4, params) {
  return new Class4({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: false,
    version: "v4",
    ...normalizeParams3(params)
  });
}
function _uuidv63(Class4, params) {
  return new Class4({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: false,
    version: "v6",
    ...normalizeParams3(params)
  });
}
function _uuidv73(Class4, params) {
  return new Class4({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: false,
    version: "v7",
    ...normalizeParams3(params)
  });
}
function _url3(Class4, params) {
  return new Class4({
    type: "string",
    format: "url",
    check: "string_format",
    abort: false,
    ...normalizeParams3(params)
  });
}
function _emoji6(Class4, params) {
  return new Class4({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: false,
    ...normalizeParams3(params)
  });
}
function _nanoid3(Class4, params) {
  return new Class4({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: false,
    ...normalizeParams3(params)
  });
}
function _cuid4(Class4, params) {
  return new Class4({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: false,
    ...normalizeParams3(params)
  });
}
function _cuid23(Class4, params) {
  return new Class4({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: false,
    ...normalizeParams3(params)
  });
}
function _ulid3(Class4, params) {
  return new Class4({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: false,
    ...normalizeParams3(params)
  });
}
function _xid3(Class4, params) {
  return new Class4({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: false,
    ...normalizeParams3(params)
  });
}
function _ksuid3(Class4, params) {
  return new Class4({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: false,
    ...normalizeParams3(params)
  });
}
function _ipv43(Class4, params) {
  return new Class4({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: false,
    ...normalizeParams3(params)
  });
}
function _ipv63(Class4, params) {
  return new Class4({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: false,
    ...normalizeParams3(params)
  });
}
function _cidrv43(Class4, params) {
  return new Class4({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: false,
    ...normalizeParams3(params)
  });
}
function _cidrv63(Class4, params) {
  return new Class4({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: false,
    ...normalizeParams3(params)
  });
}
function _base643(Class4, params) {
  return new Class4({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: false,
    ...normalizeParams3(params)
  });
}
function _base64url3(Class4, params) {
  return new Class4({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: false,
    ...normalizeParams3(params)
  });
}
function _e1643(Class4, params) {
  return new Class4({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: false,
    ...normalizeParams3(params)
  });
}
function _jwt3(Class4, params) {
  return new Class4({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: false,
    ...normalizeParams3(params)
  });
}
function _isoDateTime3(Class4, params) {
  return new Class4({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: false,
    local: false,
    precision: null,
    ...normalizeParams3(params)
  });
}
function _isoDate3(Class4, params) {
  return new Class4({
    type: "string",
    format: "date",
    check: "string_format",
    ...normalizeParams3(params)
  });
}
function _isoTime3(Class4, params) {
  return new Class4({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...normalizeParams3(params)
  });
}
function _isoDuration3(Class4, params) {
  return new Class4({
    type: "string",
    format: "duration",
    check: "string_format",
    ...normalizeParams3(params)
  });
}
function _number3(Class4, params) {
  return new Class4({
    type: "number",
    checks: [],
    ...normalizeParams3(params)
  });
}
function _int3(Class4, params) {
  return new Class4({
    type: "number",
    check: "number_format",
    abort: false,
    format: "safeint",
    ...normalizeParams3(params)
  });
}
function _boolean3(Class4, params) {
  return new Class4({
    type: "boolean",
    ...normalizeParams3(params)
  });
}
function _unknown3(Class4) {
  return new Class4({
    type: "unknown"
  });
}
function _never3(Class4, params) {
  return new Class4({
    type: "never",
    ...normalizeParams3(params)
  });
}
function _lt3(value, params) {
  return new $ZodCheckLessThan3({
    check: "less_than",
    ...normalizeParams3(params),
    value,
    inclusive: false
  });
}
function _lte3(value, params) {
  return new $ZodCheckLessThan3({
    check: "less_than",
    ...normalizeParams3(params),
    value,
    inclusive: true
  });
}
function _gt3(value, params) {
  return new $ZodCheckGreaterThan3({
    check: "greater_than",
    ...normalizeParams3(params),
    value,
    inclusive: false
  });
}
function _gte3(value, params) {
  return new $ZodCheckGreaterThan3({
    check: "greater_than",
    ...normalizeParams3(params),
    value,
    inclusive: true
  });
}
function _multipleOf3(value, params) {
  return new $ZodCheckMultipleOf3({
    check: "multiple_of",
    ...normalizeParams3(params),
    value
  });
}
function _maxLength3(maximum, params) {
  const ch = new $ZodCheckMaxLength3({
    check: "max_length",
    ...normalizeParams3(params),
    maximum
  });
  return ch;
}
function _minLength3(minimum, params) {
  return new $ZodCheckMinLength3({
    check: "min_length",
    ...normalizeParams3(params),
    minimum
  });
}
function _length3(length, params) {
  return new $ZodCheckLengthEquals3({
    check: "length_equals",
    ...normalizeParams3(params),
    length
  });
}
function _regex3(pattern, params) {
  return new $ZodCheckRegex3({
    check: "string_format",
    format: "regex",
    ...normalizeParams3(params),
    pattern
  });
}
function _lowercase3(params) {
  return new $ZodCheckLowerCase3({
    check: "string_format",
    format: "lowercase",
    ...normalizeParams3(params)
  });
}
function _uppercase3(params) {
  return new $ZodCheckUpperCase3({
    check: "string_format",
    format: "uppercase",
    ...normalizeParams3(params)
  });
}
function _includes3(includes, params) {
  return new $ZodCheckIncludes3({
    check: "string_format",
    format: "includes",
    ...normalizeParams3(params),
    includes
  });
}
function _startsWith3(prefix, params) {
  return new $ZodCheckStartsWith3({
    check: "string_format",
    format: "starts_with",
    ...normalizeParams3(params),
    prefix
  });
}
function _endsWith3(suffix, params) {
  return new $ZodCheckEndsWith3({
    check: "string_format",
    format: "ends_with",
    ...normalizeParams3(params),
    suffix
  });
}
function _overwrite3(tx) {
  return new $ZodCheckOverwrite3({
    check: "overwrite",
    tx
  });
}
function _normalize3(form) {
  return _overwrite3((input) => input.normalize(form));
}
function _trim3() {
  return _overwrite3((input) => input.trim());
}
function _toLowerCase3() {
  return _overwrite3((input) => input.toLowerCase());
}
function _toUpperCase3() {
  return _overwrite3((input) => input.toUpperCase());
}
function _array3(Class4, element, params) {
  return new Class4({
    type: "array",
    element,
    // get element() {
    //   return element;
    // },
    ...normalizeParams3(params)
  });
}
function _refine3(Class4, fn, _params) {
  const schema = new Class4({
    type: "custom",
    check: "custom",
    fn,
    ...normalizeParams3(_params)
  });
  return schema;
}

// node_modules/zod/v4/classic/iso.js
var ZodISODateTime3 = /* @__PURE__ */ $constructor3("ZodISODateTime", (inst, def) => {
  $ZodISODateTime3.init(inst, def);
  ZodStringFormat3.init(inst, def);
});
function datetime6(params) {
  return _isoDateTime3(ZodISODateTime3, params);
}
var ZodISODate3 = /* @__PURE__ */ $constructor3("ZodISODate", (inst, def) => {
  $ZodISODate3.init(inst, def);
  ZodStringFormat3.init(inst, def);
});
function date8(params) {
  return _isoDate3(ZodISODate3, params);
}
var ZodISOTime3 = /* @__PURE__ */ $constructor3("ZodISOTime", (inst, def) => {
  $ZodISOTime3.init(inst, def);
  ZodStringFormat3.init(inst, def);
});
function time7(params) {
  return _isoTime3(ZodISOTime3, params);
}
var ZodISODuration3 = /* @__PURE__ */ $constructor3("ZodISODuration", (inst, def) => {
  $ZodISODuration3.init(inst, def);
  ZodStringFormat3.init(inst, def);
});
function duration6(params) {
  return _isoDuration3(ZodISODuration3, params);
}

// node_modules/zod/v4/classic/errors.js
var initializer6 = (inst, issues) => {
  $ZodError3.init(inst, issues);
  inst.name = "ZodError";
  Object.defineProperties(inst, {
    format: {
      value: (mapper) => formatError3(inst, mapper)
      // enumerable: false,
    },
    flatten: {
      value: (mapper) => flattenError3(inst, mapper)
      // enumerable: false,
    },
    addIssue: {
      value: (issue4) => inst.issues.push(issue4)
      // enumerable: false,
    },
    addIssues: {
      value: (issues2) => inst.issues.push(...issues2)
      // enumerable: false,
    },
    isEmpty: {
      get() {
        return inst.issues.length === 0;
      }
      // enumerable: false,
    }
  });
};
var ZodError = $constructor3("ZodError", initializer6);
var ZodRealError3 = $constructor3("ZodError", initializer6, {
  Parent: Error
});

// node_modules/zod/v4/classic/parse.js
var parse5 = /* @__PURE__ */ _parse5(ZodRealError3);
var parseAsync5 = /* @__PURE__ */ _parseAsync5(ZodRealError3);
var safeParse6 = /* @__PURE__ */ _safeParse3(ZodRealError3);
var safeParseAsync6 = /* @__PURE__ */ _safeParseAsync3(ZodRealError3);

// node_modules/zod/v4/classic/schemas.js
var ZodType3 = /* @__PURE__ */ $constructor3("ZodType", (inst, def) => {
  $ZodType3.init(inst, def);
  inst.def = def;
  Object.defineProperty(inst, "_def", { value: def });
  inst.check = (...checks) => {
    return inst.clone(
      {
        ...def,
        checks: [
          ...def.checks ?? [],
          ...checks.map((ch) => typeof ch === "function" ? { _zod: { check: ch, def: { check: "custom" }, onattach: [] } } : ch)
        ]
      }
      // { parent: true }
    );
  };
  inst.clone = (def2, params) => clone3(inst, def2, params);
  inst.brand = () => inst;
  inst.register = ((reg, meta3) => {
    reg.add(inst, meta3);
    return inst;
  });
  inst.parse = (data, params) => parse5(inst, data, params, { callee: inst.parse });
  inst.safeParse = (data, params) => safeParse6(inst, data, params);
  inst.parseAsync = async (data, params) => parseAsync5(inst, data, params, { callee: inst.parseAsync });
  inst.safeParseAsync = async (data, params) => safeParseAsync6(inst, data, params);
  inst.spa = inst.safeParseAsync;
  inst.refine = (check2, params) => inst.check(refine3(check2, params));
  inst.superRefine = (refinement) => inst.check(superRefine3(refinement));
  inst.overwrite = (fn) => inst.check(_overwrite3(fn));
  inst.optional = () => optional3(inst);
  inst.nullable = () => nullable3(inst);
  inst.nullish = () => optional3(nullable3(inst));
  inst.nonoptional = (params) => nonoptional3(inst, params);
  inst.array = () => array3(inst);
  inst.or = (arg) => union3([inst, arg]);
  inst.and = (arg) => intersection3(inst, arg);
  inst.transform = (tx) => pipe3(inst, transform3(tx));
  inst.default = (def2) => _default3(inst, def2);
  inst.prefault = (def2) => prefault3(inst, def2);
  inst.catch = (params) => _catch3(inst, params);
  inst.pipe = (target) => pipe3(inst, target);
  inst.readonly = () => readonly3(inst);
  inst.describe = (description) => {
    const cl = inst.clone();
    globalRegistry3.add(cl, { description });
    return cl;
  };
  Object.defineProperty(inst, "description", {
    get() {
      return globalRegistry3.get(inst)?.description;
    },
    configurable: true
  });
  inst.meta = (...args) => {
    if (args.length === 0) {
      return globalRegistry3.get(inst);
    }
    const cl = inst.clone();
    globalRegistry3.add(cl, args[0]);
    return cl;
  };
  inst.isOptional = () => inst.safeParse(void 0).success;
  inst.isNullable = () => inst.safeParse(null).success;
  return inst;
});
var _ZodString3 = /* @__PURE__ */ $constructor3("_ZodString", (inst, def) => {
  $ZodString3.init(inst, def);
  ZodType3.init(inst, def);
  const bag = inst._zod.bag;
  inst.format = bag.format ?? null;
  inst.minLength = bag.minimum ?? null;
  inst.maxLength = bag.maximum ?? null;
  inst.regex = (...args) => inst.check(_regex3(...args));
  inst.includes = (...args) => inst.check(_includes3(...args));
  inst.startsWith = (...args) => inst.check(_startsWith3(...args));
  inst.endsWith = (...args) => inst.check(_endsWith3(...args));
  inst.min = (...args) => inst.check(_minLength3(...args));
  inst.max = (...args) => inst.check(_maxLength3(...args));
  inst.length = (...args) => inst.check(_length3(...args));
  inst.nonempty = (...args) => inst.check(_minLength3(1, ...args));
  inst.lowercase = (params) => inst.check(_lowercase3(params));
  inst.uppercase = (params) => inst.check(_uppercase3(params));
  inst.trim = () => inst.check(_trim3());
  inst.normalize = (...args) => inst.check(_normalize3(...args));
  inst.toLowerCase = () => inst.check(_toLowerCase3());
  inst.toUpperCase = () => inst.check(_toUpperCase3());
});
var ZodString3 = /* @__PURE__ */ $constructor3("ZodString", (inst, def) => {
  $ZodString3.init(inst, def);
  _ZodString3.init(inst, def);
  inst.email = (params) => inst.check(_email3(ZodEmail3, params));
  inst.url = (params) => inst.check(_url3(ZodURL3, params));
  inst.jwt = (params) => inst.check(_jwt3(ZodJWT3, params));
  inst.emoji = (params) => inst.check(_emoji6(ZodEmoji3, params));
  inst.guid = (params) => inst.check(_guid3(ZodGUID3, params));
  inst.uuid = (params) => inst.check(_uuid3(ZodUUID3, params));
  inst.uuidv4 = (params) => inst.check(_uuidv43(ZodUUID3, params));
  inst.uuidv6 = (params) => inst.check(_uuidv63(ZodUUID3, params));
  inst.uuidv7 = (params) => inst.check(_uuidv73(ZodUUID3, params));
  inst.nanoid = (params) => inst.check(_nanoid3(ZodNanoID3, params));
  inst.guid = (params) => inst.check(_guid3(ZodGUID3, params));
  inst.cuid = (params) => inst.check(_cuid4(ZodCUID4, params));
  inst.cuid2 = (params) => inst.check(_cuid23(ZodCUID23, params));
  inst.ulid = (params) => inst.check(_ulid3(ZodULID3, params));
  inst.base64 = (params) => inst.check(_base643(ZodBase643, params));
  inst.base64url = (params) => inst.check(_base64url3(ZodBase64URL3, params));
  inst.xid = (params) => inst.check(_xid3(ZodXID3, params));
  inst.ksuid = (params) => inst.check(_ksuid3(ZodKSUID3, params));
  inst.ipv4 = (params) => inst.check(_ipv43(ZodIPv43, params));
  inst.ipv6 = (params) => inst.check(_ipv63(ZodIPv63, params));
  inst.cidrv4 = (params) => inst.check(_cidrv43(ZodCIDRv43, params));
  inst.cidrv6 = (params) => inst.check(_cidrv63(ZodCIDRv63, params));
  inst.e164 = (params) => inst.check(_e1643(ZodE1643, params));
  inst.datetime = (params) => inst.check(datetime6(params));
  inst.date = (params) => inst.check(date8(params));
  inst.time = (params) => inst.check(time7(params));
  inst.duration = (params) => inst.check(duration6(params));
});
function string7(params) {
  return _string3(ZodString3, params);
}
var ZodStringFormat3 = /* @__PURE__ */ $constructor3("ZodStringFormat", (inst, def) => {
  $ZodStringFormat3.init(inst, def);
  _ZodString3.init(inst, def);
});
var ZodEmail3 = /* @__PURE__ */ $constructor3("ZodEmail", (inst, def) => {
  $ZodEmail3.init(inst, def);
  ZodStringFormat3.init(inst, def);
});
var ZodGUID3 = /* @__PURE__ */ $constructor3("ZodGUID", (inst, def) => {
  $ZodGUID3.init(inst, def);
  ZodStringFormat3.init(inst, def);
});
var ZodUUID3 = /* @__PURE__ */ $constructor3("ZodUUID", (inst, def) => {
  $ZodUUID3.init(inst, def);
  ZodStringFormat3.init(inst, def);
});
var ZodURL3 = /* @__PURE__ */ $constructor3("ZodURL", (inst, def) => {
  $ZodURL3.init(inst, def);
  ZodStringFormat3.init(inst, def);
});
var ZodEmoji3 = /* @__PURE__ */ $constructor3("ZodEmoji", (inst, def) => {
  $ZodEmoji3.init(inst, def);
  ZodStringFormat3.init(inst, def);
});
var ZodNanoID3 = /* @__PURE__ */ $constructor3("ZodNanoID", (inst, def) => {
  $ZodNanoID3.init(inst, def);
  ZodStringFormat3.init(inst, def);
});
var ZodCUID4 = /* @__PURE__ */ $constructor3("ZodCUID", (inst, def) => {
  $ZodCUID4.init(inst, def);
  ZodStringFormat3.init(inst, def);
});
var ZodCUID23 = /* @__PURE__ */ $constructor3("ZodCUID2", (inst, def) => {
  $ZodCUID23.init(inst, def);
  ZodStringFormat3.init(inst, def);
});
var ZodULID3 = /* @__PURE__ */ $constructor3("ZodULID", (inst, def) => {
  $ZodULID3.init(inst, def);
  ZodStringFormat3.init(inst, def);
});
var ZodXID3 = /* @__PURE__ */ $constructor3("ZodXID", (inst, def) => {
  $ZodXID3.init(inst, def);
  ZodStringFormat3.init(inst, def);
});
var ZodKSUID3 = /* @__PURE__ */ $constructor3("ZodKSUID", (inst, def) => {
  $ZodKSUID3.init(inst, def);
  ZodStringFormat3.init(inst, def);
});
var ZodIPv43 = /* @__PURE__ */ $constructor3("ZodIPv4", (inst, def) => {
  $ZodIPv43.init(inst, def);
  ZodStringFormat3.init(inst, def);
});
var ZodIPv63 = /* @__PURE__ */ $constructor3("ZodIPv6", (inst, def) => {
  $ZodIPv63.init(inst, def);
  ZodStringFormat3.init(inst, def);
});
var ZodCIDRv43 = /* @__PURE__ */ $constructor3("ZodCIDRv4", (inst, def) => {
  $ZodCIDRv43.init(inst, def);
  ZodStringFormat3.init(inst, def);
});
var ZodCIDRv63 = /* @__PURE__ */ $constructor3("ZodCIDRv6", (inst, def) => {
  $ZodCIDRv63.init(inst, def);
  ZodStringFormat3.init(inst, def);
});
var ZodBase643 = /* @__PURE__ */ $constructor3("ZodBase64", (inst, def) => {
  $ZodBase643.init(inst, def);
  ZodStringFormat3.init(inst, def);
});
var ZodBase64URL3 = /* @__PURE__ */ $constructor3("ZodBase64URL", (inst, def) => {
  $ZodBase64URL3.init(inst, def);
  ZodStringFormat3.init(inst, def);
});
var ZodE1643 = /* @__PURE__ */ $constructor3("ZodE164", (inst, def) => {
  $ZodE1643.init(inst, def);
  ZodStringFormat3.init(inst, def);
});
var ZodJWT3 = /* @__PURE__ */ $constructor3("ZodJWT", (inst, def) => {
  $ZodJWT3.init(inst, def);
  ZodStringFormat3.init(inst, def);
});
var ZodNumber3 = /* @__PURE__ */ $constructor3("ZodNumber", (inst, def) => {
  $ZodNumber3.init(inst, def);
  ZodType3.init(inst, def);
  inst.gt = (value, params) => inst.check(_gt3(value, params));
  inst.gte = (value, params) => inst.check(_gte3(value, params));
  inst.min = (value, params) => inst.check(_gte3(value, params));
  inst.lt = (value, params) => inst.check(_lt3(value, params));
  inst.lte = (value, params) => inst.check(_lte3(value, params));
  inst.max = (value, params) => inst.check(_lte3(value, params));
  inst.int = (params) => inst.check(int3(params));
  inst.safe = (params) => inst.check(int3(params));
  inst.positive = (params) => inst.check(_gt3(0, params));
  inst.nonnegative = (params) => inst.check(_gte3(0, params));
  inst.negative = (params) => inst.check(_lt3(0, params));
  inst.nonpositive = (params) => inst.check(_lte3(0, params));
  inst.multipleOf = (value, params) => inst.check(_multipleOf3(value, params));
  inst.step = (value, params) => inst.check(_multipleOf3(value, params));
  inst.finite = () => inst;
  const bag = inst._zod.bag;
  inst.minValue = Math.max(bag.minimum ?? Number.NEGATIVE_INFINITY, bag.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null;
  inst.maxValue = Math.min(bag.maximum ?? Number.POSITIVE_INFINITY, bag.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null;
  inst.isInt = (bag.format ?? "").includes("int") || Number.isSafeInteger(bag.multipleOf ?? 0.5);
  inst.isFinite = true;
  inst.format = bag.format ?? null;
});
function number7(params) {
  return _number3(ZodNumber3, params);
}
var ZodNumberFormat3 = /* @__PURE__ */ $constructor3("ZodNumberFormat", (inst, def) => {
  $ZodNumberFormat3.init(inst, def);
  ZodNumber3.init(inst, def);
});
function int3(params) {
  return _int3(ZodNumberFormat3, params);
}
var ZodBoolean3 = /* @__PURE__ */ $constructor3("ZodBoolean", (inst, def) => {
  $ZodBoolean3.init(inst, def);
  ZodType3.init(inst, def);
});
function boolean7(params) {
  return _boolean3(ZodBoolean3, params);
}
var ZodUnknown3 = /* @__PURE__ */ $constructor3("ZodUnknown", (inst, def) => {
  $ZodUnknown3.init(inst, def);
  ZodType3.init(inst, def);
});
function unknown3() {
  return _unknown3(ZodUnknown3);
}
var ZodNever3 = /* @__PURE__ */ $constructor3("ZodNever", (inst, def) => {
  $ZodNever3.init(inst, def);
  ZodType3.init(inst, def);
});
function never3(params) {
  return _never3(ZodNever3, params);
}
var ZodArray3 = /* @__PURE__ */ $constructor3("ZodArray", (inst, def) => {
  $ZodArray3.init(inst, def);
  ZodType3.init(inst, def);
  inst.element = def.element;
  inst.min = (minLength, params) => inst.check(_minLength3(minLength, params));
  inst.nonempty = (params) => inst.check(_minLength3(1, params));
  inst.max = (maxLength, params) => inst.check(_maxLength3(maxLength, params));
  inst.length = (len, params) => inst.check(_length3(len, params));
  inst.unwrap = () => inst.element;
});
function array3(element, params) {
  return _array3(ZodArray3, element, params);
}
var ZodObject3 = /* @__PURE__ */ $constructor3("ZodObject", (inst, def) => {
  $ZodObject3.init(inst, def);
  ZodType3.init(inst, def);
  util_exports3.defineLazy(inst, "shape", () => def.shape);
  inst.keyof = () => _enum3(Object.keys(inst._zod.def.shape));
  inst.catchall = (catchall) => inst.clone({ ...inst._zod.def, catchall });
  inst.passthrough = () => inst.clone({ ...inst._zod.def, catchall: unknown3() });
  inst.loose = () => inst.clone({ ...inst._zod.def, catchall: unknown3() });
  inst.strict = () => inst.clone({ ...inst._zod.def, catchall: never3() });
  inst.strip = () => inst.clone({ ...inst._zod.def, catchall: void 0 });
  inst.extend = (incoming) => {
    return util_exports3.extend(inst, incoming);
  };
  inst.merge = (other) => util_exports3.merge(inst, other);
  inst.pick = (mask) => util_exports3.pick(inst, mask);
  inst.omit = (mask) => util_exports3.omit(inst, mask);
  inst.partial = (...args) => util_exports3.partial(ZodOptional3, inst, args[0]);
  inst.required = (...args) => util_exports3.required(ZodNonOptional3, inst, args[0]);
});
function object3(shape, params) {
  const def = {
    type: "object",
    get shape() {
      util_exports3.assignProp(this, "shape", { ...shape });
      return this.shape;
    },
    ...util_exports3.normalizeParams(params)
  };
  return new ZodObject3(def);
}
var ZodUnion3 = /* @__PURE__ */ $constructor3("ZodUnion", (inst, def) => {
  $ZodUnion3.init(inst, def);
  ZodType3.init(inst, def);
  inst.options = def.options;
});
function union3(options, params) {
  return new ZodUnion3({
    type: "union",
    options,
    ...util_exports3.normalizeParams(params)
  });
}
var ZodIntersection3 = /* @__PURE__ */ $constructor3("ZodIntersection", (inst, def) => {
  $ZodIntersection3.init(inst, def);
  ZodType3.init(inst, def);
});
function intersection3(left, right) {
  return new ZodIntersection3({
    type: "intersection",
    left,
    right
  });
}
var ZodEnum3 = /* @__PURE__ */ $constructor3("ZodEnum", (inst, def) => {
  $ZodEnum3.init(inst, def);
  ZodType3.init(inst, def);
  inst.enum = def.entries;
  inst.options = Object.values(def.entries);
  const keys = new Set(Object.keys(def.entries));
  inst.extract = (values, params) => {
    const newEntries = {};
    for (const value of values) {
      if (keys.has(value)) {
        newEntries[value] = def.entries[value];
      } else
        throw new Error(`Key ${value} not found in enum`);
    }
    return new ZodEnum3({
      ...def,
      checks: [],
      ...util_exports3.normalizeParams(params),
      entries: newEntries
    });
  };
  inst.exclude = (values, params) => {
    const newEntries = { ...def.entries };
    for (const value of values) {
      if (keys.has(value)) {
        delete newEntries[value];
      } else
        throw new Error(`Key ${value} not found in enum`);
    }
    return new ZodEnum3({
      ...def,
      checks: [],
      ...util_exports3.normalizeParams(params),
      entries: newEntries
    });
  };
});
function _enum3(values, params) {
  const entries = Array.isArray(values) ? Object.fromEntries(values.map((v) => [v, v])) : values;
  return new ZodEnum3({
    type: "enum",
    entries,
    ...util_exports3.normalizeParams(params)
  });
}
var ZodTransform3 = /* @__PURE__ */ $constructor3("ZodTransform", (inst, def) => {
  $ZodTransform3.init(inst, def);
  ZodType3.init(inst, def);
  inst._zod.parse = (payload, _ctx) => {
    payload.addIssue = (issue4) => {
      if (typeof issue4 === "string") {
        payload.issues.push(util_exports3.issue(issue4, payload.value, def));
      } else {
        const _issue = issue4;
        if (_issue.fatal)
          _issue.continue = false;
        _issue.code ?? (_issue.code = "custom");
        _issue.input ?? (_issue.input = payload.value);
        _issue.inst ?? (_issue.inst = inst);
        _issue.continue ?? (_issue.continue = true);
        payload.issues.push(util_exports3.issue(_issue));
      }
    };
    const output = def.transform(payload.value, payload);
    if (output instanceof Promise) {
      return output.then((output2) => {
        payload.value = output2;
        return payload;
      });
    }
    payload.value = output;
    return payload;
  };
});
function transform3(fn) {
  return new ZodTransform3({
    type: "transform",
    transform: fn
  });
}
var ZodOptional3 = /* @__PURE__ */ $constructor3("ZodOptional", (inst, def) => {
  $ZodOptional3.init(inst, def);
  ZodType3.init(inst, def);
  inst.unwrap = () => inst._zod.def.innerType;
});
function optional3(innerType) {
  return new ZodOptional3({
    type: "optional",
    innerType
  });
}
var ZodNullable3 = /* @__PURE__ */ $constructor3("ZodNullable", (inst, def) => {
  $ZodNullable3.init(inst, def);
  ZodType3.init(inst, def);
  inst.unwrap = () => inst._zod.def.innerType;
});
function nullable3(innerType) {
  return new ZodNullable3({
    type: "nullable",
    innerType
  });
}
var ZodDefault3 = /* @__PURE__ */ $constructor3("ZodDefault", (inst, def) => {
  $ZodDefault3.init(inst, def);
  ZodType3.init(inst, def);
  inst.unwrap = () => inst._zod.def.innerType;
  inst.removeDefault = inst.unwrap;
});
function _default3(innerType, defaultValue) {
  return new ZodDefault3({
    type: "default",
    innerType,
    get defaultValue() {
      return typeof defaultValue === "function" ? defaultValue() : defaultValue;
    }
  });
}
var ZodPrefault3 = /* @__PURE__ */ $constructor3("ZodPrefault", (inst, def) => {
  $ZodPrefault3.init(inst, def);
  ZodType3.init(inst, def);
  inst.unwrap = () => inst._zod.def.innerType;
});
function prefault3(innerType, defaultValue) {
  return new ZodPrefault3({
    type: "prefault",
    innerType,
    get defaultValue() {
      return typeof defaultValue === "function" ? defaultValue() : defaultValue;
    }
  });
}
var ZodNonOptional3 = /* @__PURE__ */ $constructor3("ZodNonOptional", (inst, def) => {
  $ZodNonOptional3.init(inst, def);
  ZodType3.init(inst, def);
  inst.unwrap = () => inst._zod.def.innerType;
});
function nonoptional3(innerType, params) {
  return new ZodNonOptional3({
    type: "nonoptional",
    innerType,
    ...util_exports3.normalizeParams(params)
  });
}
var ZodCatch3 = /* @__PURE__ */ $constructor3("ZodCatch", (inst, def) => {
  $ZodCatch3.init(inst, def);
  ZodType3.init(inst, def);
  inst.unwrap = () => inst._zod.def.innerType;
  inst.removeCatch = inst.unwrap;
});
function _catch3(innerType, catchValue) {
  return new ZodCatch3({
    type: "catch",
    innerType,
    catchValue: typeof catchValue === "function" ? catchValue : () => catchValue
  });
}
var ZodPipe3 = /* @__PURE__ */ $constructor3("ZodPipe", (inst, def) => {
  $ZodPipe3.init(inst, def);
  ZodType3.init(inst, def);
  inst.in = def.in;
  inst.out = def.out;
});
function pipe3(in_, out) {
  return new ZodPipe3({
    type: "pipe",
    in: in_,
    out
    // ...util.normalizeParams(params),
  });
}
var ZodReadonly3 = /* @__PURE__ */ $constructor3("ZodReadonly", (inst, def) => {
  $ZodReadonly3.init(inst, def);
  ZodType3.init(inst, def);
});
function readonly3(innerType) {
  return new ZodReadonly3({
    type: "readonly",
    innerType
  });
}
var ZodCustom3 = /* @__PURE__ */ $constructor3("ZodCustom", (inst, def) => {
  $ZodCustom3.init(inst, def);
  ZodType3.init(inst, def);
});
function check(fn) {
  const ch = new $ZodCheck3({
    check: "custom"
    // ...util.normalizeParams(params),
  });
  ch._zod.check = fn;
  return ch;
}
function refine3(fn, _params = {}) {
  return _refine3(ZodCustom3, fn, _params);
}
function superRefine3(fn) {
  const ch = check((payload) => {
    payload.addIssue = (issue4) => {
      if (typeof issue4 === "string") {
        payload.issues.push(util_exports3.issue(issue4, payload.value, ch._zod.def));
      } else {
        const _issue = issue4;
        if (_issue.fatal)
          _issue.continue = false;
        _issue.code ?? (_issue.code = "custom");
        _issue.input ?? (_issue.input = payload.value);
        _issue.inst ?? (_issue.inst = ch);
        _issue.continue ?? (_issue.continue = !ch._zod.def.abort);
        payload.issues.push(util_exports3.issue(_issue));
      }
    };
    return fn(payload.value, payload);
  });
  return ch;
}

// src/mcp-handler.js
var envStore = typeof globalThis.process !== "undefined" && globalThis.process.env ? globalThis.process.env : {};
var STEEL_API_BASE = "https://api.steel.dev";
async function steelRequest(endpoint, options = {}) {
  const apiKey = envStore.STEEL_API_KEY;
  if (!apiKey) {
    throw new Error("STEEL_API_KEY environment variable is required");
  }
  const url3 = `${STEEL_API_BASE}${endpoint}`;
  const headers = {
    "Content-Type": "application/json",
    "steel-api-key": apiKey,
    ...options.headers
  };
  const response = await fetch(url3, {
    ...options,
    headers
  });
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Steel API error: HTTP ${response.status} - ${errorText}`);
  }
  return response.json();
}
function createServer() {
  const server = new McpServer({
    name: "steel-browser",
    version: "1.0.0"
  });
  server.registerTool(
    "scrape",
    {
      description: "Scrape content from a URL using Steel API. Returns HTML, markdown, cleaned HTML, readability text, metadata and extracted links.",
      inputSchema: object3({
        url: string7().url().describe("The URL to scrape"),
        waitForSelector: string7().optional().describe("CSS selector to wait for before scraping"),
        timeout: number7().optional().describe("Timeout in milliseconds (default: 30000)"),
        removeSelector: string7().optional().describe("CSS selector to remove from page before scraping"),
        onlyMainContent: boolean7().optional().describe(
          "Only extract main content, excluding navigation and footers"
        ),
        includeLinks: boolean7().optional().describe("Include extracted links in response")
      })
    },
    async ({
      url: url3,
      waitForSelector,
      timeout,
      removeSelector,
      onlyMainContent,
      includeLinks
    }) => {
      try {
        const requestBody = { url: url3 };
        if (waitForSelector) requestBody.waitForSelector = waitForSelector;
        if (timeout) requestBody.timeout = timeout;
        if (removeSelector) requestBody.removeSelector = removeSelector;
        if (onlyMainContent !== void 0)
          requestBody.onlyMainContent = onlyMainContent;
        if (includeLinks !== void 0) requestBody.includeLinks = includeLinks;
        const result = await steelRequest("/v1/scrape", {
          method: "POST",
          body: JSON.stringify(requestBody)
        });
        let output = `URL: ${url3}
`;
        output += `Status: ${result.metadata?.status_code ?? "N/A"}
`;
        output += `Title: ${result.metadata?.title ?? "N/A"}

`;
        if (result.content?.markdown) {
          output += `--- Content (Markdown) ---
${result.content.markdown}
`;
        } else if (result.content?.html) {
          output += `--- Content (HTML) ---
${result.content.html.substring(0, 5e3)}...
`;
        }
        if (result.links && result.links.length > 0) {
          output += `
--- Extracted Links (${result.links.length}) ---
`;
          result.links.slice(0, 20).forEach((link) => {
            output += `- ${link.href}${link.text ? ` (${link.text})` : ""}
`;
          });
        }
        return {
          content: [{ type: "text", text: output }]
        };
      } catch (error3) {
        return {
          content: [
            { type: "text", text: `Error scraping ${url3}: ${error3.message}` }
          ],
          isError: true
        };
      }
    }
  );
  server.registerTool(
    "create-session",
    {
      description: "Create a new Steel browser session for automation. Returns session ID and WebSocket URL for connecting Puppeteer/Playwright.",
      inputSchema: object3({
        sessionId: string7().uuid().optional().describe(
          "Custom session ID (UUID). If not provided, Steel generates one."
        ),
        useProxy: boolean7().optional().describe("Use residential proxies"),
        solveCaptcha: boolean7().optional().describe("Enable automatic CAPTCHA solving"),
        recordVideo: boolean7().optional().describe("Record video of the session"),
        timeout: number7().optional().describe("Session timeout in seconds")
      })
    },
    async ({ sessionId, useProxy, solveCaptcha, recordVideo, timeout }) => {
      try {
        const requestBody = {};
        if (sessionId) requestBody.sessionId = sessionId;
        if (useProxy !== void 0) requestBody.useProxy = useProxy;
        if (solveCaptcha !== void 0) requestBody.solveCaptcha = solveCaptcha;
        if (recordVideo !== void 0) requestBody.recordVideo = recordVideo;
        if (timeout) requestBody.timeout = timeout;
        const session = await steelRequest("/v1/sessions", {
          method: "POST",
          body: JSON.stringify(requestBody)
        });
        let output = `Session created successfully!

`;
        output += `Session ID: ${session.id}
`;
        output += `WebSocket URL: ${session.websocketUrl}
`;
        output += `Created at: ${session.createdAt}
`;
        if (session.expiresAt) {
          output += `Expires at: ${session.expiresAt}
`;
        }
        output += `
--- How to connect with Puppeteer ---
`;
        output += `import puppeteer from 'puppeteer-core';
`;
        output += `const browser = await puppeteer.connect({
`;
        output += `  browserWSEndpoint: \`${session.websocketUrl}&apiKey=YOUR_API_KEY\`
`;
        output += `});
`;
        return {
          content: [{ type: "text", text: output }]
        };
      } catch (error3) {
        return {
          content: [
            { type: "text", text: `Error creating session: ${error3.message}` }
          ],
          isError: true
        };
      }
    }
  );
  server.registerTool(
    "release-session",
    {
      description: "Release/end a Steel browser session. Always call this when done with a session to avoid charges.",
      inputSchema: object3({
        sessionId: string7().describe("The session ID to release")
      })
    },
    async ({ sessionId }) => {
      try {
        await steelRequest(`/v1/sessions/${sessionId}`, {
          method: "DELETE"
        });
        return {
          content: [
            {
              type: "text",
              text: `Session ${sessionId} released successfully.`
            }
          ]
        };
      } catch (error3) {
        return {
          content: [
            {
              type: "text",
              text: `Error releasing session ${sessionId}: ${error3.message}`
            }
          ],
          isError: true
        };
      }
    }
  );
  server.registerTool(
    "get-session",
    {
      description: "Get details about an existing Steel browser session.",
      inputSchema: object3({
        sessionId: string7().describe("The session ID to retrieve")
      })
    },
    async ({ sessionId }) => {
      try {
        const session = await steelRequest(`/v1/sessions/${sessionId}`);
        let output = `Session Details:

`;
        output += `ID: ${session.id}
`;
        output += `Status: ${session.status}
`;
        output += `Created at: ${session.createdAt}
`;
        if (session.expiresAt) {
          output += `Expires at: ${session.expiresAt}
`;
        }
        if (session.websocketUrl) {
          output += `WebSocket URL: ${session.websocketUrl}
`;
        }
        return {
          content: [{ type: "text", text: output }]
        };
      } catch (error3) {
        return {
          content: [
            {
              type: "text",
              text: `Error getting session ${sessionId}: ${error3.message}`
            }
          ],
          isError: true
        };
      }
    }
  );
  server.registerTool(
    "navigate",
    {
      description: "Navigate to a URL in an existing Steel browser session and optionally take a screenshot.",
      inputSchema: object3({
        sessionId: string7().describe("The session ID to navigate in"),
        url: string7().url().describe("The URL to navigate to"),
        waitForSelector: string7().optional().describe("CSS selector to wait for after navigation"),
        timeout: number7().optional().describe("Navigation timeout in milliseconds"),
        takeScreenshot: boolean7().optional().describe("Take a screenshot after navigation")
      })
    },
    async ({ sessionId, url: url3, waitForSelector, timeout, takeScreenshot }) => {
      try {
        const requestBody = { url: url3 };
        if (waitForSelector) requestBody.waitForSelector = waitForSelector;
        if (timeout) requestBody.timeout = timeout;
        if (takeScreenshot !== void 0)
          requestBody.takeScreenshot = takeScreenshot;
        const result = await steelRequest(
          `/v1/sessions/${sessionId}/navigate`,
          {
            method: "POST",
            body: JSON.stringify(requestBody)
          }
        );
        let output = `Navigated to: ${url3}
`;
        output += `Session: ${sessionId}
`;
        if (result.screenshot) {
          output += `
Screenshot (base64): ${result.screenshot.substring(0, 200)}...
`;
        }
        return {
          content: [{ type: "text", text: output }]
        };
      } catch (error3) {
        return {
          content: [
            {
              type: "text",
              text: `Error navigating in session ${sessionId}: ${error3.message}`
            }
          ],
          isError: true
        };
      }
    }
  );
  server.registerTool(
    "execute-script",
    {
      description: "Execute JavaScript code in a Steel browser session and return the result.",
      inputSchema: object3({
        sessionId: string7().describe("The session ID to execute script in"),
        script: string7().describe("JavaScript code to execute in the browser"),
        awaitPromise: boolean7().optional().describe("Wait for the script to return a promise")
      })
    },
    async ({ sessionId, script, awaitPromise }) => {
      try {
        const requestBody = { script };
        if (awaitPromise !== void 0) requestBody.awaitPromise = awaitPromise;
        const result = await steelRequest(`/v1/sessions/${sessionId}/execute`, {
          method: "POST",
          body: JSON.stringify(requestBody)
        });
        let output = `Script executed in session ${sessionId}

`;
        output += `Result:
${JSON.stringify(result.result, null, 2)}
`;
        return {
          content: [{ type: "text", text: output }]
        };
      } catch (error3) {
        return {
          content: [
            {
              type: "text",
              text: `Error executing script in session ${sessionId}: ${error3.message}`
            }
          ],
          isError: true
        };
      }
    }
  );
  server.registerTool(
    "screenshot",
    {
      description: "Take a screenshot of the current page in a Steel browser session.",
      inputSchema: object3({
        sessionId: string7().describe("The session ID to take screenshot in"),
        fullPage: boolean7().optional().describe("Capture full scrollable page"),
        selector: string7().optional().describe("CSS selector of element to screenshot")
      })
    },
    async ({ sessionId, fullPage, selector }) => {
      try {
        const requestBody = {};
        if (fullPage !== void 0) requestBody.fullPage = fullPage;
        if (selector) requestBody.selector = selector;
        const result = await steelRequest(
          `/v1/sessions/${sessionId}/screenshot`,
          {
            method: "POST",
            body: JSON.stringify(requestBody)
          }
        );
        let output = `Screenshot taken in session ${sessionId}

`;
        output += `Image (base64, first 500 chars):
${result.screenshot.substring(0, 500)}...
`;
        output += `
Full length: ${result.screenshot.length} characters
`;
        return {
          content: [{ type: "text", text: output }]
        };
      } catch (error3) {
        return {
          content: [
            {
              type: "text",
              text: `Error taking screenshot in session ${sessionId}: ${error3.message}`
            }
          ],
          isError: true
        };
      }
    }
  );
  server.registerTool(
    "get-content",
    {
      description: "Get the current page content (HTML, markdown, text) from a Steel browser session.",
      inputSchema: object3({
        sessionId: string7().describe("The session ID to get content from"),
        format: _enum3(["html", "markdown", "text"]).optional().describe("Content format to return")
      })
    },
    async ({ sessionId, format: format2 }) => {
      try {
        const requestBody = {};
        if (format2) requestBody.format = format2;
        const result = await steelRequest(`/v1/sessions/${sessionId}/content`, {
          method: "POST",
          body: JSON.stringify(requestBody)
        });
        let output = `Page content from session ${sessionId}:

`;
        if (result.content?.markdown) {
          output += `--- Markdown ---
${result.content.markdown.substring(0, 3e3)}
`;
        } else if (result.content?.html) {
          output += `--- HTML ---
${result.content.html.substring(0, 3e3)}
`;
        } else if (result.content?.text) {
          output += `--- Text ---
${result.content.text.substring(0, 3e3)}
`;
        }
        return {
          content: [{ type: "text", text: output }]
        };
      } catch (error3) {
        return {
          content: [
            {
              type: "text",
              text: `Error getting content from session ${sessionId}: ${error3.message}`
            }
          ],
          isError: true
        };
      }
    }
  );
  return server;
}
var mcpHandler = createMcpHandler(async () => createServer(), {
  legacy: "stateless",
  // Force plain JSON responses instead of SSE streams. Many serverless/edge
  // runtimes (e.g. EdgeOne Pages) cannot return long-lived streaming bodies,
  // which would surface as an "Error return from script".
  responseMode: "json"
});
async function handleRequest(request) {
  return mcpHandler.fetch(request);
}
async function onRequest(context) {
  if (context && context.env) {
    for (const [key, value] of Object.entries(context.env)) {
      envStore[key] = value;
    }
  }
  return handleRequest(context.request);
}
export {
  onRequest as default
};
/*! Bundled license information:

@modelcontextprotocol/server/dist/src-CX2iR2pK.mjs:
  (*!
  * content-type
  * Copyright(c) 2015 Douglas Christopher Wilson
  * MIT Licensed
  *)
*/

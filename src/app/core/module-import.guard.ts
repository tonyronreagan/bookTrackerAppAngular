export function throwIfAlreadyLoaded(parentModule: any, moduleName: String) {
  if (parentModule) {
    throw new Error(`${moduleName} has been already loaded. Import Core Modules in the APP module Only`)
  }
};

export interface ConfigurationParameters {
  apiKeys?: { [key: string]: string };
  username?: string;
  password?: string;
  accessToken?: string | (() => string);
  basePath?: string;
  withCredentials?: boolean;
}

export class Configuration {
  apiKeys?: { [key: string]: string };
  username?: string;
  password?: string;
  accessToken?: string | (() => string);
  basePath?: string;
  withCredentials?: boolean;

  constructor(configurationParameters: ConfigurationParameters = {}) {
    this.apiKeys = configurationParameters.apiKeys;
    this.username = configurationParameters.username;
    this.password = configurationParameters.password;
    this.accessToken = configurationParameters.accessToken;
    this.basePath = configurationParameters.basePath;
    this.withCredentials = configurationParameters.withCredentials;
  }

  public selectHeaderContentType(contentTypes: string[]): string {
    if (contentTypes.length === 0) {
      return '';
    }

    const type = contentTypes.find(x => this.isJsonMime(x));
    if (type === undefined) {
      return contentTypes[0];
    }
    return type;
  }

  public selectHeaderAccept(accepts: string[]): string {
    if (accepts.length === 0) {
      return '';
    }

    const type = accepts.find(x => this.isJsonMime(x));
    if (type === undefined) {
      return accepts[0];
    }
    return type;
  }

  public isJsonMime(mime: string): boolean {
    const jsonMime: RegExp = new RegExp(
      '^(application/json|[^;/ \t]+/[^;/ \t]+[+]json)[ \t]*(;.*)?$',
      'i'
    );
    return (
      mime != null &&
      (jsonMime.test(mime) ||
        mime.toLowerCase() === 'application/json-patch+json')
    );
  }
}

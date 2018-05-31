/**
 * surgipal_dev
 * API
 *
 * OpenAPI spec version: 1.5
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import '../rxjs-operators';

import { InlineResponse20016 } from '../model/inlineResponse20016';
import { InlineResponse20017 } from '../model/inlineResponse20017';
import { Item51 } from '../model/item51';
import { Item52 } from '../model/item52';
import { Item53 } from '../model/item53';

import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { Configuration } from '../configuration';
import { CustomHttpUrlEncodingCodec } from '../encoder';

@Injectable()
export class DoctorVendorService {
  protected basePath = 'http://surgipal.com/api/apistage.php';
  public defaultHeaders = new HttpHeaders();
  public configuration = new Configuration();

  constructor(
    protected httpClient: HttpClient,
    @Optional()
    @Inject(BASE_PATH)
    basePath: string,
    @Optional() configuration: Configuration
  ) {
    if (basePath) {
      this.basePath = basePath;
    }
    if (configuration) {
      this.configuration = configuration;
      this.basePath = basePath || configuration.basePath || this.basePath;
    }
  }

  /**
   * @param consumes string[] mime-types
   * @return true: consumes contains 'multipart/form-data', false: otherwise
   */
  private canConsumeForm(consumes: string[]): boolean {
    const form = 'multipart/form-data';
    for (let consume of consumes) {
      if (form === consume) {
        return true;
      }
    }
    return false;
  }

  /**
   * List
   *
   * @param exclude One or more related entities (comma separated).
   * @param include One or more related entities (comma separated).
   * @param order Column you want to sort on and the sort direction (comma separated). Example: id,desc
   * @param page Page number and page size (comma separated). NB: You cannot use \&quot;page\&quot; without \&quot;order\&quot;! Example: 1,10
   * @param transform Transform the records to object format. NB: This can also be done client-side in JavaScript!
   * @param columns The table columns you want to retrieve (comma separated). Example: posts.*,categories.name
   * @param filter[] Filters to be applied. Each filter consists of a column, an operator and a value (comma separated). Example: id,eq,1
   * @param satisfy Should all filters match (default)? Or any?
   */
  public doctorVendorGet(
    exclude?: string,
    include?: string,
    order?: string,
    page?: string,
    transform?: boolean,
    columns?: string,
    filter?: Array<string>,
    satisfy?: string
  ): Observable<Array<InlineResponse20016>> {
    let queryParameters = new HttpParams({
      encoder: new CustomHttpUrlEncodingCodec()
    });
    if (exclude !== undefined) {
      queryParameters = queryParameters.set('exclude', <any>exclude);
    }
    if (include !== undefined) {
      queryParameters = queryParameters.set('include', <any>include);
    }
    if (order !== undefined) {
      queryParameters = queryParameters.set('order', <any>order);
    }
    if (page !== undefined) {
      queryParameters = queryParameters.set('page', <any>page);
    }
    if (transform !== undefined) {
      queryParameters = queryParameters.set('transform', <any>transform);
    }
    if (columns !== undefined) {
      queryParameters = queryParameters.set('columns', <any>columns);
    }
    if (filter) {
      filter.forEach(element => {
        queryParameters = queryParameters.append('filter[]', <any>element);
      });
    }
    if (satisfy !== undefined) {
      queryParameters = queryParameters.set('satisfy', <any>satisfy);
    }

    let headers = this.defaultHeaders;

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['application/json'];
    let httpHeaderAcceptSelected: string = this.configuration.selectHeaderAccept(
      httpHeaderAccepts
    );
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    let consumes: string[] = ['application/json'];

    return this.httpClient.get<any>(`${this.basePath}/doctor_vendor`, {
      params: queryParameters,
      headers: headers,
      withCredentials: this.configuration.withCredentials
    });
  }

  /**
   * Delete
   *
   * @param id Identifier for item.
   */
  public doctorVendorIdDelete(id: string): Observable<number> {
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling doctorVendorIdDelete.'
      );
    }

    let headers = this.defaultHeaders;

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['application/json'];
    let httpHeaderAcceptSelected: string = this.configuration.selectHeaderAccept(
      httpHeaderAccepts
    );
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    let consumes: string[] = ['application/json'];

    return this.httpClient.delete<any>(
      `${this.basePath}/doctor_vendor/${encodeURIComponent(String(id))}`,
      {
        headers: headers,
        withCredentials: this.configuration.withCredentials
      }
    );
  }

  /**
   * Read
   *
   * @param id Identifier for item.
   */
  public doctorVendorIdGet(id: string): Observable<InlineResponse20017> {
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling doctorVendorIdGet.'
      );
    }

    let headers = this.defaultHeaders;

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['application/json'];
    let httpHeaderAcceptSelected: string = this.configuration.selectHeaderAccept(
      httpHeaderAccepts
    );
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    let consumes: string[] = ['application/json'];

    return this.httpClient.get<any>(
      `${this.basePath}/doctor_vendor/${encodeURIComponent(String(id))}`,
      {
        headers: headers,
        withCredentials: this.configuration.withCredentials
      }
    );
  }

  /**
   * Increment
   *
   * @param id Identifier for item.
   * @param item Properties of item to update.
   */
  public doctorVendorIdPatch(id: string, item: Item53): Observable<number> {
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling doctorVendorIdPatch.'
      );
    }
    if (item === null || item === undefined) {
      throw new Error(
        'Required parameter item was null or undefined when calling doctorVendorIdPatch.'
      );
    }

    let headers = this.defaultHeaders;

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['application/json'];
    let httpHeaderAcceptSelected: string = this.configuration.selectHeaderAccept(
      httpHeaderAccepts
    );
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    let consumes: string[] = ['application/json'];
    let httpContentTypeSelected: string = this.configuration.selectHeaderContentType(
      consumes
    );
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }

    return this.httpClient.patch<any>(
      `${this.basePath}/doctor_vendor/${encodeURIComponent(String(id))}`,
      item,
      {
        headers: headers,
        withCredentials: this.configuration.withCredentials
      }
    );
  }

  /**
   * Update
   *
   * @param id Identifier for item.
   * @param item Properties of item to update.
   */
  public doctorVendorIdPut(id: string, item: Item52): Observable<number> {
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling doctorVendorIdPut.'
      );
    }
    if (item === null || item === undefined) {
      throw new Error(
        'Required parameter item was null or undefined when calling doctorVendorIdPut.'
      );
    }

    let headers = this.defaultHeaders;

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['application/json'];
    let httpHeaderAcceptSelected: string = this.configuration.selectHeaderAccept(
      httpHeaderAccepts
    );
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    let consumes: string[] = ['application/json'];
    let httpContentTypeSelected: string = this.configuration.selectHeaderContentType(
      consumes
    );
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }

    return this.httpClient.put<any>(
      `${this.basePath}/doctor_vendor/${encodeURIComponent(String(id))}`,
      item,
      {
        headers: headers,
        withCredentials: this.configuration.withCredentials
      }
    );
  }

  /**
   * Create
   *
   * @param item Item to create.
   */
  public doctorVendorPost(item: Item51): Observable<number> {
    if (item === null || item === undefined) {
      throw new Error(
        'Required parameter item was null or undefined when calling doctorVendorPost.'
      );
    }

    let headers = this.defaultHeaders;

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['application/json'];
    let httpHeaderAcceptSelected: string = this.configuration.selectHeaderAccept(
      httpHeaderAccepts
    );
    if (httpHeaderAcceptSelected != undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    // to determine the Content-Type header
    let consumes: string[] = ['application/json'];
    let httpContentTypeSelected: string = this.configuration.selectHeaderContentType(
      consumes
    );
    if (httpContentTypeSelected != undefined) {
      headers = headers.set('Content-Type', httpContentTypeSelected);
    }

    return this.httpClient.post<any>(`${this.basePath}/doctor_vendor`, item, {
      headers: headers,
      withCredentials: this.configuration.withCredentials
    });
  }
}

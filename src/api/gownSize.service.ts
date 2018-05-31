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

import { InlineResponse20026 } from '../model/inlineResponse20026';
import { Item81 } from '../model/item81';
import { Item82 } from '../model/item82';
import { Item83 } from '../model/item83';

import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { Configuration } from '../configuration';
import { CustomHttpUrlEncodingCodec } from '../encoder';

@Injectable()
export class GownSizeService {
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
  public gownSizeGet(
    exclude?: string,
    include?: string,
    order?: string,
    page?: string,
    transform?: boolean,
    columns?: string,
    filter?: Array<string>,
    satisfy?: string
  ): Observable<Array<InlineResponse20026>> {
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

    return this.httpClient.get<any>(`${this.basePath}/gown_size`, {
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
  public gownSizeIdDelete(id: string): Observable<number> {
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling gownSizeIdDelete.'
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
      `${this.basePath}/gown_size/${encodeURIComponent(String(id))}`,
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
  public gownSizeIdGet(id: string): Observable<InlineResponse20026> {
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling gownSizeIdGet.'
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
      `${this.basePath}/gown_size/${encodeURIComponent(String(id))}`,
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
  public gownSizeIdPatch(id: string, item: Item83): Observable<number> {
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling gownSizeIdPatch.'
      );
    }
    if (item === null || item === undefined) {
      throw new Error(
        'Required parameter item was null or undefined when calling gownSizeIdPatch.'
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
      `${this.basePath}/gown_size/${encodeURIComponent(String(id))}`,
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
  public gownSizeIdPut(id: string, item: Item82): Observable<number> {
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling gownSizeIdPut.'
      );
    }
    if (item === null || item === undefined) {
      throw new Error(
        'Required parameter item was null or undefined when calling gownSizeIdPut.'
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
      `${this.basePath}/gown_size/${encodeURIComponent(String(id))}`,
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
  public gownSizePost(item: Item81): Observable<number> {
    if (item === null || item === undefined) {
      throw new Error(
        'Required parameter item was null or undefined when calling gownSizePost.'
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

    return this.httpClient.post<any>(`${this.basePath}/gown_size`, item, {
      headers: headers,
      withCredentials: this.configuration.withCredentials
    });
  }
}

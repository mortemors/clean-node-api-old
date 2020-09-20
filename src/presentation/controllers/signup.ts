import { HttpRequest, HttpResponse } from '../protocols/http'
import { MisssingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http-helper'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return badRequest(new MisssingParamError('name'))
    }
    if (!httpRequest.body.email) {
      return badRequest(new MisssingParamError('email'))
    }
  }
}

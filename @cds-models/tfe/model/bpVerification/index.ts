// This is an automatically generated file. Please do not change its contents manually!
import * as __ from './../../../_';
import * as _ from './../../..';
// enum
export const Criticality = {
  INFO: "INFO",
  WARNING: "WARNING",
  ERROR: "ERROR",
} as const;
export type Criticality = "INFO" | "WARNING" | "ERROR"

export function _VerificationAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Verification extends Base {
        BusinessPartner?: string | null;
        FirstName?: string | null;
        LastName?: string | null;
        verificationStatus?: __.Association.to<StatusValue> | null;
        verificationStatus_code?: string | null;
        addresses?: __.Composition.of.many<Addresses>;
        BusinessPartnerIsBlocked?: boolean | null;
      static actions: {
    }
  };
}
export class Verification extends _._managedAspect(_._cuidAspect(_VerificationAspect(__.Entity))) {static drafts: typeof Verification}
export class Verifications extends Array<Verification> {static drafts: typeof Verification}
Object.defineProperty(Verification, 'name', { value: 'tfe.model.bpVerification.Verifications' })
Object.defineProperty(Verifications, 'name', { value: 'tfe.model.bpVerification.Verifications' })

export function _AddressAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Address extends Base {
        verifications?: __.Association.to<Verification> | null;
        verifications_ID?: string | null;
        AddressID?: string | null;
        Country?: string | null;
        CityName?: string | null;
        StreetName?: string | null;
        PostalCode?: string | null;
        HouseNumber?: string | null;
      static actions: {
    }
  };
}
export class Address extends _._cuidAspect(_AddressAspect(__.Entity)) {static drafts: typeof Address}
export class Addresses extends Array<Address> {static drafts: typeof Address}
Object.defineProperty(Address, 'name', { value: 'tfe.model.bpVerification.Addresses' })
Object.defineProperty(Addresses, 'name', { value: 'tfe.model.bpVerification.Addresses' })

export function _BacklogAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Backlog extends Base {
        method?: string | null;
        verification?: __.Association.to<Verification> | null;
        verification_ID?: string | null;
        updateNeeded?: boolean | null;
        criticality?: Criticality | null;
      static actions: {
    }
  };
}
export class Backlog extends _._managedAspect(_._cuidAspect(_BacklogAspect(__.Entity))) {}
export class Backlogs extends Array<Backlog> {}
Object.defineProperty(Backlog, 'name', { value: 'tfe.model.bpVerification.Backlogs' })
Object.defineProperty(Backlogs, 'name', { value: 'tfe.model.bpVerification.Backlogs' })

export function _StatusValueAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class StatusValue extends Base {
        code?: string | null;
        value?: string | null;
        criticality?: number | null;
        updateCode?: boolean | null;
      static actions: {
    }
  };
}
export class StatusValue extends _StatusValueAspect(__.Entity) {}
export class StatusValues extends Array<StatusValue> {}
Object.defineProperty(StatusValue, 'name', { value: 'tfe.model.bpVerification.StatusValues' })
Object.defineProperty(StatusValues, 'name', { value: 'tfe.model.bpVerification.StatusValues' })

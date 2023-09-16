import { PARTNERS } from '../../app/shared/PARTNERS'

export const selectAllPartners = (state) => PARTNERS;
export const selectFeaturedPartner = (state) => PARTNERS.find((partner) => partner.featured);

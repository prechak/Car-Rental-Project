import { request, gql } from "graphql-request";

export const getCarLists = async () => {
  const query = gql`
    query MyQuery {
      carLists(last: 35) {
        name
        carBrand
        price
        image {
          url
        }
        carType
        seat
        modelYear
        performance
        topSpeed
        carRange
        batteryCapacity
        horsePower
        quickChargeTime
        slowChargeTime
        chargeType
        id
      }
    }
  `;

  const result = await request(
    "https://ap-southeast-2.cdn.hygraph.com/content/clz9inp9v01ec07uiijk3ly15/master",
    query
  );
  return result;
};

import { request, gql } from "graphql-request";

const MASTER_URL =
  "https://ap-southeast-2.cdn.hygraph.com/content/clz9inp9v01ec07uiijk3ly15/master";

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

  return await request(MASTER_URL, query);
};

export const getStoreLocation = async () => {
  const query = gql`
    query MyQuery {
      storesLocations {
        address
      }
    }
  `;

  return await request(MASTER_URL, query);
};

export const getPublicImage = async () => {
  const query = gql`
    query MyQuery {
      publics {
        logo {
          url
        }
        hero {
          url
        }
      }
    }
  `;

  return await request(MASTER_URL, query);
};

export const createBooking = async (formValue: any) => {
  if (
    !formValue.carId ||
    !formValue.userName ||
    !formValue.pickUpDate ||
    !formValue.pickUpTime ||
    !formValue.dropOffDate ||
    !formValue.dropOffTime ||
    !formValue.contactNumber
  ) {
    throw new Error("All fields are required");
  }

  const mutationQuery =
    gql`
  mutation MyMutation {
    createBooking(
      data:  {userName: "` +
    formValue.userName +
    `",
      pickUpDate: "` +
    formValue.pickUpDate +
    `",
      pickUpTime: "` +
    formValue.pickUpTime +
    `",
      dropOffDate: "` +
    formValue.dropOffDate +
    `",
      dropOffTime: "` +
    formValue.dropOffTime +
    `",
      contactNumber: "` +
    formValue.contactNumber +
    `",
      carId: {connect:
        {id: "` +
    formValue.carId +
    `"}}}
    ) {
      id
    }
  }
  `;

  return await request(MASTER_URL, mutationQuery);
};

const { gql } = require('apollo-server-express');

module.exports = gql`

extend type Mutation {
  "Creates a new crop comparison report."
  createCropComparison(input: CreateCropComparisonMutationInput!): CropComparison!
}

type CropComparison implements ChangedDateInterface & UserAttributionInterface @interfaceFields {
  "The internal, unqiue report report identifier."
  id: ObjectID! @project(field: "_id")
  "The farm name."
  farmName: String! @project
  "The number of acres to compare."
  acres: Float! @project
  "The high oleic field."
  oleic: CropComparisonField @project
  "The field being compared to."
  comparedTo: CropComparisonField! @project
}

type CropComparisonField implements FarmFieldDataInterface @interfaceFields {
  "The internal, unique field comparison identifier."
  id: ObjectID! @project(field: "_id")
}

input CreateCropComparisonMutationInput {
  "The farm name."
  farmName: String!
  "The number of acres to compare."
  acres: Float!
  "The crop to compare to HO soy."
  cropToCompare: ComparisonCropTypeEnum!
  "The comparison crop's market price per bushel, in dollars."
  pricePerBushel: Float!
  "The comparison crop's yield per acre, in bushels"
  yieldPerAcre: Float!
}

`;
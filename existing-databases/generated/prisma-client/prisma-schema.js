module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.0). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateAlbum {
  count: Int!
}

type AggregateArtist {
  count: Int!
}

type AggregateSong {
  count: Int!
}

type Album {
  id: Int!
  artistId: Artist
  artworkUrl: String
  createdAt: DateTime!
  name: String!
  songs(where: SongWhereInput, orderBy: SongOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Song!]
  updatedAt: DateTime!
}

type AlbumConnection {
  pageInfo: PageInfo!
  edges: [AlbumEdge]!
  aggregate: AggregateAlbum!
}

input AlbumCreateInput {
  artistId: ArtistCreateOneWithoutAlbumsInput
  artworkUrl: String
  name: String!
  songs: SongCreateManyWithoutAlbumIdInput
}

input AlbumCreateManyWithoutArtistIdInput {
  create: [AlbumCreateWithoutArtistIdInput!]
  connect: [AlbumWhereUniqueInput!]
}

input AlbumCreateOneWithoutSongsInput {
  create: AlbumCreateWithoutSongsInput
  connect: AlbumWhereUniqueInput
}

input AlbumCreateWithoutArtistIdInput {
  artworkUrl: String
  name: String!
  songs: SongCreateManyWithoutAlbumIdInput
}

input AlbumCreateWithoutSongsInput {
  artistId: ArtistCreateOneWithoutAlbumsInput
  artworkUrl: String
  name: String!
}

type AlbumEdge {
  node: Album!
  cursor: String!
}

enum AlbumOrderByInput {
  id_ASC
  id_DESC
  artworkUrl_ASC
  artworkUrl_DESC
  createdAt_ASC
  createdAt_DESC
  name_ASC
  name_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type AlbumPreviousValues {
  id: Int!
  artworkUrl: String
  createdAt: DateTime!
  name: String!
  updatedAt: DateTime!
}

input AlbumScalarWhereInput {
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  artworkUrl: String
  artworkUrl_not: String
  artworkUrl_in: [String!]
  artworkUrl_not_in: [String!]
  artworkUrl_lt: String
  artworkUrl_lte: String
  artworkUrl_gt: String
  artworkUrl_gte: String
  artworkUrl_contains: String
  artworkUrl_not_contains: String
  artworkUrl_starts_with: String
  artworkUrl_not_starts_with: String
  artworkUrl_ends_with: String
  artworkUrl_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [AlbumScalarWhereInput!]
  OR: [AlbumScalarWhereInput!]
  NOT: [AlbumScalarWhereInput!]
}

type AlbumSubscriptionPayload {
  mutation: MutationType!
  node: Album
  updatedFields: [String!]
  previousValues: AlbumPreviousValues
}

input AlbumSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AlbumWhereInput
  AND: [AlbumSubscriptionWhereInput!]
  OR: [AlbumSubscriptionWhereInput!]
  NOT: [AlbumSubscriptionWhereInput!]
}

input AlbumUpdateInput {
  artistId: ArtistUpdateOneWithoutAlbumsInput
  artworkUrl: String
  name: String
  songs: SongUpdateManyWithoutAlbumIdInput
}

input AlbumUpdateManyDataInput {
  artworkUrl: String
  name: String
}

input AlbumUpdateManyMutationInput {
  artworkUrl: String
  name: String
}

input AlbumUpdateManyWithoutArtistIdInput {
  create: [AlbumCreateWithoutArtistIdInput!]
  delete: [AlbumWhereUniqueInput!]
  connect: [AlbumWhereUniqueInput!]
  set: [AlbumWhereUniqueInput!]
  disconnect: [AlbumWhereUniqueInput!]
  update: [AlbumUpdateWithWhereUniqueWithoutArtistIdInput!]
  upsert: [AlbumUpsertWithWhereUniqueWithoutArtistIdInput!]
  deleteMany: [AlbumScalarWhereInput!]
  updateMany: [AlbumUpdateManyWithWhereNestedInput!]
}

input AlbumUpdateManyWithWhereNestedInput {
  where: AlbumScalarWhereInput!
  data: AlbumUpdateManyDataInput!
}

input AlbumUpdateOneWithoutSongsInput {
  create: AlbumCreateWithoutSongsInput
  update: AlbumUpdateWithoutSongsDataInput
  upsert: AlbumUpsertWithoutSongsInput
  delete: Boolean
  disconnect: Boolean
  connect: AlbumWhereUniqueInput
}

input AlbumUpdateWithoutArtistIdDataInput {
  artworkUrl: String
  name: String
  songs: SongUpdateManyWithoutAlbumIdInput
}

input AlbumUpdateWithoutSongsDataInput {
  artistId: ArtistUpdateOneWithoutAlbumsInput
  artworkUrl: String
  name: String
}

input AlbumUpdateWithWhereUniqueWithoutArtistIdInput {
  where: AlbumWhereUniqueInput!
  data: AlbumUpdateWithoutArtistIdDataInput!
}

input AlbumUpsertWithoutSongsInput {
  update: AlbumUpdateWithoutSongsDataInput!
  create: AlbumCreateWithoutSongsInput!
}

input AlbumUpsertWithWhereUniqueWithoutArtistIdInput {
  where: AlbumWhereUniqueInput!
  update: AlbumUpdateWithoutArtistIdDataInput!
  create: AlbumCreateWithoutArtistIdInput!
}

input AlbumWhereInput {
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  artistId: ArtistWhereInput
  artworkUrl: String
  artworkUrl_not: String
  artworkUrl_in: [String!]
  artworkUrl_not_in: [String!]
  artworkUrl_lt: String
  artworkUrl_lte: String
  artworkUrl_gt: String
  artworkUrl_gte: String
  artworkUrl_contains: String
  artworkUrl_not_contains: String
  artworkUrl_starts_with: String
  artworkUrl_not_starts_with: String
  artworkUrl_ends_with: String
  artworkUrl_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  songs_every: SongWhereInput
  songs_some: SongWhereInput
  songs_none: SongWhereInput
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [AlbumWhereInput!]
  OR: [AlbumWhereInput!]
  NOT: [AlbumWhereInput!]
}

input AlbumWhereUniqueInput {
  id: Int
}

type Artist {
  id: Int!
  albums(where: AlbumWhereInput, orderBy: AlbumOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Album!]
  createdAt: DateTime!
  name: String!
  songs(where: SongWhereInput, orderBy: SongOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Song!]
  updatedAt: DateTime!
}

type ArtistConnection {
  pageInfo: PageInfo!
  edges: [ArtistEdge]!
  aggregate: AggregateArtist!
}

input ArtistCreateInput {
  albums: AlbumCreateManyWithoutArtistIdInput
  name: String!
  songs: SongCreateManyWithoutArtistIdInput
}

input ArtistCreateOneWithoutAlbumsInput {
  create: ArtistCreateWithoutAlbumsInput
  connect: ArtistWhereUniqueInput
}

input ArtistCreateOneWithoutSongsInput {
  create: ArtistCreateWithoutSongsInput
  connect: ArtistWhereUniqueInput
}

input ArtistCreateWithoutAlbumsInput {
  name: String!
  songs: SongCreateManyWithoutArtistIdInput
}

input ArtistCreateWithoutSongsInput {
  albums: AlbumCreateManyWithoutArtistIdInput
  name: String!
}

type ArtistEdge {
  node: Artist!
  cursor: String!
}

enum ArtistOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  name_ASC
  name_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ArtistPreviousValues {
  id: Int!
  createdAt: DateTime!
  name: String!
  updatedAt: DateTime!
}

type ArtistSubscriptionPayload {
  mutation: MutationType!
  node: Artist
  updatedFields: [String!]
  previousValues: ArtistPreviousValues
}

input ArtistSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ArtistWhereInput
  AND: [ArtistSubscriptionWhereInput!]
  OR: [ArtistSubscriptionWhereInput!]
  NOT: [ArtistSubscriptionWhereInput!]
}

input ArtistUpdateInput {
  albums: AlbumUpdateManyWithoutArtistIdInput
  name: String
  songs: SongUpdateManyWithoutArtistIdInput
}

input ArtistUpdateManyMutationInput {
  name: String
}

input ArtistUpdateOneWithoutAlbumsInput {
  create: ArtistCreateWithoutAlbumsInput
  update: ArtistUpdateWithoutAlbumsDataInput
  upsert: ArtistUpsertWithoutAlbumsInput
  delete: Boolean
  disconnect: Boolean
  connect: ArtistWhereUniqueInput
}

input ArtistUpdateOneWithoutSongsInput {
  create: ArtistCreateWithoutSongsInput
  update: ArtistUpdateWithoutSongsDataInput
  upsert: ArtistUpsertWithoutSongsInput
  delete: Boolean
  disconnect: Boolean
  connect: ArtistWhereUniqueInput
}

input ArtistUpdateWithoutAlbumsDataInput {
  name: String
  songs: SongUpdateManyWithoutArtistIdInput
}

input ArtistUpdateWithoutSongsDataInput {
  albums: AlbumUpdateManyWithoutArtistIdInput
  name: String
}

input ArtistUpsertWithoutAlbumsInput {
  update: ArtistUpdateWithoutAlbumsDataInput!
  create: ArtistCreateWithoutAlbumsInput!
}

input ArtistUpsertWithoutSongsInput {
  update: ArtistUpdateWithoutSongsDataInput!
  create: ArtistCreateWithoutSongsInput!
}

input ArtistWhereInput {
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  albums_every: AlbumWhereInput
  albums_some: AlbumWhereInput
  albums_none: AlbumWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  songs_every: SongWhereInput
  songs_some: SongWhereInput
  songs_none: SongWhereInput
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [ArtistWhereInput!]
  OR: [ArtistWhereInput!]
  NOT: [ArtistWhereInput!]
}

input ArtistWhereUniqueInput {
  id: Int
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Long

type Mutation {
  createAlbum(data: AlbumCreateInput!): Album!
  updateAlbum(data: AlbumUpdateInput!, where: AlbumWhereUniqueInput!): Album
  updateManyAlbums(data: AlbumUpdateManyMutationInput!, where: AlbumWhereInput): BatchPayload!
  upsertAlbum(where: AlbumWhereUniqueInput!, create: AlbumCreateInput!, update: AlbumUpdateInput!): Album!
  deleteAlbum(where: AlbumWhereUniqueInput!): Album
  deleteManyAlbums(where: AlbumWhereInput): BatchPayload!
  createArtist(data: ArtistCreateInput!): Artist!
  updateArtist(data: ArtistUpdateInput!, where: ArtistWhereUniqueInput!): Artist
  updateManyArtists(data: ArtistUpdateManyMutationInput!, where: ArtistWhereInput): BatchPayload!
  upsertArtist(where: ArtistWhereUniqueInput!, create: ArtistCreateInput!, update: ArtistUpdateInput!): Artist!
  deleteArtist(where: ArtistWhereUniqueInput!): Artist
  deleteManyArtists(where: ArtistWhereInput): BatchPayload!
  createSong(data: SongCreateInput!): Song!
  updateSong(data: SongUpdateInput!, where: SongWhereUniqueInput!): Song
  updateManySongs(data: SongUpdateManyMutationInput!, where: SongWhereInput): BatchPayload!
  upsertSong(where: SongWhereUniqueInput!, create: SongCreateInput!, update: SongUpdateInput!): Song!
  deleteSong(where: SongWhereUniqueInput!): Song
  deleteManySongs(where: SongWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  album(where: AlbumWhereUniqueInput!): Album
  albums(where: AlbumWhereInput, orderBy: AlbumOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Album]!
  albumsConnection(where: AlbumWhereInput, orderBy: AlbumOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AlbumConnection!
  artist(where: ArtistWhereUniqueInput!): Artist
  artists(where: ArtistWhereInput, orderBy: ArtistOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Artist]!
  artistsConnection(where: ArtistWhereInput, orderBy: ArtistOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ArtistConnection!
  song(where: SongWhereUniqueInput!): Song
  songs(where: SongWhereInput, orderBy: SongOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Song]!
  songsConnection(where: SongWhereInput, orderBy: SongOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SongConnection!
  node(id: ID!): Node
}

type Song {
  id: Int!
  albumId: Album
  artistId: Artist
  audioUrl: String
  createdAt: DateTime!
  genre: String
  name: String!
  updatedAt: DateTime!
}

type SongConnection {
  pageInfo: PageInfo!
  edges: [SongEdge]!
  aggregate: AggregateSong!
}

input SongCreateInput {
  albumId: AlbumCreateOneWithoutSongsInput
  artistId: ArtistCreateOneWithoutSongsInput
  audioUrl: String
  genre: String
  name: String!
}

input SongCreateManyWithoutAlbumIdInput {
  create: [SongCreateWithoutAlbumIdInput!]
  connect: [SongWhereUniqueInput!]
}

input SongCreateManyWithoutArtistIdInput {
  create: [SongCreateWithoutArtistIdInput!]
  connect: [SongWhereUniqueInput!]
}

input SongCreateWithoutAlbumIdInput {
  artistId: ArtistCreateOneWithoutSongsInput
  audioUrl: String
  genre: String
  name: String!
}

input SongCreateWithoutArtistIdInput {
  albumId: AlbumCreateOneWithoutSongsInput
  audioUrl: String
  genre: String
  name: String!
}

type SongEdge {
  node: Song!
  cursor: String!
}

enum SongOrderByInput {
  id_ASC
  id_DESC
  audioUrl_ASC
  audioUrl_DESC
  createdAt_ASC
  createdAt_DESC
  genre_ASC
  genre_DESC
  name_ASC
  name_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type SongPreviousValues {
  id: Int!
  audioUrl: String
  createdAt: DateTime!
  genre: String
  name: String!
  updatedAt: DateTime!
}

input SongScalarWhereInput {
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  audioUrl: String
  audioUrl_not: String
  audioUrl_in: [String!]
  audioUrl_not_in: [String!]
  audioUrl_lt: String
  audioUrl_lte: String
  audioUrl_gt: String
  audioUrl_gte: String
  audioUrl_contains: String
  audioUrl_not_contains: String
  audioUrl_starts_with: String
  audioUrl_not_starts_with: String
  audioUrl_ends_with: String
  audioUrl_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  genre: String
  genre_not: String
  genre_in: [String!]
  genre_not_in: [String!]
  genre_lt: String
  genre_lte: String
  genre_gt: String
  genre_gte: String
  genre_contains: String
  genre_not_contains: String
  genre_starts_with: String
  genre_not_starts_with: String
  genre_ends_with: String
  genre_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [SongScalarWhereInput!]
  OR: [SongScalarWhereInput!]
  NOT: [SongScalarWhereInput!]
}

type SongSubscriptionPayload {
  mutation: MutationType!
  node: Song
  updatedFields: [String!]
  previousValues: SongPreviousValues
}

input SongSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SongWhereInput
  AND: [SongSubscriptionWhereInput!]
  OR: [SongSubscriptionWhereInput!]
  NOT: [SongSubscriptionWhereInput!]
}

input SongUpdateInput {
  albumId: AlbumUpdateOneWithoutSongsInput
  artistId: ArtistUpdateOneWithoutSongsInput
  audioUrl: String
  genre: String
  name: String
}

input SongUpdateManyDataInput {
  audioUrl: String
  genre: String
  name: String
}

input SongUpdateManyMutationInput {
  audioUrl: String
  genre: String
  name: String
}

input SongUpdateManyWithoutAlbumIdInput {
  create: [SongCreateWithoutAlbumIdInput!]
  delete: [SongWhereUniqueInput!]
  connect: [SongWhereUniqueInput!]
  set: [SongWhereUniqueInput!]
  disconnect: [SongWhereUniqueInput!]
  update: [SongUpdateWithWhereUniqueWithoutAlbumIdInput!]
  upsert: [SongUpsertWithWhereUniqueWithoutAlbumIdInput!]
  deleteMany: [SongScalarWhereInput!]
  updateMany: [SongUpdateManyWithWhereNestedInput!]
}

input SongUpdateManyWithoutArtistIdInput {
  create: [SongCreateWithoutArtistIdInput!]
  delete: [SongWhereUniqueInput!]
  connect: [SongWhereUniqueInput!]
  set: [SongWhereUniqueInput!]
  disconnect: [SongWhereUniqueInput!]
  update: [SongUpdateWithWhereUniqueWithoutArtistIdInput!]
  upsert: [SongUpsertWithWhereUniqueWithoutArtistIdInput!]
  deleteMany: [SongScalarWhereInput!]
  updateMany: [SongUpdateManyWithWhereNestedInput!]
}

input SongUpdateManyWithWhereNestedInput {
  where: SongScalarWhereInput!
  data: SongUpdateManyDataInput!
}

input SongUpdateWithoutAlbumIdDataInput {
  artistId: ArtistUpdateOneWithoutSongsInput
  audioUrl: String
  genre: String
  name: String
}

input SongUpdateWithoutArtistIdDataInput {
  albumId: AlbumUpdateOneWithoutSongsInput
  audioUrl: String
  genre: String
  name: String
}

input SongUpdateWithWhereUniqueWithoutAlbumIdInput {
  where: SongWhereUniqueInput!
  data: SongUpdateWithoutAlbumIdDataInput!
}

input SongUpdateWithWhereUniqueWithoutArtistIdInput {
  where: SongWhereUniqueInput!
  data: SongUpdateWithoutArtistIdDataInput!
}

input SongUpsertWithWhereUniqueWithoutAlbumIdInput {
  where: SongWhereUniqueInput!
  update: SongUpdateWithoutAlbumIdDataInput!
  create: SongCreateWithoutAlbumIdInput!
}

input SongUpsertWithWhereUniqueWithoutArtistIdInput {
  where: SongWhereUniqueInput!
  update: SongUpdateWithoutArtistIdDataInput!
  create: SongCreateWithoutArtistIdInput!
}

input SongWhereInput {
  id: Int
  id_not: Int
  id_in: [Int!]
  id_not_in: [Int!]
  id_lt: Int
  id_lte: Int
  id_gt: Int
  id_gte: Int
  albumId: AlbumWhereInput
  artistId: ArtistWhereInput
  audioUrl: String
  audioUrl_not: String
  audioUrl_in: [String!]
  audioUrl_not_in: [String!]
  audioUrl_lt: String
  audioUrl_lte: String
  audioUrl_gt: String
  audioUrl_gte: String
  audioUrl_contains: String
  audioUrl_not_contains: String
  audioUrl_starts_with: String
  audioUrl_not_starts_with: String
  audioUrl_ends_with: String
  audioUrl_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  genre: String
  genre_not: String
  genre_in: [String!]
  genre_not_in: [String!]
  genre_lt: String
  genre_lte: String
  genre_gt: String
  genre_gte: String
  genre_contains: String
  genre_not_contains: String
  genre_starts_with: String
  genre_not_starts_with: String
  genre_ends_with: String
  genre_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [SongWhereInput!]
  OR: [SongWhereInput!]
  NOT: [SongWhereInput!]
}

input SongWhereUniqueInput {
  id: Int
}

type Subscription {
  album(where: AlbumSubscriptionWhereInput): AlbumSubscriptionPayload
  artist(where: ArtistSubscriptionWhereInput): ArtistSubscriptionPayload
  song(where: SongSubscriptionWhereInput): SongSubscriptionPayload
}
`
      }
    
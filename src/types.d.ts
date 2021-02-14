export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};











export type AvifOptions = {
  quality?: Maybe<Scalars['Int']>;
  lossless?: Maybe<Scalars['Boolean']>;
  speed?: Maybe<Scalars['Int']>;
};

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width?: Maybe<Scalars['Int']>;
  /**
   * Force the output format for the low-res preview. Default is to use the same
   * format as the input. You should rarely need to change this
   */
  toFormat?: Maybe<ImageFormat>;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  __typename?: 'Directory';
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  __typename?: 'DirectoryConnection';
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  __typename?: 'DirectoryEdge';
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export enum DirectoryFieldsEnum {
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  __typename?: 'DirectoryGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: Maybe<Scalars['Int']>;
};

export type File = Node & {
  __typename?: 'File';
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
  __typename?: 'FileConnection';
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  __typename?: 'FileEdge';
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export enum FileFieldsEnum {
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  PublicUrl = 'publicURL',
  ChildrenImageSharp = 'childrenImageSharp',
  ChildrenImageSharpFixedBase64 = 'childrenImageSharp___fixed___base64',
  ChildrenImageSharpFixedTracedSvg = 'childrenImageSharp___fixed___tracedSVG',
  ChildrenImageSharpFixedAspectRatio = 'childrenImageSharp___fixed___aspectRatio',
  ChildrenImageSharpFixedWidth = 'childrenImageSharp___fixed___width',
  ChildrenImageSharpFixedHeight = 'childrenImageSharp___fixed___height',
  ChildrenImageSharpFixedSrc = 'childrenImageSharp___fixed___src',
  ChildrenImageSharpFixedSrcSet = 'childrenImageSharp___fixed___srcSet',
  ChildrenImageSharpFixedSrcWebp = 'childrenImageSharp___fixed___srcWebp',
  ChildrenImageSharpFixedSrcSetWebp = 'childrenImageSharp___fixed___srcSetWebp',
  ChildrenImageSharpFixedOriginalName = 'childrenImageSharp___fixed___originalName',
  ChildrenImageSharpResolutionsBase64 = 'childrenImageSharp___resolutions___base64',
  ChildrenImageSharpResolutionsTracedSvg = 'childrenImageSharp___resolutions___tracedSVG',
  ChildrenImageSharpResolutionsAspectRatio = 'childrenImageSharp___resolutions___aspectRatio',
  ChildrenImageSharpResolutionsWidth = 'childrenImageSharp___resolutions___width',
  ChildrenImageSharpResolutionsHeight = 'childrenImageSharp___resolutions___height',
  ChildrenImageSharpResolutionsSrc = 'childrenImageSharp___resolutions___src',
  ChildrenImageSharpResolutionsSrcSet = 'childrenImageSharp___resolutions___srcSet',
  ChildrenImageSharpResolutionsSrcWebp = 'childrenImageSharp___resolutions___srcWebp',
  ChildrenImageSharpResolutionsSrcSetWebp = 'childrenImageSharp___resolutions___srcSetWebp',
  ChildrenImageSharpResolutionsOriginalName = 'childrenImageSharp___resolutions___originalName',
  ChildrenImageSharpFluidBase64 = 'childrenImageSharp___fluid___base64',
  ChildrenImageSharpFluidTracedSvg = 'childrenImageSharp___fluid___tracedSVG',
  ChildrenImageSharpFluidAspectRatio = 'childrenImageSharp___fluid___aspectRatio',
  ChildrenImageSharpFluidSrc = 'childrenImageSharp___fluid___src',
  ChildrenImageSharpFluidSrcSet = 'childrenImageSharp___fluid___srcSet',
  ChildrenImageSharpFluidSrcWebp = 'childrenImageSharp___fluid___srcWebp',
  ChildrenImageSharpFluidSrcSetWebp = 'childrenImageSharp___fluid___srcSetWebp',
  ChildrenImageSharpFluidSizes = 'childrenImageSharp___fluid___sizes',
  ChildrenImageSharpFluidOriginalImg = 'childrenImageSharp___fluid___originalImg',
  ChildrenImageSharpFluidOriginalName = 'childrenImageSharp___fluid___originalName',
  ChildrenImageSharpFluidPresentationWidth = 'childrenImageSharp___fluid___presentationWidth',
  ChildrenImageSharpFluidPresentationHeight = 'childrenImageSharp___fluid___presentationHeight',
  ChildrenImageSharpSizesBase64 = 'childrenImageSharp___sizes___base64',
  ChildrenImageSharpSizesTracedSvg = 'childrenImageSharp___sizes___tracedSVG',
  ChildrenImageSharpSizesAspectRatio = 'childrenImageSharp___sizes___aspectRatio',
  ChildrenImageSharpSizesSrc = 'childrenImageSharp___sizes___src',
  ChildrenImageSharpSizesSrcSet = 'childrenImageSharp___sizes___srcSet',
  ChildrenImageSharpSizesSrcWebp = 'childrenImageSharp___sizes___srcWebp',
  ChildrenImageSharpSizesSrcSetWebp = 'childrenImageSharp___sizes___srcSetWebp',
  ChildrenImageSharpSizesSizes = 'childrenImageSharp___sizes___sizes',
  ChildrenImageSharpSizesOriginalImg = 'childrenImageSharp___sizes___originalImg',
  ChildrenImageSharpSizesOriginalName = 'childrenImageSharp___sizes___originalName',
  ChildrenImageSharpSizesPresentationWidth = 'childrenImageSharp___sizes___presentationWidth',
  ChildrenImageSharpSizesPresentationHeight = 'childrenImageSharp___sizes___presentationHeight',
  ChildrenImageSharpGatsbyImageData = 'childrenImageSharp___gatsbyImageData',
  ChildrenImageSharpOriginalWidth = 'childrenImageSharp___original___width',
  ChildrenImageSharpOriginalHeight = 'childrenImageSharp___original___height',
  ChildrenImageSharpOriginalSrc = 'childrenImageSharp___original___src',
  ChildrenImageSharpResizeSrc = 'childrenImageSharp___resize___src',
  ChildrenImageSharpResizeTracedSvg = 'childrenImageSharp___resize___tracedSVG',
  ChildrenImageSharpResizeWidth = 'childrenImageSharp___resize___width',
  ChildrenImageSharpResizeHeight = 'childrenImageSharp___resize___height',
  ChildrenImageSharpResizeAspectRatio = 'childrenImageSharp___resize___aspectRatio',
  ChildrenImageSharpResizeOriginalName = 'childrenImageSharp___resize___originalName',
  ChildrenImageSharpId = 'childrenImageSharp___id',
  ChildrenImageSharpParentId = 'childrenImageSharp___parent___id',
  ChildrenImageSharpParentParentId = 'childrenImageSharp___parent___parent___id',
  ChildrenImageSharpParentParentChildren = 'childrenImageSharp___parent___parent___children',
  ChildrenImageSharpParentChildren = 'childrenImageSharp___parent___children',
  ChildrenImageSharpParentChildrenId = 'childrenImageSharp___parent___children___id',
  ChildrenImageSharpParentChildrenChildren = 'childrenImageSharp___parent___children___children',
  ChildrenImageSharpParentInternalContent = 'childrenImageSharp___parent___internal___content',
  ChildrenImageSharpParentInternalContentDigest = 'childrenImageSharp___parent___internal___contentDigest',
  ChildrenImageSharpParentInternalDescription = 'childrenImageSharp___parent___internal___description',
  ChildrenImageSharpParentInternalFieldOwners = 'childrenImageSharp___parent___internal___fieldOwners',
  ChildrenImageSharpParentInternalIgnoreType = 'childrenImageSharp___parent___internal___ignoreType',
  ChildrenImageSharpParentInternalMediaType = 'childrenImageSharp___parent___internal___mediaType',
  ChildrenImageSharpParentInternalOwner = 'childrenImageSharp___parent___internal___owner',
  ChildrenImageSharpParentInternalType = 'childrenImageSharp___parent___internal___type',
  ChildrenImageSharpChildren = 'childrenImageSharp___children',
  ChildrenImageSharpChildrenId = 'childrenImageSharp___children___id',
  ChildrenImageSharpChildrenParentId = 'childrenImageSharp___children___parent___id',
  ChildrenImageSharpChildrenParentChildren = 'childrenImageSharp___children___parent___children',
  ChildrenImageSharpChildrenChildren = 'childrenImageSharp___children___children',
  ChildrenImageSharpChildrenChildrenId = 'childrenImageSharp___children___children___id',
  ChildrenImageSharpChildrenChildrenChildren = 'childrenImageSharp___children___children___children',
  ChildrenImageSharpChildrenInternalContent = 'childrenImageSharp___children___internal___content',
  ChildrenImageSharpChildrenInternalContentDigest = 'childrenImageSharp___children___internal___contentDigest',
  ChildrenImageSharpChildrenInternalDescription = 'childrenImageSharp___children___internal___description',
  ChildrenImageSharpChildrenInternalFieldOwners = 'childrenImageSharp___children___internal___fieldOwners',
  ChildrenImageSharpChildrenInternalIgnoreType = 'childrenImageSharp___children___internal___ignoreType',
  ChildrenImageSharpChildrenInternalMediaType = 'childrenImageSharp___children___internal___mediaType',
  ChildrenImageSharpChildrenInternalOwner = 'childrenImageSharp___children___internal___owner',
  ChildrenImageSharpChildrenInternalType = 'childrenImageSharp___children___internal___type',
  ChildrenImageSharpInternalContent = 'childrenImageSharp___internal___content',
  ChildrenImageSharpInternalContentDigest = 'childrenImageSharp___internal___contentDigest',
  ChildrenImageSharpInternalDescription = 'childrenImageSharp___internal___description',
  ChildrenImageSharpInternalFieldOwners = 'childrenImageSharp___internal___fieldOwners',
  ChildrenImageSharpInternalIgnoreType = 'childrenImageSharp___internal___ignoreType',
  ChildrenImageSharpInternalMediaType = 'childrenImageSharp___internal___mediaType',
  ChildrenImageSharpInternalOwner = 'childrenImageSharp___internal___owner',
  ChildrenImageSharpInternalType = 'childrenImageSharp___internal___type',
  ChildImageSharpFixedBase64 = 'childImageSharp___fixed___base64',
  ChildImageSharpFixedTracedSvg = 'childImageSharp___fixed___tracedSVG',
  ChildImageSharpFixedAspectRatio = 'childImageSharp___fixed___aspectRatio',
  ChildImageSharpFixedWidth = 'childImageSharp___fixed___width',
  ChildImageSharpFixedHeight = 'childImageSharp___fixed___height',
  ChildImageSharpFixedSrc = 'childImageSharp___fixed___src',
  ChildImageSharpFixedSrcSet = 'childImageSharp___fixed___srcSet',
  ChildImageSharpFixedSrcWebp = 'childImageSharp___fixed___srcWebp',
  ChildImageSharpFixedSrcSetWebp = 'childImageSharp___fixed___srcSetWebp',
  ChildImageSharpFixedOriginalName = 'childImageSharp___fixed___originalName',
  ChildImageSharpResolutionsBase64 = 'childImageSharp___resolutions___base64',
  ChildImageSharpResolutionsTracedSvg = 'childImageSharp___resolutions___tracedSVG',
  ChildImageSharpResolutionsAspectRatio = 'childImageSharp___resolutions___aspectRatio',
  ChildImageSharpResolutionsWidth = 'childImageSharp___resolutions___width',
  ChildImageSharpResolutionsHeight = 'childImageSharp___resolutions___height',
  ChildImageSharpResolutionsSrc = 'childImageSharp___resolutions___src',
  ChildImageSharpResolutionsSrcSet = 'childImageSharp___resolutions___srcSet',
  ChildImageSharpResolutionsSrcWebp = 'childImageSharp___resolutions___srcWebp',
  ChildImageSharpResolutionsSrcSetWebp = 'childImageSharp___resolutions___srcSetWebp',
  ChildImageSharpResolutionsOriginalName = 'childImageSharp___resolutions___originalName',
  ChildImageSharpFluidBase64 = 'childImageSharp___fluid___base64',
  ChildImageSharpFluidTracedSvg = 'childImageSharp___fluid___tracedSVG',
  ChildImageSharpFluidAspectRatio = 'childImageSharp___fluid___aspectRatio',
  ChildImageSharpFluidSrc = 'childImageSharp___fluid___src',
  ChildImageSharpFluidSrcSet = 'childImageSharp___fluid___srcSet',
  ChildImageSharpFluidSrcWebp = 'childImageSharp___fluid___srcWebp',
  ChildImageSharpFluidSrcSetWebp = 'childImageSharp___fluid___srcSetWebp',
  ChildImageSharpFluidSizes = 'childImageSharp___fluid___sizes',
  ChildImageSharpFluidOriginalImg = 'childImageSharp___fluid___originalImg',
  ChildImageSharpFluidOriginalName = 'childImageSharp___fluid___originalName',
  ChildImageSharpFluidPresentationWidth = 'childImageSharp___fluid___presentationWidth',
  ChildImageSharpFluidPresentationHeight = 'childImageSharp___fluid___presentationHeight',
  ChildImageSharpSizesBase64 = 'childImageSharp___sizes___base64',
  ChildImageSharpSizesTracedSvg = 'childImageSharp___sizes___tracedSVG',
  ChildImageSharpSizesAspectRatio = 'childImageSharp___sizes___aspectRatio',
  ChildImageSharpSizesSrc = 'childImageSharp___sizes___src',
  ChildImageSharpSizesSrcSet = 'childImageSharp___sizes___srcSet',
  ChildImageSharpSizesSrcWebp = 'childImageSharp___sizes___srcWebp',
  ChildImageSharpSizesSrcSetWebp = 'childImageSharp___sizes___srcSetWebp',
  ChildImageSharpSizesSizes = 'childImageSharp___sizes___sizes',
  ChildImageSharpSizesOriginalImg = 'childImageSharp___sizes___originalImg',
  ChildImageSharpSizesOriginalName = 'childImageSharp___sizes___originalName',
  ChildImageSharpSizesPresentationWidth = 'childImageSharp___sizes___presentationWidth',
  ChildImageSharpSizesPresentationHeight = 'childImageSharp___sizes___presentationHeight',
  ChildImageSharpGatsbyImageData = 'childImageSharp___gatsbyImageData',
  ChildImageSharpOriginalWidth = 'childImageSharp___original___width',
  ChildImageSharpOriginalHeight = 'childImageSharp___original___height',
  ChildImageSharpOriginalSrc = 'childImageSharp___original___src',
  ChildImageSharpResizeSrc = 'childImageSharp___resize___src',
  ChildImageSharpResizeTracedSvg = 'childImageSharp___resize___tracedSVG',
  ChildImageSharpResizeWidth = 'childImageSharp___resize___width',
  ChildImageSharpResizeHeight = 'childImageSharp___resize___height',
  ChildImageSharpResizeAspectRatio = 'childImageSharp___resize___aspectRatio',
  ChildImageSharpResizeOriginalName = 'childImageSharp___resize___originalName',
  ChildImageSharpId = 'childImageSharp___id',
  ChildImageSharpParentId = 'childImageSharp___parent___id',
  ChildImageSharpParentParentId = 'childImageSharp___parent___parent___id',
  ChildImageSharpParentParentChildren = 'childImageSharp___parent___parent___children',
  ChildImageSharpParentChildren = 'childImageSharp___parent___children',
  ChildImageSharpParentChildrenId = 'childImageSharp___parent___children___id',
  ChildImageSharpParentChildrenChildren = 'childImageSharp___parent___children___children',
  ChildImageSharpParentInternalContent = 'childImageSharp___parent___internal___content',
  ChildImageSharpParentInternalContentDigest = 'childImageSharp___parent___internal___contentDigest',
  ChildImageSharpParentInternalDescription = 'childImageSharp___parent___internal___description',
  ChildImageSharpParentInternalFieldOwners = 'childImageSharp___parent___internal___fieldOwners',
  ChildImageSharpParentInternalIgnoreType = 'childImageSharp___parent___internal___ignoreType',
  ChildImageSharpParentInternalMediaType = 'childImageSharp___parent___internal___mediaType',
  ChildImageSharpParentInternalOwner = 'childImageSharp___parent___internal___owner',
  ChildImageSharpParentInternalType = 'childImageSharp___parent___internal___type',
  ChildImageSharpChildren = 'childImageSharp___children',
  ChildImageSharpChildrenId = 'childImageSharp___children___id',
  ChildImageSharpChildrenParentId = 'childImageSharp___children___parent___id',
  ChildImageSharpChildrenParentChildren = 'childImageSharp___children___parent___children',
  ChildImageSharpChildrenChildren = 'childImageSharp___children___children',
  ChildImageSharpChildrenChildrenId = 'childImageSharp___children___children___id',
  ChildImageSharpChildrenChildrenChildren = 'childImageSharp___children___children___children',
  ChildImageSharpChildrenInternalContent = 'childImageSharp___children___internal___content',
  ChildImageSharpChildrenInternalContentDigest = 'childImageSharp___children___internal___contentDigest',
  ChildImageSharpChildrenInternalDescription = 'childImageSharp___children___internal___description',
  ChildImageSharpChildrenInternalFieldOwners = 'childImageSharp___children___internal___fieldOwners',
  ChildImageSharpChildrenInternalIgnoreType = 'childImageSharp___children___internal___ignoreType',
  ChildImageSharpChildrenInternalMediaType = 'childImageSharp___children___internal___mediaType',
  ChildImageSharpChildrenInternalOwner = 'childImageSharp___children___internal___owner',
  ChildImageSharpChildrenInternalType = 'childImageSharp___children___internal___type',
  ChildImageSharpInternalContent = 'childImageSharp___internal___content',
  ChildImageSharpInternalContentDigest = 'childImageSharp___internal___contentDigest',
  ChildImageSharpInternalDescription = 'childImageSharp___internal___description',
  ChildImageSharpInternalFieldOwners = 'childImageSharp___internal___fieldOwners',
  ChildImageSharpInternalIgnoreType = 'childImageSharp___internal___ignoreType',
  ChildImageSharpInternalMediaType = 'childImageSharp___internal___mediaType',
  ChildImageSharpInternalOwner = 'childImageSharp___internal___owner',
  ChildImageSharpInternalType = 'childImageSharp___internal___type',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type FileGroupConnection = {
  __typename?: 'FileGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export enum ImageCropFocus {
  Center = 'CENTER',
  North = 'NORTH',
  Northeast = 'NORTHEAST',
  East = 'EAST',
  Southeast = 'SOUTHEAST',
  South = 'SOUTH',
  Southwest = 'SOUTHWEST',
  West = 'WEST',
  Northwest = 'NORTHWEST',
  Entropy = 'ENTROPY',
  Attention = 'ATTENTION'
}

export enum ImageFit {
  Cover = 'COVER',
  Contain = 'CONTAIN',
  Fill = 'FILL',
  Inside = 'INSIDE',
  Outside = 'OUTSIDE'
}

export enum ImageFormat {
  NoChange = 'NO_CHANGE',
  Auto = 'AUTO',
  Jpg = 'JPG',
  Png = 'PNG',
  Webp = 'WEBP',
  Avif = 'AVIF'
}

export enum ImageLayout {
  Fixed = 'FIXED',
  FullWidth = 'FULL_WIDTH',
  Constrained = 'CONSTRAINED'
}

export enum ImagePlaceholder {
  DominantColor = 'DOMINANT_COLOR',
  TracedSvg = 'TRACED_SVG',
  Blurred = 'BLURRED',
  None = 'NONE'
}

export type ImageSharp = Node & {
  __typename?: 'ImageSharp';
  fixed?: Maybe<ImageSharpFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ImageSharpResolutions>;
  fluid?: Maybe<ImageSharpFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ImageSharpSizes>;
  gatsbyImageData: Scalars['JSON'];
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpGatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  placeholder?: Maybe<ImagePlaceholder>;
  blurredOptions?: Maybe<BlurredOptions>;
  tracedSVGOptions?: Maybe<Potrace>;
  formats?: Maybe<Array<Maybe<ImageFormat>>>;
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>;
  breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sizes?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['Int']>;
  jpgOptions?: Maybe<JpgOptions>;
  pngOptions?: Maybe<PngOptions>;
  webpOptions?: Maybe<WebPOptions>;
  avifOptions?: Maybe<AvifOptions>;
  transformOptions?: Maybe<TransformOptions>;
  backgroundColor?: Maybe<Scalars['String']>;
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpConnection = {
  __typename?: 'ImageSharpConnection';
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  __typename?: 'ImageSharpEdge';
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export enum ImageSharpFieldsEnum {
  FixedBase64 = 'fixed___base64',
  FixedTracedSvg = 'fixed___tracedSVG',
  FixedAspectRatio = 'fixed___aspectRatio',
  FixedWidth = 'fixed___width',
  FixedHeight = 'fixed___height',
  FixedSrc = 'fixed___src',
  FixedSrcSet = 'fixed___srcSet',
  FixedSrcWebp = 'fixed___srcWebp',
  FixedSrcSetWebp = 'fixed___srcSetWebp',
  FixedOriginalName = 'fixed___originalName',
  ResolutionsBase64 = 'resolutions___base64',
  ResolutionsTracedSvg = 'resolutions___tracedSVG',
  ResolutionsAspectRatio = 'resolutions___aspectRatio',
  ResolutionsWidth = 'resolutions___width',
  ResolutionsHeight = 'resolutions___height',
  ResolutionsSrc = 'resolutions___src',
  ResolutionsSrcSet = 'resolutions___srcSet',
  ResolutionsSrcWebp = 'resolutions___srcWebp',
  ResolutionsSrcSetWebp = 'resolutions___srcSetWebp',
  ResolutionsOriginalName = 'resolutions___originalName',
  FluidBase64 = 'fluid___base64',
  FluidTracedSvg = 'fluid___tracedSVG',
  FluidAspectRatio = 'fluid___aspectRatio',
  FluidSrc = 'fluid___src',
  FluidSrcSet = 'fluid___srcSet',
  FluidSrcWebp = 'fluid___srcWebp',
  FluidSrcSetWebp = 'fluid___srcSetWebp',
  FluidSizes = 'fluid___sizes',
  FluidOriginalImg = 'fluid___originalImg',
  FluidOriginalName = 'fluid___originalName',
  FluidPresentationWidth = 'fluid___presentationWidth',
  FluidPresentationHeight = 'fluid___presentationHeight',
  SizesBase64 = 'sizes___base64',
  SizesTracedSvg = 'sizes___tracedSVG',
  SizesAspectRatio = 'sizes___aspectRatio',
  SizesSrc = 'sizes___src',
  SizesSrcSet = 'sizes___srcSet',
  SizesSrcWebp = 'sizes___srcWebp',
  SizesSrcSetWebp = 'sizes___srcSetWebp',
  SizesSizes = 'sizes___sizes',
  SizesOriginalImg = 'sizes___originalImg',
  SizesOriginalName = 'sizes___originalName',
  SizesPresentationWidth = 'sizes___presentationWidth',
  SizesPresentationHeight = 'sizes___presentationHeight',
  GatsbyImageData = 'gatsbyImageData',
  OriginalWidth = 'original___width',
  OriginalHeight = 'original___height',
  OriginalSrc = 'original___src',
  ResizeSrc = 'resize___src',
  ResizeTracedSvg = 'resize___tracedSVG',
  ResizeWidth = 'resize___width',
  ResizeHeight = 'resize___height',
  ResizeAspectRatio = 'resize___aspectRatio',
  ResizeOriginalName = 'resize___originalName',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: Maybe<ImageSharpFilterInput>;
};

export type ImageSharpFixed = {
  __typename?: 'ImageSharpFixed';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluid = {
  __typename?: 'ImageSharpFluid';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  __typename?: 'ImageSharpGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginal = {
  __typename?: 'ImageSharpOriginal';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResize = {
  __typename?: 'ImageSharpResize';
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResolutions = {
  __typename?: 'ImageSharpResolutions';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpSizes = {
  __typename?: 'ImageSharpSizes';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Internal = {
  __typename?: 'Internal';
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type JpgOptions = {
  quality?: Maybe<Scalars['Int']>;
  progressive?: Maybe<Scalars['Boolean']>;
};


export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type PngOptions = {
  quality?: Maybe<Scalars['Int']>;
  compressionSpeed?: Maybe<Scalars['Int']>;
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars['Float']>;
  alphaMax?: Maybe<Scalars['Float']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
};

export enum PotraceTurnPolicy {
  TurnpolicyBlack = 'TURNPOLICY_BLACK',
  TurnpolicyWhite = 'TURNPOLICY_WHITE',
  TurnpolicyLeft = 'TURNPOLICY_LEFT',
  TurnpolicyRight = 'TURNPOLICY_RIGHT',
  TurnpolicyMinority = 'TURNPOLICY_MINORITY',
  TurnpolicyMajority = 'TURNPOLICY_MAJORITY'
}

export type Query = {
  __typename?: 'Query';
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  strapiArticleContent?: Maybe<StrapiArticleContent>;
  allStrapiArticleContent: StrapiArticleContentConnection;
  strapiGlobal?: Maybe<StrapiGlobal>;
  allStrapiGlobal: StrapiGlobalConnection;
  strapiHomepage?: Maybe<StrapiHomepage>;
  allStrapiHomepage: StrapiHomepageConnection;
  strapiWriter?: Maybe<StrapiWriter>;
  allStrapiWriter: StrapiWriterConnection;
  strapiCategory?: Maybe<StrapiCategory>;
  allStrapiCategory: StrapiCategoryConnection;
  strapiArticle?: Maybe<StrapiArticle>;
  allStrapiArticle: StrapiArticleConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryStrapiArticleContentArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllStrapiArticleContentArgs = {
  filter?: Maybe<StrapiArticleContentFilterInput>;
  sort?: Maybe<StrapiArticleContentSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryStrapiGlobalArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  siteName?: Maybe<StringQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  defaultSeo?: Maybe<StrapiGlobalDefaultSeoFilterInput>;
  favicon?: Maybe<FileFilterInput>;
  strapiId?: Maybe<IntQueryOperatorInput>;
};


export type QueryAllStrapiGlobalArgs = {
  filter?: Maybe<StrapiGlobalFilterInput>;
  sort?: Maybe<StrapiGlobalSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryStrapiHomepageArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  seo?: Maybe<StrapiHomepageSeoFilterInput>;
  hero?: Maybe<StrapiHomepageHeroFilterInput>;
  strapiId?: Maybe<IntQueryOperatorInput>;
};


export type QueryAllStrapiHomepageArgs = {
  filter?: Maybe<StrapiHomepageFilterInput>;
  sort?: Maybe<StrapiHomepageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryStrapiWriterArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  email?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  picture?: Maybe<FileFilterInput>;
  articles?: Maybe<StrapiWriterArticlesFilterListInput>;
  strapiId?: Maybe<IntQueryOperatorInput>;
};


export type QueryAllStrapiWriterArgs = {
  filter?: Maybe<StrapiWriterFilterInput>;
  sort?: Maybe<StrapiWriterSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryStrapiCategoryArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  articles?: Maybe<StrapiCategoryArticlesFilterListInput>;
  strapiId?: Maybe<IntQueryOperatorInput>;
};


export type QueryAllStrapiCategoryArgs = {
  filter?: Maybe<StrapiCategoryFilterInput>;
  sort?: Maybe<StrapiCategorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryStrapiArticleArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  publishedAt?: Maybe<DateQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  category?: Maybe<StrapiArticleCategoryFilterInput>;
  author?: Maybe<StrapiArticleAuthorFilterInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  image?: Maybe<FileFilterInput>;
  strapiId?: Maybe<IntQueryOperatorInput>;
  childrenStrapiArticleContent?: Maybe<StrapiArticleContentFilterListInput>;
  childStrapiArticleContent?: Maybe<StrapiArticleContentFilterInput>;
};


export type QueryAllStrapiArticleArgs = {
  filter?: Maybe<StrapiArticleFilterInput>;
  sort?: Maybe<StrapiArticleSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Site = Node & {
  __typename?: 'Site';
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  __typename?: 'SiteBuildMetadata';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  __typename?: 'SiteBuildMetadataConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  __typename?: 'SiteBuildMetadataEdge';
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export enum SiteBuildMetadataFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  BuildTime = 'buildTime'
}

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  __typename?: 'SiteBuildMetadataGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  __typename?: 'SiteConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  __typename?: 'SiteEdge';
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export enum SiteFieldsEnum {
  BuildTime = 'buildTime',
  SiteMetadataTitle = 'siteMetadata___title',
  SiteMetadataDescription = 'siteMetadata___description',
  SiteMetadataAuthor = 'siteMetadata___author',
  Port = 'port',
  Host = 'host',
  Polyfill = 'polyfill',
  PathPrefix = 'pathPrefix',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteGroupConnection = {
  __typename?: 'SiteGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
  __typename?: 'SitePage';
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
  __typename?: 'SitePageConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  __typename?: 'SitePageContext';
  slug?: Maybe<Scalars['String']>;
};

export type SitePageContextFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
};

export type SitePageEdge = {
  __typename?: 'SitePageEdge';
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
  Path = 'path',
  Component = 'component',
  InternalComponentName = 'internalComponentName',
  ComponentChunkName = 'componentChunkName',
  MatchPath = 'matchPath',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  IsCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  ContextSlug = 'context___slug',
  PluginCreatorId = 'pluginCreator___id',
  PluginCreatorParentId = 'pluginCreator___parent___id',
  PluginCreatorParentParentId = 'pluginCreator___parent___parent___id',
  PluginCreatorParentParentChildren = 'pluginCreator___parent___parent___children',
  PluginCreatorParentChildren = 'pluginCreator___parent___children',
  PluginCreatorParentChildrenId = 'pluginCreator___parent___children___id',
  PluginCreatorParentChildrenChildren = 'pluginCreator___parent___children___children',
  PluginCreatorParentInternalContent = 'pluginCreator___parent___internal___content',
  PluginCreatorParentInternalContentDigest = 'pluginCreator___parent___internal___contentDigest',
  PluginCreatorParentInternalDescription = 'pluginCreator___parent___internal___description',
  PluginCreatorParentInternalFieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  PluginCreatorParentInternalIgnoreType = 'pluginCreator___parent___internal___ignoreType',
  PluginCreatorParentInternalMediaType = 'pluginCreator___parent___internal___mediaType',
  PluginCreatorParentInternalOwner = 'pluginCreator___parent___internal___owner',
  PluginCreatorParentInternalType = 'pluginCreator___parent___internal___type',
  PluginCreatorChildren = 'pluginCreator___children',
  PluginCreatorChildrenId = 'pluginCreator___children___id',
  PluginCreatorChildrenParentId = 'pluginCreator___children___parent___id',
  PluginCreatorChildrenParentChildren = 'pluginCreator___children___parent___children',
  PluginCreatorChildrenChildren = 'pluginCreator___children___children',
  PluginCreatorChildrenChildrenId = 'pluginCreator___children___children___id',
  PluginCreatorChildrenChildrenChildren = 'pluginCreator___children___children___children',
  PluginCreatorChildrenInternalContent = 'pluginCreator___children___internal___content',
  PluginCreatorChildrenInternalContentDigest = 'pluginCreator___children___internal___contentDigest',
  PluginCreatorChildrenInternalDescription = 'pluginCreator___children___internal___description',
  PluginCreatorChildrenInternalFieldOwners = 'pluginCreator___children___internal___fieldOwners',
  PluginCreatorChildrenInternalIgnoreType = 'pluginCreator___children___internal___ignoreType',
  PluginCreatorChildrenInternalMediaType = 'pluginCreator___children___internal___mediaType',
  PluginCreatorChildrenInternalOwner = 'pluginCreator___children___internal___owner',
  PluginCreatorChildrenInternalType = 'pluginCreator___children___internal___type',
  PluginCreatorInternalContent = 'pluginCreator___internal___content',
  PluginCreatorInternalContentDigest = 'pluginCreator___internal___contentDigest',
  PluginCreatorInternalDescription = 'pluginCreator___internal___description',
  PluginCreatorInternalFieldOwners = 'pluginCreator___internal___fieldOwners',
  PluginCreatorInternalIgnoreType = 'pluginCreator___internal___ignoreType',
  PluginCreatorInternalMediaType = 'pluginCreator___internal___mediaType',
  PluginCreatorInternalOwner = 'pluginCreator___internal___owner',
  PluginCreatorInternalType = 'pluginCreator___internal___type',
  PluginCreatorResolve = 'pluginCreator___resolve',
  PluginCreatorName = 'pluginCreator___name',
  PluginCreatorVersion = 'pluginCreator___version',
  PluginCreatorPluginOptionsApiUrl = 'pluginCreator___pluginOptions___apiURL',
  PluginCreatorPluginOptionsQueryLimit = 'pluginCreator___pluginOptions___queryLimit',
  PluginCreatorPluginOptionsContentTypes = 'pluginCreator___pluginOptions___contentTypes',
  PluginCreatorPluginOptionsSingleTypes = 'pluginCreator___pluginOptions___singleTypes',
  PluginCreatorPluginOptionsIsTsx = 'pluginCreator___pluginOptions___isTSX',
  PluginCreatorPluginOptionsJsxPragma = 'pluginCreator___pluginOptions___jsxPragma',
  PluginCreatorPluginOptionsAllExtensions = 'pluginCreator___pluginOptions___allExtensions',
  PluginCreatorPluginOptionsName = 'pluginCreator___pluginOptions___name',
  PluginCreatorPluginOptionsPath = 'pluginCreator___pluginOptions___path',
  PluginCreatorPluginOptionsBase64Width = 'pluginCreator___pluginOptions___base64Width',
  PluginCreatorPluginOptionsStripMetadata = 'pluginCreator___pluginOptions___stripMetadata',
  PluginCreatorPluginOptionsDefaultQuality = 'pluginCreator___pluginOptions___defaultQuality',
  PluginCreatorPluginOptionsFailOnError = 'pluginCreator___pluginOptions___failOnError',
  PluginCreatorPluginOptionsShortName = 'pluginCreator___pluginOptions___short_name',
  PluginCreatorPluginOptionsStartUrl = 'pluginCreator___pluginOptions___start_url',
  PluginCreatorPluginOptionsDisplay = 'pluginCreator___pluginOptions___display',
  PluginCreatorPluginOptionsIcon = 'pluginCreator___pluginOptions___icon',
  PluginCreatorPluginOptionsLegacy = 'pluginCreator___pluginOptions___legacy',
  PluginCreatorPluginOptionsThemeColorInHead = 'pluginCreator___pluginOptions___theme_color_in_head',
  PluginCreatorPluginOptionsCacheBustingMode = 'pluginCreator___pluginOptions___cache_busting_mode',
  PluginCreatorPluginOptionsCrossOrigin = 'pluginCreator___pluginOptions___crossOrigin',
  PluginCreatorPluginOptionsIncludeFavicon = 'pluginCreator___pluginOptions___include_favicon',
  PluginCreatorPluginOptionsCacheDigest = 'pluginCreator___pluginOptions___cacheDigest',
  PluginCreatorPluginOptionsFonts = 'pluginCreator___pluginOptions___fonts',
  PluginCreatorPluginOptionsIsResettingCss = 'pluginCreator___pluginOptions___isResettingCSS',
  PluginCreatorPluginOptionsIsUsingColorMode = 'pluginCreator___pluginOptions___isUsingColorMode',
  PluginCreatorPluginOptionsPortalZIndex = 'pluginCreator___pluginOptions___portalZIndex',
  PluginCreatorPluginOptionsHeight = 'pluginCreator___pluginOptions___height',
  PluginCreatorPluginOptionsPrependToBody = 'pluginCreator___pluginOptions___prependToBody',
  PluginCreatorPluginOptionsColor = 'pluginCreator___pluginOptions___color',
  PluginCreatorPluginOptionsPathCheck = 'pluginCreator___pluginOptions___pathCheck',
  PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
  PluginCreatorBrowserApIs = 'pluginCreator___browserAPIs',
  PluginCreatorSsrApIs = 'pluginCreator___ssrAPIs',
  PluginCreatorPluginFilepath = 'pluginCreator___pluginFilepath',
  PluginCreatorPackageJsonName = 'pluginCreator___packageJson___name',
  PluginCreatorPackageJsonDescription = 'pluginCreator___packageJson___description',
  PluginCreatorPackageJsonVersion = 'pluginCreator___packageJson___version',
  PluginCreatorPackageJsonMain = 'pluginCreator___packageJson___main',
  PluginCreatorPackageJsonLicense = 'pluginCreator___packageJson___license',
  PluginCreatorPackageJsonDependencies = 'pluginCreator___packageJson___dependencies',
  PluginCreatorPackageJsonDependenciesName = 'pluginCreator___packageJson___dependencies___name',
  PluginCreatorPackageJsonDependenciesVersion = 'pluginCreator___packageJson___dependencies___version',
  PluginCreatorPackageJsonDevDependencies = 'pluginCreator___packageJson___devDependencies',
  PluginCreatorPackageJsonDevDependenciesName = 'pluginCreator___packageJson___devDependencies___name',
  PluginCreatorPackageJsonDevDependenciesVersion = 'pluginCreator___packageJson___devDependencies___version',
  PluginCreatorPackageJsonPeerDependencies = 'pluginCreator___packageJson___peerDependencies',
  PluginCreatorPackageJsonPeerDependenciesName = 'pluginCreator___packageJson___peerDependencies___name',
  PluginCreatorPackageJsonPeerDependenciesVersion = 'pluginCreator___packageJson___peerDependencies___version',
  PluginCreatorPackageJsonKeywords = 'pluginCreator___packageJson___keywords',
  PluginCreatorId = 'pluginCreatorId',
  ComponentPath = 'componentPath'
}

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  __typename?: 'SitePageGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  __typename?: 'SitePlugin';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  __typename?: 'SitePluginConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  __typename?: 'SitePluginEdge';
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Resolve = 'resolve',
  Name = 'name',
  Version = 'version',
  PluginOptionsApiUrl = 'pluginOptions___apiURL',
  PluginOptionsQueryLimit = 'pluginOptions___queryLimit',
  PluginOptionsContentTypes = 'pluginOptions___contentTypes',
  PluginOptionsSingleTypes = 'pluginOptions___singleTypes',
  PluginOptionsIsTsx = 'pluginOptions___isTSX',
  PluginOptionsJsxPragma = 'pluginOptions___jsxPragma',
  PluginOptionsAllExtensions = 'pluginOptions___allExtensions',
  PluginOptionsName = 'pluginOptions___name',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsBase64Width = 'pluginOptions___base64Width',
  PluginOptionsStripMetadata = 'pluginOptions___stripMetadata',
  PluginOptionsDefaultQuality = 'pluginOptions___defaultQuality',
  PluginOptionsFailOnError = 'pluginOptions___failOnError',
  PluginOptionsShortName = 'pluginOptions___short_name',
  PluginOptionsStartUrl = 'pluginOptions___start_url',
  PluginOptionsDisplay = 'pluginOptions___display',
  PluginOptionsIcon = 'pluginOptions___icon',
  PluginOptionsLegacy = 'pluginOptions___legacy',
  PluginOptionsThemeColorInHead = 'pluginOptions___theme_color_in_head',
  PluginOptionsCacheBustingMode = 'pluginOptions___cache_busting_mode',
  PluginOptionsCrossOrigin = 'pluginOptions___crossOrigin',
  PluginOptionsIncludeFavicon = 'pluginOptions___include_favicon',
  PluginOptionsCacheDigest = 'pluginOptions___cacheDigest',
  PluginOptionsFonts = 'pluginOptions___fonts',
  PluginOptionsIsResettingCss = 'pluginOptions___isResettingCSS',
  PluginOptionsIsUsingColorMode = 'pluginOptions___isUsingColorMode',
  PluginOptionsPortalZIndex = 'pluginOptions___portalZIndex',
  PluginOptionsHeight = 'pluginOptions___height',
  PluginOptionsPrependToBody = 'pluginOptions___prependToBody',
  PluginOptionsColor = 'pluginOptions___color',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  NodeApIs = 'nodeAPIs',
  BrowserApIs = 'browserAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJsonName = 'packageJson___name',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonVersion = 'packageJson___version',
  PackageJsonMain = 'packageJson___main',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDependenciesName = 'packageJson___dependencies___name',
  PackageJsonDependenciesVersion = 'packageJson___dependencies___version',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonDevDependenciesName = 'packageJson___devDependencies___name',
  PackageJsonDevDependenciesVersion = 'packageJson___devDependencies___version',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonPeerDependenciesName = 'packageJson___peerDependencies___name',
  PackageJsonPeerDependenciesVersion = 'packageJson___peerDependencies___version',
  PackageJsonKeywords = 'packageJson___keywords'
}

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  __typename?: 'SitePluginGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  __typename?: 'SitePluginPackageJson';
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  __typename?: 'SitePluginPackageJsonDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  __typename?: 'SitePluginPackageJsonDevDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  __typename?: 'SitePluginPackageJsonPeerDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  __typename?: 'SitePluginPluginOptions';
  apiURL?: Maybe<Scalars['String']>;
  queryLimit?: Maybe<Scalars['Int']>;
  contentTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  singleTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  isTSX?: Maybe<Scalars['Boolean']>;
  jsxPragma?: Maybe<Scalars['String']>;
  allExtensions?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  base64Width?: Maybe<Scalars['Int']>;
  stripMetadata?: Maybe<Scalars['Boolean']>;
  defaultQuality?: Maybe<Scalars['Int']>;
  failOnError?: Maybe<Scalars['Boolean']>;
  short_name?: Maybe<Scalars['String']>;
  start_url?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  legacy?: Maybe<Scalars['Boolean']>;
  theme_color_in_head?: Maybe<Scalars['Boolean']>;
  cache_busting_mode?: Maybe<Scalars['String']>;
  crossOrigin?: Maybe<Scalars['String']>;
  include_favicon?: Maybe<Scalars['Boolean']>;
  cacheDigest?: Maybe<Scalars['String']>;
  fonts?: Maybe<Array<Maybe<Scalars['String']>>>;
  isResettingCSS?: Maybe<Scalars['Boolean']>;
  isUsingColorMode?: Maybe<Scalars['Boolean']>;
  portalZIndex?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  prependToBody?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsFilterInput = {
  apiURL?: Maybe<StringQueryOperatorInput>;
  queryLimit?: Maybe<IntQueryOperatorInput>;
  contentTypes?: Maybe<StringQueryOperatorInput>;
  singleTypes?: Maybe<StringQueryOperatorInput>;
  isTSX?: Maybe<BooleanQueryOperatorInput>;
  jsxPragma?: Maybe<StringQueryOperatorInput>;
  allExtensions?: Maybe<BooleanQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  base64Width?: Maybe<IntQueryOperatorInput>;
  stripMetadata?: Maybe<BooleanQueryOperatorInput>;
  defaultQuality?: Maybe<IntQueryOperatorInput>;
  failOnError?: Maybe<BooleanQueryOperatorInput>;
  short_name?: Maybe<StringQueryOperatorInput>;
  start_url?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  legacy?: Maybe<BooleanQueryOperatorInput>;
  theme_color_in_head?: Maybe<BooleanQueryOperatorInput>;
  cache_busting_mode?: Maybe<StringQueryOperatorInput>;
  crossOrigin?: Maybe<StringQueryOperatorInput>;
  include_favicon?: Maybe<BooleanQueryOperatorInput>;
  cacheDigest?: Maybe<StringQueryOperatorInput>;
  fonts?: Maybe<StringQueryOperatorInput>;
  isResettingCSS?: Maybe<BooleanQueryOperatorInput>;
  isUsingColorMode?: Maybe<BooleanQueryOperatorInput>;
  portalZIndex?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  prependToBody?: Maybe<BooleanQueryOperatorInput>;
  color?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  __typename?: 'SiteSiteMetadata';
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StrapiArticle = Node & {
  __typename?: 'StrapiArticle';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['Date']>;
  status?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  category?: Maybe<StrapiArticleCategory>;
  author?: Maybe<StrapiArticleAuthor>;
  keywords?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Date']>;
  updated_at?: Maybe<Scalars['Date']>;
  image?: Maybe<File>;
  strapiId?: Maybe<Scalars['Int']>;
  /** Returns all children nodes filtered by type StrapiArticleContent */
  childrenStrapiArticleContent?: Maybe<Array<Maybe<StrapiArticleContent>>>;
  /** Returns the first child node of type StrapiArticleContent or null if there are no children of given type on this node */
  childStrapiArticleContent?: Maybe<StrapiArticleContent>;
};


export type StrapiArticlePublishedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiArticleCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiArticleUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiArticleAuthor = {
  __typename?: 'StrapiArticleAuthor';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Date']>;
  updated_at?: Maybe<Scalars['Date']>;
  picture?: Maybe<File>;
};


export type StrapiArticleAuthorCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiArticleAuthorUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiArticleAuthorFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  email?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  picture?: Maybe<FileFilterInput>;
};

export type StrapiArticleCategory = {
  __typename?: 'StrapiArticleCategory';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Date']>;
  updated_at?: Maybe<Scalars['Date']>;
};


export type StrapiArticleCategoryCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiArticleCategoryUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiArticleCategoryFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
};

export type StrapiArticleConnection = {
  __typename?: 'StrapiArticleConnection';
  totalCount: Scalars['Int'];
  edges: Array<StrapiArticleEdge>;
  nodes: Array<StrapiArticle>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<StrapiArticleGroupConnection>;
};


export type StrapiArticleConnectionDistinctArgs = {
  field: StrapiArticleFieldsEnum;
};


export type StrapiArticleConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: StrapiArticleFieldsEnum;
};

export type StrapiArticleContent = Node & {
  __typename?: 'StrapiArticleContent';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type StrapiArticleContentConnection = {
  __typename?: 'StrapiArticleContentConnection';
  totalCount: Scalars['Int'];
  edges: Array<StrapiArticleContentEdge>;
  nodes: Array<StrapiArticleContent>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<StrapiArticleContentGroupConnection>;
};


export type StrapiArticleContentConnectionDistinctArgs = {
  field: StrapiArticleContentFieldsEnum;
};


export type StrapiArticleContentConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: StrapiArticleContentFieldsEnum;
};

export type StrapiArticleContentEdge = {
  __typename?: 'StrapiArticleContentEdge';
  next?: Maybe<StrapiArticleContent>;
  node: StrapiArticleContent;
  previous?: Maybe<StrapiArticleContent>;
};

export enum StrapiArticleContentFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type StrapiArticleContentFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type StrapiArticleContentFilterListInput = {
  elemMatch?: Maybe<StrapiArticleContentFilterInput>;
};

export type StrapiArticleContentGroupConnection = {
  __typename?: 'StrapiArticleContentGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<StrapiArticleContentEdge>;
  nodes: Array<StrapiArticleContent>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type StrapiArticleContentSortInput = {
  fields?: Maybe<Array<Maybe<StrapiArticleContentFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type StrapiArticleEdge = {
  __typename?: 'StrapiArticleEdge';
  next?: Maybe<StrapiArticle>;
  node: StrapiArticle;
  previous?: Maybe<StrapiArticle>;
};

export enum StrapiArticleFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Title = 'title',
  Description = 'description',
  Content = 'content',
  PublishedAt = 'publishedAt',
  Status = 'status',
  Slug = 'slug',
  CategoryId = 'category___id',
  CategoryName = 'category___name',
  CategorySlug = 'category___slug',
  CategoryCreatedAt = 'category___created_at',
  CategoryUpdatedAt = 'category___updated_at',
  AuthorId = 'author___id',
  AuthorName = 'author___name',
  AuthorEmail = 'author___email',
  AuthorDescription = 'author___description',
  AuthorSlug = 'author___slug',
  AuthorCreatedAt = 'author___created_at',
  AuthorUpdatedAt = 'author___updated_at',
  AuthorPictureSourceInstanceName = 'author___picture___sourceInstanceName',
  AuthorPictureAbsolutePath = 'author___picture___absolutePath',
  AuthorPictureRelativePath = 'author___picture___relativePath',
  AuthorPictureExtension = 'author___picture___extension',
  AuthorPictureSize = 'author___picture___size',
  AuthorPicturePrettySize = 'author___picture___prettySize',
  AuthorPictureModifiedTime = 'author___picture___modifiedTime',
  AuthorPictureAccessTime = 'author___picture___accessTime',
  AuthorPictureChangeTime = 'author___picture___changeTime',
  AuthorPictureBirthTime = 'author___picture___birthTime',
  AuthorPictureRoot = 'author___picture___root',
  AuthorPictureDir = 'author___picture___dir',
  AuthorPictureBase = 'author___picture___base',
  AuthorPictureExt = 'author___picture___ext',
  AuthorPictureName = 'author___picture___name',
  AuthorPictureRelativeDirectory = 'author___picture___relativeDirectory',
  AuthorPictureDev = 'author___picture___dev',
  AuthorPictureMode = 'author___picture___mode',
  AuthorPictureNlink = 'author___picture___nlink',
  AuthorPictureUid = 'author___picture___uid',
  AuthorPictureGid = 'author___picture___gid',
  AuthorPictureRdev = 'author___picture___rdev',
  AuthorPictureIno = 'author___picture___ino',
  AuthorPictureAtimeMs = 'author___picture___atimeMs',
  AuthorPictureMtimeMs = 'author___picture___mtimeMs',
  AuthorPictureCtimeMs = 'author___picture___ctimeMs',
  AuthorPictureAtime = 'author___picture___atime',
  AuthorPictureMtime = 'author___picture___mtime',
  AuthorPictureCtime = 'author___picture___ctime',
  AuthorPictureBirthtime = 'author___picture___birthtime',
  AuthorPictureBirthtimeMs = 'author___picture___birthtimeMs',
  AuthorPictureBlksize = 'author___picture___blksize',
  AuthorPictureBlocks = 'author___picture___blocks',
  AuthorPicturePublicUrl = 'author___picture___publicURL',
  AuthorPictureChildrenImageSharp = 'author___picture___childrenImageSharp',
  AuthorPictureChildrenImageSharpGatsbyImageData = 'author___picture___childrenImageSharp___gatsbyImageData',
  AuthorPictureChildrenImageSharpId = 'author___picture___childrenImageSharp___id',
  AuthorPictureChildrenImageSharpChildren = 'author___picture___childrenImageSharp___children',
  AuthorPictureChildImageSharpGatsbyImageData = 'author___picture___childImageSharp___gatsbyImageData',
  AuthorPictureChildImageSharpId = 'author___picture___childImageSharp___id',
  AuthorPictureChildImageSharpChildren = 'author___picture___childImageSharp___children',
  AuthorPictureId = 'author___picture___id',
  AuthorPictureParentId = 'author___picture___parent___id',
  AuthorPictureParentChildren = 'author___picture___parent___children',
  AuthorPictureChildren = 'author___picture___children',
  AuthorPictureChildrenId = 'author___picture___children___id',
  AuthorPictureChildrenChildren = 'author___picture___children___children',
  AuthorPictureInternalContent = 'author___picture___internal___content',
  AuthorPictureInternalContentDigest = 'author___picture___internal___contentDigest',
  AuthorPictureInternalDescription = 'author___picture___internal___description',
  AuthorPictureInternalFieldOwners = 'author___picture___internal___fieldOwners',
  AuthorPictureInternalIgnoreType = 'author___picture___internal___ignoreType',
  AuthorPictureInternalMediaType = 'author___picture___internal___mediaType',
  AuthorPictureInternalOwner = 'author___picture___internal___owner',
  AuthorPictureInternalType = 'author___picture___internal___type',
  Keywords = 'keywords',
  CreatedAt = 'created_at',
  UpdatedAt = 'updated_at',
  ImageSourceInstanceName = 'image___sourceInstanceName',
  ImageAbsolutePath = 'image___absolutePath',
  ImageRelativePath = 'image___relativePath',
  ImageExtension = 'image___extension',
  ImageSize = 'image___size',
  ImagePrettySize = 'image___prettySize',
  ImageModifiedTime = 'image___modifiedTime',
  ImageAccessTime = 'image___accessTime',
  ImageChangeTime = 'image___changeTime',
  ImageBirthTime = 'image___birthTime',
  ImageRoot = 'image___root',
  ImageDir = 'image___dir',
  ImageBase = 'image___base',
  ImageExt = 'image___ext',
  ImageName = 'image___name',
  ImageRelativeDirectory = 'image___relativeDirectory',
  ImageDev = 'image___dev',
  ImageMode = 'image___mode',
  ImageNlink = 'image___nlink',
  ImageUid = 'image___uid',
  ImageGid = 'image___gid',
  ImageRdev = 'image___rdev',
  ImageIno = 'image___ino',
  ImageAtimeMs = 'image___atimeMs',
  ImageMtimeMs = 'image___mtimeMs',
  ImageCtimeMs = 'image___ctimeMs',
  ImageAtime = 'image___atime',
  ImageMtime = 'image___mtime',
  ImageCtime = 'image___ctime',
  ImageBirthtime = 'image___birthtime',
  ImageBirthtimeMs = 'image___birthtimeMs',
  ImageBlksize = 'image___blksize',
  ImageBlocks = 'image___blocks',
  ImagePublicUrl = 'image___publicURL',
  ImageChildrenImageSharp = 'image___childrenImageSharp',
  ImageChildrenImageSharpFixedBase64 = 'image___childrenImageSharp___fixed___base64',
  ImageChildrenImageSharpFixedTracedSvg = 'image___childrenImageSharp___fixed___tracedSVG',
  ImageChildrenImageSharpFixedAspectRatio = 'image___childrenImageSharp___fixed___aspectRatio',
  ImageChildrenImageSharpFixedWidth = 'image___childrenImageSharp___fixed___width',
  ImageChildrenImageSharpFixedHeight = 'image___childrenImageSharp___fixed___height',
  ImageChildrenImageSharpFixedSrc = 'image___childrenImageSharp___fixed___src',
  ImageChildrenImageSharpFixedSrcSet = 'image___childrenImageSharp___fixed___srcSet',
  ImageChildrenImageSharpFixedSrcWebp = 'image___childrenImageSharp___fixed___srcWebp',
  ImageChildrenImageSharpFixedSrcSetWebp = 'image___childrenImageSharp___fixed___srcSetWebp',
  ImageChildrenImageSharpFixedOriginalName = 'image___childrenImageSharp___fixed___originalName',
  ImageChildrenImageSharpResolutionsBase64 = 'image___childrenImageSharp___resolutions___base64',
  ImageChildrenImageSharpResolutionsTracedSvg = 'image___childrenImageSharp___resolutions___tracedSVG',
  ImageChildrenImageSharpResolutionsAspectRatio = 'image___childrenImageSharp___resolutions___aspectRatio',
  ImageChildrenImageSharpResolutionsWidth = 'image___childrenImageSharp___resolutions___width',
  ImageChildrenImageSharpResolutionsHeight = 'image___childrenImageSharp___resolutions___height',
  ImageChildrenImageSharpResolutionsSrc = 'image___childrenImageSharp___resolutions___src',
  ImageChildrenImageSharpResolutionsSrcSet = 'image___childrenImageSharp___resolutions___srcSet',
  ImageChildrenImageSharpResolutionsSrcWebp = 'image___childrenImageSharp___resolutions___srcWebp',
  ImageChildrenImageSharpResolutionsSrcSetWebp = 'image___childrenImageSharp___resolutions___srcSetWebp',
  ImageChildrenImageSharpResolutionsOriginalName = 'image___childrenImageSharp___resolutions___originalName',
  ImageChildrenImageSharpFluidBase64 = 'image___childrenImageSharp___fluid___base64',
  ImageChildrenImageSharpFluidTracedSvg = 'image___childrenImageSharp___fluid___tracedSVG',
  ImageChildrenImageSharpFluidAspectRatio = 'image___childrenImageSharp___fluid___aspectRatio',
  ImageChildrenImageSharpFluidSrc = 'image___childrenImageSharp___fluid___src',
  ImageChildrenImageSharpFluidSrcSet = 'image___childrenImageSharp___fluid___srcSet',
  ImageChildrenImageSharpFluidSrcWebp = 'image___childrenImageSharp___fluid___srcWebp',
  ImageChildrenImageSharpFluidSrcSetWebp = 'image___childrenImageSharp___fluid___srcSetWebp',
  ImageChildrenImageSharpFluidSizes = 'image___childrenImageSharp___fluid___sizes',
  ImageChildrenImageSharpFluidOriginalImg = 'image___childrenImageSharp___fluid___originalImg',
  ImageChildrenImageSharpFluidOriginalName = 'image___childrenImageSharp___fluid___originalName',
  ImageChildrenImageSharpFluidPresentationWidth = 'image___childrenImageSharp___fluid___presentationWidth',
  ImageChildrenImageSharpFluidPresentationHeight = 'image___childrenImageSharp___fluid___presentationHeight',
  ImageChildrenImageSharpSizesBase64 = 'image___childrenImageSharp___sizes___base64',
  ImageChildrenImageSharpSizesTracedSvg = 'image___childrenImageSharp___sizes___tracedSVG',
  ImageChildrenImageSharpSizesAspectRatio = 'image___childrenImageSharp___sizes___aspectRatio',
  ImageChildrenImageSharpSizesSrc = 'image___childrenImageSharp___sizes___src',
  ImageChildrenImageSharpSizesSrcSet = 'image___childrenImageSharp___sizes___srcSet',
  ImageChildrenImageSharpSizesSrcWebp = 'image___childrenImageSharp___sizes___srcWebp',
  ImageChildrenImageSharpSizesSrcSetWebp = 'image___childrenImageSharp___sizes___srcSetWebp',
  ImageChildrenImageSharpSizesSizes = 'image___childrenImageSharp___sizes___sizes',
  ImageChildrenImageSharpSizesOriginalImg = 'image___childrenImageSharp___sizes___originalImg',
  ImageChildrenImageSharpSizesOriginalName = 'image___childrenImageSharp___sizes___originalName',
  ImageChildrenImageSharpSizesPresentationWidth = 'image___childrenImageSharp___sizes___presentationWidth',
  ImageChildrenImageSharpSizesPresentationHeight = 'image___childrenImageSharp___sizes___presentationHeight',
  ImageChildrenImageSharpGatsbyImageData = 'image___childrenImageSharp___gatsbyImageData',
  ImageChildrenImageSharpOriginalWidth = 'image___childrenImageSharp___original___width',
  ImageChildrenImageSharpOriginalHeight = 'image___childrenImageSharp___original___height',
  ImageChildrenImageSharpOriginalSrc = 'image___childrenImageSharp___original___src',
  ImageChildrenImageSharpResizeSrc = 'image___childrenImageSharp___resize___src',
  ImageChildrenImageSharpResizeTracedSvg = 'image___childrenImageSharp___resize___tracedSVG',
  ImageChildrenImageSharpResizeWidth = 'image___childrenImageSharp___resize___width',
  ImageChildrenImageSharpResizeHeight = 'image___childrenImageSharp___resize___height',
  ImageChildrenImageSharpResizeAspectRatio = 'image___childrenImageSharp___resize___aspectRatio',
  ImageChildrenImageSharpResizeOriginalName = 'image___childrenImageSharp___resize___originalName',
  ImageChildrenImageSharpId = 'image___childrenImageSharp___id',
  ImageChildrenImageSharpParentId = 'image___childrenImageSharp___parent___id',
  ImageChildrenImageSharpParentChildren = 'image___childrenImageSharp___parent___children',
  ImageChildrenImageSharpChildren = 'image___childrenImageSharp___children',
  ImageChildrenImageSharpChildrenId = 'image___childrenImageSharp___children___id',
  ImageChildrenImageSharpChildrenChildren = 'image___childrenImageSharp___children___children',
  ImageChildrenImageSharpInternalContent = 'image___childrenImageSharp___internal___content',
  ImageChildrenImageSharpInternalContentDigest = 'image___childrenImageSharp___internal___contentDigest',
  ImageChildrenImageSharpInternalDescription = 'image___childrenImageSharp___internal___description',
  ImageChildrenImageSharpInternalFieldOwners = 'image___childrenImageSharp___internal___fieldOwners',
  ImageChildrenImageSharpInternalIgnoreType = 'image___childrenImageSharp___internal___ignoreType',
  ImageChildrenImageSharpInternalMediaType = 'image___childrenImageSharp___internal___mediaType',
  ImageChildrenImageSharpInternalOwner = 'image___childrenImageSharp___internal___owner',
  ImageChildrenImageSharpInternalType = 'image___childrenImageSharp___internal___type',
  ImageChildImageSharpFixedBase64 = 'image___childImageSharp___fixed___base64',
  ImageChildImageSharpFixedTracedSvg = 'image___childImageSharp___fixed___tracedSVG',
  ImageChildImageSharpFixedAspectRatio = 'image___childImageSharp___fixed___aspectRatio',
  ImageChildImageSharpFixedWidth = 'image___childImageSharp___fixed___width',
  ImageChildImageSharpFixedHeight = 'image___childImageSharp___fixed___height',
  ImageChildImageSharpFixedSrc = 'image___childImageSharp___fixed___src',
  ImageChildImageSharpFixedSrcSet = 'image___childImageSharp___fixed___srcSet',
  ImageChildImageSharpFixedSrcWebp = 'image___childImageSharp___fixed___srcWebp',
  ImageChildImageSharpFixedSrcSetWebp = 'image___childImageSharp___fixed___srcSetWebp',
  ImageChildImageSharpFixedOriginalName = 'image___childImageSharp___fixed___originalName',
  ImageChildImageSharpResolutionsBase64 = 'image___childImageSharp___resolutions___base64',
  ImageChildImageSharpResolutionsTracedSvg = 'image___childImageSharp___resolutions___tracedSVG',
  ImageChildImageSharpResolutionsAspectRatio = 'image___childImageSharp___resolutions___aspectRatio',
  ImageChildImageSharpResolutionsWidth = 'image___childImageSharp___resolutions___width',
  ImageChildImageSharpResolutionsHeight = 'image___childImageSharp___resolutions___height',
  ImageChildImageSharpResolutionsSrc = 'image___childImageSharp___resolutions___src',
  ImageChildImageSharpResolutionsSrcSet = 'image___childImageSharp___resolutions___srcSet',
  ImageChildImageSharpResolutionsSrcWebp = 'image___childImageSharp___resolutions___srcWebp',
  ImageChildImageSharpResolutionsSrcSetWebp = 'image___childImageSharp___resolutions___srcSetWebp',
  ImageChildImageSharpResolutionsOriginalName = 'image___childImageSharp___resolutions___originalName',
  ImageChildImageSharpFluidBase64 = 'image___childImageSharp___fluid___base64',
  ImageChildImageSharpFluidTracedSvg = 'image___childImageSharp___fluid___tracedSVG',
  ImageChildImageSharpFluidAspectRatio = 'image___childImageSharp___fluid___aspectRatio',
  ImageChildImageSharpFluidSrc = 'image___childImageSharp___fluid___src',
  ImageChildImageSharpFluidSrcSet = 'image___childImageSharp___fluid___srcSet',
  ImageChildImageSharpFluidSrcWebp = 'image___childImageSharp___fluid___srcWebp',
  ImageChildImageSharpFluidSrcSetWebp = 'image___childImageSharp___fluid___srcSetWebp',
  ImageChildImageSharpFluidSizes = 'image___childImageSharp___fluid___sizes',
  ImageChildImageSharpFluidOriginalImg = 'image___childImageSharp___fluid___originalImg',
  ImageChildImageSharpFluidOriginalName = 'image___childImageSharp___fluid___originalName',
  ImageChildImageSharpFluidPresentationWidth = 'image___childImageSharp___fluid___presentationWidth',
  ImageChildImageSharpFluidPresentationHeight = 'image___childImageSharp___fluid___presentationHeight',
  ImageChildImageSharpSizesBase64 = 'image___childImageSharp___sizes___base64',
  ImageChildImageSharpSizesTracedSvg = 'image___childImageSharp___sizes___tracedSVG',
  ImageChildImageSharpSizesAspectRatio = 'image___childImageSharp___sizes___aspectRatio',
  ImageChildImageSharpSizesSrc = 'image___childImageSharp___sizes___src',
  ImageChildImageSharpSizesSrcSet = 'image___childImageSharp___sizes___srcSet',
  ImageChildImageSharpSizesSrcWebp = 'image___childImageSharp___sizes___srcWebp',
  ImageChildImageSharpSizesSrcSetWebp = 'image___childImageSharp___sizes___srcSetWebp',
  ImageChildImageSharpSizesSizes = 'image___childImageSharp___sizes___sizes',
  ImageChildImageSharpSizesOriginalImg = 'image___childImageSharp___sizes___originalImg',
  ImageChildImageSharpSizesOriginalName = 'image___childImageSharp___sizes___originalName',
  ImageChildImageSharpSizesPresentationWidth = 'image___childImageSharp___sizes___presentationWidth',
  ImageChildImageSharpSizesPresentationHeight = 'image___childImageSharp___sizes___presentationHeight',
  ImageChildImageSharpGatsbyImageData = 'image___childImageSharp___gatsbyImageData',
  ImageChildImageSharpOriginalWidth = 'image___childImageSharp___original___width',
  ImageChildImageSharpOriginalHeight = 'image___childImageSharp___original___height',
  ImageChildImageSharpOriginalSrc = 'image___childImageSharp___original___src',
  ImageChildImageSharpResizeSrc = 'image___childImageSharp___resize___src',
  ImageChildImageSharpResizeTracedSvg = 'image___childImageSharp___resize___tracedSVG',
  ImageChildImageSharpResizeWidth = 'image___childImageSharp___resize___width',
  ImageChildImageSharpResizeHeight = 'image___childImageSharp___resize___height',
  ImageChildImageSharpResizeAspectRatio = 'image___childImageSharp___resize___aspectRatio',
  ImageChildImageSharpResizeOriginalName = 'image___childImageSharp___resize___originalName',
  ImageChildImageSharpId = 'image___childImageSharp___id',
  ImageChildImageSharpParentId = 'image___childImageSharp___parent___id',
  ImageChildImageSharpParentChildren = 'image___childImageSharp___parent___children',
  ImageChildImageSharpChildren = 'image___childImageSharp___children',
  ImageChildImageSharpChildrenId = 'image___childImageSharp___children___id',
  ImageChildImageSharpChildrenChildren = 'image___childImageSharp___children___children',
  ImageChildImageSharpInternalContent = 'image___childImageSharp___internal___content',
  ImageChildImageSharpInternalContentDigest = 'image___childImageSharp___internal___contentDigest',
  ImageChildImageSharpInternalDescription = 'image___childImageSharp___internal___description',
  ImageChildImageSharpInternalFieldOwners = 'image___childImageSharp___internal___fieldOwners',
  ImageChildImageSharpInternalIgnoreType = 'image___childImageSharp___internal___ignoreType',
  ImageChildImageSharpInternalMediaType = 'image___childImageSharp___internal___mediaType',
  ImageChildImageSharpInternalOwner = 'image___childImageSharp___internal___owner',
  ImageChildImageSharpInternalType = 'image___childImageSharp___internal___type',
  ImageId = 'image___id',
  ImageParentId = 'image___parent___id',
  ImageParentParentId = 'image___parent___parent___id',
  ImageParentParentChildren = 'image___parent___parent___children',
  ImageParentChildren = 'image___parent___children',
  ImageParentChildrenId = 'image___parent___children___id',
  ImageParentChildrenChildren = 'image___parent___children___children',
  ImageParentInternalContent = 'image___parent___internal___content',
  ImageParentInternalContentDigest = 'image___parent___internal___contentDigest',
  ImageParentInternalDescription = 'image___parent___internal___description',
  ImageParentInternalFieldOwners = 'image___parent___internal___fieldOwners',
  ImageParentInternalIgnoreType = 'image___parent___internal___ignoreType',
  ImageParentInternalMediaType = 'image___parent___internal___mediaType',
  ImageParentInternalOwner = 'image___parent___internal___owner',
  ImageParentInternalType = 'image___parent___internal___type',
  ImageChildren = 'image___children',
  ImageChildrenId = 'image___children___id',
  ImageChildrenParentId = 'image___children___parent___id',
  ImageChildrenParentChildren = 'image___children___parent___children',
  ImageChildrenChildren = 'image___children___children',
  ImageChildrenChildrenId = 'image___children___children___id',
  ImageChildrenChildrenChildren = 'image___children___children___children',
  ImageChildrenInternalContent = 'image___children___internal___content',
  ImageChildrenInternalContentDigest = 'image___children___internal___contentDigest',
  ImageChildrenInternalDescription = 'image___children___internal___description',
  ImageChildrenInternalFieldOwners = 'image___children___internal___fieldOwners',
  ImageChildrenInternalIgnoreType = 'image___children___internal___ignoreType',
  ImageChildrenInternalMediaType = 'image___children___internal___mediaType',
  ImageChildrenInternalOwner = 'image___children___internal___owner',
  ImageChildrenInternalType = 'image___children___internal___type',
  ImageInternalContent = 'image___internal___content',
  ImageInternalContentDigest = 'image___internal___contentDigest',
  ImageInternalDescription = 'image___internal___description',
  ImageInternalFieldOwners = 'image___internal___fieldOwners',
  ImageInternalIgnoreType = 'image___internal___ignoreType',
  ImageInternalMediaType = 'image___internal___mediaType',
  ImageInternalOwner = 'image___internal___owner',
  ImageInternalType = 'image___internal___type',
  StrapiId = 'strapiId',
  ChildrenStrapiArticleContent = 'childrenStrapiArticleContent',
  ChildrenStrapiArticleContentId = 'childrenStrapiArticleContent___id',
  ChildrenStrapiArticleContentParentId = 'childrenStrapiArticleContent___parent___id',
  ChildrenStrapiArticleContentParentParentId = 'childrenStrapiArticleContent___parent___parent___id',
  ChildrenStrapiArticleContentParentParentChildren = 'childrenStrapiArticleContent___parent___parent___children',
  ChildrenStrapiArticleContentParentChildren = 'childrenStrapiArticleContent___parent___children',
  ChildrenStrapiArticleContentParentChildrenId = 'childrenStrapiArticleContent___parent___children___id',
  ChildrenStrapiArticleContentParentChildrenChildren = 'childrenStrapiArticleContent___parent___children___children',
  ChildrenStrapiArticleContentParentInternalContent = 'childrenStrapiArticleContent___parent___internal___content',
  ChildrenStrapiArticleContentParentInternalContentDigest = 'childrenStrapiArticleContent___parent___internal___contentDigest',
  ChildrenStrapiArticleContentParentInternalDescription = 'childrenStrapiArticleContent___parent___internal___description',
  ChildrenStrapiArticleContentParentInternalFieldOwners = 'childrenStrapiArticleContent___parent___internal___fieldOwners',
  ChildrenStrapiArticleContentParentInternalIgnoreType = 'childrenStrapiArticleContent___parent___internal___ignoreType',
  ChildrenStrapiArticleContentParentInternalMediaType = 'childrenStrapiArticleContent___parent___internal___mediaType',
  ChildrenStrapiArticleContentParentInternalOwner = 'childrenStrapiArticleContent___parent___internal___owner',
  ChildrenStrapiArticleContentParentInternalType = 'childrenStrapiArticleContent___parent___internal___type',
  ChildrenStrapiArticleContentChildren = 'childrenStrapiArticleContent___children',
  ChildrenStrapiArticleContentChildrenId = 'childrenStrapiArticleContent___children___id',
  ChildrenStrapiArticleContentChildrenParentId = 'childrenStrapiArticleContent___children___parent___id',
  ChildrenStrapiArticleContentChildrenParentChildren = 'childrenStrapiArticleContent___children___parent___children',
  ChildrenStrapiArticleContentChildrenChildren = 'childrenStrapiArticleContent___children___children',
  ChildrenStrapiArticleContentChildrenChildrenId = 'childrenStrapiArticleContent___children___children___id',
  ChildrenStrapiArticleContentChildrenChildrenChildren = 'childrenStrapiArticleContent___children___children___children',
  ChildrenStrapiArticleContentChildrenInternalContent = 'childrenStrapiArticleContent___children___internal___content',
  ChildrenStrapiArticleContentChildrenInternalContentDigest = 'childrenStrapiArticleContent___children___internal___contentDigest',
  ChildrenStrapiArticleContentChildrenInternalDescription = 'childrenStrapiArticleContent___children___internal___description',
  ChildrenStrapiArticleContentChildrenInternalFieldOwners = 'childrenStrapiArticleContent___children___internal___fieldOwners',
  ChildrenStrapiArticleContentChildrenInternalIgnoreType = 'childrenStrapiArticleContent___children___internal___ignoreType',
  ChildrenStrapiArticleContentChildrenInternalMediaType = 'childrenStrapiArticleContent___children___internal___mediaType',
  ChildrenStrapiArticleContentChildrenInternalOwner = 'childrenStrapiArticleContent___children___internal___owner',
  ChildrenStrapiArticleContentChildrenInternalType = 'childrenStrapiArticleContent___children___internal___type',
  ChildrenStrapiArticleContentInternalContent = 'childrenStrapiArticleContent___internal___content',
  ChildrenStrapiArticleContentInternalContentDigest = 'childrenStrapiArticleContent___internal___contentDigest',
  ChildrenStrapiArticleContentInternalDescription = 'childrenStrapiArticleContent___internal___description',
  ChildrenStrapiArticleContentInternalFieldOwners = 'childrenStrapiArticleContent___internal___fieldOwners',
  ChildrenStrapiArticleContentInternalIgnoreType = 'childrenStrapiArticleContent___internal___ignoreType',
  ChildrenStrapiArticleContentInternalMediaType = 'childrenStrapiArticleContent___internal___mediaType',
  ChildrenStrapiArticleContentInternalOwner = 'childrenStrapiArticleContent___internal___owner',
  ChildrenStrapiArticleContentInternalType = 'childrenStrapiArticleContent___internal___type',
  ChildStrapiArticleContentId = 'childStrapiArticleContent___id',
  ChildStrapiArticleContentParentId = 'childStrapiArticleContent___parent___id',
  ChildStrapiArticleContentParentParentId = 'childStrapiArticleContent___parent___parent___id',
  ChildStrapiArticleContentParentParentChildren = 'childStrapiArticleContent___parent___parent___children',
  ChildStrapiArticleContentParentChildren = 'childStrapiArticleContent___parent___children',
  ChildStrapiArticleContentParentChildrenId = 'childStrapiArticleContent___parent___children___id',
  ChildStrapiArticleContentParentChildrenChildren = 'childStrapiArticleContent___parent___children___children',
  ChildStrapiArticleContentParentInternalContent = 'childStrapiArticleContent___parent___internal___content',
  ChildStrapiArticleContentParentInternalContentDigest = 'childStrapiArticleContent___parent___internal___contentDigest',
  ChildStrapiArticleContentParentInternalDescription = 'childStrapiArticleContent___parent___internal___description',
  ChildStrapiArticleContentParentInternalFieldOwners = 'childStrapiArticleContent___parent___internal___fieldOwners',
  ChildStrapiArticleContentParentInternalIgnoreType = 'childStrapiArticleContent___parent___internal___ignoreType',
  ChildStrapiArticleContentParentInternalMediaType = 'childStrapiArticleContent___parent___internal___mediaType',
  ChildStrapiArticleContentParentInternalOwner = 'childStrapiArticleContent___parent___internal___owner',
  ChildStrapiArticleContentParentInternalType = 'childStrapiArticleContent___parent___internal___type',
  ChildStrapiArticleContentChildren = 'childStrapiArticleContent___children',
  ChildStrapiArticleContentChildrenId = 'childStrapiArticleContent___children___id',
  ChildStrapiArticleContentChildrenParentId = 'childStrapiArticleContent___children___parent___id',
  ChildStrapiArticleContentChildrenParentChildren = 'childStrapiArticleContent___children___parent___children',
  ChildStrapiArticleContentChildrenChildren = 'childStrapiArticleContent___children___children',
  ChildStrapiArticleContentChildrenChildrenId = 'childStrapiArticleContent___children___children___id',
  ChildStrapiArticleContentChildrenChildrenChildren = 'childStrapiArticleContent___children___children___children',
  ChildStrapiArticleContentChildrenInternalContent = 'childStrapiArticleContent___children___internal___content',
  ChildStrapiArticleContentChildrenInternalContentDigest = 'childStrapiArticleContent___children___internal___contentDigest',
  ChildStrapiArticleContentChildrenInternalDescription = 'childStrapiArticleContent___children___internal___description',
  ChildStrapiArticleContentChildrenInternalFieldOwners = 'childStrapiArticleContent___children___internal___fieldOwners',
  ChildStrapiArticleContentChildrenInternalIgnoreType = 'childStrapiArticleContent___children___internal___ignoreType',
  ChildStrapiArticleContentChildrenInternalMediaType = 'childStrapiArticleContent___children___internal___mediaType',
  ChildStrapiArticleContentChildrenInternalOwner = 'childStrapiArticleContent___children___internal___owner',
  ChildStrapiArticleContentChildrenInternalType = 'childStrapiArticleContent___children___internal___type',
  ChildStrapiArticleContentInternalContent = 'childStrapiArticleContent___internal___content',
  ChildStrapiArticleContentInternalContentDigest = 'childStrapiArticleContent___internal___contentDigest',
  ChildStrapiArticleContentInternalDescription = 'childStrapiArticleContent___internal___description',
  ChildStrapiArticleContentInternalFieldOwners = 'childStrapiArticleContent___internal___fieldOwners',
  ChildStrapiArticleContentInternalIgnoreType = 'childStrapiArticleContent___internal___ignoreType',
  ChildStrapiArticleContentInternalMediaType = 'childStrapiArticleContent___internal___mediaType',
  ChildStrapiArticleContentInternalOwner = 'childStrapiArticleContent___internal___owner',
  ChildStrapiArticleContentInternalType = 'childStrapiArticleContent___internal___type'
}

export type StrapiArticleFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  publishedAt?: Maybe<DateQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  category?: Maybe<StrapiArticleCategoryFilterInput>;
  author?: Maybe<StrapiArticleAuthorFilterInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  image?: Maybe<FileFilterInput>;
  strapiId?: Maybe<IntQueryOperatorInput>;
  childrenStrapiArticleContent?: Maybe<StrapiArticleContentFilterListInput>;
  childStrapiArticleContent?: Maybe<StrapiArticleContentFilterInput>;
};

export type StrapiArticleGroupConnection = {
  __typename?: 'StrapiArticleGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<StrapiArticleEdge>;
  nodes: Array<StrapiArticle>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type StrapiArticleSortInput = {
  fields?: Maybe<Array<Maybe<StrapiArticleFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type StrapiCategory = Node & {
  __typename?: 'StrapiCategory';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Date']>;
  updated_at?: Maybe<Scalars['Date']>;
  articles?: Maybe<Array<Maybe<StrapiCategoryArticles>>>;
  strapiId?: Maybe<Scalars['Int']>;
};


export type StrapiCategoryCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiCategoryUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiCategoryArticles = {
  __typename?: 'StrapiCategoryArticles';
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['Date']>;
  status?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['Int']>;
  author?: Maybe<Scalars['Int']>;
  keywords?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Date']>;
  updated_at?: Maybe<Scalars['Date']>;
  image?: Maybe<File>;
};


export type StrapiCategoryArticlesPublishedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiCategoryArticlesCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiCategoryArticlesUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiCategoryArticlesFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  publishedAt?: Maybe<DateQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  category?: Maybe<IntQueryOperatorInput>;
  author?: Maybe<IntQueryOperatorInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  image?: Maybe<FileFilterInput>;
};

export type StrapiCategoryArticlesFilterListInput = {
  elemMatch?: Maybe<StrapiCategoryArticlesFilterInput>;
};

export type StrapiCategoryConnection = {
  __typename?: 'StrapiCategoryConnection';
  totalCount: Scalars['Int'];
  edges: Array<StrapiCategoryEdge>;
  nodes: Array<StrapiCategory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<StrapiCategoryGroupConnection>;
};


export type StrapiCategoryConnectionDistinctArgs = {
  field: StrapiCategoryFieldsEnum;
};


export type StrapiCategoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: StrapiCategoryFieldsEnum;
};

export type StrapiCategoryEdge = {
  __typename?: 'StrapiCategoryEdge';
  next?: Maybe<StrapiCategory>;
  node: StrapiCategory;
  previous?: Maybe<StrapiCategory>;
};

export enum StrapiCategoryFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Name = 'name',
  Slug = 'slug',
  CreatedAt = 'created_at',
  UpdatedAt = 'updated_at',
  Articles = 'articles',
  ArticlesId = 'articles___id',
  ArticlesTitle = 'articles___title',
  ArticlesDescription = 'articles___description',
  ArticlesContent = 'articles___content',
  ArticlesPublishedAt = 'articles___publishedAt',
  ArticlesStatus = 'articles___status',
  ArticlesSlug = 'articles___slug',
  ArticlesCategory = 'articles___category',
  ArticlesAuthor = 'articles___author',
  ArticlesKeywords = 'articles___keywords',
  ArticlesCreatedAt = 'articles___created_at',
  ArticlesUpdatedAt = 'articles___updated_at',
  ArticlesImageSourceInstanceName = 'articles___image___sourceInstanceName',
  ArticlesImageAbsolutePath = 'articles___image___absolutePath',
  ArticlesImageRelativePath = 'articles___image___relativePath',
  ArticlesImageExtension = 'articles___image___extension',
  ArticlesImageSize = 'articles___image___size',
  ArticlesImagePrettySize = 'articles___image___prettySize',
  ArticlesImageModifiedTime = 'articles___image___modifiedTime',
  ArticlesImageAccessTime = 'articles___image___accessTime',
  ArticlesImageChangeTime = 'articles___image___changeTime',
  ArticlesImageBirthTime = 'articles___image___birthTime',
  ArticlesImageRoot = 'articles___image___root',
  ArticlesImageDir = 'articles___image___dir',
  ArticlesImageBase = 'articles___image___base',
  ArticlesImageExt = 'articles___image___ext',
  ArticlesImageName = 'articles___image___name',
  ArticlesImageRelativeDirectory = 'articles___image___relativeDirectory',
  ArticlesImageDev = 'articles___image___dev',
  ArticlesImageMode = 'articles___image___mode',
  ArticlesImageNlink = 'articles___image___nlink',
  ArticlesImageUid = 'articles___image___uid',
  ArticlesImageGid = 'articles___image___gid',
  ArticlesImageRdev = 'articles___image___rdev',
  ArticlesImageIno = 'articles___image___ino',
  ArticlesImageAtimeMs = 'articles___image___atimeMs',
  ArticlesImageMtimeMs = 'articles___image___mtimeMs',
  ArticlesImageCtimeMs = 'articles___image___ctimeMs',
  ArticlesImageAtime = 'articles___image___atime',
  ArticlesImageMtime = 'articles___image___mtime',
  ArticlesImageCtime = 'articles___image___ctime',
  ArticlesImageBirthtime = 'articles___image___birthtime',
  ArticlesImageBirthtimeMs = 'articles___image___birthtimeMs',
  ArticlesImageBlksize = 'articles___image___blksize',
  ArticlesImageBlocks = 'articles___image___blocks',
  ArticlesImagePublicUrl = 'articles___image___publicURL',
  ArticlesImageChildrenImageSharp = 'articles___image___childrenImageSharp',
  ArticlesImageChildrenImageSharpGatsbyImageData = 'articles___image___childrenImageSharp___gatsbyImageData',
  ArticlesImageChildrenImageSharpId = 'articles___image___childrenImageSharp___id',
  ArticlesImageChildrenImageSharpChildren = 'articles___image___childrenImageSharp___children',
  ArticlesImageChildImageSharpGatsbyImageData = 'articles___image___childImageSharp___gatsbyImageData',
  ArticlesImageChildImageSharpId = 'articles___image___childImageSharp___id',
  ArticlesImageChildImageSharpChildren = 'articles___image___childImageSharp___children',
  ArticlesImageId = 'articles___image___id',
  ArticlesImageParentId = 'articles___image___parent___id',
  ArticlesImageParentChildren = 'articles___image___parent___children',
  ArticlesImageChildren = 'articles___image___children',
  ArticlesImageChildrenId = 'articles___image___children___id',
  ArticlesImageChildrenChildren = 'articles___image___children___children',
  ArticlesImageInternalContent = 'articles___image___internal___content',
  ArticlesImageInternalContentDigest = 'articles___image___internal___contentDigest',
  ArticlesImageInternalDescription = 'articles___image___internal___description',
  ArticlesImageInternalFieldOwners = 'articles___image___internal___fieldOwners',
  ArticlesImageInternalIgnoreType = 'articles___image___internal___ignoreType',
  ArticlesImageInternalMediaType = 'articles___image___internal___mediaType',
  ArticlesImageInternalOwner = 'articles___image___internal___owner',
  ArticlesImageInternalType = 'articles___image___internal___type',
  StrapiId = 'strapiId'
}

export type StrapiCategoryFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  articles?: Maybe<StrapiCategoryArticlesFilterListInput>;
  strapiId?: Maybe<IntQueryOperatorInput>;
};

export type StrapiCategoryGroupConnection = {
  __typename?: 'StrapiCategoryGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<StrapiCategoryEdge>;
  nodes: Array<StrapiCategory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type StrapiCategorySortInput = {
  fields?: Maybe<Array<Maybe<StrapiCategoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type StrapiGlobal = Node & {
  __typename?: 'StrapiGlobal';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  siteName?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Date']>;
  updated_at?: Maybe<Scalars['Date']>;
  defaultSeo?: Maybe<StrapiGlobalDefaultSeo>;
  favicon?: Maybe<File>;
  strapiId?: Maybe<Scalars['Int']>;
};


export type StrapiGlobalCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiGlobalUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiGlobalConnection = {
  __typename?: 'StrapiGlobalConnection';
  totalCount: Scalars['Int'];
  edges: Array<StrapiGlobalEdge>;
  nodes: Array<StrapiGlobal>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<StrapiGlobalGroupConnection>;
};


export type StrapiGlobalConnectionDistinctArgs = {
  field: StrapiGlobalFieldsEnum;
};


export type StrapiGlobalConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: StrapiGlobalFieldsEnum;
};

export type StrapiGlobalDefaultSeo = {
  __typename?: 'StrapiGlobalDefaultSeo';
  id?: Maybe<Scalars['Int']>;
  metaTitle?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  shareImage?: Maybe<File>;
};

export type StrapiGlobalDefaultSeoFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  metaTitle?: Maybe<StringQueryOperatorInput>;
  metaDescription?: Maybe<StringQueryOperatorInput>;
  shareImage?: Maybe<FileFilterInput>;
};

export type StrapiGlobalEdge = {
  __typename?: 'StrapiGlobalEdge';
  next?: Maybe<StrapiGlobal>;
  node: StrapiGlobal;
  previous?: Maybe<StrapiGlobal>;
};

export enum StrapiGlobalFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  SiteName = 'siteName',
  CreatedAt = 'created_at',
  UpdatedAt = 'updated_at',
  DefaultSeoId = 'defaultSeo___id',
  DefaultSeoMetaTitle = 'defaultSeo___metaTitle',
  DefaultSeoMetaDescription = 'defaultSeo___metaDescription',
  DefaultSeoShareImageSourceInstanceName = 'defaultSeo___shareImage___sourceInstanceName',
  DefaultSeoShareImageAbsolutePath = 'defaultSeo___shareImage___absolutePath',
  DefaultSeoShareImageRelativePath = 'defaultSeo___shareImage___relativePath',
  DefaultSeoShareImageExtension = 'defaultSeo___shareImage___extension',
  DefaultSeoShareImageSize = 'defaultSeo___shareImage___size',
  DefaultSeoShareImagePrettySize = 'defaultSeo___shareImage___prettySize',
  DefaultSeoShareImageModifiedTime = 'defaultSeo___shareImage___modifiedTime',
  DefaultSeoShareImageAccessTime = 'defaultSeo___shareImage___accessTime',
  DefaultSeoShareImageChangeTime = 'defaultSeo___shareImage___changeTime',
  DefaultSeoShareImageBirthTime = 'defaultSeo___shareImage___birthTime',
  DefaultSeoShareImageRoot = 'defaultSeo___shareImage___root',
  DefaultSeoShareImageDir = 'defaultSeo___shareImage___dir',
  DefaultSeoShareImageBase = 'defaultSeo___shareImage___base',
  DefaultSeoShareImageExt = 'defaultSeo___shareImage___ext',
  DefaultSeoShareImageName = 'defaultSeo___shareImage___name',
  DefaultSeoShareImageRelativeDirectory = 'defaultSeo___shareImage___relativeDirectory',
  DefaultSeoShareImageDev = 'defaultSeo___shareImage___dev',
  DefaultSeoShareImageMode = 'defaultSeo___shareImage___mode',
  DefaultSeoShareImageNlink = 'defaultSeo___shareImage___nlink',
  DefaultSeoShareImageUid = 'defaultSeo___shareImage___uid',
  DefaultSeoShareImageGid = 'defaultSeo___shareImage___gid',
  DefaultSeoShareImageRdev = 'defaultSeo___shareImage___rdev',
  DefaultSeoShareImageIno = 'defaultSeo___shareImage___ino',
  DefaultSeoShareImageAtimeMs = 'defaultSeo___shareImage___atimeMs',
  DefaultSeoShareImageMtimeMs = 'defaultSeo___shareImage___mtimeMs',
  DefaultSeoShareImageCtimeMs = 'defaultSeo___shareImage___ctimeMs',
  DefaultSeoShareImageAtime = 'defaultSeo___shareImage___atime',
  DefaultSeoShareImageMtime = 'defaultSeo___shareImage___mtime',
  DefaultSeoShareImageCtime = 'defaultSeo___shareImage___ctime',
  DefaultSeoShareImageBirthtime = 'defaultSeo___shareImage___birthtime',
  DefaultSeoShareImageBirthtimeMs = 'defaultSeo___shareImage___birthtimeMs',
  DefaultSeoShareImageBlksize = 'defaultSeo___shareImage___blksize',
  DefaultSeoShareImageBlocks = 'defaultSeo___shareImage___blocks',
  DefaultSeoShareImagePublicUrl = 'defaultSeo___shareImage___publicURL',
  DefaultSeoShareImageChildrenImageSharp = 'defaultSeo___shareImage___childrenImageSharp',
  DefaultSeoShareImageChildrenImageSharpGatsbyImageData = 'defaultSeo___shareImage___childrenImageSharp___gatsbyImageData',
  DefaultSeoShareImageChildrenImageSharpId = 'defaultSeo___shareImage___childrenImageSharp___id',
  DefaultSeoShareImageChildrenImageSharpChildren = 'defaultSeo___shareImage___childrenImageSharp___children',
  DefaultSeoShareImageChildImageSharpGatsbyImageData = 'defaultSeo___shareImage___childImageSharp___gatsbyImageData',
  DefaultSeoShareImageChildImageSharpId = 'defaultSeo___shareImage___childImageSharp___id',
  DefaultSeoShareImageChildImageSharpChildren = 'defaultSeo___shareImage___childImageSharp___children',
  DefaultSeoShareImageId = 'defaultSeo___shareImage___id',
  DefaultSeoShareImageParentId = 'defaultSeo___shareImage___parent___id',
  DefaultSeoShareImageParentChildren = 'defaultSeo___shareImage___parent___children',
  DefaultSeoShareImageChildren = 'defaultSeo___shareImage___children',
  DefaultSeoShareImageChildrenId = 'defaultSeo___shareImage___children___id',
  DefaultSeoShareImageChildrenChildren = 'defaultSeo___shareImage___children___children',
  DefaultSeoShareImageInternalContent = 'defaultSeo___shareImage___internal___content',
  DefaultSeoShareImageInternalContentDigest = 'defaultSeo___shareImage___internal___contentDigest',
  DefaultSeoShareImageInternalDescription = 'defaultSeo___shareImage___internal___description',
  DefaultSeoShareImageInternalFieldOwners = 'defaultSeo___shareImage___internal___fieldOwners',
  DefaultSeoShareImageInternalIgnoreType = 'defaultSeo___shareImage___internal___ignoreType',
  DefaultSeoShareImageInternalMediaType = 'defaultSeo___shareImage___internal___mediaType',
  DefaultSeoShareImageInternalOwner = 'defaultSeo___shareImage___internal___owner',
  DefaultSeoShareImageInternalType = 'defaultSeo___shareImage___internal___type',
  FaviconSourceInstanceName = 'favicon___sourceInstanceName',
  FaviconAbsolutePath = 'favicon___absolutePath',
  FaviconRelativePath = 'favicon___relativePath',
  FaviconExtension = 'favicon___extension',
  FaviconSize = 'favicon___size',
  FaviconPrettySize = 'favicon___prettySize',
  FaviconModifiedTime = 'favicon___modifiedTime',
  FaviconAccessTime = 'favicon___accessTime',
  FaviconChangeTime = 'favicon___changeTime',
  FaviconBirthTime = 'favicon___birthTime',
  FaviconRoot = 'favicon___root',
  FaviconDir = 'favicon___dir',
  FaviconBase = 'favicon___base',
  FaviconExt = 'favicon___ext',
  FaviconName = 'favicon___name',
  FaviconRelativeDirectory = 'favicon___relativeDirectory',
  FaviconDev = 'favicon___dev',
  FaviconMode = 'favicon___mode',
  FaviconNlink = 'favicon___nlink',
  FaviconUid = 'favicon___uid',
  FaviconGid = 'favicon___gid',
  FaviconRdev = 'favicon___rdev',
  FaviconIno = 'favicon___ino',
  FaviconAtimeMs = 'favicon___atimeMs',
  FaviconMtimeMs = 'favicon___mtimeMs',
  FaviconCtimeMs = 'favicon___ctimeMs',
  FaviconAtime = 'favicon___atime',
  FaviconMtime = 'favicon___mtime',
  FaviconCtime = 'favicon___ctime',
  FaviconBirthtime = 'favicon___birthtime',
  FaviconBirthtimeMs = 'favicon___birthtimeMs',
  FaviconBlksize = 'favicon___blksize',
  FaviconBlocks = 'favicon___blocks',
  FaviconPublicUrl = 'favicon___publicURL',
  FaviconChildrenImageSharp = 'favicon___childrenImageSharp',
  FaviconChildrenImageSharpFixedBase64 = 'favicon___childrenImageSharp___fixed___base64',
  FaviconChildrenImageSharpFixedTracedSvg = 'favicon___childrenImageSharp___fixed___tracedSVG',
  FaviconChildrenImageSharpFixedAspectRatio = 'favicon___childrenImageSharp___fixed___aspectRatio',
  FaviconChildrenImageSharpFixedWidth = 'favicon___childrenImageSharp___fixed___width',
  FaviconChildrenImageSharpFixedHeight = 'favicon___childrenImageSharp___fixed___height',
  FaviconChildrenImageSharpFixedSrc = 'favicon___childrenImageSharp___fixed___src',
  FaviconChildrenImageSharpFixedSrcSet = 'favicon___childrenImageSharp___fixed___srcSet',
  FaviconChildrenImageSharpFixedSrcWebp = 'favicon___childrenImageSharp___fixed___srcWebp',
  FaviconChildrenImageSharpFixedSrcSetWebp = 'favicon___childrenImageSharp___fixed___srcSetWebp',
  FaviconChildrenImageSharpFixedOriginalName = 'favicon___childrenImageSharp___fixed___originalName',
  FaviconChildrenImageSharpResolutionsBase64 = 'favicon___childrenImageSharp___resolutions___base64',
  FaviconChildrenImageSharpResolutionsTracedSvg = 'favicon___childrenImageSharp___resolutions___tracedSVG',
  FaviconChildrenImageSharpResolutionsAspectRatio = 'favicon___childrenImageSharp___resolutions___aspectRatio',
  FaviconChildrenImageSharpResolutionsWidth = 'favicon___childrenImageSharp___resolutions___width',
  FaviconChildrenImageSharpResolutionsHeight = 'favicon___childrenImageSharp___resolutions___height',
  FaviconChildrenImageSharpResolutionsSrc = 'favicon___childrenImageSharp___resolutions___src',
  FaviconChildrenImageSharpResolutionsSrcSet = 'favicon___childrenImageSharp___resolutions___srcSet',
  FaviconChildrenImageSharpResolutionsSrcWebp = 'favicon___childrenImageSharp___resolutions___srcWebp',
  FaviconChildrenImageSharpResolutionsSrcSetWebp = 'favicon___childrenImageSharp___resolutions___srcSetWebp',
  FaviconChildrenImageSharpResolutionsOriginalName = 'favicon___childrenImageSharp___resolutions___originalName',
  FaviconChildrenImageSharpFluidBase64 = 'favicon___childrenImageSharp___fluid___base64',
  FaviconChildrenImageSharpFluidTracedSvg = 'favicon___childrenImageSharp___fluid___tracedSVG',
  FaviconChildrenImageSharpFluidAspectRatio = 'favicon___childrenImageSharp___fluid___aspectRatio',
  FaviconChildrenImageSharpFluidSrc = 'favicon___childrenImageSharp___fluid___src',
  FaviconChildrenImageSharpFluidSrcSet = 'favicon___childrenImageSharp___fluid___srcSet',
  FaviconChildrenImageSharpFluidSrcWebp = 'favicon___childrenImageSharp___fluid___srcWebp',
  FaviconChildrenImageSharpFluidSrcSetWebp = 'favicon___childrenImageSharp___fluid___srcSetWebp',
  FaviconChildrenImageSharpFluidSizes = 'favicon___childrenImageSharp___fluid___sizes',
  FaviconChildrenImageSharpFluidOriginalImg = 'favicon___childrenImageSharp___fluid___originalImg',
  FaviconChildrenImageSharpFluidOriginalName = 'favicon___childrenImageSharp___fluid___originalName',
  FaviconChildrenImageSharpFluidPresentationWidth = 'favicon___childrenImageSharp___fluid___presentationWidth',
  FaviconChildrenImageSharpFluidPresentationHeight = 'favicon___childrenImageSharp___fluid___presentationHeight',
  FaviconChildrenImageSharpSizesBase64 = 'favicon___childrenImageSharp___sizes___base64',
  FaviconChildrenImageSharpSizesTracedSvg = 'favicon___childrenImageSharp___sizes___tracedSVG',
  FaviconChildrenImageSharpSizesAspectRatio = 'favicon___childrenImageSharp___sizes___aspectRatio',
  FaviconChildrenImageSharpSizesSrc = 'favicon___childrenImageSharp___sizes___src',
  FaviconChildrenImageSharpSizesSrcSet = 'favicon___childrenImageSharp___sizes___srcSet',
  FaviconChildrenImageSharpSizesSrcWebp = 'favicon___childrenImageSharp___sizes___srcWebp',
  FaviconChildrenImageSharpSizesSrcSetWebp = 'favicon___childrenImageSharp___sizes___srcSetWebp',
  FaviconChildrenImageSharpSizesSizes = 'favicon___childrenImageSharp___sizes___sizes',
  FaviconChildrenImageSharpSizesOriginalImg = 'favicon___childrenImageSharp___sizes___originalImg',
  FaviconChildrenImageSharpSizesOriginalName = 'favicon___childrenImageSharp___sizes___originalName',
  FaviconChildrenImageSharpSizesPresentationWidth = 'favicon___childrenImageSharp___sizes___presentationWidth',
  FaviconChildrenImageSharpSizesPresentationHeight = 'favicon___childrenImageSharp___sizes___presentationHeight',
  FaviconChildrenImageSharpGatsbyImageData = 'favicon___childrenImageSharp___gatsbyImageData',
  FaviconChildrenImageSharpOriginalWidth = 'favicon___childrenImageSharp___original___width',
  FaviconChildrenImageSharpOriginalHeight = 'favicon___childrenImageSharp___original___height',
  FaviconChildrenImageSharpOriginalSrc = 'favicon___childrenImageSharp___original___src',
  FaviconChildrenImageSharpResizeSrc = 'favicon___childrenImageSharp___resize___src',
  FaviconChildrenImageSharpResizeTracedSvg = 'favicon___childrenImageSharp___resize___tracedSVG',
  FaviconChildrenImageSharpResizeWidth = 'favicon___childrenImageSharp___resize___width',
  FaviconChildrenImageSharpResizeHeight = 'favicon___childrenImageSharp___resize___height',
  FaviconChildrenImageSharpResizeAspectRatio = 'favicon___childrenImageSharp___resize___aspectRatio',
  FaviconChildrenImageSharpResizeOriginalName = 'favicon___childrenImageSharp___resize___originalName',
  FaviconChildrenImageSharpId = 'favicon___childrenImageSharp___id',
  FaviconChildrenImageSharpParentId = 'favicon___childrenImageSharp___parent___id',
  FaviconChildrenImageSharpParentChildren = 'favicon___childrenImageSharp___parent___children',
  FaviconChildrenImageSharpChildren = 'favicon___childrenImageSharp___children',
  FaviconChildrenImageSharpChildrenId = 'favicon___childrenImageSharp___children___id',
  FaviconChildrenImageSharpChildrenChildren = 'favicon___childrenImageSharp___children___children',
  FaviconChildrenImageSharpInternalContent = 'favicon___childrenImageSharp___internal___content',
  FaviconChildrenImageSharpInternalContentDigest = 'favicon___childrenImageSharp___internal___contentDigest',
  FaviconChildrenImageSharpInternalDescription = 'favicon___childrenImageSharp___internal___description',
  FaviconChildrenImageSharpInternalFieldOwners = 'favicon___childrenImageSharp___internal___fieldOwners',
  FaviconChildrenImageSharpInternalIgnoreType = 'favicon___childrenImageSharp___internal___ignoreType',
  FaviconChildrenImageSharpInternalMediaType = 'favicon___childrenImageSharp___internal___mediaType',
  FaviconChildrenImageSharpInternalOwner = 'favicon___childrenImageSharp___internal___owner',
  FaviconChildrenImageSharpInternalType = 'favicon___childrenImageSharp___internal___type',
  FaviconChildImageSharpFixedBase64 = 'favicon___childImageSharp___fixed___base64',
  FaviconChildImageSharpFixedTracedSvg = 'favicon___childImageSharp___fixed___tracedSVG',
  FaviconChildImageSharpFixedAspectRatio = 'favicon___childImageSharp___fixed___aspectRatio',
  FaviconChildImageSharpFixedWidth = 'favicon___childImageSharp___fixed___width',
  FaviconChildImageSharpFixedHeight = 'favicon___childImageSharp___fixed___height',
  FaviconChildImageSharpFixedSrc = 'favicon___childImageSharp___fixed___src',
  FaviconChildImageSharpFixedSrcSet = 'favicon___childImageSharp___fixed___srcSet',
  FaviconChildImageSharpFixedSrcWebp = 'favicon___childImageSharp___fixed___srcWebp',
  FaviconChildImageSharpFixedSrcSetWebp = 'favicon___childImageSharp___fixed___srcSetWebp',
  FaviconChildImageSharpFixedOriginalName = 'favicon___childImageSharp___fixed___originalName',
  FaviconChildImageSharpResolutionsBase64 = 'favicon___childImageSharp___resolutions___base64',
  FaviconChildImageSharpResolutionsTracedSvg = 'favicon___childImageSharp___resolutions___tracedSVG',
  FaviconChildImageSharpResolutionsAspectRatio = 'favicon___childImageSharp___resolutions___aspectRatio',
  FaviconChildImageSharpResolutionsWidth = 'favicon___childImageSharp___resolutions___width',
  FaviconChildImageSharpResolutionsHeight = 'favicon___childImageSharp___resolutions___height',
  FaviconChildImageSharpResolutionsSrc = 'favicon___childImageSharp___resolutions___src',
  FaviconChildImageSharpResolutionsSrcSet = 'favicon___childImageSharp___resolutions___srcSet',
  FaviconChildImageSharpResolutionsSrcWebp = 'favicon___childImageSharp___resolutions___srcWebp',
  FaviconChildImageSharpResolutionsSrcSetWebp = 'favicon___childImageSharp___resolutions___srcSetWebp',
  FaviconChildImageSharpResolutionsOriginalName = 'favicon___childImageSharp___resolutions___originalName',
  FaviconChildImageSharpFluidBase64 = 'favicon___childImageSharp___fluid___base64',
  FaviconChildImageSharpFluidTracedSvg = 'favicon___childImageSharp___fluid___tracedSVG',
  FaviconChildImageSharpFluidAspectRatio = 'favicon___childImageSharp___fluid___aspectRatio',
  FaviconChildImageSharpFluidSrc = 'favicon___childImageSharp___fluid___src',
  FaviconChildImageSharpFluidSrcSet = 'favicon___childImageSharp___fluid___srcSet',
  FaviconChildImageSharpFluidSrcWebp = 'favicon___childImageSharp___fluid___srcWebp',
  FaviconChildImageSharpFluidSrcSetWebp = 'favicon___childImageSharp___fluid___srcSetWebp',
  FaviconChildImageSharpFluidSizes = 'favicon___childImageSharp___fluid___sizes',
  FaviconChildImageSharpFluidOriginalImg = 'favicon___childImageSharp___fluid___originalImg',
  FaviconChildImageSharpFluidOriginalName = 'favicon___childImageSharp___fluid___originalName',
  FaviconChildImageSharpFluidPresentationWidth = 'favicon___childImageSharp___fluid___presentationWidth',
  FaviconChildImageSharpFluidPresentationHeight = 'favicon___childImageSharp___fluid___presentationHeight',
  FaviconChildImageSharpSizesBase64 = 'favicon___childImageSharp___sizes___base64',
  FaviconChildImageSharpSizesTracedSvg = 'favicon___childImageSharp___sizes___tracedSVG',
  FaviconChildImageSharpSizesAspectRatio = 'favicon___childImageSharp___sizes___aspectRatio',
  FaviconChildImageSharpSizesSrc = 'favicon___childImageSharp___sizes___src',
  FaviconChildImageSharpSizesSrcSet = 'favicon___childImageSharp___sizes___srcSet',
  FaviconChildImageSharpSizesSrcWebp = 'favicon___childImageSharp___sizes___srcWebp',
  FaviconChildImageSharpSizesSrcSetWebp = 'favicon___childImageSharp___sizes___srcSetWebp',
  FaviconChildImageSharpSizesSizes = 'favicon___childImageSharp___sizes___sizes',
  FaviconChildImageSharpSizesOriginalImg = 'favicon___childImageSharp___sizes___originalImg',
  FaviconChildImageSharpSizesOriginalName = 'favicon___childImageSharp___sizes___originalName',
  FaviconChildImageSharpSizesPresentationWidth = 'favicon___childImageSharp___sizes___presentationWidth',
  FaviconChildImageSharpSizesPresentationHeight = 'favicon___childImageSharp___sizes___presentationHeight',
  FaviconChildImageSharpGatsbyImageData = 'favicon___childImageSharp___gatsbyImageData',
  FaviconChildImageSharpOriginalWidth = 'favicon___childImageSharp___original___width',
  FaviconChildImageSharpOriginalHeight = 'favicon___childImageSharp___original___height',
  FaviconChildImageSharpOriginalSrc = 'favicon___childImageSharp___original___src',
  FaviconChildImageSharpResizeSrc = 'favicon___childImageSharp___resize___src',
  FaviconChildImageSharpResizeTracedSvg = 'favicon___childImageSharp___resize___tracedSVG',
  FaviconChildImageSharpResizeWidth = 'favicon___childImageSharp___resize___width',
  FaviconChildImageSharpResizeHeight = 'favicon___childImageSharp___resize___height',
  FaviconChildImageSharpResizeAspectRatio = 'favicon___childImageSharp___resize___aspectRatio',
  FaviconChildImageSharpResizeOriginalName = 'favicon___childImageSharp___resize___originalName',
  FaviconChildImageSharpId = 'favicon___childImageSharp___id',
  FaviconChildImageSharpParentId = 'favicon___childImageSharp___parent___id',
  FaviconChildImageSharpParentChildren = 'favicon___childImageSharp___parent___children',
  FaviconChildImageSharpChildren = 'favicon___childImageSharp___children',
  FaviconChildImageSharpChildrenId = 'favicon___childImageSharp___children___id',
  FaviconChildImageSharpChildrenChildren = 'favicon___childImageSharp___children___children',
  FaviconChildImageSharpInternalContent = 'favicon___childImageSharp___internal___content',
  FaviconChildImageSharpInternalContentDigest = 'favicon___childImageSharp___internal___contentDigest',
  FaviconChildImageSharpInternalDescription = 'favicon___childImageSharp___internal___description',
  FaviconChildImageSharpInternalFieldOwners = 'favicon___childImageSharp___internal___fieldOwners',
  FaviconChildImageSharpInternalIgnoreType = 'favicon___childImageSharp___internal___ignoreType',
  FaviconChildImageSharpInternalMediaType = 'favicon___childImageSharp___internal___mediaType',
  FaviconChildImageSharpInternalOwner = 'favicon___childImageSharp___internal___owner',
  FaviconChildImageSharpInternalType = 'favicon___childImageSharp___internal___type',
  FaviconId = 'favicon___id',
  FaviconParentId = 'favicon___parent___id',
  FaviconParentParentId = 'favicon___parent___parent___id',
  FaviconParentParentChildren = 'favicon___parent___parent___children',
  FaviconParentChildren = 'favicon___parent___children',
  FaviconParentChildrenId = 'favicon___parent___children___id',
  FaviconParentChildrenChildren = 'favicon___parent___children___children',
  FaviconParentInternalContent = 'favicon___parent___internal___content',
  FaviconParentInternalContentDigest = 'favicon___parent___internal___contentDigest',
  FaviconParentInternalDescription = 'favicon___parent___internal___description',
  FaviconParentInternalFieldOwners = 'favicon___parent___internal___fieldOwners',
  FaviconParentInternalIgnoreType = 'favicon___parent___internal___ignoreType',
  FaviconParentInternalMediaType = 'favicon___parent___internal___mediaType',
  FaviconParentInternalOwner = 'favicon___parent___internal___owner',
  FaviconParentInternalType = 'favicon___parent___internal___type',
  FaviconChildren = 'favicon___children',
  FaviconChildrenId = 'favicon___children___id',
  FaviconChildrenParentId = 'favicon___children___parent___id',
  FaviconChildrenParentChildren = 'favicon___children___parent___children',
  FaviconChildrenChildren = 'favicon___children___children',
  FaviconChildrenChildrenId = 'favicon___children___children___id',
  FaviconChildrenChildrenChildren = 'favicon___children___children___children',
  FaviconChildrenInternalContent = 'favicon___children___internal___content',
  FaviconChildrenInternalContentDigest = 'favicon___children___internal___contentDigest',
  FaviconChildrenInternalDescription = 'favicon___children___internal___description',
  FaviconChildrenInternalFieldOwners = 'favicon___children___internal___fieldOwners',
  FaviconChildrenInternalIgnoreType = 'favicon___children___internal___ignoreType',
  FaviconChildrenInternalMediaType = 'favicon___children___internal___mediaType',
  FaviconChildrenInternalOwner = 'favicon___children___internal___owner',
  FaviconChildrenInternalType = 'favicon___children___internal___type',
  FaviconInternalContent = 'favicon___internal___content',
  FaviconInternalContentDigest = 'favicon___internal___contentDigest',
  FaviconInternalDescription = 'favicon___internal___description',
  FaviconInternalFieldOwners = 'favicon___internal___fieldOwners',
  FaviconInternalIgnoreType = 'favicon___internal___ignoreType',
  FaviconInternalMediaType = 'favicon___internal___mediaType',
  FaviconInternalOwner = 'favicon___internal___owner',
  FaviconInternalType = 'favicon___internal___type',
  StrapiId = 'strapiId'
}

export type StrapiGlobalFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  siteName?: Maybe<StringQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  defaultSeo?: Maybe<StrapiGlobalDefaultSeoFilterInput>;
  favicon?: Maybe<FileFilterInput>;
  strapiId?: Maybe<IntQueryOperatorInput>;
};

export type StrapiGlobalGroupConnection = {
  __typename?: 'StrapiGlobalGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<StrapiGlobalEdge>;
  nodes: Array<StrapiGlobal>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type StrapiGlobalSortInput = {
  fields?: Maybe<Array<Maybe<StrapiGlobalFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type StrapiHomepage = Node & {
  __typename?: 'StrapiHomepage';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  created_at?: Maybe<Scalars['Date']>;
  updated_at?: Maybe<Scalars['Date']>;
  seo?: Maybe<StrapiHomepageSeo>;
  hero?: Maybe<StrapiHomepageHero>;
  strapiId?: Maybe<Scalars['Int']>;
};


export type StrapiHomepageCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiHomepageUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiHomepageConnection = {
  __typename?: 'StrapiHomepageConnection';
  totalCount: Scalars['Int'];
  edges: Array<StrapiHomepageEdge>;
  nodes: Array<StrapiHomepage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<StrapiHomepageGroupConnection>;
};


export type StrapiHomepageConnectionDistinctArgs = {
  field: StrapiHomepageFieldsEnum;
};


export type StrapiHomepageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: StrapiHomepageFieldsEnum;
};

export type StrapiHomepageEdge = {
  __typename?: 'StrapiHomepageEdge';
  next?: Maybe<StrapiHomepage>;
  node: StrapiHomepage;
  previous?: Maybe<StrapiHomepage>;
};

export enum StrapiHomepageFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  CreatedAt = 'created_at',
  UpdatedAt = 'updated_at',
  SeoId = 'seo___id',
  SeoMetaTitle = 'seo___metaTitle',
  SeoMetaDescription = 'seo___metaDescription',
  SeoShareImageSourceInstanceName = 'seo___shareImage___sourceInstanceName',
  SeoShareImageAbsolutePath = 'seo___shareImage___absolutePath',
  SeoShareImageRelativePath = 'seo___shareImage___relativePath',
  SeoShareImageExtension = 'seo___shareImage___extension',
  SeoShareImageSize = 'seo___shareImage___size',
  SeoShareImagePrettySize = 'seo___shareImage___prettySize',
  SeoShareImageModifiedTime = 'seo___shareImage___modifiedTime',
  SeoShareImageAccessTime = 'seo___shareImage___accessTime',
  SeoShareImageChangeTime = 'seo___shareImage___changeTime',
  SeoShareImageBirthTime = 'seo___shareImage___birthTime',
  SeoShareImageRoot = 'seo___shareImage___root',
  SeoShareImageDir = 'seo___shareImage___dir',
  SeoShareImageBase = 'seo___shareImage___base',
  SeoShareImageExt = 'seo___shareImage___ext',
  SeoShareImageName = 'seo___shareImage___name',
  SeoShareImageRelativeDirectory = 'seo___shareImage___relativeDirectory',
  SeoShareImageDev = 'seo___shareImage___dev',
  SeoShareImageMode = 'seo___shareImage___mode',
  SeoShareImageNlink = 'seo___shareImage___nlink',
  SeoShareImageUid = 'seo___shareImage___uid',
  SeoShareImageGid = 'seo___shareImage___gid',
  SeoShareImageRdev = 'seo___shareImage___rdev',
  SeoShareImageIno = 'seo___shareImage___ino',
  SeoShareImageAtimeMs = 'seo___shareImage___atimeMs',
  SeoShareImageMtimeMs = 'seo___shareImage___mtimeMs',
  SeoShareImageCtimeMs = 'seo___shareImage___ctimeMs',
  SeoShareImageAtime = 'seo___shareImage___atime',
  SeoShareImageMtime = 'seo___shareImage___mtime',
  SeoShareImageCtime = 'seo___shareImage___ctime',
  SeoShareImageBirthtime = 'seo___shareImage___birthtime',
  SeoShareImageBirthtimeMs = 'seo___shareImage___birthtimeMs',
  SeoShareImageBlksize = 'seo___shareImage___blksize',
  SeoShareImageBlocks = 'seo___shareImage___blocks',
  SeoShareImagePublicUrl = 'seo___shareImage___publicURL',
  SeoShareImageChildrenImageSharp = 'seo___shareImage___childrenImageSharp',
  SeoShareImageChildrenImageSharpGatsbyImageData = 'seo___shareImage___childrenImageSharp___gatsbyImageData',
  SeoShareImageChildrenImageSharpId = 'seo___shareImage___childrenImageSharp___id',
  SeoShareImageChildrenImageSharpChildren = 'seo___shareImage___childrenImageSharp___children',
  SeoShareImageChildImageSharpGatsbyImageData = 'seo___shareImage___childImageSharp___gatsbyImageData',
  SeoShareImageChildImageSharpId = 'seo___shareImage___childImageSharp___id',
  SeoShareImageChildImageSharpChildren = 'seo___shareImage___childImageSharp___children',
  SeoShareImageId = 'seo___shareImage___id',
  SeoShareImageParentId = 'seo___shareImage___parent___id',
  SeoShareImageParentChildren = 'seo___shareImage___parent___children',
  SeoShareImageChildren = 'seo___shareImage___children',
  SeoShareImageChildrenId = 'seo___shareImage___children___id',
  SeoShareImageChildrenChildren = 'seo___shareImage___children___children',
  SeoShareImageInternalContent = 'seo___shareImage___internal___content',
  SeoShareImageInternalContentDigest = 'seo___shareImage___internal___contentDigest',
  SeoShareImageInternalDescription = 'seo___shareImage___internal___description',
  SeoShareImageInternalFieldOwners = 'seo___shareImage___internal___fieldOwners',
  SeoShareImageInternalIgnoreType = 'seo___shareImage___internal___ignoreType',
  SeoShareImageInternalMediaType = 'seo___shareImage___internal___mediaType',
  SeoShareImageInternalOwner = 'seo___shareImage___internal___owner',
  SeoShareImageInternalType = 'seo___shareImage___internal___type',
  HeroId = 'hero___id',
  HeroTitle = 'hero___title',
  StrapiId = 'strapiId'
}

export type StrapiHomepageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  seo?: Maybe<StrapiHomepageSeoFilterInput>;
  hero?: Maybe<StrapiHomepageHeroFilterInput>;
  strapiId?: Maybe<IntQueryOperatorInput>;
};

export type StrapiHomepageGroupConnection = {
  __typename?: 'StrapiHomepageGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<StrapiHomepageEdge>;
  nodes: Array<StrapiHomepage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type StrapiHomepageHero = {
  __typename?: 'StrapiHomepageHero';
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

export type StrapiHomepageHeroFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type StrapiHomepageSeo = {
  __typename?: 'StrapiHomepageSeo';
  id?: Maybe<Scalars['Int']>;
  metaTitle?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  shareImage?: Maybe<File>;
};

export type StrapiHomepageSeoFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  metaTitle?: Maybe<StringQueryOperatorInput>;
  metaDescription?: Maybe<StringQueryOperatorInput>;
  shareImage?: Maybe<FileFilterInput>;
};

export type StrapiHomepageSortInput = {
  fields?: Maybe<Array<Maybe<StrapiHomepageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type StrapiWriter = Node & {
  __typename?: 'StrapiWriter';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Date']>;
  updated_at?: Maybe<Scalars['Date']>;
  picture?: Maybe<File>;
  articles?: Maybe<Array<Maybe<StrapiWriterArticles>>>;
  strapiId?: Maybe<Scalars['Int']>;
};


export type StrapiWriterCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiWriterUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiWriterArticles = {
  __typename?: 'StrapiWriterArticles';
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['Date']>;
  status?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['Int']>;
  author?: Maybe<Scalars['Int']>;
  keywords?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Date']>;
  updated_at?: Maybe<Scalars['Date']>;
  image?: Maybe<File>;
};


export type StrapiWriterArticlesPublishedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiWriterArticlesCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type StrapiWriterArticlesUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type StrapiWriterArticlesFilterInput = {
  id?: Maybe<IntQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  publishedAt?: Maybe<DateQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  category?: Maybe<IntQueryOperatorInput>;
  author?: Maybe<IntQueryOperatorInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  image?: Maybe<FileFilterInput>;
};

export type StrapiWriterArticlesFilterListInput = {
  elemMatch?: Maybe<StrapiWriterArticlesFilterInput>;
};

export type StrapiWriterConnection = {
  __typename?: 'StrapiWriterConnection';
  totalCount: Scalars['Int'];
  edges: Array<StrapiWriterEdge>;
  nodes: Array<StrapiWriter>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<StrapiWriterGroupConnection>;
};


export type StrapiWriterConnectionDistinctArgs = {
  field: StrapiWriterFieldsEnum;
};


export type StrapiWriterConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: StrapiWriterFieldsEnum;
};

export type StrapiWriterEdge = {
  __typename?: 'StrapiWriterEdge';
  next?: Maybe<StrapiWriter>;
  node: StrapiWriter;
  previous?: Maybe<StrapiWriter>;
};

export enum StrapiWriterFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Name = 'name',
  Email = 'email',
  Description = 'description',
  Slug = 'slug',
  CreatedAt = 'created_at',
  UpdatedAt = 'updated_at',
  PictureSourceInstanceName = 'picture___sourceInstanceName',
  PictureAbsolutePath = 'picture___absolutePath',
  PictureRelativePath = 'picture___relativePath',
  PictureExtension = 'picture___extension',
  PictureSize = 'picture___size',
  PicturePrettySize = 'picture___prettySize',
  PictureModifiedTime = 'picture___modifiedTime',
  PictureAccessTime = 'picture___accessTime',
  PictureChangeTime = 'picture___changeTime',
  PictureBirthTime = 'picture___birthTime',
  PictureRoot = 'picture___root',
  PictureDir = 'picture___dir',
  PictureBase = 'picture___base',
  PictureExt = 'picture___ext',
  PictureName = 'picture___name',
  PictureRelativeDirectory = 'picture___relativeDirectory',
  PictureDev = 'picture___dev',
  PictureMode = 'picture___mode',
  PictureNlink = 'picture___nlink',
  PictureUid = 'picture___uid',
  PictureGid = 'picture___gid',
  PictureRdev = 'picture___rdev',
  PictureIno = 'picture___ino',
  PictureAtimeMs = 'picture___atimeMs',
  PictureMtimeMs = 'picture___mtimeMs',
  PictureCtimeMs = 'picture___ctimeMs',
  PictureAtime = 'picture___atime',
  PictureMtime = 'picture___mtime',
  PictureCtime = 'picture___ctime',
  PictureBirthtime = 'picture___birthtime',
  PictureBirthtimeMs = 'picture___birthtimeMs',
  PictureBlksize = 'picture___blksize',
  PictureBlocks = 'picture___blocks',
  PicturePublicUrl = 'picture___publicURL',
  PictureChildrenImageSharp = 'picture___childrenImageSharp',
  PictureChildrenImageSharpFixedBase64 = 'picture___childrenImageSharp___fixed___base64',
  PictureChildrenImageSharpFixedTracedSvg = 'picture___childrenImageSharp___fixed___tracedSVG',
  PictureChildrenImageSharpFixedAspectRatio = 'picture___childrenImageSharp___fixed___aspectRatio',
  PictureChildrenImageSharpFixedWidth = 'picture___childrenImageSharp___fixed___width',
  PictureChildrenImageSharpFixedHeight = 'picture___childrenImageSharp___fixed___height',
  PictureChildrenImageSharpFixedSrc = 'picture___childrenImageSharp___fixed___src',
  PictureChildrenImageSharpFixedSrcSet = 'picture___childrenImageSharp___fixed___srcSet',
  PictureChildrenImageSharpFixedSrcWebp = 'picture___childrenImageSharp___fixed___srcWebp',
  PictureChildrenImageSharpFixedSrcSetWebp = 'picture___childrenImageSharp___fixed___srcSetWebp',
  PictureChildrenImageSharpFixedOriginalName = 'picture___childrenImageSharp___fixed___originalName',
  PictureChildrenImageSharpResolutionsBase64 = 'picture___childrenImageSharp___resolutions___base64',
  PictureChildrenImageSharpResolutionsTracedSvg = 'picture___childrenImageSharp___resolutions___tracedSVG',
  PictureChildrenImageSharpResolutionsAspectRatio = 'picture___childrenImageSharp___resolutions___aspectRatio',
  PictureChildrenImageSharpResolutionsWidth = 'picture___childrenImageSharp___resolutions___width',
  PictureChildrenImageSharpResolutionsHeight = 'picture___childrenImageSharp___resolutions___height',
  PictureChildrenImageSharpResolutionsSrc = 'picture___childrenImageSharp___resolutions___src',
  PictureChildrenImageSharpResolutionsSrcSet = 'picture___childrenImageSharp___resolutions___srcSet',
  PictureChildrenImageSharpResolutionsSrcWebp = 'picture___childrenImageSharp___resolutions___srcWebp',
  PictureChildrenImageSharpResolutionsSrcSetWebp = 'picture___childrenImageSharp___resolutions___srcSetWebp',
  PictureChildrenImageSharpResolutionsOriginalName = 'picture___childrenImageSharp___resolutions___originalName',
  PictureChildrenImageSharpFluidBase64 = 'picture___childrenImageSharp___fluid___base64',
  PictureChildrenImageSharpFluidTracedSvg = 'picture___childrenImageSharp___fluid___tracedSVG',
  PictureChildrenImageSharpFluidAspectRatio = 'picture___childrenImageSharp___fluid___aspectRatio',
  PictureChildrenImageSharpFluidSrc = 'picture___childrenImageSharp___fluid___src',
  PictureChildrenImageSharpFluidSrcSet = 'picture___childrenImageSharp___fluid___srcSet',
  PictureChildrenImageSharpFluidSrcWebp = 'picture___childrenImageSharp___fluid___srcWebp',
  PictureChildrenImageSharpFluidSrcSetWebp = 'picture___childrenImageSharp___fluid___srcSetWebp',
  PictureChildrenImageSharpFluidSizes = 'picture___childrenImageSharp___fluid___sizes',
  PictureChildrenImageSharpFluidOriginalImg = 'picture___childrenImageSharp___fluid___originalImg',
  PictureChildrenImageSharpFluidOriginalName = 'picture___childrenImageSharp___fluid___originalName',
  PictureChildrenImageSharpFluidPresentationWidth = 'picture___childrenImageSharp___fluid___presentationWidth',
  PictureChildrenImageSharpFluidPresentationHeight = 'picture___childrenImageSharp___fluid___presentationHeight',
  PictureChildrenImageSharpSizesBase64 = 'picture___childrenImageSharp___sizes___base64',
  PictureChildrenImageSharpSizesTracedSvg = 'picture___childrenImageSharp___sizes___tracedSVG',
  PictureChildrenImageSharpSizesAspectRatio = 'picture___childrenImageSharp___sizes___aspectRatio',
  PictureChildrenImageSharpSizesSrc = 'picture___childrenImageSharp___sizes___src',
  PictureChildrenImageSharpSizesSrcSet = 'picture___childrenImageSharp___sizes___srcSet',
  PictureChildrenImageSharpSizesSrcWebp = 'picture___childrenImageSharp___sizes___srcWebp',
  PictureChildrenImageSharpSizesSrcSetWebp = 'picture___childrenImageSharp___sizes___srcSetWebp',
  PictureChildrenImageSharpSizesSizes = 'picture___childrenImageSharp___sizes___sizes',
  PictureChildrenImageSharpSizesOriginalImg = 'picture___childrenImageSharp___sizes___originalImg',
  PictureChildrenImageSharpSizesOriginalName = 'picture___childrenImageSharp___sizes___originalName',
  PictureChildrenImageSharpSizesPresentationWidth = 'picture___childrenImageSharp___sizes___presentationWidth',
  PictureChildrenImageSharpSizesPresentationHeight = 'picture___childrenImageSharp___sizes___presentationHeight',
  PictureChildrenImageSharpGatsbyImageData = 'picture___childrenImageSharp___gatsbyImageData',
  PictureChildrenImageSharpOriginalWidth = 'picture___childrenImageSharp___original___width',
  PictureChildrenImageSharpOriginalHeight = 'picture___childrenImageSharp___original___height',
  PictureChildrenImageSharpOriginalSrc = 'picture___childrenImageSharp___original___src',
  PictureChildrenImageSharpResizeSrc = 'picture___childrenImageSharp___resize___src',
  PictureChildrenImageSharpResizeTracedSvg = 'picture___childrenImageSharp___resize___tracedSVG',
  PictureChildrenImageSharpResizeWidth = 'picture___childrenImageSharp___resize___width',
  PictureChildrenImageSharpResizeHeight = 'picture___childrenImageSharp___resize___height',
  PictureChildrenImageSharpResizeAspectRatio = 'picture___childrenImageSharp___resize___aspectRatio',
  PictureChildrenImageSharpResizeOriginalName = 'picture___childrenImageSharp___resize___originalName',
  PictureChildrenImageSharpId = 'picture___childrenImageSharp___id',
  PictureChildrenImageSharpParentId = 'picture___childrenImageSharp___parent___id',
  PictureChildrenImageSharpParentChildren = 'picture___childrenImageSharp___parent___children',
  PictureChildrenImageSharpChildren = 'picture___childrenImageSharp___children',
  PictureChildrenImageSharpChildrenId = 'picture___childrenImageSharp___children___id',
  PictureChildrenImageSharpChildrenChildren = 'picture___childrenImageSharp___children___children',
  PictureChildrenImageSharpInternalContent = 'picture___childrenImageSharp___internal___content',
  PictureChildrenImageSharpInternalContentDigest = 'picture___childrenImageSharp___internal___contentDigest',
  PictureChildrenImageSharpInternalDescription = 'picture___childrenImageSharp___internal___description',
  PictureChildrenImageSharpInternalFieldOwners = 'picture___childrenImageSharp___internal___fieldOwners',
  PictureChildrenImageSharpInternalIgnoreType = 'picture___childrenImageSharp___internal___ignoreType',
  PictureChildrenImageSharpInternalMediaType = 'picture___childrenImageSharp___internal___mediaType',
  PictureChildrenImageSharpInternalOwner = 'picture___childrenImageSharp___internal___owner',
  PictureChildrenImageSharpInternalType = 'picture___childrenImageSharp___internal___type',
  PictureChildImageSharpFixedBase64 = 'picture___childImageSharp___fixed___base64',
  PictureChildImageSharpFixedTracedSvg = 'picture___childImageSharp___fixed___tracedSVG',
  PictureChildImageSharpFixedAspectRatio = 'picture___childImageSharp___fixed___aspectRatio',
  PictureChildImageSharpFixedWidth = 'picture___childImageSharp___fixed___width',
  PictureChildImageSharpFixedHeight = 'picture___childImageSharp___fixed___height',
  PictureChildImageSharpFixedSrc = 'picture___childImageSharp___fixed___src',
  PictureChildImageSharpFixedSrcSet = 'picture___childImageSharp___fixed___srcSet',
  PictureChildImageSharpFixedSrcWebp = 'picture___childImageSharp___fixed___srcWebp',
  PictureChildImageSharpFixedSrcSetWebp = 'picture___childImageSharp___fixed___srcSetWebp',
  PictureChildImageSharpFixedOriginalName = 'picture___childImageSharp___fixed___originalName',
  PictureChildImageSharpResolutionsBase64 = 'picture___childImageSharp___resolutions___base64',
  PictureChildImageSharpResolutionsTracedSvg = 'picture___childImageSharp___resolutions___tracedSVG',
  PictureChildImageSharpResolutionsAspectRatio = 'picture___childImageSharp___resolutions___aspectRatio',
  PictureChildImageSharpResolutionsWidth = 'picture___childImageSharp___resolutions___width',
  PictureChildImageSharpResolutionsHeight = 'picture___childImageSharp___resolutions___height',
  PictureChildImageSharpResolutionsSrc = 'picture___childImageSharp___resolutions___src',
  PictureChildImageSharpResolutionsSrcSet = 'picture___childImageSharp___resolutions___srcSet',
  PictureChildImageSharpResolutionsSrcWebp = 'picture___childImageSharp___resolutions___srcWebp',
  PictureChildImageSharpResolutionsSrcSetWebp = 'picture___childImageSharp___resolutions___srcSetWebp',
  PictureChildImageSharpResolutionsOriginalName = 'picture___childImageSharp___resolutions___originalName',
  PictureChildImageSharpFluidBase64 = 'picture___childImageSharp___fluid___base64',
  PictureChildImageSharpFluidTracedSvg = 'picture___childImageSharp___fluid___tracedSVG',
  PictureChildImageSharpFluidAspectRatio = 'picture___childImageSharp___fluid___aspectRatio',
  PictureChildImageSharpFluidSrc = 'picture___childImageSharp___fluid___src',
  PictureChildImageSharpFluidSrcSet = 'picture___childImageSharp___fluid___srcSet',
  PictureChildImageSharpFluidSrcWebp = 'picture___childImageSharp___fluid___srcWebp',
  PictureChildImageSharpFluidSrcSetWebp = 'picture___childImageSharp___fluid___srcSetWebp',
  PictureChildImageSharpFluidSizes = 'picture___childImageSharp___fluid___sizes',
  PictureChildImageSharpFluidOriginalImg = 'picture___childImageSharp___fluid___originalImg',
  PictureChildImageSharpFluidOriginalName = 'picture___childImageSharp___fluid___originalName',
  PictureChildImageSharpFluidPresentationWidth = 'picture___childImageSharp___fluid___presentationWidth',
  PictureChildImageSharpFluidPresentationHeight = 'picture___childImageSharp___fluid___presentationHeight',
  PictureChildImageSharpSizesBase64 = 'picture___childImageSharp___sizes___base64',
  PictureChildImageSharpSizesTracedSvg = 'picture___childImageSharp___sizes___tracedSVG',
  PictureChildImageSharpSizesAspectRatio = 'picture___childImageSharp___sizes___aspectRatio',
  PictureChildImageSharpSizesSrc = 'picture___childImageSharp___sizes___src',
  PictureChildImageSharpSizesSrcSet = 'picture___childImageSharp___sizes___srcSet',
  PictureChildImageSharpSizesSrcWebp = 'picture___childImageSharp___sizes___srcWebp',
  PictureChildImageSharpSizesSrcSetWebp = 'picture___childImageSharp___sizes___srcSetWebp',
  PictureChildImageSharpSizesSizes = 'picture___childImageSharp___sizes___sizes',
  PictureChildImageSharpSizesOriginalImg = 'picture___childImageSharp___sizes___originalImg',
  PictureChildImageSharpSizesOriginalName = 'picture___childImageSharp___sizes___originalName',
  PictureChildImageSharpSizesPresentationWidth = 'picture___childImageSharp___sizes___presentationWidth',
  PictureChildImageSharpSizesPresentationHeight = 'picture___childImageSharp___sizes___presentationHeight',
  PictureChildImageSharpGatsbyImageData = 'picture___childImageSharp___gatsbyImageData',
  PictureChildImageSharpOriginalWidth = 'picture___childImageSharp___original___width',
  PictureChildImageSharpOriginalHeight = 'picture___childImageSharp___original___height',
  PictureChildImageSharpOriginalSrc = 'picture___childImageSharp___original___src',
  PictureChildImageSharpResizeSrc = 'picture___childImageSharp___resize___src',
  PictureChildImageSharpResizeTracedSvg = 'picture___childImageSharp___resize___tracedSVG',
  PictureChildImageSharpResizeWidth = 'picture___childImageSharp___resize___width',
  PictureChildImageSharpResizeHeight = 'picture___childImageSharp___resize___height',
  PictureChildImageSharpResizeAspectRatio = 'picture___childImageSharp___resize___aspectRatio',
  PictureChildImageSharpResizeOriginalName = 'picture___childImageSharp___resize___originalName',
  PictureChildImageSharpId = 'picture___childImageSharp___id',
  PictureChildImageSharpParentId = 'picture___childImageSharp___parent___id',
  PictureChildImageSharpParentChildren = 'picture___childImageSharp___parent___children',
  PictureChildImageSharpChildren = 'picture___childImageSharp___children',
  PictureChildImageSharpChildrenId = 'picture___childImageSharp___children___id',
  PictureChildImageSharpChildrenChildren = 'picture___childImageSharp___children___children',
  PictureChildImageSharpInternalContent = 'picture___childImageSharp___internal___content',
  PictureChildImageSharpInternalContentDigest = 'picture___childImageSharp___internal___contentDigest',
  PictureChildImageSharpInternalDescription = 'picture___childImageSharp___internal___description',
  PictureChildImageSharpInternalFieldOwners = 'picture___childImageSharp___internal___fieldOwners',
  PictureChildImageSharpInternalIgnoreType = 'picture___childImageSharp___internal___ignoreType',
  PictureChildImageSharpInternalMediaType = 'picture___childImageSharp___internal___mediaType',
  PictureChildImageSharpInternalOwner = 'picture___childImageSharp___internal___owner',
  PictureChildImageSharpInternalType = 'picture___childImageSharp___internal___type',
  PictureId = 'picture___id',
  PictureParentId = 'picture___parent___id',
  PictureParentParentId = 'picture___parent___parent___id',
  PictureParentParentChildren = 'picture___parent___parent___children',
  PictureParentChildren = 'picture___parent___children',
  PictureParentChildrenId = 'picture___parent___children___id',
  PictureParentChildrenChildren = 'picture___parent___children___children',
  PictureParentInternalContent = 'picture___parent___internal___content',
  PictureParentInternalContentDigest = 'picture___parent___internal___contentDigest',
  PictureParentInternalDescription = 'picture___parent___internal___description',
  PictureParentInternalFieldOwners = 'picture___parent___internal___fieldOwners',
  PictureParentInternalIgnoreType = 'picture___parent___internal___ignoreType',
  PictureParentInternalMediaType = 'picture___parent___internal___mediaType',
  PictureParentInternalOwner = 'picture___parent___internal___owner',
  PictureParentInternalType = 'picture___parent___internal___type',
  PictureChildren = 'picture___children',
  PictureChildrenId = 'picture___children___id',
  PictureChildrenParentId = 'picture___children___parent___id',
  PictureChildrenParentChildren = 'picture___children___parent___children',
  PictureChildrenChildren = 'picture___children___children',
  PictureChildrenChildrenId = 'picture___children___children___id',
  PictureChildrenChildrenChildren = 'picture___children___children___children',
  PictureChildrenInternalContent = 'picture___children___internal___content',
  PictureChildrenInternalContentDigest = 'picture___children___internal___contentDigest',
  PictureChildrenInternalDescription = 'picture___children___internal___description',
  PictureChildrenInternalFieldOwners = 'picture___children___internal___fieldOwners',
  PictureChildrenInternalIgnoreType = 'picture___children___internal___ignoreType',
  PictureChildrenInternalMediaType = 'picture___children___internal___mediaType',
  PictureChildrenInternalOwner = 'picture___children___internal___owner',
  PictureChildrenInternalType = 'picture___children___internal___type',
  PictureInternalContent = 'picture___internal___content',
  PictureInternalContentDigest = 'picture___internal___contentDigest',
  PictureInternalDescription = 'picture___internal___description',
  PictureInternalFieldOwners = 'picture___internal___fieldOwners',
  PictureInternalIgnoreType = 'picture___internal___ignoreType',
  PictureInternalMediaType = 'picture___internal___mediaType',
  PictureInternalOwner = 'picture___internal___owner',
  PictureInternalType = 'picture___internal___type',
  Articles = 'articles',
  ArticlesId = 'articles___id',
  ArticlesTitle = 'articles___title',
  ArticlesDescription = 'articles___description',
  ArticlesContent = 'articles___content',
  ArticlesPublishedAt = 'articles___publishedAt',
  ArticlesStatus = 'articles___status',
  ArticlesSlug = 'articles___slug',
  ArticlesCategory = 'articles___category',
  ArticlesAuthor = 'articles___author',
  ArticlesKeywords = 'articles___keywords',
  ArticlesCreatedAt = 'articles___created_at',
  ArticlesUpdatedAt = 'articles___updated_at',
  ArticlesImageSourceInstanceName = 'articles___image___sourceInstanceName',
  ArticlesImageAbsolutePath = 'articles___image___absolutePath',
  ArticlesImageRelativePath = 'articles___image___relativePath',
  ArticlesImageExtension = 'articles___image___extension',
  ArticlesImageSize = 'articles___image___size',
  ArticlesImagePrettySize = 'articles___image___prettySize',
  ArticlesImageModifiedTime = 'articles___image___modifiedTime',
  ArticlesImageAccessTime = 'articles___image___accessTime',
  ArticlesImageChangeTime = 'articles___image___changeTime',
  ArticlesImageBirthTime = 'articles___image___birthTime',
  ArticlesImageRoot = 'articles___image___root',
  ArticlesImageDir = 'articles___image___dir',
  ArticlesImageBase = 'articles___image___base',
  ArticlesImageExt = 'articles___image___ext',
  ArticlesImageName = 'articles___image___name',
  ArticlesImageRelativeDirectory = 'articles___image___relativeDirectory',
  ArticlesImageDev = 'articles___image___dev',
  ArticlesImageMode = 'articles___image___mode',
  ArticlesImageNlink = 'articles___image___nlink',
  ArticlesImageUid = 'articles___image___uid',
  ArticlesImageGid = 'articles___image___gid',
  ArticlesImageRdev = 'articles___image___rdev',
  ArticlesImageIno = 'articles___image___ino',
  ArticlesImageAtimeMs = 'articles___image___atimeMs',
  ArticlesImageMtimeMs = 'articles___image___mtimeMs',
  ArticlesImageCtimeMs = 'articles___image___ctimeMs',
  ArticlesImageAtime = 'articles___image___atime',
  ArticlesImageMtime = 'articles___image___mtime',
  ArticlesImageCtime = 'articles___image___ctime',
  ArticlesImageBirthtime = 'articles___image___birthtime',
  ArticlesImageBirthtimeMs = 'articles___image___birthtimeMs',
  ArticlesImageBlksize = 'articles___image___blksize',
  ArticlesImageBlocks = 'articles___image___blocks',
  ArticlesImagePublicUrl = 'articles___image___publicURL',
  ArticlesImageChildrenImageSharp = 'articles___image___childrenImageSharp',
  ArticlesImageChildrenImageSharpGatsbyImageData = 'articles___image___childrenImageSharp___gatsbyImageData',
  ArticlesImageChildrenImageSharpId = 'articles___image___childrenImageSharp___id',
  ArticlesImageChildrenImageSharpChildren = 'articles___image___childrenImageSharp___children',
  ArticlesImageChildImageSharpGatsbyImageData = 'articles___image___childImageSharp___gatsbyImageData',
  ArticlesImageChildImageSharpId = 'articles___image___childImageSharp___id',
  ArticlesImageChildImageSharpChildren = 'articles___image___childImageSharp___children',
  ArticlesImageId = 'articles___image___id',
  ArticlesImageParentId = 'articles___image___parent___id',
  ArticlesImageParentChildren = 'articles___image___parent___children',
  ArticlesImageChildren = 'articles___image___children',
  ArticlesImageChildrenId = 'articles___image___children___id',
  ArticlesImageChildrenChildren = 'articles___image___children___children',
  ArticlesImageInternalContent = 'articles___image___internal___content',
  ArticlesImageInternalContentDigest = 'articles___image___internal___contentDigest',
  ArticlesImageInternalDescription = 'articles___image___internal___description',
  ArticlesImageInternalFieldOwners = 'articles___image___internal___fieldOwners',
  ArticlesImageInternalIgnoreType = 'articles___image___internal___ignoreType',
  ArticlesImageInternalMediaType = 'articles___image___internal___mediaType',
  ArticlesImageInternalOwner = 'articles___image___internal___owner',
  ArticlesImageInternalType = 'articles___image___internal___type',
  StrapiId = 'strapiId'
}

export type StrapiWriterFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  email?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  picture?: Maybe<FileFilterInput>;
  articles?: Maybe<StrapiWriterArticlesFilterListInput>;
  strapiId?: Maybe<IntQueryOperatorInput>;
};

export type StrapiWriterGroupConnection = {
  __typename?: 'StrapiWriterGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<StrapiWriterEdge>;
  nodes: Array<StrapiWriter>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type StrapiWriterSortInput = {
  fields?: Maybe<Array<Maybe<StrapiWriterFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type TransformOptions = {
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
};

export type WebPOptions = {
  quality?: Maybe<Scalars['Int']>;
};

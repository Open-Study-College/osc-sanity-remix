import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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
    Date: any;
    DateTime: any;
    JSON: any;
};

export type AnnotationLinkEmail = {
    __typename?: 'AnnotationLinkEmail';
    _key?: Maybe<Scalars['String']>;
    _type?: Maybe<Scalars['String']>;
    email?: Maybe<Scalars['String']>;
};

export type AnnotationLinkEmailFilter = {
    _key?: InputMaybe<StringFilter>;
    _type?: InputMaybe<StringFilter>;
    email?: InputMaybe<StringFilter>;
};

export type AnnotationLinkEmailSorting = {
    _key?: InputMaybe<SortOrder>;
    _type?: InputMaybe<SortOrder>;
    email?: InputMaybe<SortOrder>;
};

export type AnnotationLinkExternal = {
    __typename?: 'AnnotationLinkExternal';
    _key?: Maybe<Scalars['String']>;
    _type?: Maybe<Scalars['String']>;
    newWindow?: Maybe<Scalars['Boolean']>;
    url?: Maybe<Scalars['String']>;
};

export type AnnotationLinkExternalFilter = {
    _key?: InputMaybe<StringFilter>;
    _type?: InputMaybe<StringFilter>;
    newWindow?: InputMaybe<BooleanFilter>;
    url?: InputMaybe<StringFilter>;
};

export type AnnotationLinkExternalSorting = {
    _key?: InputMaybe<SortOrder>;
    _type?: InputMaybe<SortOrder>;
    newWindow?: InputMaybe<SortOrder>;
    url?: InputMaybe<SortOrder>;
};

export type AnnotationLinkInternal = {
    __typename?: 'AnnotationLinkInternal';
    _key?: Maybe<Scalars['String']>;
    _type?: Maybe<Scalars['String']>;
    reference?: Maybe<CollectionOrHomeOrPageOrProduct>;
};

export type AnnotationLinkInternalFilter = {
    _key?: InputMaybe<StringFilter>;
    _type?: InputMaybe<StringFilter>;
};

export type AnnotationLinkInternalSorting = {
    _key?: InputMaybe<SortOrder>;
    _type?: InputMaybe<SortOrder>;
};

export type AnnotationProduct = {
    __typename?: 'AnnotationProduct';
    _key?: Maybe<Scalars['String']>;
    _type?: Maybe<Scalars['String']>;
    linkAction?: Maybe<Scalars['String']>;
    productWithVariant?: Maybe<ProductWithVariant>;
    quantity?: Maybe<Scalars['Float']>;
};

export type AnnotationProductFilter = {
    _key?: InputMaybe<StringFilter>;
    _type?: InputMaybe<StringFilter>;
    linkAction?: InputMaybe<StringFilter>;
    productWithVariant?: InputMaybe<ProductWithVariantFilter>;
    quantity?: InputMaybe<FloatFilter>;
};

export type AnnotationProductSorting = {
    _key?: InputMaybe<SortOrder>;
    _type?: InputMaybe<SortOrder>;
    linkAction?: InputMaybe<SortOrder>;
    productWithVariant?: InputMaybe<ProductWithVariantSorting>;
    quantity?: InputMaybe<SortOrder>;
};

export type Block = {
    __typename?: 'Block';
    _key?: Maybe<Scalars['String']>;
    _type?: Maybe<Scalars['String']>;
    children?: Maybe<Array<Maybe<Span>>>;
    list?: Maybe<Scalars['String']>;
    style?: Maybe<Scalars['String']>;
};

export type BlockOrImage = Block | Image;

export type BooleanFilter = {
    /** Checks if the value is equal to the given input. */
    eq?: InputMaybe<Scalars['Boolean']>;
    /** Checks if the value is not equal to the given input. */
    neq?: InputMaybe<Scalars['Boolean']>;
};

export type Collection = Document & {
    __typename?: 'Collection';
    /** Date the document was created */
    _createdAt?: Maybe<Scalars['DateTime']>;
    /** Document ID */
    _id?: Maybe<Scalars['ID']>;
    _key?: Maybe<Scalars['String']>;
    /** Current document revision */
    _rev?: Maybe<Scalars['String']>;
    /** Document type */
    _type?: Maybe<Scalars['String']>;
    /** Date the document was last modified */
    _updatedAt?: Maybe<Scalars['DateTime']>;
    hero?: Maybe<Hero>;
    hidden?: Maybe<Scalars['String']>;
    modules?: Maybe<Array<Maybe<ModuleContentOrModuleMediaText>>>;
    seo?: Maybe<SeoShopify>;
    /** If disabled, page title will be displayed instead */
    showHero?: Maybe<Scalars['Boolean']>;
    slugProxy?: Maybe<Scalars['String']>;
    store?: Maybe<ShopifyCollection>;
    titleProxy?: Maybe<Scalars['String']>;
    vector?: Maybe<Image>;
};

export type CollectionFilter = {
    /** Apply filters on document level */
    _?: InputMaybe<Sanity_DocumentFilter>;
    _createdAt?: InputMaybe<DatetimeFilter>;
    _id?: InputMaybe<IdFilter>;
    _key?: InputMaybe<StringFilter>;
    _rev?: InputMaybe<StringFilter>;
    _type?: InputMaybe<StringFilter>;
    _updatedAt?: InputMaybe<DatetimeFilter>;
    hero?: InputMaybe<HeroFilter>;
    hidden?: InputMaybe<StringFilter>;
    seo?: InputMaybe<SeoShopifyFilter>;
    showHero?: InputMaybe<BooleanFilter>;
    slugProxy?: InputMaybe<StringFilter>;
    store?: InputMaybe<ShopifyCollectionFilter>;
    titleProxy?: InputMaybe<StringFilter>;
    vector?: InputMaybe<ImageFilter>;
};

export type CollectionOrHomeOrPageOrProduct = Collection | Home | Page | Product;

export type CollectionSorting = {
    _createdAt?: InputMaybe<SortOrder>;
    _id?: InputMaybe<SortOrder>;
    _key?: InputMaybe<SortOrder>;
    _rev?: InputMaybe<SortOrder>;
    _type?: InputMaybe<SortOrder>;
    _updatedAt?: InputMaybe<SortOrder>;
    hero?: InputMaybe<HeroSorting>;
    hidden?: InputMaybe<SortOrder>;
    seo?: InputMaybe<SeoShopifySorting>;
    showHero?: InputMaybe<SortOrder>;
    slugProxy?: InputMaybe<SortOrder>;
    store?: InputMaybe<ShopifyCollectionSorting>;
    titleProxy?: InputMaybe<SortOrder>;
    vector?: InputMaybe<ImageSorting>;
};

export type Color = {
    __typename?: 'Color';
    _key?: Maybe<Scalars['String']>;
    _type?: Maybe<Scalars['String']>;
    alpha?: Maybe<Scalars['Float']>;
    hex?: Maybe<Scalars['String']>;
    hsl?: Maybe<HslaColor>;
    hsv?: Maybe<HsvaColor>;
    rgb?: Maybe<RgbaColor>;
};

export type ColorFilter = {
    _key?: InputMaybe<StringFilter>;
    _type?: InputMaybe<StringFilter>;
    alpha?: InputMaybe<FloatFilter>;
    hex?: InputMaybe<StringFilter>;
    hsl?: InputMaybe<HslaColorFilter>;
    hsv?: InputMaybe<HsvaColorFilter>;
    rgb?: InputMaybe<RgbaColorFilter>;
};

export type ColorSorting = {
    _key?: InputMaybe<SortOrder>;
    _type?: InputMaybe<SortOrder>;
    alpha?: InputMaybe<SortOrder>;
    hex?: InputMaybe<SortOrder>;
    hsl?: InputMaybe<HslaColorSorting>;
    hsv?: InputMaybe<HsvaColorSorting>;
    rgb?: InputMaybe<RgbaColorSorting>;
};

export type DateFilter = {
    /** Checks if the value is equal to the given input. */
    eq?: InputMaybe<Scalars['Date']>;
    /** Checks if the value is greater than the given input. */
    gt?: InputMaybe<Scalars['Date']>;
    /** Checks if the value is greater than or equal to the given input. */
    gte?: InputMaybe<Scalars['Date']>;
    /** Checks if the value is lesser than the given input. */
    lt?: InputMaybe<Scalars['Date']>;
    /** Checks if the value is lesser than or equal to the given input. */
    lte?: InputMaybe<Scalars['Date']>;
    /** Checks if the value is not equal to the given input. */
    neq?: InputMaybe<Scalars['Date']>;
};

export type DatetimeFilter = {
    /** Checks if the value is equal to the given input. */
    eq?: InputMaybe<Scalars['DateTime']>;
    /** Checks if the value is greater than the given input. */
    gt?: InputMaybe<Scalars['DateTime']>;
    /** Checks if the value is greater than or equal to the given input. */
    gte?: InputMaybe<Scalars['DateTime']>;
    /** Checks if the value is lesser than the given input. */
    lt?: InputMaybe<Scalars['DateTime']>;
    /** Checks if the value is lesser than or equal to the given input. */
    lte?: InputMaybe<Scalars['DateTime']>;
    /** Checks if the value is not equal to the given input. */
    neq?: InputMaybe<Scalars['DateTime']>;
};

/** A Sanity document */
export type Document = {
    /** Date the document was created */
    _createdAt?: Maybe<Scalars['DateTime']>;
    /** Document ID */
    _id?: Maybe<Scalars['ID']>;
    /** Current document revision */
    _rev?: Maybe<Scalars['String']>;
    /** Document type */
    _type?: Maybe<Scalars['String']>;
    /** Date the document was last modified */
    _updatedAt?: Maybe<Scalars['DateTime']>;
};

export type DocumentFilter = {
    /** Apply filters on document level */
    _?: InputMaybe<Sanity_DocumentFilter>;
    _createdAt?: InputMaybe<DatetimeFilter>;
    _id?: InputMaybe<IdFilter>;
    _rev?: InputMaybe<StringFilter>;
    _type?: InputMaybe<StringFilter>;
    _updatedAt?: InputMaybe<DatetimeFilter>;
};

export type DocumentSorting = {
    _createdAt?: InputMaybe<SortOrder>;
    _id?: InputMaybe<SortOrder>;
    _rev?: InputMaybe<SortOrder>;
    _type?: InputMaybe<SortOrder>;
    _updatedAt?: InputMaybe<SortOrder>;
};

export type File = {
    __typename?: 'File';
    _key?: Maybe<Scalars['String']>;
    _type?: Maybe<Scalars['String']>;
    asset?: Maybe<SanityFileAsset>;
};

export type FileFilter = {
    _key?: InputMaybe<StringFilter>;
    _type?: InputMaybe<StringFilter>;
    asset?: InputMaybe<SanityFileAssetFilter>;
};

export type FileSorting = {
    _key?: InputMaybe<SortOrder>;
    _type?: InputMaybe<SortOrder>;
};

export type FloatFilter = {
    /** Checks if the value is equal to the given input. */
    eq?: InputMaybe<Scalars['Float']>;
    /** Checks if the value is greater than the given input. */
    gt?: InputMaybe<Scalars['Float']>;
    /** Checks if the value is greater than or equal to the given input. */
    gte?: InputMaybe<Scalars['Float']>;
    /** Checks if the value is lesser than the given input. */
    lt?: InputMaybe<Scalars['Float']>;
    /** Checks if the value is lesser than or equal to the given input. */
    lte?: InputMaybe<Scalars['Float']>;
    /** Checks if the value is not equal to the given input. */
    neq?: InputMaybe<Scalars['Float']>;
};

export type Geopoint = {
    __typename?: 'Geopoint';
    _key?: Maybe<Scalars['String']>;
    _type?: Maybe<Scalars['String']>;
    alt?: Maybe<Scalars['Float']>;
    lat?: Maybe<Scalars['Float']>;
    lng?: Maybe<Scalars['Float']>;
};

export type GeopointFilter = {
    _key?: InputMaybe<StringFilter>;
    _type?: InputMaybe<StringFilter>;
    alt?: InputMaybe<FloatFilter>;
    lat?: InputMaybe<FloatFilter>;
    lng?: InputMaybe<FloatFilter>;
};

export type GeopointSorting = {
    _key?: InputMaybe<SortOrder>;
    _type?: InputMaybe<SortOrder>;
    alt?: InputMaybe<SortOrder>;
    lat?: InputMaybe<SortOrder>;
    lng?: InputMaybe<SortOrder>;
};

export type Hero = {
    __typename?: 'Hero';
    _key?: Maybe<Scalars['String']>;
    _type?: Maybe<Scalars['String']>;
    bodyRaw?: Maybe<Scalars['JSON']>;
    image?: Maybe<Image>;
    links?: Maybe<Array<Maybe<LinkExternalOrLinkInternal>>>;
};

export type HeroFilter = {
    _key?: InputMaybe<StringFilter>;
    _type?: InputMaybe<StringFilter>;
    image?: InputMaybe<ImageFilter>;
};

export type HeroSorting = {
    _key?: InputMaybe<SortOrder>;
    _type?: InputMaybe<SortOrder>;
    image?: InputMaybe<ImageSorting>;
};

export type Home = Document & {
    __typename?: 'Home';
    /** Date the document was created */
    _createdAt?: Maybe<Scalars['DateTime']>;
    /** Document ID */
    _id?: Maybe<Scalars['ID']>;
    _key?: Maybe<Scalars['String']>;
    /** Current document revision */
    _rev?: Maybe<Scalars['String']>;
    /** Document type */
    _type?: Maybe<Scalars['String']>;
    /** Date the document was last modified */
    _updatedAt?: Maybe<Scalars['DateTime']>;
    hero?: Maybe<Hero>;
    modules?: Maybe<Array<Maybe<ModuleContentOrModuleMediaText>>>;
    seo?: Maybe<SeoHome>;
    /** If disabled, page title will be displayed instead */
    showHero?: Maybe<Scalars['Boolean']>;
};

export type HomeFilter = {
    /** Apply filters on document level */
    _?: InputMaybe<Sanity_DocumentFilter>;
    _createdAt?: InputMaybe<DatetimeFilter>;
    _id?: InputMaybe<IdFilter>;
    _key?: InputMaybe<StringFilter>;
    _rev?: InputMaybe<StringFilter>;
    _type?: InputMaybe<StringFilter>;
    _updatedAt?: InputMaybe<DatetimeFilter>;
    hero?: InputMaybe<HeroFilter>;
    seo?: InputMaybe<SeoHomeFilter>;
    showHero?: InputMaybe<BooleanFilter>;
};

export type HomeSorting = {
    _createdAt?: InputMaybe<SortOrder>;
    _id?: InputMaybe<SortOrder>;
    _key?: InputMaybe<SortOrder>;
    _rev?: InputMaybe<SortOrder>;
    _type?: InputMaybe<SortOrder>;
    _updatedAt?: InputMaybe<SortOrder>;
    hero?: InputMaybe<HeroSorting>;
    seo?: InputMaybe<SeoHomeSorting>;
    showHero?: InputMaybe<SortOrder>;
};

export type HslaColor = {
    __typename?: 'HslaColor';
    _key?: Maybe<Scalars['String']>;
    _type?: Maybe<Scalars['String']>;
    a?: Maybe<Scalars['Float']>;
    h?: Maybe<Scalars['Float']>;
    l?: Maybe<Scalars['Float']>;
    s?: Maybe<Scalars['Float']>;
};

export type HslaColorFilter = {
    _key?: InputMaybe<StringFilter>;
    _type?: InputMaybe<StringFilter>;
    a?: InputMaybe<FloatFilter>;
    h?: InputMaybe<FloatFilter>;
    l?: InputMaybe<FloatFilter>;
    s?: InputMaybe<FloatFilter>;
};

export type HslaColorSorting = {
    _key?: InputMaybe<SortOrder>;
    _type?: InputMaybe<SortOrder>;
    a?: InputMaybe<SortOrder>;
    h?: InputMaybe<SortOrder>;
    l?: InputMaybe<SortOrder>;
    s?: InputMaybe<SortOrder>;
};

export type HsvaColor = {
    __typename?: 'HsvaColor';
    _key?: Maybe<Scalars['String']>;
    _type?: Maybe<Scalars['String']>;
    a?: Maybe<Scalars['Float']>;
    h?: Maybe<Scalars['Float']>;
    s?: Maybe<Scalars['Float']>;
    v?: Maybe<Scalars['Float']>;
};

export type HsvaColorFilter = {
    _key?: InputMaybe<StringFilter>;
    _type?: InputMaybe<StringFilter>;
    a?: InputMaybe<FloatFilter>;
    h?: InputMaybe<FloatFilter>;
    s?: InputMaybe<FloatFilter>;
    v?: InputMaybe<FloatFilter>;
};

export type HsvaColorSorting = {
    _key?: InputMaybe<SortOrder>;
    _type?: InputMaybe<SortOrder>;
    a?: InputMaybe<SortOrder>;
    h?: InputMaybe<SortOrder>;
    s?: InputMaybe<SortOrder>;
    v?: InputMaybe<SortOrder>;
};

export type IdFilter = {
    /** Checks if the value is equal to the given input. */
    eq?: InputMaybe<Scalars['ID']>;
    in?: InputMaybe<Array<Scalars['ID']>>;
    /** Checks if the value matches the given word/words. */
    matches?: InputMaybe<Scalars['ID']>;
    /** Checks if the value is not equal to the given input. */
    neq?: InputMaybe<Scalars['ID']>;
    nin?: InputMaybe<Array<Scalars['ID']>>;
};

export type Image = {
    __typename?: 'Image';
    _key?: Maybe<Scalars['String']>;
    _type?: Maybe<Scalars['String']>;
    asset?: Maybe<SanityImageAsset>;
    crop?: Maybe<SanityImageCrop>;
    hotspot?: Maybe<SanityImageHotspot>;
};

export type ImageFilter = {
    _key?: InputMaybe<StringFilter>;
    _type?: InputMaybe<StringFilter>;
    asset?: InputMaybe<SanityImageAssetFilter>;
    crop?: InputMaybe<SanityImageCropFilter>;
    hotspot?: InputMaybe<SanityImageHotspotFilter>;
};

export type ImageSorting = {
    _key?: InputMaybe<SortOrder>;
    _type?: InputMaybe<SortOrder>;
    crop?: InputMaybe<SanityImageCropSorting>;
    hotspot?: InputMaybe<SanityImageHotspotSorting>;
};

export type IntFilter = {
    /** Checks if the value is equal to the given input. */
    eq?: InputMaybe<Scalars['Int']>;
    /** Checks if the value is greater than the given input. */
    gt?: InputMaybe<Scalars['Int']>;
    /** Checks if the value is greater than or equal to the given input. */
    gte?: InputMaybe<Scalars['Int']>;
    /** Checks if the value is lesser than the given input. */
    lt?: InputMaybe<Scalars['Int']>;
    /** Checks if the value is lesser than or equal to the given input. */
    lte?: InputMaybe<Scalars['Int']>;
    /** Checks if the value is not equal to the given input. */
    neq?: InputMaybe<Scalars['Int']>;
};

export type LinkExternal = {
    __typename?: 'LinkExternal';
    _key?: Maybe<Scalars['String']>;
    _type?: Maybe<Scalars['String']>;
    newWindow?: Maybe<Scalars['Boolean']>;
    title?: Maybe<Scalars['String']>;
    url?: Maybe<Scalars['String']>;
};

export type LinkExternalFilter = {
    _key?: InputMaybe<StringFilter>;
    _type?: InputMaybe<StringFilter>;
    newWindow?: InputMaybe<BooleanFilter>;
    title?: InputMaybe<StringFilter>;
    url?: InputMaybe<StringFilter>;
};

export type LinkExternalOrLinkInternal = LinkExternal | LinkInternal;

export type LinkExternalSorting = {
    _key?: InputMaybe<SortOrder>;
    _type?: InputMaybe<SortOrder>;
    newWindow?: InputMaybe<SortOrder>;
    title?: InputMaybe<SortOrder>;
    url?: InputMaybe<SortOrder>;
};

export type LinkInternal = {
    __typename?: 'LinkInternal';
    _key?: Maybe<Scalars['String']>;
    _type?: Maybe<Scalars['String']>;
    reference?: Maybe<CollectionOrHomeOrPageOrProduct>;
    title?: Maybe<Scalars['String']>;
};

export type LinkInternalFilter = {
    _key?: InputMaybe<StringFilter>;
    _type?: InputMaybe<StringFilter>;
    title?: InputMaybe<StringFilter>;
};

export type LinkInternalSorting = {
    _key?: InputMaybe<SortOrder>;
    _type?: InputMaybe<SortOrder>;
    title?: InputMaybe<SortOrder>;
};

export type MediaTag = Document & {
    __typename?: 'MediaTag';
    /** Date the document was created */
    _createdAt?: Maybe<Scalars['DateTime']>;
    /** Document ID */
    _id?: Maybe<Scalars['ID']>;
    _key?: Maybe<Scalars['String']>;
    /** Current document revision */
    _rev?: Maybe<Scalars['String']>;
    /** Document type */
    _type?: Maybe<Scalars['String']>;
    /** Date the document was last modified */
    _updatedAt?: Maybe<Scalars['DateTime']>;
    name?: Maybe<Slug>;
};

export type MediaTagFilter = {
    /** Apply filters on document level */
    _?: InputMaybe<Sanity_DocumentFilter>;
    _createdAt?: InputMaybe<DatetimeFilter>;
    _id?: InputMaybe<IdFilter>;
    _key?: InputMaybe<StringFilter>;
    _rev?: InputMaybe<StringFilter>;
    _type?: InputMaybe<StringFilter>;
    _updatedAt?: InputMaybe<DatetimeFilter>;
    name?: InputMaybe<SlugFilter>;
};

export type MediaTagSorting = {
    _createdAt?: InputMaybe<SortOrder>;
    _id?: InputMaybe<SortOrder>;
    _key?: InputMaybe<SortOrder>;
    _rev?: InputMaybe<SortOrder>;
    _type?: InputMaybe<SortOrder>;
    _updatedAt?: InputMaybe<SortOrder>;
    name?: InputMaybe<SlugSorting>;
};

export type ModuleCallout = {
    __typename?: 'ModuleCallout';
    _key?: Maybe<Scalars['String']>;
    _type?: Maybe<Scalars['String']>;
    links?: Maybe<Array<Maybe<LinkExternalOrLinkInternal>>>;
    text?: Maybe<Scalars['String']>;
};

export type ModuleCalloutFilter = {
    _key?: InputMaybe<StringFilter>;
    _type?: InputMaybe<StringFilter>;
    text?: InputMaybe<StringFilter>;
};

export type ModuleCalloutSorting = {
    _key?: InputMaybe<SortOrder>;
    _type?: InputMaybe<SortOrder>;
    text?: InputMaybe<SortOrder>;
};

export type ModuleContent = {
    __typename?: 'ModuleContent';
    _key?: Maybe<Scalars['String']>;
    _type?: Maybe<Scalars['String']>;
    bodyRaw?: Maybe<Scalars['JSON']>;
};

export type ModuleContentFilter = {
    _key?: InputMaybe<StringFilter>;
    _type?: InputMaybe<StringFilter>;
};

export type ModuleContentOrModuleMediaText = ModuleContent | ModuleMediaText;

export type ModuleContentSorting = {
    _key?: InputMaybe<SortOrder>;
    _type?: InputMaybe<SortOrder>;
};

export type ModuleMediaText = {
    __typename?: 'ModuleMediaText';
    _key?: Maybe<Scalars['String']>;
    _type?: Maybe<Scalars['String']>;
    bodyRaw?: Maybe<Scalars['JSON']>;
    layout?: Maybe<Scalars['String']>;
    links?: Maybe<Array<Maybe<LinkExternalOrLinkInternal>>>;
    media?: Maybe<Image>;
};

export type ModuleMediaTextFilter = {
    _key?: InputMaybe<StringFilter>;
    _type?: InputMaybe<StringFilter>;
    layout?: InputMaybe<StringFilter>;
    media?: InputMaybe<ImageFilter>;
};

export type ModuleMediaTextSorting = {
    _key?: InputMaybe<SortOrder>;
    _type?: InputMaybe<SortOrder>;
    layout?: InputMaybe<SortOrder>;
    media?: InputMaybe<ImageSorting>;
};

export type Option = {
    __typename?: 'Option';
    _key?: Maybe<Scalars['String']>;
    _type?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    values?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type OptionFilter = {
    _key?: InputMaybe<StringFilter>;
    _type?: InputMaybe<StringFilter>;
    name?: InputMaybe<StringFilter>;
};

export type OptionSorting = {
    _key?: InputMaybe<SortOrder>;
    _type?: InputMaybe<SortOrder>;
    name?: InputMaybe<SortOrder>;
};

export type Page = Document & {
    __typename?: 'Page';
    /** Date the document was created */
    _createdAt?: Maybe<Scalars['DateTime']>;
    /** Document ID */
    _id?: Maybe<Scalars['ID']>;
    _key?: Maybe<Scalars['String']>;
    /** Current document revision */
    _rev?: Maybe<Scalars['String']>;
    /** Document type */
    _type?: Maybe<Scalars['String']>;
    /** Date the document was last modified */
    _updatedAt?: Maybe<Scalars['DateTime']>;
    hero?: Maybe<Hero>;
    modules?: Maybe<Array<Maybe<ModuleContentOrModuleMediaText>>>;
    seo?: Maybe<SeoPage>;
    /** If disabled, page title will be displayed instead */
    showHero?: Maybe<Scalars['Boolean']>;
    slug?: Maybe<Slug>;
    title?: Maybe<Scalars['String']>;
};

export type PageFilter = {
    /** Apply filters on document level */
    _?: InputMaybe<Sanity_DocumentFilter>;
    _createdAt?: InputMaybe<DatetimeFilter>;
    _id?: InputMaybe<IdFilter>;
    _key?: InputMaybe<StringFilter>;
    _rev?: InputMaybe<StringFilter>;
    _type?: InputMaybe<StringFilter>;
    _updatedAt?: InputMaybe<DatetimeFilter>;
    hero?: InputMaybe<HeroFilter>;
    seo?: InputMaybe<SeoPageFilter>;
    showHero?: InputMaybe<BooleanFilter>;
    slug?: InputMaybe<SlugFilter>;
    title?: InputMaybe<StringFilter>;
};

export type PageSorting = {
    _createdAt?: InputMaybe<SortOrder>;
    _id?: InputMaybe<SortOrder>;
    _key?: InputMaybe<SortOrder>;
    _rev?: InputMaybe<SortOrder>;
    _type?: InputMaybe<SortOrder>;
    _updatedAt?: InputMaybe<SortOrder>;
    hero?: InputMaybe<HeroSorting>;
    seo?: InputMaybe<SeoPageSorting>;
    showHero?: InputMaybe<SortOrder>;
    slug?: InputMaybe<SlugSorting>;
    title?: InputMaybe<SortOrder>;
};

export type Product = Document & {
    __typename?: 'Product';
    /** Date the document was created */
    _createdAt?: Maybe<Scalars['DateTime']>;
    /** Document ID */
    _id?: Maybe<Scalars['ID']>;
    _key?: Maybe<Scalars['String']>;
    /** Current document revision */
    _rev?: Maybe<Scalars['String']>;
    /** Document type */
    _type?: Maybe<Scalars['String']>;
    /** Date the document was last modified */
    _updatedAt?: Maybe<Scalars['DateTime']>;
    hidden?: Maybe<Scalars['String']>;
    modules?: Maybe<Array<Maybe<ModuleContentOrModuleMediaText>>>;
    seo?: Maybe<SeoShopify>;
    slugProxy?: Maybe<Scalars['String']>;
    store?: Maybe<ShopifyProduct>;
    titleProxy?: Maybe<Scalars['String']>;
};

export type ProductFilter = {
    /** Apply filters on document level */
    _?: InputMaybe<Sanity_DocumentFilter>;
    _createdAt?: InputMaybe<DatetimeFilter>;
    _id?: InputMaybe<IdFilter>;
    _key?: InputMaybe<StringFilter>;
    _rev?: InputMaybe<StringFilter>;
    _type?: InputMaybe<StringFilter>;
    _updatedAt?: InputMaybe<DatetimeFilter>;
    hidden?: InputMaybe<StringFilter>;
    seo?: InputMaybe<SeoShopifyFilter>;
    slugProxy?: InputMaybe<StringFilter>;
    store?: InputMaybe<ShopifyProductFilter>;
    titleProxy?: InputMaybe<StringFilter>;
};

export type ProductInventory = {
    __typename?: 'ProductInventory';
    _key?: Maybe<Scalars['String']>;
    _type?: Maybe<Scalars['String']>;
    management?: Maybe<Scalars['String']>;
    policy?: Maybe<Scalars['String']>;
    quantity?: Maybe<Scalars['Float']>;
};

export type ProductInventoryFilter = {
    _key?: InputMaybe<StringFilter>;
    _type?: InputMaybe<StringFilter>;
    management?: InputMaybe<StringFilter>;
    policy?: InputMaybe<StringFilter>;
    quantity?: InputMaybe<FloatFilter>;
};

export type ProductInventorySorting = {
    _key?: InputMaybe<SortOrder>;
    _type?: InputMaybe<SortOrder>;
    management?: InputMaybe<SortOrder>;
    policy?: InputMaybe<SortOrder>;
    quantity?: InputMaybe<SortOrder>;
};

export type ProductPriceRange = {
    __typename?: 'ProductPriceRange';
    _key?: Maybe<Scalars['String']>;
    _type?: Maybe<Scalars['String']>;
    maxVariantPrice?: Maybe<Scalars['Float']>;
    minVariantPrice?: Maybe<Scalars['Float']>;
};

export type ProductPriceRangeFilter = {
    _key?: InputMaybe<StringFilter>;
    _type?: InputMaybe<StringFilter>;
    maxVariantPrice?: InputMaybe<FloatFilter>;
    minVariantPrice?: InputMaybe<FloatFilter>;
};

export type ProductPriceRangeSorting = {
    _key?: InputMaybe<SortOrder>;
    _type?: InputMaybe<SortOrder>;
    maxVariantPrice?: InputMaybe<SortOrder>;
    minVariantPrice?: InputMaybe<SortOrder>;
};

export type ProductSorting = {
    _createdAt?: InputMaybe<SortOrder>;
    _id?: InputMaybe<SortOrder>;
    _key?: InputMaybe<SortOrder>;
    _rev?: InputMaybe<SortOrder>;
    _type?: InputMaybe<SortOrder>;
    _updatedAt?: InputMaybe<SortOrder>;
    hidden?: InputMaybe<SortOrder>;
    seo?: InputMaybe<SeoShopifySorting>;
    slugProxy?: InputMaybe<SortOrder>;
    store?: InputMaybe<ShopifyProductSorting>;
    titleProxy?: InputMaybe<SortOrder>;
};

export type ProductVariant = Document & {
    __typename?: 'ProductVariant';
    /** Date the document was created */
    _createdAt?: Maybe<Scalars['DateTime']>;
    /** Document ID */
    _id?: Maybe<Scalars['ID']>;
    _key?: Maybe<Scalars['String']>;
    /** Current document revision */
    _rev?: Maybe<Scalars['String']>;
    /** Document type */
    _type?: Maybe<Scalars['String']>;
    /** Date the document was last modified */
    _updatedAt?: Maybe<Scalars['DateTime']>;
    hidden?: Maybe<Scalars['String']>;
    store?: Maybe<ShopifyProductVariant>;
    titleProxy?: Maybe<Scalars['String']>;
};

export type ProductVariantFilter = {
    /** Apply filters on document level */
    _?: InputMaybe<Sanity_DocumentFilter>;
    _createdAt?: InputMaybe<DatetimeFilter>;
    _id?: InputMaybe<IdFilter>;
    _key?: InputMaybe<StringFilter>;
    _rev?: InputMaybe<StringFilter>;
    _type?: InputMaybe<StringFilter>;
    _updatedAt?: InputMaybe<DatetimeFilter>;
    hidden?: InputMaybe<StringFilter>;
    store?: InputMaybe<ShopifyProductVariantFilter>;
    titleProxy?: InputMaybe<StringFilter>;
};

export type ProductVariantSorting = {
    _createdAt?: InputMaybe<SortOrder>;
    _id?: InputMaybe<SortOrder>;
    _key?: InputMaybe<SortOrder>;
    _rev?: InputMaybe<SortOrder>;
    _type?: InputMaybe<SortOrder>;
    _updatedAt?: InputMaybe<SortOrder>;
    hidden?: InputMaybe<SortOrder>;
    store?: InputMaybe<ShopifyProductVariantSorting>;
    titleProxy?: InputMaybe<SortOrder>;
};

export type ProductWithVariant = {
    __typename?: 'ProductWithVariant';
    _key?: Maybe<Scalars['String']>;
    _type?: Maybe<Scalars['String']>;
    product?: Maybe<Product>;
    /** First variant will be selected if left empty */
    variant?: Maybe<ProductVariant>;
};

export type ProductWithVariantFilter = {
    _key?: InputMaybe<StringFilter>;
    _type?: InputMaybe<StringFilter>;
    product?: InputMaybe<ProductFilter>;
    variant?: InputMaybe<ProductVariantFilter>;
};

export type ProductWithVariantSorting = {
    _key?: InputMaybe<SortOrder>;
    _type?: InputMaybe<SortOrder>;
};

export type RgbaColor = {
    __typename?: 'RgbaColor';
    _key?: Maybe<Scalars['String']>;
    _type?: Maybe<Scalars['String']>;
    a?: Maybe<Scalars['Float']>;
    b?: Maybe<Scalars['Float']>;
    g?: Maybe<Scalars['Float']>;
    r?: Maybe<Scalars['Float']>;
};

export type RgbaColorFilter = {
    _key?: InputMaybe<StringFilter>;
    _type?: InputMaybe<StringFilter>;
    a?: InputMaybe<FloatFilter>;
    b?: InputMaybe<FloatFilter>;
    g?: InputMaybe<FloatFilter>;
    r?: InputMaybe<FloatFilter>;
};

export type RgbaColorSorting = {
    _key?: InputMaybe<SortOrder>;
    _type?: InputMaybe<SortOrder>;
    a?: InputMaybe<SortOrder>;
    b?: InputMaybe<SortOrder>;
    g?: InputMaybe<SortOrder>;
    r?: InputMaybe<SortOrder>;
};

export type RootQuery = {
    __typename?: 'RootQuery';
    Collection?: Maybe<Collection>;
    Document?: Maybe<Document>;
    Home?: Maybe<Home>;
    MediaTag?: Maybe<MediaTag>;
    Page?: Maybe<Page>;
    Product?: Maybe<Product>;
    ProductVariant?: Maybe<ProductVariant>;
    SanityFileAsset?: Maybe<SanityFileAsset>;
    SanityImageAsset?: Maybe<SanityImageAsset>;
    Settings?: Maybe<Settings>;
    allCollection: Array<Collection>;
    allDocument: Array<Document>;
    allHome: Array<Home>;
    allMediaTag: Array<MediaTag>;
    allPage: Array<Page>;
    allProduct: Array<Product>;
    allProductVariant: Array<ProductVariant>;
    allSanityFileAsset: Array<SanityFileAsset>;
    allSanityImageAsset: Array<SanityImageAsset>;
    allSettings: Array<Settings>;
};

export type RootQueryCollectionArgs = {
    id: Scalars['ID'];
};

export type RootQueryDocumentArgs = {
    id: Scalars['ID'];
};

export type RootQueryHomeArgs = {
    id: Scalars['ID'];
};

export type RootQueryMediaTagArgs = {
    id: Scalars['ID'];
};

export type RootQueryPageArgs = {
    id: Scalars['ID'];
};

export type RootQueryProductArgs = {
    id: Scalars['ID'];
};

export type RootQueryProductVariantArgs = {
    id: Scalars['ID'];
};

export type RootQuerySanityFileAssetArgs = {
    id: Scalars['ID'];
};

export type RootQuerySanityImageAssetArgs = {
    id: Scalars['ID'];
};

export type RootQuerySettingsArgs = {
    id: Scalars['ID'];
};

export type RootQueryAllCollectionArgs = {
    limit?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    sort?: InputMaybe<Array<CollectionSorting>>;
    where?: InputMaybe<CollectionFilter>;
};

export type RootQueryAllDocumentArgs = {
    limit?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    sort?: InputMaybe<Array<DocumentSorting>>;
    where?: InputMaybe<DocumentFilter>;
};

export type RootQueryAllHomeArgs = {
    limit?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    sort?: InputMaybe<Array<HomeSorting>>;
    where?: InputMaybe<HomeFilter>;
};

export type RootQueryAllMediaTagArgs = {
    limit?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    sort?: InputMaybe<Array<MediaTagSorting>>;
    where?: InputMaybe<MediaTagFilter>;
};

export type RootQueryAllPageArgs = {
    limit?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    sort?: InputMaybe<Array<PageSorting>>;
    where?: InputMaybe<PageFilter>;
};

export type RootQueryAllProductArgs = {
    limit?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    sort?: InputMaybe<Array<ProductSorting>>;
    where?: InputMaybe<ProductFilter>;
};

export type RootQueryAllProductVariantArgs = {
    limit?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    sort?: InputMaybe<Array<ProductVariantSorting>>;
    where?: InputMaybe<ProductVariantFilter>;
};

export type RootQueryAllSanityFileAssetArgs = {
    limit?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    sort?: InputMaybe<Array<SanityFileAssetSorting>>;
    where?: InputMaybe<SanityFileAssetFilter>;
};

export type RootQueryAllSanityImageAssetArgs = {
    limit?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    sort?: InputMaybe<Array<SanityImageAssetSorting>>;
    where?: InputMaybe<SanityImageAssetFilter>;
};

export type RootQueryAllSettingsArgs = {
    limit?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    sort?: InputMaybe<Array<SettingsSorting>>;
    where?: InputMaybe<SettingsFilter>;
};

export type Rule = {
    __typename?: 'Rule';
    _key?: Maybe<Scalars['String']>;
    _type?: Maybe<Scalars['String']>;
    column?: Maybe<Scalars['String']>;
    condition?: Maybe<Scalars['String']>;
    relation?: Maybe<Scalars['String']>;
};

export type RuleFilter = {
    _key?: InputMaybe<StringFilter>;
    _type?: InputMaybe<StringFilter>;
    column?: InputMaybe<StringFilter>;
    condition?: InputMaybe<StringFilter>;
    relation?: InputMaybe<StringFilter>;
};

export type RuleSorting = {
    _key?: InputMaybe<SortOrder>;
    _type?: InputMaybe<SortOrder>;
    column?: InputMaybe<SortOrder>;
    condition?: InputMaybe<SortOrder>;
    relation?: InputMaybe<SortOrder>;
};

export type SanityAssetSourceData = {
    __typename?: 'SanityAssetSourceData';
    _key?: Maybe<Scalars['String']>;
    _type?: Maybe<Scalars['String']>;
    /** The unique ID for the asset within the originating source so you can programatically find back to it */
    id?: Maybe<Scalars['String']>;
    /** A canonical name for the source this asset is originating from */
    name?: Maybe<Scalars['String']>;
    /** A URL to find more information about this asset in the originating source */
    url?: Maybe<Scalars['String']>;
};

export type SanityAssetSourceDataFilter = {
    _key?: InputMaybe<StringFilter>;
    _type?: InputMaybe<StringFilter>;
    id?: InputMaybe<StringFilter>;
    name?: InputMaybe<StringFilter>;
    url?: InputMaybe<StringFilter>;
};

export type SanityAssetSourceDataSorting = {
    _key?: InputMaybe<SortOrder>;
    _type?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    name?: InputMaybe<SortOrder>;
    url?: InputMaybe<SortOrder>;
};

export type SanityFileAsset = Document & {
    __typename?: 'SanityFileAsset';
    /** Date the document was created */
    _createdAt?: Maybe<Scalars['DateTime']>;
    /** Document ID */
    _id?: Maybe<Scalars['ID']>;
    _key?: Maybe<Scalars['String']>;
    /** Current document revision */
    _rev?: Maybe<Scalars['String']>;
    /** Document type */
    _type?: Maybe<Scalars['String']>;
    /** Date the document was last modified */
    _updatedAt?: Maybe<Scalars['DateTime']>;
    altText?: Maybe<Scalars['String']>;
    assetId?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    extension?: Maybe<Scalars['String']>;
    label?: Maybe<Scalars['String']>;
    mimeType?: Maybe<Scalars['String']>;
    originalFilename?: Maybe<Scalars['String']>;
    path?: Maybe<Scalars['String']>;
    sha1hash?: Maybe<Scalars['String']>;
    size?: Maybe<Scalars['Float']>;
    source?: Maybe<SanityAssetSourceData>;
    title?: Maybe<Scalars['String']>;
    url?: Maybe<Scalars['String']>;
};

export type SanityFileAssetFilter = {
    /** Apply filters on document level */
    _?: InputMaybe<Sanity_DocumentFilter>;
    _createdAt?: InputMaybe<DatetimeFilter>;
    _id?: InputMaybe<IdFilter>;
    _key?: InputMaybe<StringFilter>;
    _rev?: InputMaybe<StringFilter>;
    _type?: InputMaybe<StringFilter>;
    _updatedAt?: InputMaybe<DatetimeFilter>;
    altText?: InputMaybe<StringFilter>;
    assetId?: InputMaybe<StringFilter>;
    description?: InputMaybe<StringFilter>;
    extension?: InputMaybe<StringFilter>;
    label?: InputMaybe<StringFilter>;
    mimeType?: InputMaybe<StringFilter>;
    originalFilename?: InputMaybe<StringFilter>;
    path?: InputMaybe<StringFilter>;
    sha1hash?: InputMaybe<StringFilter>;
    size?: InputMaybe<FloatFilter>;
    source?: InputMaybe<SanityAssetSourceDataFilter>;
    title?: InputMaybe<StringFilter>;
    url?: InputMaybe<StringFilter>;
};

export type SanityFileAssetSorting = {
    _createdAt?: InputMaybe<SortOrder>;
    _id?: InputMaybe<SortOrder>;
    _key?: InputMaybe<SortOrder>;
    _rev?: InputMaybe<SortOrder>;
    _type?: InputMaybe<SortOrder>;
    _updatedAt?: InputMaybe<SortOrder>;
    altText?: InputMaybe<SortOrder>;
    assetId?: InputMaybe<SortOrder>;
    description?: InputMaybe<SortOrder>;
    extension?: InputMaybe<SortOrder>;
    label?: InputMaybe<SortOrder>;
    mimeType?: InputMaybe<SortOrder>;
    originalFilename?: InputMaybe<SortOrder>;
    path?: InputMaybe<SortOrder>;
    sha1hash?: InputMaybe<SortOrder>;
    size?: InputMaybe<SortOrder>;
    source?: InputMaybe<SanityAssetSourceDataSorting>;
    title?: InputMaybe<SortOrder>;
    url?: InputMaybe<SortOrder>;
};

export type SanityImageAsset = Document & {
    __typename?: 'SanityImageAsset';
    /** Date the document was created */
    _createdAt?: Maybe<Scalars['DateTime']>;
    /** Document ID */
    _id?: Maybe<Scalars['ID']>;
    _key?: Maybe<Scalars['String']>;
    /** Current document revision */
    _rev?: Maybe<Scalars['String']>;
    /** Document type */
    _type?: Maybe<Scalars['String']>;
    /** Date the document was last modified */
    _updatedAt?: Maybe<Scalars['DateTime']>;
    altText?: Maybe<Scalars['String']>;
    assetId?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    extension?: Maybe<Scalars['String']>;
    label?: Maybe<Scalars['String']>;
    metadata?: Maybe<SanityImageMetadata>;
    mimeType?: Maybe<Scalars['String']>;
    originalFilename?: Maybe<Scalars['String']>;
    path?: Maybe<Scalars['String']>;
    sha1hash?: Maybe<Scalars['String']>;
    size?: Maybe<Scalars['Float']>;
    source?: Maybe<SanityAssetSourceData>;
    title?: Maybe<Scalars['String']>;
    uploadId?: Maybe<Scalars['String']>;
    url?: Maybe<Scalars['String']>;
};

export type SanityImageAssetFilter = {
    /** Apply filters on document level */
    _?: InputMaybe<Sanity_DocumentFilter>;
    _createdAt?: InputMaybe<DatetimeFilter>;
    _id?: InputMaybe<IdFilter>;
    _key?: InputMaybe<StringFilter>;
    _rev?: InputMaybe<StringFilter>;
    _type?: InputMaybe<StringFilter>;
    _updatedAt?: InputMaybe<DatetimeFilter>;
    altText?: InputMaybe<StringFilter>;
    assetId?: InputMaybe<StringFilter>;
    description?: InputMaybe<StringFilter>;
    extension?: InputMaybe<StringFilter>;
    label?: InputMaybe<StringFilter>;
    metadata?: InputMaybe<SanityImageMetadataFilter>;
    mimeType?: InputMaybe<StringFilter>;
    originalFilename?: InputMaybe<StringFilter>;
    path?: InputMaybe<StringFilter>;
    sha1hash?: InputMaybe<StringFilter>;
    size?: InputMaybe<FloatFilter>;
    source?: InputMaybe<SanityAssetSourceDataFilter>;
    title?: InputMaybe<StringFilter>;
    uploadId?: InputMaybe<StringFilter>;
    url?: InputMaybe<StringFilter>;
};

export type SanityImageAssetSorting = {
    _createdAt?: InputMaybe<SortOrder>;
    _id?: InputMaybe<SortOrder>;
    _key?: InputMaybe<SortOrder>;
    _rev?: InputMaybe<SortOrder>;
    _type?: InputMaybe<SortOrder>;
    _updatedAt?: InputMaybe<SortOrder>;
    altText?: InputMaybe<SortOrder>;
    assetId?: InputMaybe<SortOrder>;
    description?: InputMaybe<SortOrder>;
    extension?: InputMaybe<SortOrder>;
    label?: InputMaybe<SortOrder>;
    metadata?: InputMaybe<SanityImageMetadataSorting>;
    mimeType?: InputMaybe<SortOrder>;
    originalFilename?: InputMaybe<SortOrder>;
    path?: InputMaybe<SortOrder>;
    sha1hash?: InputMaybe<SortOrder>;
    size?: InputMaybe<SortOrder>;
    source?: InputMaybe<SanityAssetSourceDataSorting>;
    title?: InputMaybe<SortOrder>;
    uploadId?: InputMaybe<SortOrder>;
    url?: InputMaybe<SortOrder>;
};

export type SanityImageCrop = {
    __typename?: 'SanityImageCrop';
    _key?: Maybe<Scalars['String']>;
    _type?: Maybe<Scalars['String']>;
    bottom?: Maybe<Scalars['Float']>;
    left?: Maybe<Scalars['Float']>;
    right?: Maybe<Scalars['Float']>;
    top?: Maybe<Scalars['Float']>;
};

export type SanityImageCropFilter = {
    _key?: InputMaybe<StringFilter>;
    _type?: InputMaybe<StringFilter>;
    bottom?: InputMaybe<FloatFilter>;
    left?: InputMaybe<FloatFilter>;
    right?: InputMaybe<FloatFilter>;
    top?: InputMaybe<FloatFilter>;
};

export type SanityImageCropSorting = {
    _key?: InputMaybe<SortOrder>;
    _type?: InputMaybe<SortOrder>;
    bottom?: InputMaybe<SortOrder>;
    left?: InputMaybe<SortOrder>;
    right?: InputMaybe<SortOrder>;
    top?: InputMaybe<SortOrder>;
};

export type SanityImageDimensions = {
    __typename?: 'SanityImageDimensions';
    _key?: Maybe<Scalars['String']>;
    _type?: Maybe<Scalars['String']>;
    aspectRatio?: Maybe<Scalars['Float']>;
    height?: Maybe<Scalars['Float']>;
    width?: Maybe<Scalars['Float']>;
};

export type SanityImageDimensionsFilter = {
    _key?: InputMaybe<StringFilter>;
    _type?: InputMaybe<StringFilter>;
    aspectRatio?: InputMaybe<FloatFilter>;
    height?: InputMaybe<FloatFilter>;
    width?: InputMaybe<FloatFilter>;
};

export type SanityImageDimensionsSorting = {
    _key?: InputMaybe<SortOrder>;
    _type?: InputMaybe<SortOrder>;
    aspectRatio?: InputMaybe<SortOrder>;
    height?: InputMaybe<SortOrder>;
    width?: InputMaybe<SortOrder>;
};

export type SanityImageHotspot = {
    __typename?: 'SanityImageHotspot';
    _key?: Maybe<Scalars['String']>;
    _type?: Maybe<Scalars['String']>;
    height?: Maybe<Scalars['Float']>;
    width?: Maybe<Scalars['Float']>;
    x?: Maybe<Scalars['Float']>;
    y?: Maybe<Scalars['Float']>;
};

export type SanityImageHotspotFilter = {
    _key?: InputMaybe<StringFilter>;
    _type?: InputMaybe<StringFilter>;
    height?: InputMaybe<FloatFilter>;
    width?: InputMaybe<FloatFilter>;
    x?: InputMaybe<FloatFilter>;
    y?: InputMaybe<FloatFilter>;
};

export type SanityImageHotspotSorting = {
    _key?: InputMaybe<SortOrder>;
    _type?: InputMaybe<SortOrder>;
    height?: InputMaybe<SortOrder>;
    width?: InputMaybe<SortOrder>;
    x?: InputMaybe<SortOrder>;
    y?: InputMaybe<SortOrder>;
};

export type SanityImageMetadata = {
    __typename?: 'SanityImageMetadata';
    _key?: Maybe<Scalars['String']>;
    _type?: Maybe<Scalars['String']>;
    blurHash?: Maybe<Scalars['String']>;
    dimensions?: Maybe<SanityImageDimensions>;
    hasAlpha?: Maybe<Scalars['Boolean']>;
    isOpaque?: Maybe<Scalars['Boolean']>;
    location?: Maybe<Geopoint>;
    lqip?: Maybe<Scalars['String']>;
    palette?: Maybe<SanityImagePalette>;
};

export type SanityImageMetadataFilter = {
    _key?: InputMaybe<StringFilter>;
    _type?: InputMaybe<StringFilter>;
    blurHash?: InputMaybe<StringFilter>;
    dimensions?: InputMaybe<SanityImageDimensionsFilter>;
    hasAlpha?: InputMaybe<BooleanFilter>;
    isOpaque?: InputMaybe<BooleanFilter>;
    location?: InputMaybe<GeopointFilter>;
    lqip?: InputMaybe<StringFilter>;
    palette?: InputMaybe<SanityImagePaletteFilter>;
};

export type SanityImageMetadataSorting = {
    _key?: InputMaybe<SortOrder>;
    _type?: InputMaybe<SortOrder>;
    blurHash?: InputMaybe<SortOrder>;
    dimensions?: InputMaybe<SanityImageDimensionsSorting>;
    hasAlpha?: InputMaybe<SortOrder>;
    isOpaque?: InputMaybe<SortOrder>;
    location?: InputMaybe<GeopointSorting>;
    lqip?: InputMaybe<SortOrder>;
    palette?: InputMaybe<SanityImagePaletteSorting>;
};

export type SanityImagePalette = {
    __typename?: 'SanityImagePalette';
    _key?: Maybe<Scalars['String']>;
    _type?: Maybe<Scalars['String']>;
    darkMuted?: Maybe<SanityImagePaletteSwatch>;
    darkVibrant?: Maybe<SanityImagePaletteSwatch>;
    dominant?: Maybe<SanityImagePaletteSwatch>;
    lightMuted?: Maybe<SanityImagePaletteSwatch>;
    lightVibrant?: Maybe<SanityImagePaletteSwatch>;
    muted?: Maybe<SanityImagePaletteSwatch>;
    vibrant?: Maybe<SanityImagePaletteSwatch>;
};

export type SanityImagePaletteFilter = {
    _key?: InputMaybe<StringFilter>;
    _type?: InputMaybe<StringFilter>;
    darkMuted?: InputMaybe<SanityImagePaletteSwatchFilter>;
    darkVibrant?: InputMaybe<SanityImagePaletteSwatchFilter>;
    dominant?: InputMaybe<SanityImagePaletteSwatchFilter>;
    lightMuted?: InputMaybe<SanityImagePaletteSwatchFilter>;
    lightVibrant?: InputMaybe<SanityImagePaletteSwatchFilter>;
    muted?: InputMaybe<SanityImagePaletteSwatchFilter>;
    vibrant?: InputMaybe<SanityImagePaletteSwatchFilter>;
};

export type SanityImagePaletteSorting = {
    _key?: InputMaybe<SortOrder>;
    _type?: InputMaybe<SortOrder>;
    darkMuted?: InputMaybe<SanityImagePaletteSwatchSorting>;
    darkVibrant?: InputMaybe<SanityImagePaletteSwatchSorting>;
    dominant?: InputMaybe<SanityImagePaletteSwatchSorting>;
    lightMuted?: InputMaybe<SanityImagePaletteSwatchSorting>;
    lightVibrant?: InputMaybe<SanityImagePaletteSwatchSorting>;
    muted?: InputMaybe<SanityImagePaletteSwatchSorting>;
    vibrant?: InputMaybe<SanityImagePaletteSwatchSorting>;
};

export type SanityImagePaletteSwatch = {
    __typename?: 'SanityImagePaletteSwatch';
    _key?: Maybe<Scalars['String']>;
    _type?: Maybe<Scalars['String']>;
    background?: Maybe<Scalars['String']>;
    foreground?: Maybe<Scalars['String']>;
    population?: Maybe<Scalars['Float']>;
    title?: Maybe<Scalars['String']>;
};

export type SanityImagePaletteSwatchFilter = {
    _key?: InputMaybe<StringFilter>;
    _type?: InputMaybe<StringFilter>;
    background?: InputMaybe<StringFilter>;
    foreground?: InputMaybe<StringFilter>;
    population?: InputMaybe<FloatFilter>;
    title?: InputMaybe<StringFilter>;
};

export type SanityImagePaletteSwatchSorting = {
    _key?: InputMaybe<SortOrder>;
    _type?: InputMaybe<SortOrder>;
    background?: InputMaybe<SortOrder>;
    foreground?: InputMaybe<SortOrder>;
    population?: InputMaybe<SortOrder>;
    title?: InputMaybe<SortOrder>;
};

export type Sanity_DocumentFilter = {
    /** All documents that are drafts. */
    is_draft?: InputMaybe<Scalars['Boolean']>;
    /** All documents referencing the given document ID. */
    references?: InputMaybe<Scalars['ID']>;
};

export type SeoHome = {
    __typename?: 'SeoHome';
    _key?: Maybe<Scalars['String']>;
    _type?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    image?: Maybe<Image>;
    title?: Maybe<Scalars['String']>;
};

export type SeoHomeFilter = {
    _key?: InputMaybe<StringFilter>;
    _type?: InputMaybe<StringFilter>;
    description?: InputMaybe<StringFilter>;
    image?: InputMaybe<ImageFilter>;
    title?: InputMaybe<StringFilter>;
};

export type SeoHomeSorting = {
    _key?: InputMaybe<SortOrder>;
    _type?: InputMaybe<SortOrder>;
    description?: InputMaybe<SortOrder>;
    image?: InputMaybe<ImageSorting>;
    title?: InputMaybe<SortOrder>;
};

export type SeoPage = {
    __typename?: 'SeoPage';
    _key?: Maybe<Scalars['String']>;
    _type?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    image?: Maybe<Image>;
    title?: Maybe<Scalars['String']>;
};

export type SeoPageFilter = {
    _key?: InputMaybe<StringFilter>;
    _type?: InputMaybe<StringFilter>;
    description?: InputMaybe<StringFilter>;
    image?: InputMaybe<ImageFilter>;
    title?: InputMaybe<StringFilter>;
};

export type SeoPageSorting = {
    _key?: InputMaybe<SortOrder>;
    _type?: InputMaybe<SortOrder>;
    description?: InputMaybe<SortOrder>;
    image?: InputMaybe<ImageSorting>;
    title?: InputMaybe<SortOrder>;
};

export type SeoShopify = {
    __typename?: 'SeoShopify';
    _key?: Maybe<Scalars['String']>;
    _type?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    image?: Maybe<Image>;
    title?: Maybe<Scalars['String']>;
};

export type SeoShopifyFilter = {
    _key?: InputMaybe<StringFilter>;
    _type?: InputMaybe<StringFilter>;
    description?: InputMaybe<StringFilter>;
    image?: InputMaybe<ImageFilter>;
    title?: InputMaybe<StringFilter>;
};

export type SeoShopifySorting = {
    _key?: InputMaybe<SortOrder>;
    _type?: InputMaybe<SortOrder>;
    description?: InputMaybe<SortOrder>;
    image?: InputMaybe<ImageSorting>;
    title?: InputMaybe<SortOrder>;
};

export type Settings = Document & {
    __typename?: 'Settings';
    /** Date the document was created */
    _createdAt?: Maybe<Scalars['DateTime']>;
    /** Document ID */
    _id?: Maybe<Scalars['ID']>;
    _key?: Maybe<Scalars['String']>;
    /** Current document revision */
    _rev?: Maybe<Scalars['String']>;
    /** Document type */
    _type?: Maybe<Scalars['String']>;
    /** Date the document was last modified */
    _updatedAt?: Maybe<Scalars['DateTime']>;
    footer?: Maybe<SettingsFooter>;
    menu?: Maybe<SettingsMenu>;
    notFoundPage?: Maybe<SettingsNotFoundPage>;
    seo?: Maybe<SettingsSeo>;
};

export type SettingsFilter = {
    /** Apply filters on document level */
    _?: InputMaybe<Sanity_DocumentFilter>;
    _createdAt?: InputMaybe<DatetimeFilter>;
    _id?: InputMaybe<IdFilter>;
    _key?: InputMaybe<StringFilter>;
    _rev?: InputMaybe<StringFilter>;
    _type?: InputMaybe<StringFilter>;
    _updatedAt?: InputMaybe<DatetimeFilter>;
    footer?: InputMaybe<SettingsFooterFilter>;
    menu?: InputMaybe<SettingsMenuFilter>;
    notFoundPage?: InputMaybe<SettingsNotFoundPageFilter>;
    seo?: InputMaybe<SettingsSeoFilter>;
};

export type SettingsFooter = {
    __typename?: 'SettingsFooter';
    _key?: Maybe<Scalars['String']>;
    _type?: Maybe<Scalars['String']>;
    links?: Maybe<Array<Maybe<LinkExternalOrLinkInternal>>>;
    textRaw?: Maybe<Scalars['JSON']>;
};

export type SettingsFooterFilter = {
    _key?: InputMaybe<StringFilter>;
    _type?: InputMaybe<StringFilter>;
};

export type SettingsFooterSorting = {
    _key?: InputMaybe<SortOrder>;
    _type?: InputMaybe<SortOrder>;
};

export type SettingsMenu = {
    __typename?: 'SettingsMenu';
    _key?: Maybe<Scalars['String']>;
    _type?: Maybe<Scalars['String']>;
    links?: Maybe<Array<Maybe<LinkExternalOrLinkInternal>>>;
};

export type SettingsMenuFilter = {
    _key?: InputMaybe<StringFilter>;
    _type?: InputMaybe<StringFilter>;
};

export type SettingsMenuSorting = {
    _key?: InputMaybe<SortOrder>;
    _type?: InputMaybe<SortOrder>;
};

export type SettingsNotFoundPage = {
    __typename?: 'SettingsNotFoundPage';
    _key?: Maybe<Scalars['String']>;
    _type?: Maybe<Scalars['String']>;
    body?: Maybe<Scalars['String']>;
    /** Collection products displayed on this page */
    collection?: Maybe<Collection>;
    title?: Maybe<Scalars['String']>;
};

export type SettingsNotFoundPageFilter = {
    _key?: InputMaybe<StringFilter>;
    _type?: InputMaybe<StringFilter>;
    body?: InputMaybe<StringFilter>;
    collection?: InputMaybe<CollectionFilter>;
    title?: InputMaybe<StringFilter>;
};

export type SettingsNotFoundPageSorting = {
    _key?: InputMaybe<SortOrder>;
    _type?: InputMaybe<SortOrder>;
    body?: InputMaybe<SortOrder>;
    title?: InputMaybe<SortOrder>;
};

export type SettingsSeo = {
    __typename?: 'SettingsSeo';
    _key?: Maybe<Scalars['String']>;
    _type?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    title?: Maybe<Scalars['String']>;
};

export type SettingsSeoFilter = {
    _key?: InputMaybe<StringFilter>;
    _type?: InputMaybe<StringFilter>;
    description?: InputMaybe<StringFilter>;
    title?: InputMaybe<StringFilter>;
};

export type SettingsSeoSorting = {
    _key?: InputMaybe<SortOrder>;
    _type?: InputMaybe<SortOrder>;
    description?: InputMaybe<SortOrder>;
    title?: InputMaybe<SortOrder>;
};

export type SettingsSorting = {
    _createdAt?: InputMaybe<SortOrder>;
    _id?: InputMaybe<SortOrder>;
    _key?: InputMaybe<SortOrder>;
    _rev?: InputMaybe<SortOrder>;
    _type?: InputMaybe<SortOrder>;
    _updatedAt?: InputMaybe<SortOrder>;
    footer?: InputMaybe<SettingsFooterSorting>;
    menu?: InputMaybe<SettingsMenuSorting>;
    notFoundPage?: InputMaybe<SettingsNotFoundPageSorting>;
    seo?: InputMaybe<SettingsSeoSorting>;
};

export type ShopifyCollection = {
    __typename?: 'ShopifyCollection';
    _key?: Maybe<Scalars['String']>;
    _type?: Maybe<Scalars['String']>;
    createdAt?: Maybe<Scalars['String']>;
    descriptionHtml?: Maybe<Scalars['String']>;
    /** Require any condition if true, otherwise require all conditions */
    disjunctive?: Maybe<Scalars['Boolean']>;
    /** Shopify Collection GID */
    gid?: Maybe<Scalars['String']>;
    /** Shopify Collection ID */
    id?: Maybe<Scalars['Float']>;
    imageUrl?: Maybe<Scalars['String']>;
    isDeleted?: Maybe<Scalars['Boolean']>;
    rules?: Maybe<Array<Maybe<Rule>>>;
    slug?: Maybe<Slug>;
    sortOrder?: Maybe<Scalars['String']>;
    title?: Maybe<Scalars['String']>;
    updatedAt?: Maybe<Scalars['String']>;
};

export type ShopifyCollectionFilter = {
    _key?: InputMaybe<StringFilter>;
    _type?: InputMaybe<StringFilter>;
    createdAt?: InputMaybe<StringFilter>;
    descriptionHtml?: InputMaybe<StringFilter>;
    disjunctive?: InputMaybe<BooleanFilter>;
    gid?: InputMaybe<StringFilter>;
    id?: InputMaybe<FloatFilter>;
    imageUrl?: InputMaybe<StringFilter>;
    isDeleted?: InputMaybe<BooleanFilter>;
    slug?: InputMaybe<SlugFilter>;
    sortOrder?: InputMaybe<StringFilter>;
    title?: InputMaybe<StringFilter>;
    updatedAt?: InputMaybe<StringFilter>;
};

export type ShopifyCollectionSorting = {
    _key?: InputMaybe<SortOrder>;
    _type?: InputMaybe<SortOrder>;
    createdAt?: InputMaybe<SortOrder>;
    descriptionHtml?: InputMaybe<SortOrder>;
    disjunctive?: InputMaybe<SortOrder>;
    gid?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    imageUrl?: InputMaybe<SortOrder>;
    isDeleted?: InputMaybe<SortOrder>;
    slug?: InputMaybe<SlugSorting>;
    sortOrder?: InputMaybe<SortOrder>;
    title?: InputMaybe<SortOrder>;
    updatedAt?: InputMaybe<SortOrder>;
};

export type ShopifyProduct = {
    __typename?: 'ShopifyProduct';
    _key?: Maybe<Scalars['String']>;
    _type?: Maybe<Scalars['String']>;
    createdAt?: Maybe<Scalars['String']>;
    descriptionHtml?: Maybe<Scalars['String']>;
    /** Shopify Product GID */
    gid?: Maybe<Scalars['String']>;
    /** Shopify Product ID */
    id?: Maybe<Scalars['Float']>;
    isDeleted?: Maybe<Scalars['Boolean']>;
    options?: Maybe<Array<Maybe<Option>>>;
    /** Image displayed in both cart and checkout */
    previewImageUrl?: Maybe<Scalars['String']>;
    priceRange?: Maybe<ProductPriceRange>;
    productType?: Maybe<Scalars['String']>;
    slug?: Maybe<Slug>;
    status?: Maybe<Scalars['String']>;
    tags?: Maybe<Scalars['String']>;
    /** Title displayed in both cart and checkout */
    title?: Maybe<Scalars['String']>;
    updatedAt?: Maybe<Scalars['String']>;
    variants?: Maybe<Array<Maybe<ProductVariant>>>;
    vendor?: Maybe<Scalars['String']>;
};

export type ShopifyProductFilter = {
    _key?: InputMaybe<StringFilter>;
    _type?: InputMaybe<StringFilter>;
    createdAt?: InputMaybe<StringFilter>;
    descriptionHtml?: InputMaybe<StringFilter>;
    gid?: InputMaybe<StringFilter>;
    id?: InputMaybe<FloatFilter>;
    isDeleted?: InputMaybe<BooleanFilter>;
    previewImageUrl?: InputMaybe<StringFilter>;
    priceRange?: InputMaybe<ProductPriceRangeFilter>;
    productType?: InputMaybe<StringFilter>;
    slug?: InputMaybe<SlugFilter>;
    status?: InputMaybe<StringFilter>;
    tags?: InputMaybe<StringFilter>;
    title?: InputMaybe<StringFilter>;
    updatedAt?: InputMaybe<StringFilter>;
    vendor?: InputMaybe<StringFilter>;
};

export type ShopifyProductSorting = {
    _key?: InputMaybe<SortOrder>;
    _type?: InputMaybe<SortOrder>;
    createdAt?: InputMaybe<SortOrder>;
    descriptionHtml?: InputMaybe<SortOrder>;
    gid?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    isDeleted?: InputMaybe<SortOrder>;
    previewImageUrl?: InputMaybe<SortOrder>;
    priceRange?: InputMaybe<ProductPriceRangeSorting>;
    productType?: InputMaybe<SortOrder>;
    slug?: InputMaybe<SlugSorting>;
    status?: InputMaybe<SortOrder>;
    tags?: InputMaybe<SortOrder>;
    title?: InputMaybe<SortOrder>;
    updatedAt?: InputMaybe<SortOrder>;
    vendor?: InputMaybe<SortOrder>;
};

export type ShopifyProductVariant = {
    __typename?: 'ShopifyProductVariant';
    _key?: Maybe<Scalars['String']>;
    _type?: Maybe<Scalars['String']>;
    compareAtPrice?: Maybe<Scalars['Float']>;
    createdAt?: Maybe<Scalars['String']>;
    /** Shopify Product Variant GID */
    gid?: Maybe<Scalars['String']>;
    /** Shopify Product Variant ID */
    id?: Maybe<Scalars['Float']>;
    inventory?: Maybe<ProductInventory>;
    isDeleted?: Maybe<Scalars['Boolean']>;
    option1?: Maybe<Scalars['String']>;
    option2?: Maybe<Scalars['String']>;
    option3?: Maybe<Scalars['String']>;
    /** Image displayed in both cart and checkout */
    previewImageUrl?: Maybe<Scalars['String']>;
    price?: Maybe<Scalars['Float']>;
    productGid?: Maybe<Scalars['String']>;
    productId?: Maybe<Scalars['Float']>;
    sku?: Maybe<Scalars['String']>;
    status?: Maybe<Scalars['String']>;
    title?: Maybe<Scalars['String']>;
    updatedAt?: Maybe<Scalars['String']>;
};

export type ShopifyProductVariantFilter = {
    _key?: InputMaybe<StringFilter>;
    _type?: InputMaybe<StringFilter>;
    compareAtPrice?: InputMaybe<FloatFilter>;
    createdAt?: InputMaybe<StringFilter>;
    gid?: InputMaybe<StringFilter>;
    id?: InputMaybe<FloatFilter>;
    inventory?: InputMaybe<ProductInventoryFilter>;
    isDeleted?: InputMaybe<BooleanFilter>;
    option1?: InputMaybe<StringFilter>;
    option2?: InputMaybe<StringFilter>;
    option3?: InputMaybe<StringFilter>;
    previewImageUrl?: InputMaybe<StringFilter>;
    price?: InputMaybe<FloatFilter>;
    productGid?: InputMaybe<StringFilter>;
    productId?: InputMaybe<FloatFilter>;
    sku?: InputMaybe<StringFilter>;
    status?: InputMaybe<StringFilter>;
    title?: InputMaybe<StringFilter>;
    updatedAt?: InputMaybe<StringFilter>;
};

export type ShopifyProductVariantSorting = {
    _key?: InputMaybe<SortOrder>;
    _type?: InputMaybe<SortOrder>;
    compareAtPrice?: InputMaybe<SortOrder>;
    createdAt?: InputMaybe<SortOrder>;
    gid?: InputMaybe<SortOrder>;
    id?: InputMaybe<SortOrder>;
    inventory?: InputMaybe<ProductInventorySorting>;
    isDeleted?: InputMaybe<SortOrder>;
    option1?: InputMaybe<SortOrder>;
    option2?: InputMaybe<SortOrder>;
    option3?: InputMaybe<SortOrder>;
    previewImageUrl?: InputMaybe<SortOrder>;
    price?: InputMaybe<SortOrder>;
    productGid?: InputMaybe<SortOrder>;
    productId?: InputMaybe<SortOrder>;
    sku?: InputMaybe<SortOrder>;
    status?: InputMaybe<SortOrder>;
    title?: InputMaybe<SortOrder>;
    updatedAt?: InputMaybe<SortOrder>;
};

export type Slug = {
    __typename?: 'Slug';
    _key?: Maybe<Scalars['String']>;
    _type?: Maybe<Scalars['String']>;
    current?: Maybe<Scalars['String']>;
};

export type SlugFilter = {
    _key?: InputMaybe<StringFilter>;
    _type?: InputMaybe<StringFilter>;
    current?: InputMaybe<StringFilter>;
};

export type SlugSorting = {
    _key?: InputMaybe<SortOrder>;
    _type?: InputMaybe<SortOrder>;
    current?: InputMaybe<SortOrder>;
};

export enum SortOrder {
    /** Sorts on the value in ascending order. */
    Asc = 'ASC',
    /** Sorts on the value in descending order. */
    Desc = 'DESC'
}

export type Span = {
    __typename?: 'Span';
    _key?: Maybe<Scalars['String']>;
    _type?: Maybe<Scalars['String']>;
    marks?: Maybe<Array<Maybe<Scalars['String']>>>;
    text?: Maybe<Scalars['String']>;
};

export type StringFilter = {
    /** Checks if the value is equal to the given input. */
    eq?: InputMaybe<Scalars['String']>;
    in?: InputMaybe<Array<Scalars['String']>>;
    /** Checks if the value matches the given word/words. */
    matches?: InputMaybe<Scalars['String']>;
    /** Checks if the value is not equal to the given input. */
    neq?: InputMaybe<Scalars['String']>;
    nin?: InputMaybe<Array<Scalars['String']>>;
};

export type ProductQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

export type ProductQuery = {
    __typename?: 'RootQuery';
    Product?: {
        __typename?: 'Product';
        store?: {
            __typename?: 'ShopifyProduct';
            slug?: { __typename?: 'Slug'; current?: string | null } | null;
        } | null;
    } | null;
};

export type CollectionQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

export type CollectionQuery = {
    __typename?: 'RootQuery';
    Collection?: {
        __typename?: 'Collection';
        store?: {
            __typename?: 'ShopifyCollection';
            slug?: { __typename?: 'Slug'; current?: string | null } | null;
        } | null;
    } | null;
};

export type PageQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

export type PageQuery = {
    __typename?: 'RootQuery';
    Page?: {
        __typename?: 'Page';
        slug?: { __typename?: 'Slug'; current?: string | null } | null;
    } | null;
};

export type AssetQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

export type AssetQuery = {
    __typename?: 'RootQuery';
    SanityFileAsset?: {
        __typename?: 'SanityFileAsset';
        url?: string | null;
        altText?: string | null;
    } | null;
};

export type GetHomeQueryVariables = Exact<{ [key: string]: never }>;

export type GetHomeQuery = {
    __typename?: 'RootQuery';
    allHome: Array<{ __typename?: 'Home'; _id?: string | null; _rev?: string | null }>;
};

export type CollectionBySlugQueryVariables = Exact<{
    slug?: InputMaybe<Scalars['String']>;
}>;

export type CollectionBySlugQuery = {
    __typename?: 'RootQuery';
    allCollection: Array<{
        __typename?: 'Collection';
        _id?: string | null;
        _rev?: string | null;
        store?: { __typename?: 'ShopifyCollection'; title?: string | null } | null;
    }>;
};

export type ProductBySlugQueryVariables = Exact<{
    slug?: InputMaybe<Scalars['String']>;
}>;

export type ProductBySlugQuery = {
    __typename?: 'RootQuery';
    allProduct: Array<{
        __typename?: 'Product';
        _id?: string | null;
        _rev?: string | null;
        store?: { __typename?: 'ShopifyProduct'; title?: string | null } | null;
    }>;
};

export type PageBySlugQueryVariables = Exact<{
    slug?: InputMaybe<Scalars['String']>;
}>;

export type PageBySlugQuery = {
    __typename?: 'RootQuery';
    allPage: Array<{
        __typename?: 'Page';
        _id?: string | null;
        _rev?: string | null;
        title?: string | null;
    }>;
};

export type SettingsQueryVariables = Exact<{
    id: Scalars['ID'];
}>;

export type SettingsQuery = {
    __typename?: 'RootQuery';
    Settings?: {
        __typename?: 'Settings';
        menu?: {
            __typename?: 'SettingsMenu';
            links?: Array<
                { __typename: 'LinkExternal' } | { __typename: 'LinkInternal' } | null
            > | null;
        } | null;
        footer?: {
            __typename?: 'SettingsFooter';
            textRaw?: any | null;
            links?: Array<
                { __typename: 'LinkExternal' } | { __typename: 'LinkInternal' } | null
            > | null;
        } | null;
    } | null;
};

export const ProductDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'product' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
                    type: {
                        kind: 'NonNullType',
                        type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } }
                    }
                }
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'Product' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'id' },
                                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } }
                            }
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'store' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'slug' },
                                                selectionSet: {
                                                    kind: 'SelectionSet',
                                                    selections: [
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'current' }
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        }
    ]
} as unknown as DocumentNode<ProductQuery, ProductQueryVariables>;
export const CollectionDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'collection' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
                    type: {
                        kind: 'NonNullType',
                        type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } }
                    }
                }
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'Collection' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'id' },
                                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } }
                            }
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'store' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'slug' },
                                                selectionSet: {
                                                    kind: 'SelectionSet',
                                                    selections: [
                                                        {
                                                            kind: 'Field',
                                                            name: { kind: 'Name', value: 'current' }
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        }
    ]
} as unknown as DocumentNode<CollectionQuery, CollectionQueryVariables>;
export const PageDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'page' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
                    type: {
                        kind: 'NonNullType',
                        type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } }
                    }
                }
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'Page' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'id' },
                                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } }
                            }
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'slug' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'current' }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        }
    ]
} as unknown as DocumentNode<PageQuery, PageQueryVariables>;
export const AssetDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'Asset' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
                    type: {
                        kind: 'NonNullType',
                        type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } }
                    }
                }
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'SanityFileAsset' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'id' },
                                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } }
                            }
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'altText' } }
                            ]
                        }
                    }
                ]
            }
        }
    ]
} as unknown as DocumentNode<AssetQuery, AssetQueryVariables>;
export const GetHomeDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'GetHome' },
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'allHome' },
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: '_id' } },
                                { kind: 'Field', name: { kind: 'Name', value: '_rev' } }
                            ]
                        }
                    }
                ]
            }
        }
    ]
} as unknown as DocumentNode<GetHomeQuery, GetHomeQueryVariables>;
export const CollectionBySlugDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'collectionBySlug' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
                    type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } }
                }
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'allCollection' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'where' },
                                value: {
                                    kind: 'ObjectValue',
                                    fields: [
                                        {
                                            kind: 'ObjectField',
                                            name: { kind: 'Name', value: 'store' },
                                            value: {
                                                kind: 'ObjectValue',
                                                fields: [
                                                    {
                                                        kind: 'ObjectField',
                                                        name: { kind: 'Name', value: 'slug' },
                                                        value: {
                                                            kind: 'ObjectValue',
                                                            fields: [
                                                                {
                                                                    kind: 'ObjectField',
                                                                    name: {
                                                                        kind: 'Name',
                                                                        value: 'current'
                                                                    },
                                                                    value: {
                                                                        kind: 'ObjectValue',
                                                                        fields: [
                                                                            {
                                                                                kind: 'ObjectField',
                                                                                name: {
                                                                                    kind: 'Name',
                                                                                    value: 'eq'
                                                                                },
                                                                                value: {
                                                                                    kind: 'Variable',
                                                                                    name: {
                                                                                        kind: 'Name',
                                                                                        value: 'slug'
                                                                                    }
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                }
                            }
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: '_id' } },
                                { kind: 'Field', name: { kind: 'Name', value: '_rev' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'store' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'title' }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        }
    ]
} as unknown as DocumentNode<CollectionBySlugQuery, CollectionBySlugQueryVariables>;
export const ProductBySlugDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'productBySlug' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
                    type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } }
                }
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'allProduct' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'where' },
                                value: {
                                    kind: 'ObjectValue',
                                    fields: [
                                        {
                                            kind: 'ObjectField',
                                            name: { kind: 'Name', value: 'store' },
                                            value: {
                                                kind: 'ObjectValue',
                                                fields: [
                                                    {
                                                        kind: 'ObjectField',
                                                        name: { kind: 'Name', value: 'slug' },
                                                        value: {
                                                            kind: 'ObjectValue',
                                                            fields: [
                                                                {
                                                                    kind: 'ObjectField',
                                                                    name: {
                                                                        kind: 'Name',
                                                                        value: 'current'
                                                                    },
                                                                    value: {
                                                                        kind: 'ObjectValue',
                                                                        fields: [
                                                                            {
                                                                                kind: 'ObjectField',
                                                                                name: {
                                                                                    kind: 'Name',
                                                                                    value: 'eq'
                                                                                },
                                                                                value: {
                                                                                    kind: 'Variable',
                                                                                    name: {
                                                                                        kind: 'Name',
                                                                                        value: 'slug'
                                                                                    }
                                                                                }
                                                                            }
                                                                        ]
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                }
                            }
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: '_id' } },
                                { kind: 'Field', name: { kind: 'Name', value: '_rev' } },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'store' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'title' }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        }
    ]
} as unknown as DocumentNode<ProductBySlugQuery, ProductBySlugQueryVariables>;
export const PageBySlugDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'pageBySlug' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
                    type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } }
                }
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'allPage' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'where' },
                                value: {
                                    kind: 'ObjectValue',
                                    fields: [
                                        {
                                            kind: 'ObjectField',
                                            name: { kind: 'Name', value: 'slug' },
                                            value: {
                                                kind: 'ObjectValue',
                                                fields: [
                                                    {
                                                        kind: 'ObjectField',
                                                        name: { kind: 'Name', value: 'current' },
                                                        value: {
                                                            kind: 'ObjectValue',
                                                            fields: [
                                                                {
                                                                    kind: 'ObjectField',
                                                                    name: {
                                                                        kind: 'Name',
                                                                        value: 'eq'
                                                                    },
                                                                    value: {
                                                                        kind: 'Variable',
                                                                        name: {
                                                                            kind: 'Name',
                                                                            value: 'slug'
                                                                        }
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                }
                            }
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                { kind: 'Field', name: { kind: 'Name', value: '_id' } },
                                { kind: 'Field', name: { kind: 'Name', value: '_rev' } },
                                { kind: 'Field', name: { kind: 'Name', value: 'title' } }
                            ]
                        }
                    }
                ]
            }
        }
    ]
} as unknown as DocumentNode<PageBySlugQuery, PageBySlugQueryVariables>;
export const SettingsDocument = {
    kind: 'Document',
    definitions: [
        {
            kind: 'OperationDefinition',
            operation: 'query',
            name: { kind: 'Name', value: 'settings' },
            variableDefinitions: [
                {
                    kind: 'VariableDefinition',
                    variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
                    type: {
                        kind: 'NonNullType',
                        type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } }
                    }
                }
            ],
            selectionSet: {
                kind: 'SelectionSet',
                selections: [
                    {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'Settings' },
                        arguments: [
                            {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'id' },
                                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } }
                            }
                        ],
                        selectionSet: {
                            kind: 'SelectionSet',
                            selections: [
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'menu' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'links' },
                                                selectionSet: {
                                                    kind: 'SelectionSet',
                                                    selections: [
                                                        {
                                                            kind: 'Field',
                                                            name: {
                                                                kind: 'Name',
                                                                value: '__typename'
                                                            }
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'footer' },
                                    selectionSet: {
                                        kind: 'SelectionSet',
                                        selections: [
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'links' },
                                                selectionSet: {
                                                    kind: 'SelectionSet',
                                                    selections: [
                                                        {
                                                            kind: 'Field',
                                                            name: {
                                                                kind: 'Name',
                                                                value: '__typename'
                                                            }
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'textRaw' }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        }
    ]
} as unknown as DocumentNode<SettingsQuery, SettingsQueryVariables>;

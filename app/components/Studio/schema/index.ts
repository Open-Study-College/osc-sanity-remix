// Rich text annotations used in the block content editor
import annotationLinkEmail from './annotations/linkEmail';
import annotationLinkExternal from './annotations/linkExternal';
import annotationLinkInternal from './annotations/linkInternal';
import annotationProduct from './annotations/product';

// Block content
import body from './blocks/body';

// Documents
import { collection } from './documents/collection';
import { page } from './documents/page';
import { product } from './documents/product';
import { productVariant } from './documents/productVariant';

// Singletons
import { home } from './singletons/home';
import { settings } from './singletons/settings';

// Objects
import { collectionRule } from './objects/collectionRule';
import { linkExternal } from './objects/linkExternal';
import { linkInternal } from './objects/linkInternal';
import { hero } from './objects/hero';
import { content as moduleContent } from './objects/module/content';
import { mediaText as moduleMediaText } from './objects/module/mediaText';
import { placeholderString } from './objects/placeholderString';
import { productInventory } from './objects/productInventory';
import { productPriceRange } from './objects/productPriceRange';
import { productOption } from './objects/productOption';
import { productWithVariant } from './objects/productWithVariant';
import { proxyString } from './objects/proxyString';
import { home as seoHome } from './objects/seo/home';
import { page as seoPage } from './objects/seo/page';
import { footer as settingsFooter } from './objects/settings/footer';
import { notFoundPage as settingsNotFoundPage } from './objects/settings/notFoundPage';
import { seo as settingsSeo } from './objects/settings/seo';
import { menu as settingsMenu } from './objects/settings/menu';
import { shopify as seoShopify } from './objects/seo/shopify';
import { shopifyCollection } from './objects/shopifyCollection';
import { shopifyProduct } from './objects/shopifyProduct';
import { shopifyProductVariant } from './objects/shopifyProductVariant';

export const schemaTypes = [
    // Annotations
    annotationLinkEmail,
    annotationLinkExternal,
    annotationLinkInternal,
    annotationProduct,

    // Block content
    body,

    // Documents
    collection,
    page,
    product,
    productVariant,

    // Singletons
    home,
    settings,

    // Objects
    collectionRule,
    hero,
    linkExternal,
    linkInternal,
    moduleContent,
    moduleMediaText,
    placeholderString,
    productInventory,
    productOption,
    productPriceRange,
    productWithVariant,
    proxyString,
    seoHome,
    seoPage,
    seoShopify,
    settingsFooter,
    settingsMenu,
    settingsSeo,
    settingsNotFoundPage,
    shopifyCollection,
    shopifyProduct,
    shopifyProductVariant
];

// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Rich text annotations used in the block content editor
import annotationLinkEmail from './annotations/linkEmail';
import annotationLinkExternal from './annotations/linkExternal';
import annotationLinkInternal from './annotations/linkInternal';
import annotationProduct from './annotations/product';

// Document types
import collection from './documents/collection';
import page from './documents/page';
import product from './documents/product';
import productVariant from './documents/productVariant';

// Singleton document types
import home from './singletons/home';
import settings from './singletons/settings';

// Block content
import body from './blocks/body';

// Object types
import collectionRule from './objects/collectionRule';
// import imageWithProductHotspots from './objects/imageWithProductHotspots';
import linkExternal from './objects/linkExternal';
import linkInternal from './objects/linkInternal';
import hero from './objects/hero';
// import moduleAccordion from "./objects/module/accordion";
import moduleCallout from './objects/module/callout';
import moduleMediaText from './objects/module/mediaText';
// import moduleCollection from './objects/module/collection';
import moduleContent from './objects/module/content';
import moduleGrid from './objects/module/grid';
// import moduleImage from './objects/module/image';
// import moduleImages from './objects/module/images';
// import moduleInstagram from './objects/module/instagram';
// import moduleProduct from './objects/module/product';
// import moduleProducts from './objects/module/products';
import settingsMenu from './objects/settings/menu';
import settingsFooter from './objects/settings/footer';
import settingsNotFoundPage from './objects/settings/notFoundPage';
import settingsSeo from './objects/settings/seo';
import placeholderString from './objects/placeholderString';
// import productHotspots from './objects/productHotspots';
import productOption from './objects/productOption';
import productInventory from './objects/productInventory';
import productPriceRange from './objects/productPriceRange';
import productWithVariant from './objects/productWithVariant';
import proxyString from './objects/proxyString';
import seoHome from './objects/seo/home';
import seoPage from './objects/seo/page';
import seoShopify from './objects/seo/shopify';
import shopifyCollection from './objects/shopifyCollection';
import shopifyProduct from './objects/shopifyProduct';
import shopifyProductVariant from './objects/shopifyProductVariant';

// Build the schemas and export to the Sanity Studio app
export default createSchema({
    // We name our schema
    name: 'default',
    // Then proceed to concatenate our document type
    // to the ones provided by any plugins that are installed
    types: schemaTypes.concat([
        // Annotations
        annotationLinkEmail,
        annotationLinkExternal,
        annotationLinkInternal,
        annotationProduct,
        // Document types
        collection,
        page,
        product,
        productVariant,
        // Singleton document types
        home,
        settings,
        // Block content
        body,
        // Objects
        collectionRule,
        hero,
        // imageWithProductHotspots,
        linkExternal,
        linkInternal,
        // moduleAccordion,
        moduleCallout,
        moduleMediaText,
        // moduleCollection,
        moduleContent,
        // moduleGrid,
        // moduleImage,
        // moduleImages,
        // moduleInstagram,
        // moduleProduct,
        // moduleProducts,
        placeholderString,
        // productHotspots,
        productInventory,
        productOption,
        productPriceRange,
        productWithVariant,
        proxyString,
        settingsMenu,
        settingsFooter,
        settingsNotFoundPage,
        settingsSeo,
        seoHome,
        seoPage,
        seoShopify,
        shopifyCollection,
        shopifyProduct,
        shopifyProductVariant
    ])
});

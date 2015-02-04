'use strict';
/* global sofa */

describe('sofa.urlParserService', function () {

    var urlParserService,
        locationService;

    var PRODUCT_URL = 'http://localhost:8888/couchcommerce/couchcommerce-frontend/app/dist/#/cat/deutsch-freizeitwelten-vintage/product/fahrerbrille-chronos',
        PRODUCT_URL2 = 'http://localhost:8888/couchcommerce/couchcommerce-frontend/app/dist/#/cat/deutsch-freizeitwelten-vintage/product/fahrerbrille-chronos?now=1',
        PRODUCTS_URL = 'http://localhost:8888/couchcommerce/couchcommerce-frontend/app/dist/#/cat/deutsch-freizeitwelten-vintage/products',
        PRODUCTS_URL2 = 'http://localhost:8888/couchcommerce/couchcommerce-frontend/app/dist/#/cat/deutsch-freizeitwelten-vintage/products?now=1',
        CATEGORIES_URL = 'http://localhost:8888/couchcommerce/couchcommerce-frontend/app/dist/#/cat/deutsch-freizeitwelten',
        CATEGORIES_URL2 = 'http://localhost:8888/couchcommerce/couchcommerce-frontend/app/dist/#/cat/deutsch-freizeitwelten?now=1';


    beforeEach(function () {
        locationService = new sofa.LocationService();
        urlParserService = new sofa.UrlParserService(locationService);
    });

    it('should be defined', function () {
        expect(urlParserService).toBeDefined();
    });

    it('should have a method isView', function () {
        expect(urlParserService.isView).toBeDefined();
    });

    it('should have a method isRootCategory', function () {
        expect(urlParserService.isRootCategory).toBeDefined();
    });

    it('should have a method getCategoryUrlId', function () {
        expect(urlParserService.getCategoryUrlId).toBeDefined();
    });

    it('should have a method getProductUrlId', function () {
        expect(urlParserService.getProductUrlId).toBeDefined();
    });

    describe('sofa.UrlParserService#isView', function () {

        it('should be a function', function () {
            expect(typeof urlParserService.isView).toBe('function');
        });

        it('should return boolean', function () {
            expect(typeof urlParserService.isView('product')).toBe('boolean');
        });

        it('it should detect it as product url', function () {
            spyOn(locationService, 'path').and.returnValue(PRODUCT_URL);
            expect(urlParserService.isView('product')).toBe(true);
            expect(urlParserService.isView('products')).toBe(false);
            expect(urlParserService.isView('categories')).toBe(false);

            locationService.path.and.returnValue(PRODUCT_URL2);
            expect(urlParserService.isView('product')).toBe(true);
            expect(urlParserService.isView('products')).toBe(false);
            expect(urlParserService.isView('categories')).toBe(false);
        });

        it('it should detect it as products url', function () {
            spyOn(locationService, 'path').and.returnValue(PRODUCTS_URL);
            expect(urlParserService.isView('product')).toBe(false);
            expect(urlParserService.isView('products')).toBe(true);
            expect(urlParserService.isView('categories')).toBe(false);


            locationService.path.and.returnValue(PRODUCTS_URL2);
            expect(urlParserService.isView('product')).toBe(false);
            expect(urlParserService.isView('products')).toBe(true);
            expect(urlParserService.isView('categories')).toBe(false);
        });

        it('it should detect it as categories url', function () {
            spyOn(locationService, 'path').and.returnValue(CATEGORIES_URL);
            expect(urlParserService.isView('product')).toBe(false);
            expect(urlParserService.isView('products')).toBe(false);
            expect(urlParserService.isView('categories')).toBe(true);


            locationService.path.and.returnValue(CATEGORIES_URL2);
            expect(urlParserService.isView('product')).toBe(false);
            expect(urlParserService.isView('products')).toBe(false);
            expect(urlParserService.isView('categories')).toBe(true);
        });
    });

    describe('sofa.UrlParserService#getProductUrlId', function () {

        it('should be a function', function () {
            expect(typeof urlParserService.getProductUrlId).toBe('function');
        });

        it('it can extract productUrlId from url', function () {
            spyOn(locationService, 'path').and.returnValue(PRODUCT_URL);
            expect(urlParserService.getProductUrlId()).toBe('fahrerbrille-chronos');

            locationService.path.and.returnValue(PRODUCT_URL2);
            expect(urlParserService.getProductUrlId()).toBe('fahrerbrille-chronos');
        });
    });


    describe('sofa.UrlParserService#getCategoryUrlId', function () {

        it('it can extract categoryUrlId from url', function () {
            spyOn(locationService, 'path').and.returnValue(CATEGORIES_URL);
            expect(urlParserService.getCategoryUrlId()).toBe('deutsch-freizeitwelten');

            locationService.path.and.returnValue(CATEGORIES_URL2);
            expect(urlParserService.getCategoryUrlId()).toBe('deutsch-freizeitwelten');
        });
    });
});

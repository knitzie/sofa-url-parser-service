/**
 * sofa-url-parser-service - v0.3.1 - Wed Feb 04 2015 16:57:05 GMT+0100 (CET)
 * http://www.sofa.io
 *
 * Copyright (c) 2014 CouchCommerce GmbH (http://www.couchcommerce.com / http://www.sofa.io) and other contributors
 * THIS SOFTWARE CONTAINS COMPONENTS OF THE SOFA.IO COUCHCOMMERCE SDK (WWW.SOFA.IO)
 * IT IS PROVIDED UNDER THE LICENSE TERMS OF THE ATTACHED LICENSE.TXT.
 */
;(function (angular) {
'use strict';

angular.module('sofa.urlParserService', [])

.factory('urlParserService', function () {
    return new sofa.UrlParserService(new sofa.LocationService());
});
}(angular));

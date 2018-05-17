// Uses AMD or browser globals to create a module.

// Based on https://github.com/umdjs/umd/blob/master/templates/amdWeb.js

// Defines a module "cdeConfig" that depends on jQuery.
// Note that the name of the module is implied by the file name. It is best
// if the file name and the exported global have matching names.

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['home/jquery'], factory);
    } else {
        // Browser globals
        root.CDEConfig = factory(root.jquery);
    }
}(this, function (jquery) {

    // Return object containing all the per-host-name configurations.  Normally, these should be empty.
    return {
        environmentConfig: {
            // Prod values are set in default
            'www-stage.cancer.gov': {
                ClinicalTrialsAPIServer: 'clinicaltrialsapi-stage.cancer.gov',
            },
			'localhost' : {
                ClinicalTrialsAPIServer: 'clinicaltrialsapi.cancer.gov',
			}
        }
    };
}));

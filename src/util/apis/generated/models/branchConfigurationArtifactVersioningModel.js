/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * The versioning configuration for artifacts built for this branch
 *
 */
class BranchConfigurationArtifactVersioningModel {
  /**
   * Create a BranchConfigurationArtifactVersioningModel.
   * @property {string} [buildNumberFormat] Possible values include: 'buildId',
   * 'timestamp'
   */
  constructor() {
  }

  /**
   * Defines the metadata of BranchConfigurationArtifactVersioningModel
   *
   * @returns {object} metadata of BranchConfigurationArtifactVersioningModel
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'BranchConfigurationArtifactVersioning',
      type: {
        name: 'Composite',
        className: 'BranchConfigurationArtifactVersioningModel',
        modelProperties: {
          buildNumberFormat: {
            required: false,
            serializedName: 'buildNumberFormat',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = BranchConfigurationArtifactVersioningModel;
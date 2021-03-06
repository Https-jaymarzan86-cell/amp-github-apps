/**
 * Copyright 2019, the AMP HTML authors. All Rights Reserved
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

const knex = require('knex');

exports.dbConnect = () => {
  return knex({
    client: 'pg',
    // TODO(danielrozenberg): replace this with a database connection URL when
    // https://github.com/iceddev/pg-connection-string/pull/34 is merged.
    connection: JSON.parse(process.env.DATABASE_CONNECTION_JSON),
  });
};

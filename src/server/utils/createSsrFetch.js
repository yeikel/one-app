/*
 * Copyright 2019 American Express Travel Related Services Company, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */
import http from 'http';
import https from 'https';

const baseAgentOptions = {
  keepAlive: true,
  keepAliveMsecs: 1000,
  maxFreeSockets: 5,
  maxSockets: 100,
};

export function enhancedSsrFetch() {
  const httpAgent = new http.Agent(baseAgentOptions);

  const httpsAgent = new https.Agent(baseAgentOptions);

  function selectAgent(urlObject) {
    if (urlObject.protocol === 'http:') {
      return httpAgent;
    }
    return httpsAgent;
  }

  return (fetch) => (url, opts) => fetch(url, { ...opts, agent: selectAgent(url) });
}

const cache = {
  createSsrFetch: enhancedSsrFetch,
};

export const setCreateSsrFetch = (newFetch = enhancedSsrFetch) => {
  cache.createSsrFetch = newFetch;
};

const createSsrFetch = (opts = {}) => cache.createSsrFetch(opts);

export default createSsrFetch;

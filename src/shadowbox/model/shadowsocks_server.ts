// Copyright 2018 The Outline Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as dgram from 'dgram';

export interface ShadowsocksServer {
  startInstance(
      portNumber: number, password: string, statsSocket: dgram.Socket,
      encryptionMethod?: string): Promise<ShadowsocksInstance>;
}

export interface ShadowsocksInstance {
  portNumber: number;
  password: string;
  encryptionMethod: string;
  accessUrl: string;
  // Registers a callback to be invoked when the ShadowsocksInstance has
  // transferred data (inbound and outbond).  bytes is the number of
  // bytes transferred since the last callback.
  onBytesTransferred(callback: (bytes: number, ipAddresses: string[]) => void);
  stop();
}

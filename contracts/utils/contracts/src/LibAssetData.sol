/*

  Copyright 2019 ZeroEx Intl.

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.

*/

pragma solidity ^0.5.5;

import "./LibBytes.sol";


library LibAssetData {
    function encodeERC20AssetData(address tokenAddress)
        public
        pure
        returns (bytes memory assetData)
    {
        assetData = abi.encodeWithSignature("ERC20Token(address)", tokenAddress);
    }

    function decodeERC20AssetData(bytes memory assetData)
        public
        pure
        returns (
            bytes4 proxyId,
            address tokenAddress
        )
    {
        proxyId = LibBytes.readBytes4(assetData, 0);
        tokenAddress = LibBytes.readAddress(assetData, 16);
    }

    function encodeERC721AssetData(
        address tokenAddress,
        uint256 tokenId
    )
        public
        pure
        returns (bytes memory assetData)
    {
        assetData = abi.encodeWithSignature("ERC721Token(address,uint256)", tokenAddress, tokenId);
    }

    function decodeERC721AssetData(bytes memory assetData)
        public
        pure
        returns (
            bytes4 proxyId,
            address tokenAddress,
            uint256 tokenId
        )
    {
        proxyId = LibBytes.readBytes4(assetData, 0);
        tokenAddress = LibBytes.readAddress(assetData, 16);
        tokenId = LibBytes.readUint256(assetData, 36);
    }
}

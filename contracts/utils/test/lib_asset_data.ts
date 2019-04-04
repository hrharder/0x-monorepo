import * as chai from 'chai';

import { chaiSetup, provider, txDefaults, web3Wrapper } from '@0x/contracts-test-utils';
import { BlockchainLifecycle } from '@0x/dev-utils';
import { BigNumber } from '@0x/utils';

import { artifacts, LibAssetDataContract } from '../src';

chaiSetup.configure();
const expect = chai.expect;

const blockchainLifecycle = new BlockchainLifecycle(web3Wrapper);

describe('LibAssetData', () => {
    let lib: LibAssetDataContract;

    before(async () => {
        await blockchainLifecycle.startAsync();
        lib = await LibAssetDataContract.deployFrom0xArtifactAsync(artifacts.LibAssetData, provider, txDefaults);
    });

    after(async () => {
        await blockchainLifecycle.revertAsync();
    });

    it('should encode ERC20 asset data', async () => {
        expect(await lib.encodeERC20AssetData.callAsync('0x871dd7c2b4b25e1aa18728e9d5f2af4c4e431f5c')).to.equal(
            '0xf47261b0000000000000000000000000871dd7c2b4b25e1aa18728e9d5f2af4c4e431f5c',
        );
    });

    it('should decode ERC20 asset data', async () => {
        expect(
            await lib.decodeERC20AssetData.callAsync(
                '0xf47261b0000000000000000000000000871dd7c2b4b25e1aa18728e9d5f2af4c4e431f5c',
            ),
        ).to.deep.equal(['0xf47261b0', '0x871dd7c2b4b25e1aa18728e9d5f2af4c4e431f5c']);
    });

    it('should encode ERC721 asset data', async () => {
        expect(
            await lib.encodeERC721AssetData.callAsync('0x1dc4c1cefef38a777b15aa20260a54e584b16c48', new BigNumber(1)),
        ).to.equal(
            '0x025717920000000000000000000000001dc4c1cefef38a777b15aa20260a54e584b16c480000000000000000000000000000000000000000000000000000000000000001',
        );
    });

    it('should decode ERC721 asset data', async () => {
        expect(
            await lib.decodeERC721AssetData.callAsync(
                '0x025717920000000000000000000000001dc4c1cefef38a777b15aa20260a54e584b16c480000000000000000000000000000000000000000000000000000000000000001',
            ),
        ).to.deep.equal(['0x02571792', '0x1dc4c1cefef38a777b15aa20260a54e584b16c48', new BigNumber(1)]);
    });
});

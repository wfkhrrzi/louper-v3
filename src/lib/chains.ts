import * as chains from 'viem/chains'
import type { Chain } from 'viem/chains'

const chainMap: Record<string, Chain> = {}
const allChains: Chain[] = []

for (const [k, v] of Object.entries(chains)) {
  if (typeof v !== 'object') continue
  if (!('id' in v)) continue
  if (v.id.toString() === '31337') continue
  if (k === 'localhost') continue
  if (k.includes('wanchain')) continue
  if (k === 'saigon') continue
  if (k.includes('skale')) continue
  if (k === 'zkSyncInMemoryNode') continue
  if (k === 'zkSyncLocalNode') continue
  if (k === 'lineaTestnet') continue
  chainMap[k] = v
  allChains.push(v)
}

// define & add local & sw mainnet fork
const mainnetForkChains: { [key: string]: Chain } = {
  swForkedMainnet: {
    id: 31337,
    name: 'SW BSC Mainnet Fork',
    nativeCurrency: {
      decimals: 18,
      name: 'BNB',
      symbol: 'BNB',
    },
    rpcUrls: {
      default: {
        http: ['https://preview-rpc.gmexchange.com'],
      },
    },
  },
  localForkedMainnet: {
    id: 31337,
    name: 'Uludag BSC Mainnet Fork',
    nativeCurrency: {
      decimals: 18,
      name: 'BNB',
      symbol: 'BNB',
    },
    rpcUrls: {
      default: {
        http: ['http://192.168.0.20:8545'],
      },
    },
  },
}

for (const [k, v] of Object.entries(mainnetForkChains)) {
  chainMap[k] = v
  allChains.push(v)
}

export { chainMap, allChains }

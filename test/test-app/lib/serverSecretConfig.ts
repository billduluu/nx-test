import config from '../.env.json'

type ServerConfig = { [key: string]: string }
type SecretConfigKeys = keyof typeof config
type SecretConfigValues = typeof config[SecretConfigKeys]

type AllKeys<T> = T extends object ? keyof T : never
type PickType<T, K extends AllKeys<T>> = T extends { [k in K]?: string } ? T[K] : undefined

type Merge<T extends object> = {
  [k in AllKeys<T>]?: PickType<T, k>
}

type SecretKeys = Merge<SecretConfigValues>

export interface ServerProperties {
  config: ServerConfig
}

export const getServerSecretConfig = (secretConfigName: SecretConfigKeys): SecretKeys => {
  return config[secretConfigName] || process.env[secretConfigName]
}

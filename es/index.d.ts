export interface objParamsTyoe {
  templateId?: string | number;
  shuntId?: Number;
  sessionInvite?: Boolean;
  hidden?: Boolean;
}
type apiTypes = 'onready' | 'product' | 'logoff' | 'open' | 'url' | 'onunread' | 'getUnreadMsg' | 'getConversation' | 'onConversation' | 'onSessionMessage' | 'config';
export interface OptionsType {
  uid?: string;
  name?: string;
  email?: string;
  mobile?: string;
  bid?: string;
  data?: string;
  staffid?: string;
  groupid?: string;
  shuntId?: string;
  robotShuntSwitch?: 1 | 0;
  level?: number;
  qtype?: number;
  welcomeTemplateId?: number;
  success?: () => void;
  error?: () => void;
  connectYunxin?: boolean;
  wxworkAppId?: string;
  spkf?: 1 | 0;
  isShowBack?: 1 | 0;
  language?: string;
  shortcutTemplateId?: number;
  layerSize?: {
      width?: number;
      height?: number;
      inputHeight?: number;
  };
  [string: string]: any;
}
export type YsfSdk = (key: apiTypes, options?: OptionsType) => void;
export type EnvType = 'test' | 'release' | 'online' | 'overseas';
export interface YSFType {
  init: (appKey: string, objParams?: objParamsTyoe, env?: EnvType) => Promise<YsfSdk>;
}
declare global {
  interface Window {
      ysf: Function;
  }
}

declare const YSF: YSFType;
export default YSF;

import { NativeModules } from 'react-native';

type KnightType = {
  multiply(a: number, b: number): Promise<number>;
};

const { Knight } = NativeModules;

export default Knight as KnightType;

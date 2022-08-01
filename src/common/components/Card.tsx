import { Box, IBoxProps } from 'native-base';

export function Card(props: IBoxProps) {
  return <Box bgColor="white" borderRadius={12} px={5} py={5} {...props} />;
}

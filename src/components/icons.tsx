import {PropsWithChildren} from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

type IconsProps = PropsWithChildren<{
  name1: string;
}>;

const Icons = ({name1}: IconsProps) => {
  switch (name1) {
    case 'circle':
      return <Icon name="circle-thin" size={38} color={'yellow'} />;
    case 'cross':
      return <Icon name="times" size={38} color={'green'} />;

    default:
      return <Icon name="pencil" size={38} color={'red'} />;
  }
};

export default Icons;

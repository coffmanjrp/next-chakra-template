import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ColorModeSwitcher = (props) => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <>
      <IconButton
        aria-label={`Switch to ${text} mode`}
        size="md"
        fontSize="lg"
        variant="ghost"
        color="current"
        ml={2}
        icon={<SwitchIcon />}
        onClick={toggleColorMode}
        {...props}
      />
    </>
  );
};

export default ColorModeSwitcher;

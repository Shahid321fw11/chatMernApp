import { Avatar, Box, Button, Menu, MenuButton, MenuList, Tooltip } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Text } from "@chakra-ui/layout";
import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { ChatState } from "../../Context/ChatProvider";

const SideDrawer = () => {

  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);

  const {
    setSelectedChat,
    user,
    notification,
    setNotification,
    chats,
    setChats,
  } = ChatState();


  return <>
    <Box
      d="flex"
      justifyContent="space-between"
      alignItems="center"
      bg="white"
      w="100%"
      p="5px 10px 5px 10px"
      borderWidth="5px"
    >
      <Tooltip label="Search Users to chat" hasArrow placement="bottom-end">
        <Button variant="ghost" >
          <i className="fas fa-search"></i>
          <Text d={{ base: "none", md: "flex" }} px={4}>
            Search User
          </Text>
        </Button>
      </Tooltip>
      <Text fontSize="2xl" fontFamily="Work sans">
        Talk-A-Tive
      </Text>
      <div>
        <Menu>
          <MenuButton p={1}>
          <BellIcon fontSize="2xl" m={1} />
          </MenuButton>
          {/* <MenuList></MenuList> */}
        </Menu>
        <Menu>
          <MenuButton as={Button} bg="white" rightIcon={<ChevronDownIcon />}>
          <Avatar
                size="sm"
                cursor="pointer"
                name={user.name}
                // src={user.pic}
              />
          </MenuButton>
        </Menu>
      </div>

    </Box>
  </>
}

export default SideDrawer
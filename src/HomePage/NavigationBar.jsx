import * as React from "react";
import styled from "styled-components";

const navigationItems = [
    {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5a364d0093309bead42541a9d8cab4e8338cc672beff8e21bd7854b90dee1138?placeholderIfAbsent=true&apiKey=484c4e2118754c79890e12514f9d5502",
        label: "Home",
        active: true
    },
    {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bf6cf44042fada8d717241279884cc57760a53ffa4443dbcc83ebee6f2820985?placeholderIfAbsent=true&apiKey=484c4e2118754c79890e12514f9d5502",
        label: "Shorts"
    },
    {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c14c05fe9c3ffef79d56386870e748d07563d4f8dada82b6d9807f289aa0db03?placeholderIfAbsent=true&apiKey=484c4e2118754c79890e12514f9d5502",
        label: "Subscriptions"
    },
    {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9ec6bdb3f4320871cf54479175758299d2554b238898356ba57221c6032df8f1?placeholderIfAbsent=true&apiKey=484c4e2118754c79890e12514f9d5502",
        label: "YouTube Music"
    }
];

const userItems = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9ec6bdb3f4320871cf54479175758299d2554b238898356ba57221c6032df8f1?placeholderIfAbsent=true&apiKey=484c4e2118754c79890e12514f9d5502", label: "History" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/24af8b646eb845740dd9a556b1ac9f4dd6b6a17a8c6c210bc7818be451515179?placeholderIfAbsent=true&apiKey=484c4e2118754c79890e12514f9d5502", label: "Playlists" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ac9201b434fbb57f9ba1d9d63006f88ab26a3eef3ef6bc350fb19642fcf9d6a7?placeholderIfAbsent=true&apiKey=484c4e2118754c79890e12514f9d5502", label: "Your videos" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/970283239a876bcf077c7566f0dbee2b3bd453adc3fee32057a9e56a036eb467?placeholderIfAbsent=true&apiKey=484c4e2118754c79890e12514f9d5502", label: "Watch Later" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/34a75eda9691538a33db2499e0a959de7cfe5d6f7a4596ee417a1dbfa2c88c07?placeholderIfAbsent=true&apiKey=484c4e2118754c79890e12514f9d5502", label: "Liked videos" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/86db2cd5b1cdd5083b2954973bc7f6e6c23cee7fcfccd85f6cb71a481113aef5?placeholderIfAbsent=true&apiKey=484c4e2118754c79890e12514f9d5502", label: "Downloads" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d672b6d725c97ee0bee0eded5c271c9f547bd31d73c0c2c04f54c8996b23234e?placeholderIfAbsent=true&apiKey=484c4e2118754c79890e12514f9d5502", label: "Your clips" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ba1d09369bfe7fad7bc2e93b5671afa7d8230ec57ef067e34c5f021f8706a460?placeholderIfAbsent=true&apiKey=484c4e2118754c79890e12514f9d5502", label: "Notebook" }
];

const subscriptions = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/34a75eda9691538a33db2499e0a959de7cfe5d6f7a4596ee417a1dbfa2c88c07?placeholderIfAbsent=true&apiKey=484c4e2118754c79890e12514f9d5502", name: "Khan Academy" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/86db2cd5b1cdd5083b2954973bc7f6e6c23cee7fcfccd85f6cb71a481113aef5?placeholderIfAbsent=true&apiKey=484c4e2118754c79890e12514f9d5502", name: "Amoeba Sisters" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d672b6d725c97ee0bee0eded5c271c9f547bd31d73c0c2c04f54c8996b23234e?placeholderIfAbsent=true&apiKey=484c4e2118754c79890e12514f9d5502", name: "Bro Code" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ba1d09369bfe7fad7bc2e93b5671afa7d8230ec57ef067e34c5f021f8706a460?placeholderIfAbsent=true&apiKey=484c4e2118754c79890e12514f9d5502", name: "CrashCourse" }
];

export function NavigationBar() {
    return (
        <SidebarContainer>
            <NavigationSection>
                {navigationItems.map((item, index) => (
                    <NavigationItem
                        key={index}
                        icon={item.icon}
                        label={item.label}
                        active={item.active}
                    />
                ))}
            </NavigationSection>
            <Divider />
            <UserSection>
                <SectionTitle>You</SectionTitle>
                {userItems.map((item, index) => (
                    <NavigationItem key={index} icon={item.icon} label={item.label} />
                ))}
            </UserSection>
            <Divider />
            <SubscriptionsContainer>
                <SectionTitle>Subscriptions</SectionTitle>
                {subscriptions.map((sub, index) => (
                    <SubscriptionItem key={index} tabIndex={0} role="button">
                        <ChannelIcon src={sub.icon} alt="" loading="lazy" />
                        <ChannelName>{sub.name}</ChannelName>
                    </SubscriptionItem>
                ))}
            </SubscriptionsContainer>
        </SidebarContainer>
    );
}

const SidebarContainer = styled.nav`
  display: flex;
  width: 15%;
  flex-direction: column;
    overflow-y: auto;
    height: 700px;
`;

const NavigationSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 12px;
`;

const UserSection = styled.div`
  padding: 12px;
`;

const SubscriptionsContainer = styled.div`
  padding: 0 24px;
`;

const SectionTitle = styled.h2`
  font: 500 16px Roboto, sans-serif;
  margin-bottom: 16px;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid rgba(227, 227, 227, 1);
  margin: 12px 0;
`;

const NavigationItem = ({ icon, label, active }) => (
    <NavItemContainer active={active} tabIndex={0} role="button">
        <NavIcon src={icon} alt="" loading="lazy" />
        <NavLabel>{label}</NavLabel>
    </NavItemContainer>
);

const NavItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 8px 12px;
  border-radius: 8px;
  background-color: ${({ active }) =>
    active ? "rgba(241, 241, 241, 1)" : "transparent"};
  cursor: pointer;

  &:hover {
    background-color: rgba(241, 241, 241, 0.8);
  }

  &:focus {
    outline: 2px solid #000;
    outline-offset: 2px;
  }
`;

const NavIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const NavLabel = styled.span`
  font: 400 14px Roboto, sans-serif;
`;

const SubscriptionItem = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 8px 0;
  cursor: pointer;

  &:hover {
    background-color: rgba(241, 241, 241, 0.8);
  }

  &:focus {
    outline: 2px solid #000;
    outline-offset: 2px;
  }
`;

const ChannelIcon = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

const ChannelName = styled.span`
  font: 400 14px Roboto, sans-serif;
`;

export default NavigationBar;

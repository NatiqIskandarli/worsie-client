'use client';
import React, { useState, useEffect, Suspense, lazy, memo } from 'react';
import { motion } from 'framer-motion';
import { Button } from 'antd';
import { DoubleRightOutlined, DoubleLeftOutlined, DownOutlined, RightOutlined, StarOutlined, CompassOutlined,HomeOutlined, InboxOutlined, TeamOutlined, SettingOutlined, 
  SearchOutlined, UserAddOutlined, FolderOutlined, ImportOutlined,
  PlusCircleOutlined, } from '@ant-design/icons';

import '@/styles/Sidebar.css';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';


const SidebarItem = memo(({ href, icon, label, collapsed }) => {
  const pathname = usePathname();
  return (
    <li className={pathname === href ? 'active' : ''}>
      <Link href={href}>
        {icon}
        <span className={collapsed ? 'hidden' : ''}> {label}</span>
      </Link>
    </li>
  );
});

SidebarItem.displayName = 'SidebarItem';


const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isFavoriteExpanded, setIsFavoriteExpanded] = useState(true);
  const [isNavigationExpanded, setIsNavigationExpanded] = useState(true);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const toggleFavoriteSection = () => {
    setIsFavoriteExpanded(!isFavoriteExpanded);
  };

  const toggleNavigationSection = () => {
    setIsNavigationExpanded(!isNavigationExpanded);
  };


// const preloadedPages = new Map();

// const MyLink = ({ href, children, ...props }) => {
//   const prefetchPage = async () => {
//     const cleanHref = href.startsWith('/') ? href.slice(1) : href; // Remove leading slash
//     if (!preloadedPages.has(href)) {
//       try {
//         preloadedPages.set(href, (await import(`@/app/${cleanHref}/page`)).default);
//       } catch (error) {
//         console.error(`Failed to preload page: ${href}`, error);
//       }
//     }
//   };

//   useEffect(() => {
//     prefetchPage();
//   }, [href]);

//   return <Link href={href} {...props}>{children}</Link>;
// };



  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className={`sidebar ${collapsed ? 'collapsed' : ''}`} >
        <div className="sidebar-header">
          <h2 className="sidebar-logo">
            {collapsed ? 'W' : <Image src="/images/logo.png" alt="Worsie Logo" width={100} height={100} />}
          </h2>
          <Button
            type="text"
            icon={collapsed ? <DoubleRightOutlined /> : <DoubleLeftOutlined />}
            onClick={toggleSidebar}
            className="toggle-button"
          />
        </div>
        <div className="sidebar-section">
          <ul>
          <SidebarItem href="/" icon={<HomeOutlined />} label="Home" collapsed={collapsed} />
        <SidebarItem href="/Create" icon={<PlusCircleOutlined />} label="Create" collapsed={collapsed} />
        <SidebarItem href="/Inbox" icon={<InboxOutlined />} label="Inbox" collapsed={collapsed} />
        
            <li>
              <Link href='/ImportExport'>
                <ImportOutlined />
                <span className={collapsed ? 'hidden' : ''}> Import / Export</span>
              </Link>
            </li>
            <li>
              <Link href='/MyStaff'>
                <FolderOutlined />
                <span className={collapsed ? 'hidden' : ''}> My Staff</span>
              </Link>
            </li>
            <li>
              <Link href='/Following'>
                <SettingOutlined />
                <span className={collapsed ? 'hidden' : ''}> Following</span>
              </Link>
            </li>
            <li>
              <Link href='/UserManagement'>
                <UserAddOutlined />
                <span className={collapsed ? 'hidden' : ''}> User Management</span>
              </Link>
            </li>
            <li className={pathname === '/AdvanceSearch' ? 'active' : ''}>
              <Link href='/AdvanceSearch' prefetch>
                <SearchOutlined />
                <span className={collapsed ? 'hidden' : ''}> Advance Search</span>
              </Link>
            </li>
          </ul>
        </div>
        
        <div className="sidebar-section">
          <div 
            className={`active sidebar-title ${collapsed ? 'hidden' : ''}`} 
            onClick={toggleFavoriteSection}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <StarOutlined style={{ marginRight: '8px' }} />
              <span>Favorite</span>
            </div>
            {isFavoriteExpanded ? <DownOutlined /> : <RightOutlined />}
          </div>
          {isFavoriteExpanded && (
            <ul>
              <li>
                <Link href='/MarketingTeam' prefetch>
                  <StarOutlined />
                  <span className={collapsed ? 'hidden' : ''}> Marketing Team</span>
                </Link>
              </li>
              <li>
                <Link href='/MarketingTeam' prefetch>
                  <StarOutlined />
                  <span className={collapsed ? 'hidden' : ''}> Production</span>
                </Link>
              </li>
            </ul>
          )}
        </div>

        <div className="sidebar-section">
          <div 
            className={`active sidebar-title ${collapsed ? 'hidden' : ''}`} 
            onClick={toggleNavigationSection}    
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <CompassOutlined style={{ marginRight: '8px' }} />
              <span>Navigation</span>
            </div>
            {isNavigationExpanded ? <DownOutlined /> : <RightOutlined />}
          </div>
          {isNavigationExpanded && (
            <ul>
              <li>
                <Link href='/AppleSpace' prefetch>
                  <TeamOutlined />
                  <span className={collapsed ? 'hidden' : ''}> Apple</span>
                </Link>
              </li>
            </ul>
          )}
        </div>

        
        <div className="sidebar-footer">
          <Link href='/AdvanceSearch' prefetch>
            <SettingOutlined />
            <span className={collapsed ? 'hidden' : ''}> Settings</span>
          </Link>
        </div>


        </div>
    </Suspense>
  );
};

export default memo(Sidebar);

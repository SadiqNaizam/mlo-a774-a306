import React from 'react';
import {
  LayoutDashboard,
  Box,
  FileText,
  Users,
  ShoppingCart,
  BookText,
  MessageSquare,
  UserCircle,
  FileSpreadsheet,
  Calendar,
  Mail,
  Ticket,
  BarChartHorizontal,
  PieChart,
  Dot
} from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';

const iconMap = {
  LayoutDashboard,
  BarChartHorizontal,
  PieChart,
  FileText,
  Users,
  ShoppingCart,
  BookText,
  MessageSquare,
  UserCircle,
  FileSpreadsheet,
  Calendar,
  Mail,
  Ticket,
};

type NavSubItem = {
  label: string;
  href: string;
  active?: boolean;
};

type NavItem = {
  label: string;
  href?: string;
  icon: keyof typeof iconMap;
  active?: boolean;
  subItems?: NavSubItem[];
};

type NavSection = {
  title: string;
  items: NavItem[];
};

const navData: NavSection[] = [
  {
    title: 'DASHBOARDS',
    items: [
      { label: 'Dashboard1', href: '#', icon: 'LayoutDashboard' },
      { label: 'Dashboard2', href: '#', icon: 'BarChartHorizontal' },
      { label: 'Dashboard3', href: '#', icon: 'PieChart' },
      {
        label: 'Front Pages',
        icon: 'FileText',
        subItems: [{ label: 'Landingpage', href: '#' }],
      },
    ],
  },
  {
    title: 'APPS',
    items: [
      { label: 'Contacts', href: '#', icon: 'Users' },
      {
        label: 'ECommerce',
        icon: 'ShoppingCart',
        subItems: [
          { label: 'Products', href: '#' },
          { label: 'Orders', href: '#' },
        ],
      },
      {
        label: 'Blogs',
        icon: 'BookText',
        subItems: [
          { label: 'All Posts', href: '#' },
          { label: 'New Post', href: '#' },
        ],
      },
      { label: 'Chats', href: '#', icon: 'MessageSquare' },
      {
        label: 'Users Profile',
        icon: 'UserCircle',
        active: true,
        subItems: [
          { label: 'Profile', href: '#' },
          { label: 'Followers', href: '#', active: true },
          { label: 'Friends', href: '#' },
          { label: 'Gallery', href: '#' },
        ],
      },
      {
        label: 'Invoice',
        icon: 'FileSpreadsheet',
        subItems: [{ label: 'List', href: '#' }],
      },
      { label: 'Calendar', href: '#', icon: 'Calendar' },
      { label: 'Email', href: '#', icon: 'Mail' },
      { label: 'Tickets', href: '#', icon: 'Ticket' },
    ],
  },
];

const SidebarNav: React.FC = () => {
  const activeGroupLabel = navData.flatMap(s => s.items).find(i => i.active)?.label;

  return (
    <div className="flex h-full flex-col bg-sidebar text-sidebar-foreground">
      <div className="flex h-16 flex-shrink-0 items-center gap-3 border-b border-sidebar-foreground/10 px-6">
        <Box className="h-8 w-8 text-primary" />
        <h1 className="text-xl font-bold text-foreground">MatDash</h1>
      </div>
      <ScrollArea className="flex-1">
        <nav className="flex flex-col gap-1 p-4">
          <Accordion type="single" collapsible defaultValue={activeGroupLabel ? `item-${activeGroupLabel}` : undefined}>
            {navData.map((section) => (
              <div key={section.title} className="mb-2">
                <h2 className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-sidebar-foreground/50">
                  {section.title}
                </h2>
                <div className="space-y-1">
                  {section.items.map((item) => {
                    const Icon = iconMap[item.icon];
                    const isActive = !!item.active;

                    return item.subItems ? (
                      <AccordionItem key={item.label} value={`item-${item.label}`} className="border-none">
                        <AccordionTrigger
                          className={cn(
                            'flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium hover:bg-sidebar-foreground/10 [&[data-state=open]>svg]:rotate-180',
                            isActive && 'bg-primary text-primary-foreground hover:bg-primary/90'
                          )}
                        >
                          <div className="flex items-center gap-3">
                            <Icon className="h-5 w-5" />
                            <span>{item.label}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="py-1 pl-8">
                          <ul className="space-y-1">
                            {item.subItems.map((subItem) => (
                              <li key={subItem.label}>
                                <a
                                  href={subItem.href}
                                  className={cn(
                                    'flex items-center gap-2 rounded-md py-1.5 pl-3 text-sm hover:text-foreground',
                                    subItem.active ? 'font-semibold text-foreground' : 'text-sidebar-foreground/70'
                                  )}
                                >
                                  <Dot className="h-6 w-6 flex-shrink-0 text-primary" />
                                  <span>{subItem.label}</span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    ) : (
                      <a href={item.href} className="block">
                        <Button
                          variant="ghost"
                          className={cn(
                            'w-full justify-start gap-3 px-3 py-2 text-sm font-medium hover:bg-sidebar-foreground/10'
                          )}
                        >
                          <Icon className="h-5 w-5" />
                          {item.label}
                        </Button>
                      </a>
                    );
                  })}
                </div>
              </div>
            ))}
          </Accordion>
        </nav>
      </ScrollArea>
    </div>
  );
};

export default SidebarNav;

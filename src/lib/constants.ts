import * as AllIcons from "@/components/Icons";
import { FC, SVGProps } from "react";

interface NavItem {
    path: string;
    icon: FC<SVGProps<SVGSVGElement>>;
    title: string;
  }

  interface NavItems {
    [key: string]: NavItem[];
  }
  
  export const navItems:NavItems = {
    customers:
        [
            {
              path: '/customers/users',
              icon: AllIcons.UsersSideNavIcon,
              title: 'Users',
            },
            {
              path: '',
              icon: AllIcons.GuarantorsSideNavIcon, // Replace with actual icon for Projects
              title: 'Guarantors',
            },
            {
              path: '',
              icon: AllIcons.LoansSideNavIcon, // Replace with actual icon for Reports
              title: 'Loans',
            },
            {
              path: '',
              icon: AllIcons.DecisionsSideNavIcon, 
              title: 'Decisions Models',
            },

            {
                path: '',
                icon: AllIcons.SavingsSideNavIcon, 
                title: 'Savings',
              },

              {
                path: '',
                icon: AllIcons.LoanRequestSideNavIcon, 
                title: 'Loan Requests',
              },

              {
                path: '',
                icon: AllIcons.UserCheckSideNavIcon, 
                title: 'Whitelist',
              },

              {
                path: '',
                icon: AllIcons.UserTimesSideNavIcon, 
                title: 'Karma',
              },
    ],
    business:   [
            {
              path: '',
              icon: AllIcons.BriefCaseIcon,
              title: 'Organization',
            },
            {
              path: '',
              icon: AllIcons.LoanRequestSideNavIcon, // Replace with actual icon for Projects
              title: 'Loan Products',
            },
            {
              path: '',
              icon: AllIcons.SavingsProductsSideNavIcon, // Replace with actual icon for Reports
              title: 'Savings Products',
            },
            {
              path: '',
              icon: AllIcons.CoinsSideNavIcon, 
              title: 'Fees and Charges',
            },

            {
                path: '',
                icon: AllIcons.Transactions, 
                title: 'Transactions',
              },


              {
                path: '',
                icon: AllIcons.ServicesSideNavIcon, 
                title: 'Services',
              },
              {
                path: '',
                icon: AllIcons.ServiceAccountSideNavIcon, 
                title: 'Service Account',
              },

              {
                path: '',
                icon: AllIcons.SettlementsSideNavIcon, 
                title: 'Settlements',
              },

              {
                path: '',
                icon: AllIcons.BarChartSideNavIcon, 
                title: 'Reports',
              },
    ],

    settings:   [
        {
          path: '',
          icon: AllIcons.PreferenceSideNavIcon,
          title: 'Preference',
        },
        {
          path: '',
          icon: AllIcons.FeesBadgeSideNavIcon, // Replace with actual icon for Projects
          title: 'Fees and Pricing',
        },

        {
            path: '',
            icon: AllIcons.AuditSideNavIcon, // Replace with actual icon for Projects
            title: 'Audit Logs',
          },

    ]
  }
import { Tabs, Tab, type TabsProps, Box } from "@mui/material";
import { useState, type ReactNode } from "react";

interface FlowvaTabsProps extends Omit<TabsProps, "onChange"> {
  items: Array<{
    key: string;
    label: ReactNode;
    children: ReactNode;
  }>;
  defaultActiveKey?: string;
  onChange?: (key: string) => void;
}

interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: "16px" }}>{children}</Box>}
    </div>
  );
}

const FlowvaTabs = ({
  items,
  defaultActiveKey,
  onChange,
  ...props
}: FlowvaTabsProps) => {
  const defaultIndex = items.findIndex((item) => item.key === defaultActiveKey);
  const [value, setValue] = useState(defaultIndex >= 0 ? defaultIndex : 0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    if (onChange && items[newValue]) {
      onChange(items[newValue].key);
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        {...props}
        sx={{
          borderBottom: "none",
          "& .MuiTabs-indicator": {
            backgroundColor: "#9013fe",
            height: "2px",
            bottom: "auto",
          },
          "& .MuiTab-root": {
            color: "#6C757D",
            fontSize: "15px",
            fontWeight: 400,
            fontFamily: "Roboto",
            textTransform: "none",
            padding: "13px 12px",
            minHeight: "auto",
            // marginRight: "32px",
            transition: "all 0.3s",
            "&.Mui-selected": {
              color: "#9013fe",
              backgroundColor: "rgba(144, 19, 254, 0.05)",
              borderRadius: "8px 8px 0 0",
            },
            "&:hover": {
              color: "#9013fe",
              opacity: 0.8,
            },
          },
          ...props.sx,
        }}
      >
        {items.map((item) => (
          <Tab key={item.key} label={item.label} />
        ))}
      </Tabs>
      {items.map((item, index) => (
        <TabPanel key={item.key} value={value} index={index}>
          {item.children}
        </TabPanel>
      ))}
    </Box>
  );
};

export default FlowvaTabs;

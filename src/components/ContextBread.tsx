import {
  Breadcrumb,
  BreadcrumbButton,
  BreadcrumbDivider,
  BreadcrumbItem,
} from "@fluentui/react-components";

export const ContextBread = () => {
  return (
    <Breadcrumb aria-label="Context obj" size="small">
      <BreadcrumbItem>
        <BreadcrumbButton>pages</BreadcrumbButton>
      </BreadcrumbItem>
      <BreadcrumbDivider />
      <BreadcrumbItem>
        <BreadcrumbButton>index.vue</BreadcrumbButton>
      </BreadcrumbItem>
      <BreadcrumbDivider />
      <BreadcrumbItem>
        <BreadcrumbButton>template</BreadcrumbButton>
      </BreadcrumbItem>
      <BreadcrumbDivider />
      <BreadcrumbItem>
        <BreadcrumbButton current>div</BreadcrumbButton>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

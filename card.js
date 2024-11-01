import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
const CardComponent = ({ name, price, src, onAdd }) => {
  return <Card shadow="sm" padding="lg" radius="md" withBorder>
    <Card.Section component="a" href="https://mantine.dev/">
      <Image
        src={`/assets/images/${src}`}
        height={160}
        alt="Norway"
      />
    </Card.Section>

    <Group justify="space-between" mt="md" mb="xs">
      <Text fw={500}>{name}</Text>
      <Badge color="pink" variant="light">
        On Sale
      </Badge>
    </Group>

    <Text size="sm" c="dimmed">
      {price}
    </Text>

    <Button variant="light" color="blue" fullWidth mt="md" radius="md"
      onClick={onAdd}>
      add 
    </Button>
  </Card>
}
export default CardComponent;

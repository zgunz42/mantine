import React from 'react';
import { Group } from '../Group';
import { Button } from './Button';

export default { title: 'Button' };

export const Usage = () => (
  <Group p="xl">
    <Button>Filled button</Button>
    <Button variant="light">Light button</Button>
    <Button variant="outline">Outline button</Button>
    <Button variant="default">Default button</Button>
  </Group>
);

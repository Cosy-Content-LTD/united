import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { cn } from '../utils/cn';

interface ContactInfoItem {
  icon: LucideIcon;
  label: string;
  value: string;
  subvalue?: string;
}

const contactItems: ContactInfoItem[] = [
  {
    icon: MapPin,
    label: 'Address',
    value: 'The Wal
export interface Room {
  id: string;
  name: string;
  description: string;
  price_per_night: number;
  capacity: number;
  image_url: string;
  is_available: boolean;
  created_at?: string;
}

export interface Booking {
  id: string;
  room_id: string;
  guest_name: string;
  guest_email: string;
  guest_phone?: string;
  check_in: string;
  check_out: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  total_price: number;
  created_at?: string;
}

export interface Review {
  id: string;
  guest_name: string;
  rating: number;
  comment: string;
  created_at: string;
}

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  image_url?: string;
  author?: string;
  published_at: string;
}

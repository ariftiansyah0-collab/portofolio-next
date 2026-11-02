create table if not exists public.pesan_kontak (
  id uuid primary key default gen_random_uuid(),
  nama text not null check (char_length(btrim(nama)) between 1 and 100),
  email text not null check (
    char_length(email) <= 254
    and position('@' in email) > 1
  ),
  nomor_hp text not null check (
    char_length(nomor_hp) <= 30
    and char_length(regexp_replace(nomor_hp, '\D', '', 'g')) >= 10
  ),
  keperluan text not null check (keperluan in ('Kerja Sama', 'Pertanyaan')),
  pesan text not null check (char_length(btrim(pesan)) between 10 and 5000),
  created_at timestamptz not null default now()
);

alter table public.pesan_kontak enable row level security;

drop policy if exists "Allow anonymous contact submissions"
  on public.pesan_kontak;

create policy "Allow anonymous contact submissions"
  on public.pesan_kontak
  for insert
  to anon
  with check (true);

grant insert on public.pesan_kontak to anon;

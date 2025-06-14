<x-guest-layout>
    <x-auth-card>

        <x-slot name="logo">
            <a href="/">
                {{-- Ganti dengan logo situs kamu --}}
                <img src="{{ asset('images/logo.png') }}" alt="Logo" class="w-24 h-24 mx-auto">
            </a>
        </x-slot>

        <h2 class="text-center text-lg font-bold">Masuk ke TokoKu</h2>

        <!-- Session Status -->
        <x-auth-session-status class="mb-4" :status="session('status')" />

        <!-- Validation Errors -->
        <x-auth-validation-errors class="mb-4" :errors="$errors" />

        <form method="POST" action="{{ route('login') }}">
            @csrf

            <!-- Email -->
            <div>
                <label>Email</label>
                <input type="email" name="email" required autofocus />
            </div>

            <!-- Password -->
            <div class="mt-4">
                <label>Password</label>
                <input type="password" name="password" required />
            </div>

            <!-- Submit -->
            <div class="mt-4">
                <button>Masuk</button>
            </div>
        </form>

    </x-auth-card>
</x-guest-layout>

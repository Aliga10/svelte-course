<script>
    import { page } from '$app/state';

    const greetings = {
        en: 'Hello',
        id: 'Halo',
        fr: 'Bonjour'
    };

    // Karena [[lang]] opsional, kita beri fallback 'en' jika lang tidak ada di URL
    let lang = $derived(page.params.lang || 'en');
    let greeting = $derived(greetings[lang] || greetings['en']);
</script>

<h1>{greeting}</h1>
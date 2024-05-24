import React from 'react'

const Footer = () => {
  return (
<footer class="bg-white rounded-lg shadow dark:bg-white">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="/assets/images/placeholderLogo.svg" class="h-8" alt="Flowbite Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap text-black">Liquid Freedom</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-black sm:mb-0 dark:text-black">
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-black sm:mx-auto dark:border-black lg:my-8" />
        <span class="block text-sm text-black sm:text-center dark:text-black">© 2024 <a href="https://flowbite.com/" class="hover:underline">Liquid Freedom™</a>. All Rights Reserved.</span>
    </div>
</footer>


  )
}

export default Footer
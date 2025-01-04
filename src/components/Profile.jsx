import React from 'react'

const Profile = () => {
  return (
  <section id="about" class="py-12 bg3 px-12 text-xl text-gray-800 font_2">
    <div class="container mx-auto flex flex-col lg:flex-row items-center justify-center">
        <div class="w-full lg:w-1/3 mb-8 lg:mb-0">
            <img src="me.jpg" alt="Mostafizur Rahman" class="rounded-full w-60 h-60 object-cover mx-auto shadow-lg transition-transform duration-500 hover:scale-105"/>
        </div>
        <div class="w-full lg:w-2/3 lg:pl-12">
            <h2 class="text-4xl font-bold mb-4 text-center lg:text-left text-white">About Me</h2>
            <p class="text-lg mb-6 text-center lg:text-left text-white leading-relaxed">
                I am a Computer Science graduate with a fervent passion for coding, particularly within the realm of web programming. I possess a keen interest in networking and fostering connections with individuals to expand my knowledge and understanding of diverse perspectives.
            </p>
            <div class="space-y-4">
                <div class="border-t border-gray-300 pt-4">
                    <p class="text-white"><strong class="font-semibold">Name:</strong> MD. Mostafizur Rahman</p>
                </div>
                <div class="border-t border-gray-300 pt-4">
                    <p class="text-white"><strong class="font-semibold">Education:</strong> Bachelor of Computer Science & Engineering, United International University, CGPA: 3.79 (2024)</p>
                    <p class="text-white">Govt Sayed Hatem Ali College, Barisal GPA: 5.00 (Science) (2018)</p>
                    <p class="text-white">Udayan Secondary School, Barisal GPA: 5.00 (Science) (2016)</p>
                </div>
                <div class="border-t border-gray-300 pt-4">
                    <p class="text-white"><strong class="font-semibold">Languages:</strong> Bangla (Native), English (Fluent)</p>
                </div>
                <div class="border-t border-gray-300 pt-4">
                    <p class="text-white"><strong class="font-semibold">Experience:</strong> Center for International Affairs and Cooperation (CIAC) at UIU, Undergraduate Assistant at UIU</p>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Profile
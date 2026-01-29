import React from 'react';
import { Users, Target, Award, Heart } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: 'Tầm nhìn',
      description: 'Trở thành nền tảng quản lý sản phẩm CADCAM hàng đầu Việt Nam, hỗ trợ doanh nghiệp tối ưu hóa quy trình sản xuất.'
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: 'Đội ngũ',
      description: 'Đội ngũ chuyên gia giàu kinh nghiệm trong lĩnh vực CADCAM và công nghệ thông tin, luôn sẵn sàng hỗ trợ khách hàng.'
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-600" />,
      title: 'Chất lượng',
      description: 'Cam kết cung cấp sản phẩm và dịch vụ chất lượng cao, đáp ứng các tiêu chuẩn quốc tế trong ngành công nghiệp.'
    },
    {
      icon: <Heart className="w-8 h-8 text-red-600" />,
      title: 'Giá trị',
      description: 'Đặt khách hàng làm trung tâm, không ngừng đổi mới và cải tiến để mang lại giá trị tốt nhất.'
    }
  ];

  const team = [
    {
      name: 'Nguyễn Văn A',
      position: 'CEO & Founder',
      image: 'https://via.placeholder.com/150x150?text=CEO',
      description: '15+ năm kinh nghiệm trong lĩnh vực CADCAM'
    },
    {
      name: 'Trần Thị B',
      position: 'CTO',
      image: 'https://via.placeholder.com/150x150?text=CTO',
      description: 'Chuyên gia công nghệ với nhiều dự án thành công'
    },
    {
      name: 'Lê Văn C',
      position: 'Head of Sales',
      image: 'https://via.placeholder.com/150x150?text=Sales',
      description: 'Kinh nghiệm phát triển thị trường B2B'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Về CADCAM
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Chúng tôi là đối tác tin cậy trong việc cung cấp giải pháp quản lý sản phẩm 
            CADCAM toàn diện cho doanh nghiệp hiện đại.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Câu chuyện của chúng tôi
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  CADCAM được thành lập vào năm 2020 với sứ mệnh mang đến những giải pháp 
                  công nghệ tiên tiến nhất cho ngành công nghiệp sản xuất Việt Nam.
                </p>
                <p>
                  Bắt đầu từ một nhóm nhỏ các kỹ sư đam mê công nghệ, chúng tôi đã phát triển 
                  thành một công ty hàng đầu trong lĩnh vực cung cấp giải pháp CADCAM.
                </p>
                <p>
                  Với hơn 1000+ khách hàng tin tưởng và sử dụng sản phẩm, chúng tôi tự hào 
                  là đối tác đáng tin cậy của các doanh nghiệp từ nhỏ đến lớn.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://via.placeholder.com/600x400?text=Our+Story"
                alt="Our Story"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Giá trị cốt lõi
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Những giá trị định hướng mọi hoạt động của chúng tôi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Đội ngũ lãnh đạo
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Những con người tài năng đứng sau thành công của CADCAM
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">
                    {member.position}
                  </p>
                  <p className="text-gray-600">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-blue-200">Khách hàng</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-200">Sản phẩm</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99%</div>
              <div className="text-blue-200">Hài lòng</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-200">Hỗ trợ</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
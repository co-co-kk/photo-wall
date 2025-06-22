import GalleryScrollSection from '@/components/GalleryScrollSection';
import HighlightOnScroll from '@/components/HighlightOnScroll';
import ChangeTopicOnScrolledSection from '@/components/ChangeTopicOnScrolledSection';
import HorizontalScrollingUsingVerticalScroll from '@/components/HorizontalScrollingUsingVerticalScroll';
import ShowOneByOneOnScrollScrollSection from '@/components/ShowOneByOneOnScrollSection';

const data = {
	section1: {
		title: 'Marketing #1',
		images: [
			{ label: 'image 1', url: './image.jpg', alt: 'Sample Image' },
			{ label: 'image 2', url: './image.jpg', alt: 'Sample Image' },
			{ label: 'image 3', url: './image.jpg', alt: 'Sample Image' },
			{ label: 'image 4', url: './image.jpg', alt: 'Sample Image' },
			{ label: 'image 5', url: './image.jpg', alt: 'Sample Image' },
		],
	},
	section2: {
		text: '尊敬的各位亲朋好友、各位来宾：大家好！在这花好月圆、良辰美景之际，承蒙诸位不辞远道，莅临此地，为我们的婚礼增添无上荣光与深情厚意，我们深感荣幸与感激。人生如寄，山水一程，得众人相伴同行，实乃莫大幸事；缘分如诗，千丝万缕，因你我相遇而温柔成章。今日之喜，非止一人一姓之庆，实为众心交汇、共证誓言之盛典。有您在场，这一段誓约更显庄重；因您见证，这一幕时光愈发光辉。古人云：“有缘千里来相会，无缘对面不相逢。”今朝相聚，皆是情深义重之人，亦是我们生命旅程中最温暖的风景。又所谓：“执子之手，与子偕老。”从今日起，我们将携手走过四季流转，共度岁月悠长。愿这份爱如江河奔涌不息，如松柏常青不凋，也愿我们在未来的日子里，始终怀揣初心，不负彼此，不负众望。再次感谢各位的光临与祝福，愿大家在此欢聚一堂，共襄盛举，共享喜悦。祝愿大家身体健康、家和业兴、万事胜意！谢谢大家！',
	},
	section3: {
		topics: [
			{ 
				title: 'Change the BG when scrolled every Image', 
				desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
				bgColor: 'bg-accent4',
				url: './image.jpg',
				alt: 'Sample Image'
			},
			{ 
				title: 'Sed do eiusmod tempor', 
				desc: 'Nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea.',
				bgColor: 'bg-accent5',
				url: './image.jpg',
				alt: 'Sample Image'
			},
			{ 
				title: 'Nostrud exercitation ullamco', 
				desc: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse.',
				bgColor: 'bg-white', 
				url: './image.jpg',
				alt: 'Sample Image' 
			},
			{ 
				title: 'Consectetur adipiscing elit', 
				desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
				bgColor: 'bg-primary', 
				url: './image.jpg',
				alt: 'Sample Image' 
			},
		],
	},
	section4: {
		topics: [
			{ 
				title: 'Horizontal Scrolling Using Vertical Scroll', 
				desc: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.', 
				url: './image.jpg',
				alt: 'Sample Image' 
			},
			{ 
				title: 'Sed Ut Perspiciatis', 
				desc: 'Natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.', 
				url: './image.jpg',
				alt: 'Sample Image' 
			},
			{ 
				title: 'Quis Autem Vel Eum Iure',
				desc: 'Reprehenderit qui in ea voluptate velit esse quam nihil molestiae.',
				url: './image.jpg',
				alt: 'Sample Image' 
			},
		],
	},
	section5: {
		messages: [
			{ 
				text: 'Show one by one when scrolled',
				author: 'Exercitation',
			},
			{ 
				text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco',
				author: 'Occaecat' 
			},
			{ 
				text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa',
				author: 'Dolore' 
			},
			{ 
				text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse',
				author: 'Culpa Esse' 
			},
			{ 
				text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna.',
				author: 'Labore Et' 
			},
		],
	}
};

export default function PhotoScrolling () {
	return (
		<main className="relative w-full">
			<GalleryScrollSection title={data.section1.title} images={data.section1.images} />

			<HighlightOnScroll text={data.section2.text} />

			<ChangeTopicOnScrolledSection topics={data.section3.topics} />
			
			<HorizontalScrollingUsingVerticalScroll topics={data.section4.topics} />

			<ShowOneByOneOnScrollScrollSection messages={data.section5.messages} />
		</main>
	)
};

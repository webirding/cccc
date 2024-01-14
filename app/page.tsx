import Img from '@/components/Img'
import ArticleCard from '@/components/articleCard'
import Card from '@/components/card'
import CardProfile from '@/components/cardProfile'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'


export default function Home() {
  return (
    <>
    
        
      <Card />
      <ArticleCard imageUrl={''} title={''} body={''} author={''} tags={''} date={''}/>
      <CardProfile/>
    </>
  )
}

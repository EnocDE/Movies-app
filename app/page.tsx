import { Button } from "@nextui-org/react";
import apiFetch from "./lib/apiFetch";
import MovieList from "./components/MovieList";

export default async function Home() {
	const getMovies = await apiFetch.getMovies();

	return (
		<div className="max-w-[90%] md:container mx-auto pt-5">
			<h1 className="text-center text-3xl font-bold mb-5">
				Catalogo de peliculas
			</h1>

			<MovieList movies={getMovies} />

			<Button color="secondary" className="float-left mr-4 mt-4">
				Click me
			</Button>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error
				assumenda voluptas quos aspernatur sint obcaecati eum nam corporis, eius
				fuga quas a quisquam minima. Nobis suscipit beatae omnis quos provident
				vel. Sit veritatis perferendis suscipit ipsam a dolores repellendus! Hic
				earum sapiente enim, nulla repellat in neque iusto. Modi provident eum
				quia cum mollitia nulla commodi accusamus perspiciatis ex veritatis non
				iure corrupti dolorem deleniti et iusto, dolores magnam! Excepturi,
				cupiditate fugit debitis earum assumenda ab, eveniet consequuntur culpa
				dolor atque autem error minima voluptatem quae. Impedit repellat alias,
				pariatur culpa consequuntur tempora explicabo quam reiciendis neque
				consectetur accusamus eum laudantium illum veritatis aspernatur ipsa,
				corrupti ratione autem? Doloremque similique vero suscipit nobis debitis
				qui, esse, quae numquam praesentium maxime deleniti. Nemo, sed molestias
				atque quasi corrupti quam eveniet, pariatur est necessitatibus, facere
				doloribus possimus accusantium nam laboriosam animi ab autem! Quaerat
				ipsum harum mollitia aut nesciunt repellat vel, dolores vitae ab. Amet
				sed cum deserunt esse inventore, omnis, assumenda harum saepe qui ea,
				quisquam vitae obcaecati labore! Alias pariatur explicabo dicta expedita
				impedit adipisci minima quo. Consequuntur deserunt laudantium quas et
				repellat vel ut, nisi ad saepe quidem! Dolorum exercitationem aperiam,
				ad, necessitatibus pariatur nisi explicabo obcaecati atque, harum earum
				mollitia fugiat. Incidunt officia amet, consectetur excepturi soluta
				dignissimos, maiores necessitatibus reiciendis voluptatum, sequi
				accusantium nobis? Corrupti maiores at nemo reiciendis perspiciatis
				ipsum beatae nihil, ullam consequuntur? Ipsam assumenda iusto quae
				mollitia, dolorem hic quasi expedita distinctio reiciendis asperiores
				aliquam esse quas ab vitae qui deleniti repellendus est sapiente ipsum
				eaque autem repudiandae quisquam nobis. Deserunt similique dignissimos
				amet possimus libero deleniti nisi soluta, praesentium eos voluptatem
				pariatur qui officiis modi odit totam eaque molestias incidunt! Pariatur
				dolore natus temporibus quasi non eaque, excepturi cumque eius nam
				tempore necessitatibus ipsa voluptatum officia sequi? Officia, nobis
				libero? Ad optio asperiores sint tenetur illum praesentium esse,
				distinctio quae aperiam soluta rerum vel veniam, provident accusantium
				modi porro ducimus. Facilis eaque sapiente ab minus vero aliquam quos
				corrupti dicta natus, autem, repellat reprehenderit! Unde, error
				officiis dolorum a iste voluptas vitae esse! Eligendi quia at
				reiciendis, dicta eius voluptas consequuntur modi est fugiat dolore
				voluptatum illo, numquam nulla placeat error, cumque impedit
				necessitatibus minima ratione dolorum rerum. Perferendis officiis,
				accusamus veritatis in harum exercitationem eius quae fugiat voluptatem
				molestias? Distinctio nobis veniam, ex maxime, omnis eum officiis
				corporis quis quaerat delectus aut, ducimus enim quam id. Provident
				quae, quaerat consequatur ipsa nam maxime facilis voluptatem! Sunt quod
				eius explicabo adipisci dicta reprehenderit mollitia nihil nesciunt
				eaque odit neque ipsam nostrum, iusto, delectus fugiat reiciendis, sint
				itaque. Voluptatibus ab inventore officiis ex totam ut culpa quisquam
				blanditiis maiores optio eius, vero omnis quasi fugit nisi tempore
				deleniti assumenda temporibus nihil eveniet, aliquam odio amet atque.
				Quidem perspiciatis incidunt fugiat nemo illo ab deserunt autem
				praesentium nulla? Velit ab, blanditiis vitae consequatur illo minus, a
				debitis esse neque, laborum accusantium aspernatur eos expedita ipsam.
				Dignissimos, asperiores corporis dolorem accusantium cumque laudantium
				perferendis totam beatae eos officia aut quos ad suscipit corrupti
				ullam! Impedit sed ea neque facere tempore reprehenderit praesentium
				necessitatibus maiores assumenda, obcaecati delectus numquam quo dolorum
				eius rem ab placeat quod veritatis! Saepe beatae suscipit voluptatem
				quaerat voluptas perspiciatis cum recusandae quo, vitae, possimus sint
				natus laborum, rerum nisi facilis earum? Culpa nesciunt ipsam ut odit
				eos vero vel aliquid, officiis officia harum sit deleniti deserunt?
				Eveniet totam numquam culpa mollitia cumque tempora eum exercitationem
				assumenda illum aut. Necessitatibus, aspernatur? Quae nobis blanditiis
				porro dolor ipsam consequatur ipsa, quos saepe dignissimos vitae
				explicabo optio exercitationem alias! Ea maxime aperiam dolores ut,
				dolorum suscipit, voluptas molestias doloremque minus animi incidunt
				dolor deserunt explicabo sequi minima quos cupiditate, eaque libero
				ullam rerum quas eveniet porro veniam. Ipsa facilis recusandae commodi
				quidem ea repellendus soluta atque debitis facere! Labore eaque
				architecto fugiat eligendi vero recusandae voluptate distinctio at
				accusantium animi voluptas a esse, dignissimos, inventore commodi dolore
				vel magnam officia? Perspiciatis obcaecati qui repellat labore illo eos
				nihil autem blanditiis rerum, libero aperiam similique et, voluptatem
				itaque tempora sed ea deserunt fuga. Dignissimos, cum dolores sapiente
				eius aspernatur illum dolore sint sunt voluptatem quas adipisci iusto
				dolorem minus, facilis molestias commodi repellat voluptates corporis
				blanditiis. Alias doloremque odio ipsam, excepturi sed maiores? Error
				nihil corrupti neque, quo reiciendis quidem autem accusantium aut, rem
				recusandae doloremque ullam nobis consequuntur eius dolores, inventore
				incidunt exercitationem sint eligendi nisi vero. Esse reiciendis
				accusamus dolorem. Iste voluptatem perferendis sapiente eum, nam libero
				consectetur ipsam laborum repellat, debitis a quam, aliquam
				reprehenderit aperiam? Quod consectetur ipsum totam eius dignissimos
				libero id! Deleniti eveniet fugiat illum nobis. Distinctio corporis ut,
				dolorum pariatur quos minima beatae odit aut. Aperiam rem ducimus aut!
				Iste itaque reprehenderit velit, atque error molestiae qui blanditiis
				harum eos dolore voluptas quasi at optio cupiditate nihil! Rerum,
				nesciunt? Obcaecati tenetur reiciendis temporibus optio ad odit amet
				ipsa ipsum! Porro, dicta. Quos accusamus odit, nostrum nihil iste
				voluptatum quia beatae. Quae, fugiat nemo numquam nostrum possimus neque
				sapiente officia ratione commodi error non corporis voluptatem
				architecto in qui necessitatibus est harum rem asperiores iste esse
				maxime repellat, quos eligendi. Praesentium, voluptatem adipisci!
				Molestiae, veniam obcaecati? Delectus dolorem ad sint dignissimos nobis
				obcaecati voluptas voluptate earum eum amet eius consequatur quos
				reprehenderit, quisquam adipisci? Sapiente, odit earum? Praesentium nisi
				corrupti, mollitia, totam recusandae architecto alias, ipsam illum
				ducimus necessitatibus adipisci perspiciatis perferendis tempore
				deleniti asperiores aut incidunt doloremque sapiente unde quae commodi
				repudiandae! Beatae possimus omnis voluptates adipisci maiores dolor
				officiis fugit ipsa laborum dolorem. Ut aliquid distinctio commodi quod.
				Quisquam ratione tempore recusandae dolorum incidunt corporis. Illum
				explicabo, odit necessitatibus, voluptas impedit asperiores accusamus
				ducimus eum sequi eos officia ad quaerat ut magni incidunt! Veniam,
				fuga? Nulla magnam consequatur doloribus sint, corrupti unde nisi
				nostrum corporis animi eligendi distinctio aliquam, eveniet minima odio
				quos doloremque adipisci. Incidunt placeat aperiam adipisci temporibus
				deleniti ex cumque tempora tempore sit, repellat non similique quibusdam
				obcaecati aliquid natus omnis ducimus asperiores cupiditate ullam magnam
				porro. Atque itaque ex est magni rem vero aut maxime nobis totam quos?
				Iste ab tempore praesentium quas molestiae!
			</p>
		</div>
	);
}
